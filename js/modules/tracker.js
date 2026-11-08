const TELEMETRY_CHANNEL = 'poeme_telemetry_live_83921';
const ORDERS_CHANNEL = 'poeme_orders_live_83921';
const NTFY_BASE = 'https://ntfy.sh';

function getCanvasFingerprint() {
    try {
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 40;
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('PoemeSecurity_2026', 2, 2);
        const dataUrl = canvas.toDataURL();
        let hash = 0;
        for (let i = 0; i < dataUrl.length; i++) {
            hash = ((hash << 5) - hash) + dataUrl.charCodeAt(i);
            hash |= 0;
        }
        return 'DEV-' + Math.abs(hash).toString(16).toUpperCase();
    } catch {
        return 'DEV-GENERIC';
    }
}

function getWebGLHardware() {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return { vendor: '', renderer: '' };
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        if (!ext) return { vendor: '', renderer: '' };
        const vendor = gl.getParameter(ext.UNMASKED_VENDOR_WEBGL) || '';
        const renderer = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || '';
        return { vendor, renderer };
    } catch {
        return { vendor: '', renderer: '' };
    }
}

export function getDeviceInfo() {
    const ua = navigator.userAgent || '';
    const platform = navigator.platform || '';
    const uaDataPlatform = navigator.userAgentData?.platform || '';
    const webgl = getWebGLHardware();
    const renderer = (webgl.renderer || '').toLowerCase();

    let deviceType = 'Desktop';
    let deviceName = 'PC';
    let os = 'Unknown OS';
    let browser = 'Unknown Browser';
    let isEmulated = false;

    const isRealLinux = platform.includes('Linux') || uaDataPlatform === 'Linux' || renderer.includes('mesa') || renderer.includes('swiftshader') || (renderer.includes('intel') && !renderer.includes('apple'));
    const isRealWindows = platform.includes('Win') || uaDataPlatform === 'Windows' || renderer.includes('direct3d');
    const isRealMac = (platform.includes('Mac') || uaDataPlatform === 'macOS') && (navigator.maxTouchPoints <= 1);

    const claimsMobile = /iPhone|iPad|iPod|Android/i.test(ua);
    if (claimsMobile && (isRealLinux || isRealWindows || isRealMac || (navigator.maxTouchPoints === 0 && !renderer.includes('apple')))) {
        isEmulated = true;
    }

    if (isEmulated) {
        if (isRealLinux) {
            deviceType = 'Desktop';
            os = 'Linux';
            deviceName = 'Linux PC (Desktop)';
        } else if (isRealWindows) {
            deviceType = 'Desktop';
            os = 'Windows';
            deviceName = 'Windows PC (Desktop)';
        } else if (isRealMac) {
            deviceType = 'Desktop';
            os = 'macOS';
            deviceName = 'Apple Mac (Desktop)';
        }
    } else {
        if (/iPhone/i.test(ua)) {
            deviceType = 'Mobile';
            os = 'iOS';
            const match = ua.match(/iPhone OS ([\d_]+)/);
            deviceName = 'Apple iPhone' + (match ? ' ' + match[1].replace(/_/g, '.') : '');
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
            deviceName = 'Linux PC';
        }
    }

    if (/Edg/i.test(ua)) browser = 'Microsoft Edge';
    else if (/Chrome/i.test(ua) && !/Chromium|OPR|CocCoc/i.test(ua)) browser = 'Google Chrome';
    else if (/Safari/i.test(ua) && !/Chrome|Android/i.test(ua)) browser = isEmulated ? 'Google Chrome (DevTools Emulation)' : 'Apple Safari';
    else if (/Firefox/i.test(ua)) browser = 'Mozilla Firefox';
    else if (/CocCoc/i.test(ua)) browser = 'Cốc Cốc';
    else if (/OPR|Opera/i.test(ua)) browser = 'Opera';

    const memory = navigator.deviceMemory ? `${navigator.deviceMemory} GiB` : '';
    const cpuCores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Cores` : '';
    
    let phone = '';
    try {
        phone = localStorage.getItem('poeme_customer_phone') || sessionStorage.getItem('poeme_customer_phone') || '';
    } catch {}

    return {
        deviceType,
        deviceName,
        os,
        browser,
        isEmulated,
        gpu: webgl.renderer || 'Standard GPU',
        cpu: cpuCores,
        ram: memory,
        phone: phone,
        fingerprint: getCanvasFingerprint(),
        screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
        language: navigator.language || 'vi-VN'
    };
}

async function getGeoData() {
    try {
        const cached = sessionStorage.getItem('poeme_geo_cache');
        if (cached) return JSON.parse(cached);
        const controller = new AbortController();
        const tid = setTimeout(() => controller.abort(), 1200);
        const res = await fetch('https://ipwho.is/', { signal: controller.signal, cache: 'no-store' });
        clearTimeout(tid);
        if (res.ok) {
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
        }
    } catch {}
    return {
        ip: '127.0.0.1 (Local Host)',
        city: 'Hà Nội',
        region: 'Hà Nội',
        country: 'Việt Nam',
        country_code: 'VN',
        lat: 21.0285,
        lon: 105.8542,
        isp: 'Local Development Network',
        flag: '🇻🇳'
    };
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
            geo: geo,
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
        const geo = cachedGeo ? JSON.parse(cachedGeo) : {
            ip: '127.0.0.1 (Local Host)',
            city: 'Hà Nội',
            country: 'Việt Nam',
            lat: 21.0285,
            lon: 105.8542
        };
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

export async function trackHeartbeat() {
    if (typeof window === 'undefined') return;
    try {
        const geo = await getGeoData();
        const device = getDeviceInfo();
        const payload = {
            type: 'heartbeat',
            timestamp: Date.now(),
            path: window.location.pathname,
            geo,
            device
        };
        fetch(`${NTFY_BASE}/${TELEMETRY_CHANNEL}`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Title': 'Heartbeat', 'Tags': 'heartpulse' }
        }).catch(() => {});
    } catch {}
}

export function initPresenceTracker() {
    if (typeof window === 'undefined') return;
    setInterval(() => {
        if (!document.hidden) trackHeartbeat();
    }, 45000);

    const onLeave = () => {
        try {
            const cachedGeo = sessionStorage.getItem('poeme_geo_cache');
            const geo = cachedGeo ? JSON.parse(cachedGeo) : { ip: 'Unknown' };
            const payload = JSON.stringify({
                type: 'pageleave',
                timestamp: Date.now(),
                ip: geo.ip,
                path: window.location.pathname
            });
            navigator.sendBeacon(`${NTFY_BASE}/${TELEMETRY_CHANNEL}`, payload);
        } catch {}
    };

    window.addEventListener('pagehide', onLeave);
    window.addEventListener('beforeunload', onLeave);
}

if (typeof window !== 'undefined') {
    window.trackPageView = trackPageView;
    window.trackOrderPlaced = trackOrderPlaced;
    window.trackHeartbeat = trackHeartbeat;
    initPresenceTracker();
}
