import http.server
import socketserver
import threading
import sqlite3
import json
import urllib.request
import os
import time
from urllib.parse import urlparse

PORT = 8888
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'analytics.db')
TELEMETRY_TOPIC = 'https://ntfy.sh/poeme_telemetry_live_83921'
ORDERS_TOPIC = 'https://ntfy.sh/poeme_orders_live_83921'

def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS visitors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp INTEGER,
            ip TEXT,
            city TEXT,
            region TEXT,
            country TEXT,
            country_code TEXT,
            lat REAL,
            lon REAL,
            isp TEXT,
            device_type TEXT,
            device_name TEXT,
            os TEXT,
            browser TEXT,
            screen TEXT,
            fingerprint TEXT,
            path TEXT,
            title TEXT,
            UNIQUE(ip, timestamp, path)
        )
    ''')
    c.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            timestamp INTEGER,
            order_id TEXT UNIQUE,
            customer_name TEXT,
            customer_phone TEXT,
            fulfillment_method TEXT,
            address TEXT,
            items_count INTEGER,
            items_json TEXT,
            total_amount REAL,
            note TEXT,
            ip TEXT,
            city TEXT,
            lat REAL,
            lon REAL
        )
    ''')
    try:
        c.execute('ALTER TABLE visitors ADD COLUMN country_code TEXT')
    except Exception:
        pass
    try:
        c.execute('ALTER TABLE visitors ADD COLUMN fingerprint TEXT')
    except Exception:
        pass
    try:
        c.execute('ALTER TABLE orders ADD COLUMN lat REAL')
    except Exception:
        pass
    try:
        c.execute('ALTER TABLE orders ADD COLUMN lon REAL')
    except Exception:
        pass
    conn.commit()
    conn.close()

def save_visitor(payload):
    try:
        geo = payload.get('geo') or {}
        device = payload.get('device') or {}
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()
        c.execute('''
            INSERT OR IGNORE INTO visitors (
                timestamp, ip, city, region, country, country_code, lat, lon, isp,
                device_type, device_name, os, browser, screen, fingerprint, path, title
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            payload.get('timestamp', int(time.time() * 1000)),
            geo.get('ip', 'Unknown'),
            geo.get('city', 'Hà Nội'),
            geo.get('region', 'Hà Nội'),
            geo.get('country', 'Vietnam'),
            geo.get('country_code', 'VN'),
            geo.get('lat', 21.0285),
            geo.get('lon', 105.8542),
            geo.get('isp', 'Unknown ISP'),
            device.get('deviceType', 'Desktop'),
            device.get('deviceName', 'PC'),
            device.get('os', 'Unknown OS'),
            device.get('browser', 'Unknown Browser'),
            device.get('screen', ''),
            device.get('fingerprint', 'DEV-ACTIVE'),
            payload.get('path', '/'),
            payload.get('title', '')
        ))
        conn.commit()
        conn.close()
        print(f"[RADAR] Visitor: {geo.get('ip')} ({geo.get('city')}, {geo.get('country')}) | {device.get('deviceName')} | Page: {payload.get('path')}")
    except Exception as e:
        print("[RADAR Error saving visitor]:", e)

def save_order(payload):
    try:
        geo = payload.get('geo') or {}
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()
        c.execute('''
            INSERT OR REPLACE INTO orders (
                timestamp, order_id, customer_name, customer_phone,
                fulfillment_method, address, items_count, items_json,
                total_amount, note, ip, city, lat, lon
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            payload.get('timestamp', int(time.time() * 1000)),
            payload.get('orderId', f"ORD-{int(time.time())}"),
            payload.get('customerName', 'Khách hàng'),
            payload.get('customerPhone', ''),
            payload.get('fulfillmentMethod', 'delivery'),
            payload.get('address', ''),
            payload.get('itemsCount', 1),
            json.dumps(payload.get('items', []), ensure_ascii=False),
            payload.get('totalAmount', 0),
            payload.get('note', ''),
            geo.get('ip', 'Unknown'),
            geo.get('city', ''),
            geo.get('lat', payload.get('lat')),
            geo.get('lon', payload.get('lon'))
        ))
        conn.commit()
        conn.close()
        print(f"[RADAR] ★ NEW ORDER: {payload.get('orderId')} - {payload.get('customerName')} - {payload.get('totalAmount'):,}₫")
    except Exception as e:
        print("[RADAR Error saving order]:", e)

def stream_listener(base_topic_url, handler_func):
    while True:
        try:
            req = urllib.request.Request(f"{base_topic_url}/raw", headers={'User-Agent': 'PoemeRadarServer/1.0'})
            with urllib.request.urlopen(req, timeout=90) as response:
                for line in response:
                    line_str = line.decode('utf-8').strip()
                    if not line_str:
                        continue
                    try:
                        data = json.loads(line_str)
                        msg = data.get('message')
                        if msg:
                            handler_func(json.loads(msg))
                        elif data.get('type') in ['pageview', 'order']:
                            handler_func(data)
                    except Exception:
                        pass
        except Exception:
            time.sleep(3)

class RadarRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)

    def serve_file(self, file_path, content_type=None):
        if not os.path.exists(file_path) or os.path.isdir(file_path):
            self.send_response(404)
            self.end_headers()
            return
        self.send_response(200)
        ctype = content_type
        if not ctype:
            if file_path.endswith('.html'): ctype = 'text/html; charset=utf-8'
            elif file_path.endswith('.js') or file_path.endswith('.mjs'): ctype = 'application/javascript; charset=utf-8'
            elif file_path.endswith('.css'): ctype = 'text/css; charset=utf-8'
            elif file_path.endswith('.png'): ctype = 'image/png'
            elif file_path.endswith('.jpg') or file_path.endswith('.jpeg'): ctype = 'image/jpeg'
            elif file_path.endswith('.webp'): ctype = 'image/webp'
            elif file_path.endswith('.json'): ctype = 'application/json'
            else: ctype = 'application/octet-stream'
        self.send_header('Content-Type', ctype)
        self.send_header('Cache-Control', 'no-cache')
        self.end_headers()
        with open(file_path, 'rb') as f:
            self.wfile.write(f.read())

    def do_GET(self):
        parsed = urlparse(self.path)
        clean_path = urllib.parse.unquote(parsed.path)
        root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

        if clean_path in ['/web', '/web/']:
            self.serve_file(os.path.join(root_dir, 'index.html'), 'text/html; charset=utf-8')
            return
        elif clean_path.startswith('/web/'):
            sub = clean_path[5:]
            if not sub.endswith('.html') and '.' not in sub:
                candidate = os.path.join(root_dir, 'pages', f"{sub}.html")
                if os.path.exists(candidate):
                    self.serve_file(candidate, 'text/html; charset=utf-8')
                    return
            file_path = os.path.join(root_dir, sub)
            if os.path.exists(file_path):
                self.serve_file(file_path)
                return

        for prefix in ['/css/', '/js/', '/public/', '/pages/']:
            if clean_path.startswith(prefix):
                file_path = os.path.join(root_dir, clean_path.lstrip('/'))
                if os.path.exists(file_path):
                    self.serve_file(file_path)
                    return

        if parsed.path == '/api/history':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()

            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            c = conn.cursor()

            c.execute('SELECT * FROM visitors ORDER BY timestamp DESC LIMIT 80')
            visitors = [dict(row) for row in c.fetchall()]

            c.execute('SELECT * FROM orders ORDER BY timestamp DESC LIMIT 50')
            orders = [dict(row) for row in c.fetchall()]

            c.execute('SELECT COUNT(*) as total_v FROM visitors')
            total_visitors = c.fetchone()['total_v']

            c.execute('SELECT COUNT(*) as total_o, COALESCE(SUM(total_amount), 0) as total_rev FROM orders')
            order_stats = c.fetchone()
            total_orders = order_stats['total_o']
            total_revenue = order_stats['total_rev']

            now_ms = int(time.time() * 1000)
            ten_mins_ago = now_ms - (10 * 60 * 1000)
            c.execute('SELECT COUNT(DISTINCT ip) as active_c FROM visitors WHERE timestamp >= ?', (ten_mins_ago,))
            active_visitors = c.fetchone()['active_c']

            conn.close()

            resp = {
                'active_visitors': active_visitors,
                'total_visitors': total_visitors,
                'total_orders': total_orders,
                'total_revenue': total_revenue,
                'visitors': visitors,
                'orders': orders
            }
            self.wfile.write(json.dumps(resp, ensure_ascii=False).encode('utf-8'))
            return
        elif parsed.path == '/api/clear':
            conn = sqlite3.connect(DB_FILE)
            c = conn.cursor()
            c.execute('DELETE FROM visitors')
            c.execute('DELETE FROM orders')
            conn.commit()
            conn.close()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b'{"status": "cleared"}')
            return

        super().do_GET()

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

def start_server():
    init_db()
    t_telemetry = threading.Thread(target=stream_listener, args=(TELEMETRY_TOPIC, save_visitor), daemon=True)
    t_telemetry.start()

    t_orders = threading.Thread(target=stream_listener, args=(ORDERS_TOPIC, save_order), daemon=True)
    t_orders.start()

    with ReusableTCPServer(('', PORT), RadarRequestHandler) as httpd:
        print("=" * 66)
        print("   POEME JAPANESE BAKERY - LIVE OPS & SECURITY RADAR")
        print("=" * 66)
        print(f"   * Dashboard URL:      http://localhost:{PORT}")
        print("   * Local Web Store:    http://localhost:8888/web/")
        print("   * Monitoring Target:  https://www.poemefake.id.vn")
        print(f"   * Local Database:     {DB_FILE}")
        print("   * Status:             Listening for Live Visitors & Orders...")
        print("=" * 66)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down radar server...")

if __name__ == '__main__':
    start_server()
