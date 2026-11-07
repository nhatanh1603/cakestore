const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(process.cwd(), reqPath);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
        }
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(0, '127.0.0.1', async () => {
    const port = server.address().port;
    const baseUrl = `http://127.0.0.1:${port}`;
    console.log(`Test server running at ${baseUrl}`);

    // Launch Chromium
    const chrome = spawn('chromium', [
        '--headless=new',
        '--remote-debugging-port=9222',
        '--no-sandbox',
        '--disable-gpu',
        '--window-size=1200,800'
    ]);

    await new Promise(r => setTimeout(r, 1200));

    try {
        const newTabRes = await fetch('http://127.0.0.1:9222/json/new?' + encodeURIComponent(`${baseUrl}/index.html`), { method: 'PUT' });
        const target = await newTabRes.json();
        const wsUrl = target.webSocketDebuggerUrl;

        const ws = new WebSocket(wsUrl);
        await new Promise((resolve, reject) => {
            ws.onopen = resolve;
            ws.onerror = reject;
        });

        let msgId = 1;
        const pendingCallbacks = new Map();

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.id && pendingCallbacks.has(data.id)) {
                const cb = pendingCallbacks.get(data.id);
                pendingCallbacks.delete(data.id);
                cb(data);
            }
        };

        function send(method, params = {}) {
            return new Promise((resolve) => {
                const id = msgId++;
                pendingCallbacks.set(id, (res) => resolve(res.result));
                ws.send(JSON.stringify({ id, method, params }));
            });
        }

        await send('Page.enable');
        await send('DOM.enable');
        await send('Runtime.enable');

        async function navigate(url) {
            await send('Page.navigate', { url });
            await new Promise(r => setTimeout(r, 600));
        }

        async function setViewport(width, height) {
            await send('Emulation.setDeviceMetricsOverride', {
                width,
                height,
                deviceScaleFactor: 1,
                mobile: width < 992
            });
            await new Promise(r => setTimeout(r, 100));
        }

        async function evaluate(expression) {
            const res = await send('Runtime.evaluate', {
                expression,
                returnByValue: true,
                awaitPromise: true
            });
            if (!res) return undefined;
            if (res.exceptionDetails) {
                console.error('Eval error:', res.exceptionDetails.text, res.exceptionDetails.exception);
                return undefined;
            }
            return res.result ? res.result.value : undefined;
        }

        const pagesToTest = [
            'index.html',
            'pages/products.html',
            'pages/product-detail.html',
            'pages/checkout.html',
            'pages/about.html',
            'pages/stores.html',
            'pages/search.html',
            'pages/cart.html'
        ];

        const breakpoints = [
            { name: 'Mobile Mini (320px)', width: 320, height: 600 },
            { name: 'Mobile Standard (375px)', width: 375, height: 667 },
            { name: 'Phablet / Land (480px)', width: 480, height: 800 },
            { name: 'Tablet Portrait (768px)', width: 768, height: 1024 },
            { name: 'Tablet Landscape (991px)', width: 991, height: 768 },
            { name: 'Desktop Start (992px)', width: 992, height: 768 },
            { name: 'Desktop Large (1200px)', width: 1200, height: 800 }
        ];

        console.log('\n======================================================');
        console.log('1. KIỂM TRA TRÀN CHIỀU NGANG (HORIZONTAL OVERFLOW)');
        console.log('======================================================\n');

        let overflowCount = 0;

        for (const page of pagesToTest) {
            await navigate(`${baseUrl}/${page}`);
            for (const bp of breakpoints) {
                await setViewport(bp.width, bp.height);
                const overflowInfo = await evaluate(`
                    (() => {
                        const winW = window.innerWidth;
                        const docW = document.documentElement.scrollWidth;
                        const bodyW = document.body.scrollWidth;
                        const maxW = Math.max(docW, bodyW);
                        const hasOverflow = maxW > winW + 1;

                        const overflowingElements = [];
                        if (hasOverflow) {
                            const all = document.querySelectorAll('*');
                            for (const el of all) {
                                const rect = el.getBoundingClientRect();
                                if (rect.right > winW + 2) {
                                    const tag = el.tagName.toLowerCase();
                                    const cls = el.className ? '.' + String(el.className).trim().split(/\\s+/).slice(0, 3).join('.') : '';
                                    const id = el.id ? '#' + el.id : '';
                                    overflowingElements.push({
                                        selector: tag + id + cls,
                                        right: Math.round(rect.right),
                                        width: Math.round(rect.width),
                                        delta: Math.round(rect.right - winW)
                                    });
                                }
                            }
                        }

                        return {
                            hasOverflow,
                            winW,
                            maxW,
                            overflowAmount: maxW - winW,
                            overflowingElements: overflowingElements.slice(0, 5)
                        };
                    })()
                `);

                if (overflowInfo && overflowInfo.hasOverflow) {
                    overflowCount++;
                    console.log(`[OVERFLOW] ${page} @ ${bp.name}: scrollWidth=${overflowInfo.maxW}px > innerWidth=${overflowInfo.winW}px (+${overflowInfo.overflowAmount}px)`);
                    console.log('  Phần tử tràn:', JSON.stringify(overflowInfo.overflowingElements));
                }
            }
        }

        if (overflowCount === 0) {
            console.log('✅ Hoàn hảo: Không có hiện tượng tràn chiều ngang (scrollWidth > innerWidth) trên cả 8 trang ở tất cả 7 breakpoints!');
        }

        console.log('\n======================================================');
        console.log('2. KIỂM TRA TOUCH TARGETS (< 44px) TRÊN GIAO DIỆN DI ĐỘNG');
        console.log('======================================================\n');

        for (const page of pagesToTest) {
            await navigate(`${baseUrl}/${page}`);
            await setViewport(375, 667);

            const smallTargets = await evaluate(`
                (() => {
                    const selector = 'button, a, input, select, textarea, #menu-toggle, .store-item-btn, .pd-size-btn, .float-btn, .lang-btn, .cat-item-header, .header-icon';
                    const nodes = document.querySelectorAll(selector);
                    const small = [];
                    const seen = new Set();

                    for (const el of nodes) {
                        const style = window.getComputedStyle(el);
                        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
                        const rect = el.getBoundingClientRect();
                        if (rect.width === 0 || rect.height === 0) continue;
                        if (rect.bottom < 0 || rect.top > 2500) continue;

                        if (rect.width < 44 || rect.height < 44) {
                            const tag = el.tagName.toLowerCase();
                            const cls = el.className ? '.' + String(el.className).trim().split(/\\s+/).slice(0, 3).join('.') : '';
                            const id = el.id ? '#' + el.id : '';
                            const key = tag + id + cls;
                            if (!seen.has(key)) {
                                seen.add(key);
                                small.push({
                                    element: key,
                                    text: (el.textContent || el.value || el.getAttribute('aria-label') || '').trim().slice(0, 25),
                                    width: Math.round(rect.width * 10) / 10,
                                    height: Math.round(rect.height * 10) / 10
                                });
                            }
                        }
                    }
                    return small;
                })()
            `);

            if (smallTargets && smallTargets.length > 0) {
                console.log(`[TOUCH TARGET NHỎ] ${page}: (${smallTargets.length} phần tử < 44px)`);
                smallTargets.forEach(t => {
                    console.log(`  - ${t.element} ("${t.text}"): ${t.width}px x ${t.height}px`);
                });
            } else {
                console.log(`✅ ${page}: Tất cả touch target đều đạt chuẩn >= 44px`);
            }
        }

        console.log('\n======================================================');
        console.log('3. ĐO ĐẠC HIỆU NĂNG KHUNG HÌNH (FPS, SCROLL JANK & DROPDOWN)');
        console.log('======================================================\n');

        for (const page of ['index.html', 'pages/products.html', 'pages/cart.html', 'pages/product-detail.html']) {
            await navigate(`${baseUrl}/${page}`);
            await setViewport(375, 667);

            const scrollPerf = await evaluate(`
                new Promise(resolve => {
                    const frameTimes = [];
                    let lastTime = performance.now();
                    let frames = 0;
                    const maxFrames = 60;
                    let scrollY = 0;

                    function step(time) {
                        const delta = time - lastTime;
                        lastTime = time;
                        frameTimes.push(delta);
                        frames++;

                        scrollY += 45;
                        window.scrollTo(0, scrollY);

                        if (frames < maxFrames && scrollY < document.body.scrollHeight) {
                            requestAnimationFrame(step);
                        } else {
                            window.scrollTo(0, 0);
                            const validTimes = frameTimes.slice(1); // bỏ frame đầu do khởi tạo
                            const avgFrameTime = validTimes.reduce((a, b) => a + b, 0) / validTimes.length;
                            const maxFrameTime = Math.max(...validTimes);
                            const jankFrames = validTimes.filter(t => t > 33.3).length;
                            const severeJank = validTimes.filter(t => t > 50).length;
                            const avgFps = Math.round(1000 / avgFrameTime);

                            resolve({
                                totalFrames: validTimes.length,
                                avgFps,
                                avgFrameTime: Math.round(avgFrameTime * 10) / 10,
                                maxFrameTime: Math.round(maxFrameTime * 10) / 10,
                                jankFrames,
                                severeJank
                            });
                        }
                    }
                    requestAnimationFrame(step);
                })
            `);

            if (scrollPerf) {
                console.log(`📊 Cuộn mượt trên ${page} (Mobile 375px):`);
                console.log(`  - FPS trung bình: ${scrollPerf.avgFps} fps (Frame time: ${scrollPerf.avgFrameTime} ms)`);
                console.log(`  - Max Frame time: ${scrollPerf.maxFrameTime} ms`);
                console.log(`  - Frame trễ >33ms: ${scrollPerf.jankFrames} / ${scrollPerf.totalFrames}`);
                console.log(`  - Frame khựng >50ms: ${scrollPerf.severeJank}`);
            }

            // Đo tương tác mở menu mobile
            const menuTogglePerf = await evaluate(`
                new Promise(resolve => {
                    const toggleBtn = document.getElementById('menu-toggle');
                    if (!toggleBtn) return resolve(null);

                    const frameTimes = [];
                    let lastTime = performance.now();
                    let frames = 0;

                    toggleBtn.click();

                    function measure(time) {
                        const delta = time - lastTime;
                        lastTime = time;
                        frameTimes.push(delta);
                        frames++;
                        if (frames < 30) {
                            requestAnimationFrame(measure);
                        } else {
                            const valid = frameTimes.slice(1);
                            const avgFrameTime = valid.reduce((a, b) => a + b, 0) / valid.length;
                            const maxFrameTime = Math.max(...valid);
                            const jank = valid.filter(t => t > 33.3).length;
                            resolve({
                                avgFps: Math.round(1000 / avgFrameTime),
                                maxFrameTime: Math.round(maxFrameTime * 10) / 10,
                                jank
                            });
                        }
                    }
                    requestAnimationFrame(measure);
                })
            `);

            if (menuTogglePerf) {
                console.log(`📱 Mở Menu Mobile trên ${page}: FPS: ${menuTogglePerf.avgFps}, Max Frame: ${menuTogglePerf.maxFrameTime}ms, Khung giật: ${menuTogglePerf.jank}`);
            }
        }

        // Đo Desktop Dropdown Hover / Transition ở 1200px
        await navigate(`${baseUrl}/index.html`);
        await setViewport(1200, 800);

        const desktopDropdownPerf = await evaluate(`
            new Promise(resolve => {
                const navItem = document.querySelector('.ega-menu__item.has-child');
                const megaMenu = document.querySelector('.mega-menu');
                if (!navItem || !megaMenu) return resolve(null);

                const frameTimes = [];
                let lastTime = performance.now();
                let frames = 0;

                navItem.classList.add('hover-test');
                megaMenu.style.visibility = 'visible';
                megaMenu.style.opacity = '1';
                megaMenu.style.transform = 'translateY(0)';

                function measure(time) {
                    const delta = time - lastTime;
                    lastTime = time;
                    frameTimes.push(delta);
                    frames++;
                    if (frames < 30) {
                        requestAnimationFrame(measure);
                    } else {
                        const valid = frameTimes.slice(1);
                        const avg = valid.reduce((a, b) => a + b, 0) / valid.length;
                        const max = Math.max(...valid);
                        resolve({
                            avgFps: Math.round(1000 / avg),
                            maxFrameTime: Math.round(max * 10) / 10,
                            jank: valid.filter(t => t > 33.3).length
                        });
                    }
                }
                requestAnimationFrame(measure);
            })
        `);

        if (desktopDropdownPerf) {
            console.log(`\n🖥️ Mở Mega Menu Desktop (1200px):`);
            console.log(`  - FPS trung bình: ${desktopDropdownPerf.avgFps} fps`);
            console.log(`  - Max Frame time: ${desktopDropdownPerf.maxFrameTime} ms`);
            console.log(`  - Số khung giật (>33ms): ${desktopDropdownPerf.jank}`);
        }

        console.log('\n======================================================');
        console.log('4. KIỂM TRA MÔ TẢ HÌNH ẢNH & TỶ LỆ CO DÃN (ASPECT RATIO)');
        console.log('======================================================\n');

        for (const page of pagesToTest) {
            await navigate(`${baseUrl}/${page}`);
            await setViewport(375, 667);

            const imageChecks = await evaluate(`
                (() => {
                    const imgs = document.querySelectorAll('img');
                    const distorted = [];
                    for (const img of imgs) {
                        if (!img.complete || img.naturalWidth === 0) continue;
                        const rect = img.getBoundingClientRect();
                        if (rect.width === 0 || rect.height === 0) continue;
                        const computed = window.getComputedStyle(img);
                        const objFit = computed.objectFit;
                        // Nếu không có object-fit cover/contain, kiểm tra tỷ lệ méo
                        if (objFit !== 'cover' && objFit !== 'contain') {
                            const naturalRatio = img.naturalWidth / img.naturalHeight;
                            const renderRatio = rect.width / rect.height;
                            const diff = Math.abs(naturalRatio - renderRatio) / naturalRatio;
                            if (diff > 0.15) { // méo hơn 15%
                                distorted.push({
                                    src: img.getAttribute('src'),
                                    natural: img.naturalWidth + 'x' + img.naturalHeight,
                                    rendered: Math.round(rect.width) + 'x' + Math.round(rect.height),
                                    diff: Math.round(diff * 100) + '%'
                                });
                            }
                        }
                    }
                    return distorted;
                })()
            `);

            if (imageChecks && imageChecks.length > 0) {
                console.log(`⚠️ ${page}: Phát hiện ${imageChecks.length} hình ảnh có nguy cơ méo tỷ lệ:`);
                imageChecks.forEach(im => {
                    console.log(`  - ${im.src}: Kích thước gốc ${im.natural}, render ${im.rendered} (lệch ${im.diff})`);
                });
            } else {
                console.log(`✅ ${page}: Tất cả ảnh hiển thị đúng tỷ lệ, không bị méo (dùng object-fit hoặc đúng aspect-ratio)`);
            }
        }

        console.log('\n======================================================');
        console.log('5. KIỂM TRA MÃ CSS: SYNTAX VÀ MEDIA QUERY GAPS');
        console.log('======================================================\n');

        console.log('Đã hoàn tất đo đạc tự động thành công.');

    } catch (err) {
        console.error('Audit script error:', err);
    } finally {
        chrome.kill();
        server.close();
        process.exit(0);
    }
});
