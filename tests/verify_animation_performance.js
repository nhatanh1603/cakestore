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

    async navigateAndWait(url) {
        return new Promise(async (resolve) => {
            const onLoad = () => {
                resolve();
            };
            this.on('Page.loadEventFired', onLoad);
            await this.send('Page.navigate', { url });
            // Fallback timeout in case event was already fired
            setTimeout(resolve, 1500);
        });
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
    const chrome = spawn('/usr/bin/chromium', [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--user-data-dir=/tmp/test-profile-ui-2',
        '--remote-debugging-port=9224',
        '--remote-allow-origins=*'
    ]);

    await new Promise(r => setTimeout(r, 1200));

    try {
        const targets = await getJSON('http://127.0.0.1:9224/json');
        let pageTarget = targets.find(t => t.type === 'page' && !t.url.startsWith('chrome-extension:'));
        if (!pageTarget) {
            pageTarget = targets.find(t => t.type === 'page');
        }

        console.log("Connecting to target:", pageTarget.url);
        const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
        await client.connect();
        await client.send('Page.enable');
        await client.send('DOM.enable');
        await client.send('CSS.enable');
        await client.send('Runtime.enable');

        await client.send('Emulation.setDeviceMetricsOverride', {
            width: 1280,
            height: 800,
            deviceScaleFactor: 1,
            mobile: false
        });

        console.log("\n=== 1. KIỂM TRA THANH TÌM KIẾM TRƯỢT (SEARCH SLIDE) TRÊN INDEX.HTML ===");
        await client.navigateAndWait('http://127.0.0.1:5500/index.html');
        await new Promise(r => setTimeout(r, 600));

        const searchRes = await client.evaluate(`(() => {
            const btn = document.querySelector('.btn-search-toggle');
            const bar = document.getElementById('headerSearchBar');
            const form = document.getElementById('headerSearchForm');
            if (!btn || !bar) return { error: "Không tìm thấy search toggle hoặc bar" };

            const closedStyle = window.getComputedStyle(bar);
            const closedProps = {
                visibility: closedStyle.visibility,
                opacity: closedStyle.opacity,
                transform: closedStyle.transform,
                transition: closedStyle.transition,
                willChange: closedStyle.willChange,
                backdropFilter: closedStyle.backdropFilter || closedStyle.webkitBackdropFilter
            };

            btn.click();
            const openStyle = window.getComputedStyle(bar);
            const openProps = {
                isOpen: bar.classList.contains('is-open'),
                visibility: openStyle.visibility,
                opacity: openStyle.opacity,
                transform: openStyle.transform
            };

            return { closedProps, openProps };
        })()`);
        console.log("Search Slide:", JSON.stringify(searchRes, null, 2));

        console.log("\n=== 2. KIỂM TRA DROPDOWN MENU & MULTI-LEVEL SUBMENU (DESKTOP) ===");
        const menuRes = await client.evaluate(`(() => {
            const mega = document.querySelector('.mega-menu');
            const drop = document.querySelector('.dropdown-menu');
            const subDrop = document.querySelector('.sub-dropdown-menu');
            
            const getProps = (el) => {
                if (!el) return null;
                const s = window.getComputedStyle(el);
                return {
                    transition: s.transition,
                    animation: s.animation,
                    visibility: s.visibility,
                    opacity: s.opacity,
                    transform: s.transform,
                    willChange: s.willChange,
                    zIndex: s.zIndex
                };
            };

            return {
                megaMenu: getProps(mega),
                dropdownMenu: getProps(drop),
                subDropdownMenu: getProps(subDrop)
            };
        })()`);
        console.log("Menu Transitions:", JSON.stringify(menuRes, null, 2));

        console.log("\n=== 3. KIỂM TRA TOAST GIỎ HÀNG (CART TOAST) & SLIDER SẢN PHẨM LIÊN QUAN ===");
        await client.navigateAndWait('http://127.0.0.1:5500/pages/product-detail.html?id=BanhGatoHaiTangDauTay');
        await new Promise(r => setTimeout(r, 800));

        const toastAndSliderRes = await client.evaluate(`(() => {
            const btnAdd = document.getElementById('btnAddCart');
            let toastInfo = null;
            if (btnAdd) {
                btnAdd.click();
                const toast = document.querySelector('.cart-toast-popup');
                if (toast) {
                    const s = window.getComputedStyle(toast);
                    toastInfo = {
                        className: toast.className,
                        opacity: s.opacity,
                        transform: s.transform,
                        transition: s.transition,
                        backdropFilter: s.backdropFilter || s.webkitBackdropFilter,
                        willChange: s.willChange,
                        zIndex: s.zIndex
                    };
                }
            }

            const track = document.getElementById('relatedSliderTrack');
            let sliderInfo = null;
            if (track) {
                const s = window.getComputedStyle(track);
                const cards = track.querySelectorAll('.related-card-item');
                sliderInfo = {
                    cardCount: cards.length,
                    scrollBehavior: s.scrollBehavior,
                    overflowX: s.overflowX,
                    scrollSnapType: s.scrollSnapType,
                    webkitOverflowScrolling: s.webkitOverflowScrolling,
                    hasAutoPlayTimer: !!window.__poemeRelatedTimer
                };
            }

            return { toastInfo, sliderInfo };
        })()`);
        console.log("Toast & Slider:", JSON.stringify(toastAndSliderRes, null, 2));

        console.log("\n=== 4. KIỂM TRA JANK / LAYOUT SHIFT KHI HOVER TRÊN STORES ===");
        await client.navigateAndWait('http://127.0.0.1:5500/pages/stores.html');
        await new Promise(r => setTimeout(r, 800));

        const storeShiftRes = await client.evaluate(`(() => {
            const btns = document.querySelectorAll('.store-item-btn');
            if (!btns.length) return { error: "Không tìm thấy .store-item-btn" };
            
            const btn = btns[1]; // non-active one
            const beforePadding = window.getComputedStyle(btn).paddingLeft;
            const beforeBorder = window.getComputedStyle(btn).borderLeftWidth;

            btn.classList.add('active');
            const afterPadding = window.getComputedStyle(btn).paddingLeft;
            const afterBorder = window.getComputedStyle(btn).borderLeftWidth;

            return {
                beforeBorder,
                beforePadding,
                afterBorder,
                afterPadding,
                borderChange: beforeBorder !== afterBorder,
                shiftsContent: beforeBorder === '0px' && afterBorder === '3px'
            };
        })()`);
        console.log("Store Shift:", JSON.stringify(storeShiftRes, null, 2));

        console.log("\n=== 5. KIỂM TRA MOBILE MENU (375px) - SNAP VS TRANSITION ===");
        await client.send('Emulation.setDeviceMetricsOverride', {
            width: 375,
            height: 667,
            deviceScaleFactor: 1,
            mobile: true
        });
        await client.navigateAndWait('http://127.0.0.1:5500/index.html');
        await new Promise(r => setTimeout(r, 800));

        const mobileMenuRes = await client.evaluate(`(() => {
            const toggle = document.getElementById('menu-toggle');
            const menu = document.getElementById('primary-menu');
            if (!toggle || !menu) return { error: "Không tìm thấy mobile menu toggle" };

            const closedStyle = window.getComputedStyle(menu);
            const closedDisplay = closedStyle.display;
            const closedTransition = closedStyle.transition;

            toggle.click();
            const openStyle = window.getComputedStyle(menu);
            const openDisplay = openStyle.display;

            return {
                closedDisplay,
                closedTransition,
                openDisplay,
                hasTransition: closedTransition !== 'all 0s ease 0s' && closedTransition !== 'none'
            };
        })()`);
        console.log("Mobile Menu:", JSON.stringify(mobileMenuRes, null, 2));

        client.close();
    } catch (e) {
        console.error("Test execution error:", e);
    } finally {
        chrome.kill();
    }
}

main();
