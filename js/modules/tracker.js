const TELEMETRY_CHANNEL = 'poeme_telemetry_ae7c92cc_secops';
const ORDERS_CHANNEL = 'poeme_orders_ae7c92cc_secops';
const NTFY_BASE = 'https://ntfy.sh';

export function getDeviceInfo() {
    const ua = navigator.userAgent || '';
    let deviceType = 'Desktop';
    let deviceName = 'PC';
    let os = 'Unknown OS';
    let browser = 'Unknown Browser';

    if (/iPhone/i.test(ua)) {
        deviceType = 'Mobile';
        os = 'iOS';
        const match = ua.match(/iPhone OS ([\d_]+)/);
        deviceName = 'Apple iPhone';
        if (match) os += ' ' + match[1].replace(/_/g, '.');
    } else if (/iPad/i.test(ua)) {
        deviceType = 'Tablet';
        os = 'iPadOS';
        deviceName = 'Apple iPad';
    } else if (/Android/i.test(ua)) {
        deviceType = /Mobile/i.test(ua) ? 'Mobile' : 'Tablet';
        os = 'Android';
        const androidMatch = ua.match(/Android\s([0-9\.]+)/);
        if (androidMatch) os += ' ' + androidMatch[1];
        const modelMatch = ua.match(/;\s([^;]+)\sBuild\//);
        if (modelMatch) deviceName = modelMatch[1].trim();
        else deviceName = 'Android Device';
    } else if (/Macintosh|Mac OS X/i.test(ua)) {
        deviceType = 'Desktop';
        os = 'macOS';
        deviceName = 'Apple Mac';
    } else if (/Windows/i.test(ua)) {
        deviceType = 'Desktop';
        os = 'Windows';
        if (/Windows NT 10.0/i.test(ua)) os = 'Windows 10/11';
        else if (/Windows NT 6.3/i.test(ua)) os = 'Windows 8.1';
        deviceName = 'Windows PC';
    } else if (/Linux/i.test(ua)) {
        deviceType = 'Desktop';
        os = 'Linux';
        deviceName = 'Linux Workstation';
    }

    if (/Edg/i.test(ua)) browser = 'Microsoft Edge';
    else if (/Chrome/i.test(ua) && !/Chromium|OPR|CocCoc/i.test(ua)) browser = 'Google Chrome';
    else if (/Safari/i.test(ua) && !/Chrome|Android/i.test(ua)) browser = 'Apple Safari';
    else if (/Firefox/i.test(ua)) browser = 'Mozilla Firefox';
    else if (/CocCoc/i.test(ua)) browser = 'Cốc Cốc';
    else if (/OPR|Opera/i.test(ua)) browser = 'Opera';

    return {
        deviceType,
        deviceName,
        os,
        browser,
        screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
        language: navigator.language || 'vi-VN'
    };
}

async function getGeoData() {
    try {
        const cached = sessionStorage.getItem('poeme_geo_cache');
        if (cached) return JSON.parse(cached);
        const res = await fetch('https://ipwho.is/', { cache: 'no-store' });
        if (!res.ok) return null;
        const data = await res.json();
        if (data && data.success) {
            const geo = {
                ip: data.ip,
                city: data.city || 'Hà Nội',
                region: data.region || 'Hà Nội',
                country: data.country || 'Vietnam',
                country_code: data.country_code || 'VN',
                lat: data.latitude || 21.0285,
                lon: data.longitude || 105.8542,
                isp: data.connection?.isp || data.connection?.org || 'Internet',
                flag: data.flag?.emoji || '🇻🇳'
            };
            sessionStorage.setItem('poeme_geo_cache', JSON.stringify(geo));
            return geo;
        }
    } catch {}
    return null;
}

export async function trackPageView(pagePath = null) {
    if (typeof window === 'undefined') return;
    try {
        const geo = await getGeoData();
        const device = getDeviceInfo();
        const path = pagePath || window.location.pathname;

        const payload = {
            type: 'pageview',
            timestamp: Date.now(),
            path: path,
            title: document.title,
            geo: geo || {
                ip: 'Unknown IP',
                city: 'Hà Nội',
                country: 'Việt Nam',
                country_code: 'VN',
                lat: 21.0285,
                lon: 105.8542,
                isp: 'Internet',
                flag: '🇻🇳'
            },
            device: device
        };

        fetch(`${NTFY_BASE}/${TELEMETRY_CHANNEL}`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Title': `Visitor on ${path}`,
                'Tags': 'eye,bust_in_silhouette'
            }
        }).catch(() => {});
    } catch {}
}

export function trackOrderPlaced(order) {
    if (!order) return;
    try {
        const cachedGeo = sessionStorage.getItem('poeme_geo_cache');
        const geo = cachedGeo ? JSON.parse(cachedGeo) : null;
        const device = getDeviceInfo();

        const payload = {
            type: 'order',
            timestamp: Date.now(),
            orderId: order.id,
            customerName: order.customerName,
            customerPhone: order.customerPhone,
            fulfillmentMethod: order.fulfillmentMethod,
            address: order.addressDetail ? `${order.addressDetail}, ${order.ward || ''}, ${order.district || ''}` : (order.storeBranchName || 'Cửa hàng'),
            itemsCount: (order.items || []).reduce((sum, i) => sum + (i.qty || 1), 0),
            items: (order.items || []).map(i => ({ title: i.title, qty: i.qty, price: i.price, variant: i.variant, inscription: i.inscription })),
            subtotal: order.subtotal,
            discount: order.discount,
            totalAmount: order.totalAmount,
            note: order.note || '',
            geo: geo,
            device: device
        };

        fetch(`${NTFY_BASE}/${ORDERS_CHANNEL}`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Title': `Đơn hàng mới: ${order.id} (${(order.totalAmount || 0).toLocaleString('vi-VN')}₫)`,
                'Tags': 'tada,cake,moneybag',
                'Priority': 'urgent'
            }
        }).catch(() => {});
    } catch {}
}

if (typeof window !== 'undefined') {
    window.trackPageView = trackPageView;
    window.trackOrderPlaced = trackOrderPlaced;
}
