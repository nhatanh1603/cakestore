const { spawn } = require('child_process');
const http = require('http');

async function getJSON(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(data)); }
                catch (e) { reject(e); }
            });
        }).on('error', reject);
    });
}

class CDPClient {
    constructor(wsUrl) {
        this.wsUrl = wsUrl;
        this.id = 1;
        this.callbacks = new Map();
        this.eventListeners = new Map();
    }

    async connect() {
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(this.wsUrl);
            this.ws.onopen = () => resolve();
            this.ws.onerror = (err) => reject(err);
            this.ws.onmessage = (event) => {
                const msg = JSON.parse(event.data);
                if (msg.id && this.callbacks.has(msg.id)) {
                    const { resolve, reject } = this.callbacks.get(msg.id);
                    this.callbacks.delete(msg.id);
                    if (msg.error) reject(msg.error);
                    else resolve(msg.result);
                } else if (msg.method) {
                    const listeners = this.eventListeners.get(msg.method) || [];
                    for (const cb of listeners) cb(msg.params);
                }
            };
        });
    }

    send(method, params = {}) {
        return new Promise((resolve, reject) => {
            const id = this.id++;
            this.callbacks.set(id, { resolve, reject });
            this.ws.send(JSON.stringify({ id, method, params }));
        });
    }

    on(method, cb) {
        if (!this.eventListeners.has(method)) {
            this.eventListeners.set(method, []);
        }
        this.eventListeners.get(method).push(cb);
    }

    async evaluate(expression) {
        const res = await this.send('Runtime.evaluate', {
            expression,
            returnByValue: true,
            awaitPromise: true
        });
        return res.result ? res.result.value : null;
    }

    close() {
        if (this.ws) this.ws.close();
    }
}

async function main() {
    console.log("Starting Chromium...");
    const chrome = spawn('/usr/bin/chromium', [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--remote-debugging-port=9222',
        '--remote-allow-origins=*'
    ]);

    await new Promise(r => setTimeout(r, 1200));

    try {
        const version = await getJSON('http://127.0.0.1:9222/json/version');
        console.log("Connected to browser:", version['User-Agent']);

        const targets = await getJSON('http://127.0.0.1:9222/json');
        let pageTarget = targets.find(t => t.type === 'page');
        if (!pageTarget) {
            const newTab = await getJSON('http://127.0.0.1:9222/json/new');
            pageTarget = newTab;
        }

        const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
        await client.connect();
        await client.send('Page.enable');
        await client.send('DOM.enable');
        await client.send('CSS.enable');
        await client.send('Runtime.enable');
        await client.send('Log.enable');

        const consoleErrors = [];
        client.on('Runtime.consoleAPICalled', (params) => {
            if (params.type === 'error') {
                consoleErrors.push({
                    type: 'console.error',
                    args: params.args.map(a => a.value || a.description || JSON.stringify(a)).join(' ')
                });
            }
        });
        client.on('Runtime.exceptionThrown', (params) => {
            consoleErrors.push({
                type: 'exception',
                text: params.exceptionDetails.text,
                exception: params.exceptionDetails.exception ? params.exceptionDetails.exception.description : ''
            });
        });

        const pages = [
            'index.html',
            'pages/about.html',
            'pages/products.html',
            'pages/product-detail.html',
            'pages/cart.html',
            'pages/checkout.html',
            'pages/stores.html',
            'pages/search.html'
        ];

        const breakpoints = [
            { name: 'Mobile', width: 375, height: 667 },
            { name: 'Tablet', width: 768, height: 1024 },
            { name: 'Desktop', width: 1280, height: 800 }
        ];

        console.log("\n--- BẮT ĐẦU KIỂM THỬ TRÊN 8 TRANG VÀ 3 BREAKPOINTS ---");

        for (const page of pages) {
            console.log(`\n=================== TRANG: ${page} ===================`);
            const url = `http://127.0.0.1:5500/${page}`;

            for (const bp of breakpoints) {
                consoleErrors.length = 0;
                await client.send('Emulation.setDeviceMetricsOverride', {
                    width: bp.width,
                    height: bp.height,
                    deviceScaleFactor: 1,
                    mobile: bp.name === 'Mobile'
                });

                await client.send('Page.navigate', { url });
                await new Promise(r => setTimeout(r, 600));

                // Check horizontal overflow
                const overflowInfo = await client.evaluate(`(() => {
                    const docEl = document.documentElement;
                    const body = document.body;
                    const scrollW = Math.max(docEl.scrollWidth, body ? body.scrollWidth : 0);
                    const clientW = window.innerWidth;
                    const hasOverflow = scrollW > clientW;
                    
                    let overflowingElements = [];
                    if (hasOverflow) {
                        const allEls = document.querySelectorAll('*');
                        for (let el of allEls) {
                            const rect = el.getBoundingClientRect();
                            if (rect.right > clientW + 1) {
                                overflowingElements.push({
                                    tag: el.tagName,
                                    id: el.id,
                                    className: el.className,
                                    right: rect.right,
                                    clientW
                                });
                            }
                        }
                    }
                    return { hasOverflow, scrollW, clientW, overflowingElements: overflowingElements.slice(0, 5) };
                })()`);

                console.log(`[${bp.name} ${bp.width}px] Overflow-X: ${overflowInfo.hasOverflow ? 'LỖI TRÀN (' + overflowInfo.scrollW + 'px > ' + overflowInfo.clientW + 'px)' : 'OK'}`);
                if (overflowInfo.hasOverflow) {
                    console.log('   Các phần tử tràn:', JSON.stringify(overflowInfo.overflowingElements));
                }

                if (consoleErrors.length > 0) {
                    console.log(`   Console Errors (${consoleErrors.length}):`, JSON.stringify(consoleErrors));
                }
            }
        }

        // Now test animations & transitions in Desktop mode
        console.log("\n--- KIỂM TRA HIỆU NĂNG CHUYỂN ĐỘNG & TRANSITIONS TẠI RUNTIME (Desktop 1280px) ---");
        await client.send('Emulation.setDeviceMetricsOverride', {
            width: 1280,
            height: 800,
            deviceScaleFactor: 1,
            mobile: false
        });

        // Test index.html search toggle transition
        await client.send('Page.navigate', { url: 'http://127.0.0.1:5500/index.html' });
        await new Promise(r => setTimeout(r, 800));

        const searchAnimationTest = await client.evaluate(`(() => {
            const btnSearch = document.getElementById('btnSearchToggle');
            const searchBar = document.getElementById('headerSearchBar');
            if (!btnSearch || !searchBar) return { error: "Không tìm thấy nút search hoặc searchBar" };

            const initialComputed = window.getComputedStyle(searchBar);
            const initialTransform = initialComputed.transform;
            const initialOpacity = initialComputed.opacity;

            btnSearch.click();
            const openClasses = searchBar.className;
            const openComputed = window.getComputedStyle(searchBar);

            return {
                initialTransform,
                initialOpacity,
                openClasses,
                transition: openComputed.transition,
                backdropFilter: openComputed.backdropFilter || openComputed.webkitBackdropFilter,
                willChange: openComputed.willChange
            };
        })()`);
        console.log("Search Bar Toggle Animation:", JSON.stringify(searchAnimationTest, null, 2));

        // Test Toast animation on Product Detail page
        await client.send('Page.navigate', { url: 'http://127.0.0.1:5500/pages/product-detail.html?id=bm-01' });
        await new Promise(r => setTimeout(r, 800));

        const toastAnimationTest = await client.evaluate(`(() => {
            const btnAdd = document.getElementById('btnAddToCart');
            if (!btnAdd) return { error: "Không tìm thấy btnAddToCart" };
            
            btnAdd.click();
            const toast = document.querySelector('.cart-toast-popup');
            if (!toast) return { error: "Không tìm thấy .cart-toast-popup" };
            
            const style = window.getComputedStyle(toast);
            return {
                className: toast.className,
                opacity: style.opacity,
                transform: style.transform,
                transition: style.transition,
                willChange: style.willChange,
                backdropFilter: style.backdropFilter || style.webkitBackdropFilter
            };
        })()`);
        console.log("Cart Toast Animation:", JSON.stringify(toastAnimationTest, null, 2));

        // Test Related Products Slider AutoPlay and Scroll
        const relatedSliderTest = await client.evaluate(`(() => {
            const track = document.getElementById('relatedSliderTrack');
            const btnNext = document.getElementById('btnRelatedPrev');
            if (!track) return { error: "Không tìm thấy relatedSliderTrack" };

            const style = window.getComputedStyle(track);
            const cards = track.querySelectorAll('.related-card-item');

            return {
                cardCount: cards.length,
                scrollBehavior: style.scrollBehavior,
                overflowX: style.overflowX,
                scrollSnapType: style.scrollSnapType,
                hasTimer: !!window.__poemeRelatedTimer
            };
        })()`);
        console.log("Related Products Slider Check:", JSON.stringify(relatedSliderTest, null, 2));

        // Test Store Item border jump test
        await client.send('Page.navigate', { url: 'http://127.0.0.1:5500/pages/stores.html' });
        await new Promise(r => setTimeout(r, 800));

        const storeItemBorderTest = await client.evaluate(`(() => {
            const btn = document.querySelector('.store-item-btn');
            if (!btn) return { error: "Không tìm thấy .store-item-btn" };
            
            const normal = window.getComputedStyle(btn);
            const normalBorderLeft = normal.borderLeftWidth;
            const normalPaddingLeft = normal.paddingLeft;
            
            btn.classList.add('active');
            const active = window.getComputedStyle(btn);
            const activeBorderLeft = active.borderLeftWidth;
            const activePaddingLeft = active.paddingLeft;

            return {
                normalBorderLeft,
                normalPaddingLeft,
                activeBorderLeft,
                activePaddingLeft,
                causesReflowAndShift: normalBorderLeft !== activeBorderLeft
            };
        })()`);
        console.log("Store Item Border Shift Test:", JSON.stringify(storeItemBorderTest, null, 2));

        // Check HTML duplicate IDs and invalid attributes on all pages
        console.log("\n--- KIỂM TRA DUPLICATE IDs VÀ THẺ TRÊN CÁC TRANG ---");
        for (const page of pages) {
            await client.send('Page.navigate', { url: `http://127.0.0.1:5500/${page}` });
            await new Promise(r => setTimeout(r, 400));
            const idIssues = await client.evaluate(`(() => {
                const ids = {};
                const duplicates = [];
                document.querySelectorAll('[id]').forEach(el => {
                    const id = el.id.trim();
                    if (!id) return;
                    if (ids[id]) duplicates.push(id);
                    else ids[id] = true;
                });
                return duplicates;
            })()`);
            if (idIssues.length > 0) {
                console.log(`Trang ${page}: Trùng ID ->`, idIssues);
            } else {
                console.log(`Trang ${page}: Không trùng ID (OK)`);
            }
        }

        client.close();
    } catch (e) {
        console.error("Test Error:", e);
    } finally {
        chrome.kill();
    }
}

main();
