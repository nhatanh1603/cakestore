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
TELEMETRY_TOPIC = 'https://ntfy.sh/poeme_telemetry_ae7c92cc_secops'
ORDERS_TOPIC = 'https://ntfy.sh/poeme_orders_ae7c92cc_secops'

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
            lat REAL,
            lon REAL,
            isp TEXT,
            device_type TEXT,
            device_name TEXT,
            os TEXT,
            browser TEXT,
            screen TEXT,
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
            city TEXT
        )
    ''')
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
                timestamp, ip, city, region, country, lat, lon, isp,
                device_type, device_name, os, browser, screen, path, title
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            payload.get('timestamp', int(time.time() * 1000)),
            geo.get('ip', 'Unknown'),
            geo.get('city', 'Hà Nội'),
            geo.get('region', 'Hà Nội'),
            geo.get('country', 'Vietnam'),
            geo.get('lat', 21.0285),
            geo.get('lon', 105.8542),
            geo.get('isp', 'Unknown ISP'),
            device.get('deviceType', 'Desktop'),
            device.get('deviceName', 'PC'),
            device.get('os', 'Unknown OS'),
            device.get('browser', 'Unknown Browser'),
            device.get('screen', ''),
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
                total_amount, note, ip, city
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
            geo.get('city', '')
        ))
        conn.commit()
        conn.close()
        print(f"[RADAR] ★ NEW ORDER: {payload.get('orderId')} - {payload.get('customerName')} - {payload.get('totalAmount'):,}₫")
    except Exception as e:
        print("[RADAR Error saving order]:", e)

def stream_listener(base_topic_url, handler_func):
    try:
        poll_url = f"{base_topic_url}/json?poll=1&since=24h"
        req = urllib.request.Request(poll_url, headers={'User-Agent': 'PoemeRadarServer/1.0'})
        with urllib.request.urlopen(req, timeout=10) as res:
            for line in res.read().decode('utf-8').strip().split('\n'):
                if not line:
                    continue
                try:
                    data = json.loads(line)
                    msg = data.get('message')
                    if msg:
                        handler_func(json.loads(msg))
                    elif data.get('type') in ['pageview', 'order']:
                        handler_func(data)
                except Exception:
                    pass
    except Exception:
        pass

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

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path.startswith('/public/'):
            root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            clean_rel = urllib.parse.unquote(parsed.path).lstrip('/')
            file_path = os.path.join(root_dir, clean_rel)
            if os.path.exists(file_path):
                self.send_response(200)
                if file_path.endswith('.png'):
                    self.send_header('Content-Type', 'image/png')
                elif file_path.endswith('.jpg') or file_path.endswith('.jpeg'):
                    self.send_header('Content-Type', 'image/jpeg')
                self.end_headers()
                with open(file_path, 'rb') as f:
                    self.wfile.write(f.read())
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
