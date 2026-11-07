const { spawn } = require('child_process');
const http = require('http');

const PAGES = [
    'index.html',
    'pages/about.html',
    'pages/cart.html',
    'pages/checkout.html',
    'pages/product-detail.html?id=BanhGatoSunshineKemTuoiXoai',
    'pages/products.html',
    'pages/search.html?q=gato',
    'pages/stores.html',
    'pages/404.html'
];

const VIEWPORTS = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1280, height: 800 }
];

async function run() {
    const port = 9333;
    const chrome = spawn('chromium', [
        '--headless',
        `--remote-debugging-port=${port}`,
        '--disable-gpu',
        '--no-sandbox'
    ]);

    await new Promise(r => setTimeout(r, 1000));

    try {
        const targets = await new Promise((res, rej) => {
            http.get(`http://127.0.0.1:${port}/json`, r => {
                let d = '';
                r.on('data', c => d += c);
                r.on('end', () => res(JSON.parse(d)));
            }).on('error', rej);
        });

        const page = targets.find(t => t.type === 'page');
        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise(r => ws.addEventListener('open', r));

        let id = 1;
        function send(method, params = {}) {
            return new Promise(res => {
                const msgId = id++;
                const handler = (evt) => {
                    const p = JSON.parse(evt.data);
                    if (p.id === msgId) {
                        ws.removeEventListener('message', handler);
                        res(p.result);
                    }
                };
                ws.addEventListener('message', handler);
                ws.send(JSON.stringify({ id: msgId, method, params }));
            });
        }

        await send('Runtime.enable');
        await send('Page.enable');

        const results = [];

        for (const pagePath of PAGES) {
            for (const vp of VIEWPORTS) {
                await send('Emulation.setDeviceMetricsOverride', {
                    width: vp.width,
                    height: vp.height,
                    deviceScaleFactor: 1,
                    mobile: vp.name === 'Mobile'
                });

                const consoleErrors = [];
                const msgHandler = (evt) => {
                    const msg = JSON.parse(evt.data);
                    if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
                        consoleErrors.push(msg.params.args.map(a => a.value || a.description).join(' '));
                    }
                    if (msg.method === 'Runtime.exceptionThrown') {
                        consoleErrors.push(msg.params.exceptionDetails.text);
                    }
                };
                ws.addEventListener('message', msgHandler);

                const url = `http://127.0.0.1:5500/${pagePath}`;
                await send('Page.navigate', { url });
                await new Promise(r => setTimeout(r, 700));

                const evalRes = await send('Runtime.evaluate', {
                    expression: `(() => {
                        const w = window.innerWidth;
                        const scrollW = document.documentElement.scrollWidth;
                        const overflows = [];
                        if (scrollW > w + 2) {
                            const all = document.querySelectorAll('*');
                            for (let el of all) {
                                const rect = el.getBoundingClientRect();
                                if (rect.right > w + 2 && rect.width > 0 && rect.height > 0) {
                                    overflows.push({
                                        tag: el.tagName,
                                        cls: el.className,
                                        id: el.id,
                                        right: Math.round(rect.right),
                                        width: Math.round(rect.width)
                                    });
                                }
                            }
                        }

                        const brokenImgs = [];
                        for (let img of document.querySelectorAll('img')) {
                            if (img.complete && img.naturalWidth === 0 && img.src && !img.src.includes('data:')) {
                                brokenImgs.push(img.src);
                            }
                        }

                        return {
                            scrollW,
                            w,
                            hasOverflow: scrollW > w + 2,
                            overflowCount: overflows.length,
                            sampleOverflows: overflows.slice(0, 3),
                            brokenImgs
                        };
                    })()`,
                    returnByValue: true
                });

                ws.removeEventListener('message', msgHandler);

                results.push({
                    page: pagePath,
                    viewport: vp.name,
                    consoleErrors,
                    metrics: evalRes.result.value
                });
            }
        }

        console.log(JSON.stringify(results, null, 2));

        ws.close();
    } finally {
        chrome.kill();
    }
}

run().catch(console.error);
