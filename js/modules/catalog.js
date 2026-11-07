import { PRODUCTS } from '../data/products.js';

export const CATEGORIES = [
    { slug: 'all', name_vi: 'Tất cả sản phẩm', name_en: 'All Products', count: 220 },
    { slug: 'banh-gato', name_vi: 'Bánh Gato', name_en: 'Gateaux & Cakes', count: 70 },
    { slug: 'banh-kem-tuoi', name_vi: 'Bánh Kem Tươi', name_en: 'Fresh Cream & Mousse', count: 95 },
    { slug: 'banh-quy', name_vi: 'Bánh Quy', name_en: 'Cookies & Biscuits', count: 17 },
    { slug: 'banh-mi', name_vi: 'Bánh Mì', name_en: 'Breads & Pastries', count: 26 },
    { slug: 'nuoc', name_vi: 'Đồ Uống', name_en: 'Beverages', count: 7 },
    { slug: 'snack', name_vi: 'Snacks', name_en: 'Snacks', count: 2 },
    { slug: 'phu-kien', name_vi: 'Phụ Kiện', name_en: 'Party Accessories', count: 3 }
];

export const SUBCATEGORIES = [
    { slug: 'banh-gato-nguyen-chiec', parent: 'banh-gato', name_vi: 'Bánh Gato Nguyên Chiếc', name_en: 'Whole Gateaux', count: 70 },

    { slug: 'dong-mousse', parent: 'banh-kem-tuoi', name_vi: 'Bánh Mousse', name_en: 'Mousse Cakes', count: 20 },
    { slug: 'dong-su-kem', parent: 'banh-kem-tuoi', name_vi: 'Bánh Su Kem', name_en: 'Choux', count: 7 },
    { slug: 'dong-tiramisu', parent: 'banh-kem-tuoi', name_vi: 'Bánh Tiramisu', name_en: 'Tiramisu', count: 5 },
    { slug: 'dong-tart-ngan-lop', parent: 'banh-kem-tuoi', name_vi: 'Bánh Tart & Ngàn Lớp', name_en: 'Tarts & Mille-Feuille', count: 4 },
    { slug: 'dong-banh-cuon-cat-mieng', parent: 'banh-kem-tuoi', name_vi: 'Bánh Cuộn & Gato Cắt Miếng', name_en: 'Roll Cakes & Slices', count: 59 },

    { slug: 'banh-quy-hop', parent: 'banh-quy', name_vi: 'Bánh Quy Hộp', name_en: 'Box Cookies', count: 8 },
    { slug: 'banh-quy-tui', parent: 'banh-quy', name_vi: 'Bánh Quy Túi', name_en: 'Bag Cookies', count: 9 },

    { slug: 'banh-mi-man-ngot', parent: 'banh-mi', name_vi: 'Bánh Mì Mặn & Bánh Mì Ngọt Tươi', name_en: 'Savory & Sweet Breads', count: 16 },
    { slug: 'banh-mi-goi-sandwich', parent: 'banh-mi', name_vi: 'Bánh Mì Gối & Sandwich', name_en: 'Toast Bread & Sandwiches', count: 5 },
    { slug: 'banh-sung-bo-danish', parent: 'banh-mi', name_vi: 'Bánh Sừng Bò & Donut', name_en: 'Croissants & Donuts', count: 5 },

    { slug: 'nuoc', parent: 'nuoc', name_vi: 'Đồ Uống', name_en: 'Beverages', count: 7 },

    { slug: 'do-an-nhe', parent: 'snack', name_vi: 'Snacks', name_en: 'Snacks', count: 2 },

    { slug: 'phu-kien-sinh-nhat', parent: 'phu-kien', name_vi: 'Phụ kiện trang trí sinh nhật & tiệc', name_en: 'Birthday & Party Accessories', count: 3 }
];

export function matchesSubcategory(pSub, targetSub) {
    if (!pSub || !targetSub) return false;
    if (pSub === targetSub) return true;
    if ((targetSub === 'banh-quy-hop' || targetSub === 'banh-quy-hu' || targetSub === 'cookies-hop') &&
        (pSub === 'banh-quy-hop' || pSub === 'banh-quy-hu' || pSub === 'cookies-hop')) return true;
    if ((targetSub === 'banh-quy-tui' || targetSub === 'cookies-tui') &&
        (pSub === 'banh-quy-tui' || pSub === 'cookies-tui')) return true;
    if ((targetSub === 'banh-mi-cuon-nuong' || targetSub === 'banh-sung-bo-danish') &&
        (pSub === 'banh-mi-cuon-nuong' || pSub === 'banh-sung-bo-danish')) return true;
    if ((targetSub === 'do-an-nhe' || targetSub === 'snack' || targetSub === 'snack-do-an-vat') &&
        (pSub === 'do-an-nhe' || pSub === 'snack' || pSub === 'snack-do-an-vat')) return true;
    if ((targetSub === 'nuoc' || targetSub === 'nuoc-sua-trai-cay' || targetSub === 'nuoc-tra-hoa-qua') &&
        (pSub === 'nuoc' || pSub === 'nuoc-sua-trai-cay' || pSub === 'nuoc-tra-hoa-qua')) return true;
    if (targetSub === 'banh-gato-nguyen-chiec' && (pSub === 'banh-gato-nguyen-chiec' || pSub === 'banh-gato-tinh-yeu' || pSub === 'banh-gato-cho-be')) return true;
    return false;
}

export function removeDiacritics(str) {
    return (str || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase();
}

export function getProductList() {
    if (typeof window !== 'undefined' && Array.isArray(window.PRODUCTS) && window.PRODUCTS.length > 0) {
        return window.PRODUCTS;
    }
    return PRODUCTS;
}

export function formatPrice(num) {
    return (num || 0).toLocaleString('vi-VN') + '₫';
}

export function renderProductCard(product, lang = 'en', basePath = '') {
    const title = lang === 'en' ? (product.name_en || product.name_vi) : (product.name_vi || product.name_en);
    const isRoot = !basePath || basePath === '';
    const detailUrl = isRoot
        ? `/product-detail?id=${encodeURIComponent(product.id)}`
        : `/product-detail?id=${encodeURIComponent(product.id)}`;
    const imgUrl = product.img.startsWith("/") ? product.img : "/" + product.img;

    return `
        <div class="ega-col-lg-3 ega-col-md-4 ega-col-6 pd-col-item" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
            <div class="pd-item__wrapper">
                <a href="${detailUrl}" class="pd-item">
                    <div class="pd-item__img img-featured">
                        <img src="${imgUrl}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='${basePath}public/images/brand/Poeme Japanese Bakery Logo.png';">
                    </div>
                    <h3 title="${title}">${title}</h3>
                    <div class="price"><ins class="ega-text--no-underline">${formatPrice(product.price)}</ins></div>
                </a>
            </div>
        </div>
    `;
}

export function initHomeCatalog() {
    const container = document.querySelector('.mustbuy__product');
    if (!container) return;

    const products = getProductList();
    if (!products.length) return;

    const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';

    const featured = products.filter(p => p.featured).slice(0, 8);
    const displayList = featured.length ? featured : products.slice(0, 8);

    container.innerHTML = displayList.map(p => {
        const title = lang === 'en' ? (p.name_en || p.name_vi) : (p.name_vi || p.name_en);
        return `
            <div class="mustbuy__item ega-col-6 ega-col-md-3" data-id="${p.id}">
                <div class="pd-item__wrapper">
                    <a href="/product-detail?id=${encodeURIComponent(p.id)}" class="pd-item">
                        <div class="pd-item__img img-featured">
                            <img src="${p.img.startsWith("/") ? p.img : "/" + p.img}" alt="${title}" loading="lazy">
                        </div>
                        <h3>${title}</h3>
                        <div class="price"><ins class="ega-text--no-underline">${formatPrice(p.price)}</ins></div>
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

export function initProductsPageCatalog() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const filterListUl = document.querySelector('.filter-list');
    const sortSelect = document.querySelector('.sort-select');
    const titleEl = document.querySelector('.collection-title');
    const products = getProductList();
    if (!products.length) return;

    let currentCategory = 'all';
    let currentSubcategory = 'all';
    let currentSort = 'default';
    let currentPage = 1;
    let openAccordionCat = null;
    let infiniteScrollObserver = null;
    let isFetchingNextPage = false;
    const PAGE_SIZE = 20;

    function resolveFilterFromQuery() {
        const urlParams = new URLSearchParams(window.location.search);
        const subParam = urlParams.get('sub');
        const catParam = urlParams.get('cat');

        if (subParam) {
            const cleanSub = subParam.trim().toLowerCase();
            const foundSub = SUBCATEGORIES.find(s => s.slug.toLowerCase() === cleanSub ||
                s.name_vi.toLowerCase().includes(cleanSub) ||
                cleanSub.includes(s.name_vi.toLowerCase()) ||
                s.name_en.toLowerCase().includes(cleanSub));
            if (foundSub) {
                currentSubcategory = foundSub.slug;
                currentCategory = foundSub.parent;
                openAccordionCat = foundSub.parent;
                return;
            }
        }

        if (catParam) {
            const paramClean = catParam.trim().toLowerCase();
            for (const cat of CATEGORIES) {
                if (cat.slug.toLowerCase() === paramClean ||
                    cat.name_vi.toLowerCase() === paramClean ||
                    cat.name_en.toLowerCase() === paramClean) {
                    currentCategory = cat.slug;
                    currentSubcategory = 'all';
                    const subs = SUBCATEGORIES.filter(s => s.parent === cat.slug);
                    if (subs.length > 1) openAccordionCat = cat.slug;
                    return;
                }
            }
            for (const cat of CATEGORIES) {
                if (cat.name_vi.toLowerCase().includes(paramClean) ||
                    paramClean.includes(cat.name_vi.toLowerCase()) ||
                    cat.name_en.toLowerCase().includes(paramClean)) {
                    currentCategory = cat.slug;
                    currentSubcategory = 'all';
                    const subs = SUBCATEGORIES.filter(s => s.parent === cat.slug);
                    if (subs.length > 1) openAccordionCat = cat.slug;
                    return;
                }
            }
            if (paramClean.includes('tuoi') || paramClean.includes('tươi')) { currentCategory = 'banh-kem-tuoi'; currentSubcategory = 'all'; openAccordionCat = 'banh-kem-tuoi'; return; }
            if (paramClean.includes('kem') || paramClean.includes('gato')) { currentCategory = 'banh-gato'; currentSubcategory = 'all'; return; }
            if (paramClean.includes('mì') || paramClean.includes('mi')) { currentCategory = 'banh-mi'; currentSubcategory = 'all'; openAccordionCat = 'banh-mi'; return; }
            if (paramClean.includes('quy') || paramClean.includes('cookie')) { currentCategory = 'banh-quy'; currentSubcategory = 'all'; openAccordionCat = 'banh-quy'; return; }
            if (paramClean.includes('nước') || paramClean.includes('nuoc') || paramClean.includes('uống')) { currentCategory = 'nuoc'; currentSubcategory = 'all'; return; }
            if (paramClean.includes('snack')) { currentCategory = 'snack'; currentSubcategory = 'all'; return; }
            if (paramClean.includes('phu-kien') || paramClean.includes('phụ kiện')) { currentCategory = 'phu-kien'; currentSubcategory = 'all'; return; }
        }

        currentCategory = 'all';
        currentSubcategory = 'all';
        openAccordionCat = null;
    }

    resolveFilterFromQuery();

    function buildCategorySidebar() {
        const accordionContainer = document.querySelector('.cat-accordion-list') || document.querySelector('.filter-list');
        if (!accordionContainer) return;
        const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';

        let html = '';

        const isAllActive = currentCategory === 'all' && currentSubcategory === 'all';
        html += `
            <li class="cat-item" data-cat="all">
                <div class="cat-item-header ${isAllActive ? 'is-active' : ''}" data-type="all">
                    <span class="cat-name">${lang === 'en' ? 'All Products' : 'Tất cả sản phẩm'}</span>
                </div>
            </li>
        `;

        CATEGORIES.filter(c => c.slug !== 'all').forEach(cat => {
            const catSubs = SUBCATEGORIES.filter(s => s.parent === cat.slug);
            const hasSubs = catSubs.length > 1;
            const isOpen = openAccordionCat === cat.slug;
            const isCatActive = currentCategory === cat.slug && currentSubcategory === 'all';
            const catName = lang === 'en' ? cat.name_en : cat.name_vi;

            if (hasSubs) {

                html += `
                    <li class="cat-item cat-has-sub ${isOpen ? 'is-open' : ''}" data-cat="${cat.slug}">
                        <div class="cat-item-header ${isCatActive ? 'is-active' : ''}" data-type="cat" data-cat="${cat.slug}" data-has-sub="true">
                            <span class="cat-name">${catName}</span>
                            <svg class="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                        <div class="cat-sub-wrapper">
                            <ul class="cat-sub-list">
                                ${catSubs.map(sub => {
                                    const isSubActive = currentCategory === cat.slug && currentSubcategory === sub.slug;
                                    const subName = lang === 'en' ? sub.name_en : sub.name_vi;
                                    return `
                                        <li class="cat-sub-item">
                                            <button type="button" class="cat-sub-link ${isSubActive ? 'is-active' : ''}" data-type="sub" data-parent="${cat.slug}" data-sub="${sub.slug}">
                                                ${subName}
                                            </button>
                                        </li>
                                    `;
                                }).join('')}
                            </ul>
                        </div>
                    </li>
                `;
            } else {

                html += `
                    <li class="cat-item" data-cat="${cat.slug}">
                        <div class="cat-item-header ${isCatActive ? 'is-active' : ''}" data-type="cat" data-cat="${cat.slug}" data-has-sub="false">
                            <span class="cat-name">${catName}</span>
                        </div>
                    </li>
                `;
            }
        });

        accordionContainer.innerHTML = html;

        accordionContainer.querySelectorAll('.cat-item-header').forEach(header => {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                const type = header.getAttribute('data-type');

                if (type === 'all') {
                    currentCategory = 'all';
                    currentSubcategory = 'all';
                    openAccordionCat = null;
                } else if (type === 'cat') {
                    const catSlug = header.getAttribute('data-cat');
                    const hasSub = header.getAttribute('data-has-sub') === 'true';

                    currentCategory = catSlug;
                    currentSubcategory = 'all';

                    if (hasSub) {

                        openAccordionCat = (openAccordionCat === catSlug) ? null : catSlug;
                    } else {

                        openAccordionCat = null;
                    }
                }

                currentPage = 1;
                try {
                    let newUrl = '/products';
                    if (currentCategory !== 'all') {
                        newUrl = `/products?cat=${encodeURIComponent(currentCategory)}`;
                    }
                    history.replaceState(null, '', newUrl);
                } catch {}

                updateCategorySidebarState();
                renderCatalog();
            });
        });

        accordionContainer.querySelectorAll('.cat-sub-link').forEach(subBtn => {
            subBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const parentSlug = subBtn.getAttribute('data-parent');
                const subSlug = subBtn.getAttribute('data-sub');

                currentCategory = parentSlug;
                currentSubcategory = subSlug;
                openAccordionCat = parentSlug;

                currentPage = 1;
                try {
                    const newUrl = `/products?sub=${encodeURIComponent(currentSubcategory)}`;
                    history.replaceState(null, '', newUrl);
                } catch {}

                updateCategorySidebarState();
                renderCatalog();
            });
        });
    }

    function updateCategorySidebarState() {
        const accordionContainer = document.querySelector('.cat-accordion-list') || document.querySelector('.filter-list');
        if (!accordionContainer) return;

        accordionContainer.querySelectorAll('.cat-item.cat-has-sub').forEach(item => {
            const catSlug = item.getAttribute('data-cat');
            if (catSlug === openAccordionCat) {
                item.classList.add('is-open');
            } else {
                item.classList.remove('is-open');
            }
        });

        accordionContainer.querySelectorAll('.cat-item-header').forEach(header => {
            const type = header.getAttribute('data-type');
            if (type === 'all') {
                header.classList.toggle('is-active', currentCategory === 'all' && currentSubcategory === 'all');
            } else {
                const catSlug = header.getAttribute('data-cat');
                header.classList.toggle('is-active', currentCategory === catSlug && currentSubcategory === 'all');
            }
        });

        accordionContainer.querySelectorAll('.cat-sub-link').forEach(link => {
            const subSlug = link.getAttribute('data-sub');
            const parentSlug = link.getAttribute('data-parent');
            const isSubActive = currentCategory === parentSlug && currentSubcategory === subSlug;
            link.classList.toggle('is-active', isSubActive);
        });
    }

    function renderCatalog(isAppend = false) {
        const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';

        let filtered = products;
        if (currentSubcategory !== 'all') {
            filtered = products.filter(p => matchesSubcategory(p.subcategory, currentSubcategory));
        } else if (currentCategory !== 'all') {
            filtered = products.filter(p => p.category === currentCategory);
        }

        if (currentSort === 'asc') {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (currentSort === 'desc') {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        }

        if (titleEl) {
            if (currentSubcategory !== 'all') {
                const subObj = SUBCATEGORIES.find(s => s.slug === currentSubcategory);
                titleEl.textContent = subObj ? (lang === 'en' ? subObj.name_en : subObj.name_vi) : (lang === 'en' ? 'All Products' : 'Tất cả sản phẩm');
            } else {
                const currentCatObj = CATEGORIES.find(c => c.slug === currentCategory) || CATEGORIES[0];
                titleEl.textContent = lang === 'en' ? currentCatObj.name_en : currentCatObj.name_vi;
            }
        }

        const totalItems = filtered.length;

        const oldLoadMore = document.getElementById('catalogLoadMore');
        if (oldLoadMore) oldLoadMore.remove();

        if (!totalItems) {
            grid.innerHTML = `
                <div class="ega-col-12 ega-text--center" style="padding: 60px 0; grid-column: 1 / -1;">
                    <p style="font-size: 16px; color: #888;">
                        ${lang === 'en' ? 'No products found in this category.' : 'Chưa có sản phẩm nào trong danh mục này.'}
                    </p>
                </div>
            `;
            const scrollSentinel = document.getElementById('catalogScrollSentinel');
            if (scrollSentinel) scrollSentinel.style.display = 'none';
            if (infiniteScrollObserver) infiniteScrollObserver.disconnect();
            return;
        }

        const totalPages = Math.ceil(totalItems / PAGE_SIZE) || 1;
        if (currentPage > totalPages) currentPage = totalPages;

        if (!isAppend || currentPage === 1) {

            const firstBatch = filtered.slice(0, currentPage * PAGE_SIZE);
            grid.innerHTML = firstBatch.map(p => renderProductCard(p, lang, '../')).join('');
        } else {

            const nextBatch = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
            if (nextBatch.length > 0) {
                const nextHtml = nextBatch.map(p => renderProductCard(p, lang, '../')).join('');
                grid.insertAdjacentHTML('beforeend', nextHtml);
            }
        }

        let scrollSentinel = document.getElementById('catalogScrollSentinel');
        if (!scrollSentinel) {
            scrollSentinel = document.createElement('div');
            scrollSentinel.id = 'catalogScrollSentinel';
            scrollSentinel.style.height = '40px';
            scrollSentinel.style.width = '100%';
            scrollSentinel.style.display = 'block';
            grid.parentNode.appendChild(scrollSentinel);
        }

        if (infiniteScrollObserver) {
            infiniteScrollObserver.disconnect();
        }

        const currentlyRendered = Math.min(currentPage * PAGE_SIZE, totalItems);
        if (currentlyRendered < totalItems) {
            scrollSentinel.style.display = 'block';
            infiniteScrollObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !isFetchingNextPage) {
                    isFetchingNextPage = true;
                    currentPage++;
                    renderCatalog(true);
                    setTimeout(() => {
                        isFetchingNextPage = false;
                    }, 250);
                }
            }, {
                root: null,
                rootMargin: '250px',
                threshold: 0
            });
            infiniteScrollObserver.observe(scrollSentinel);
        } else {
            scrollSentinel.style.display = 'none';
        }
    }

    if (sortSelect) {
        sortSelect.onchange = () => {
            const val = sortSelect.value;
            if (val.includes('tăng') || val.includes('asc') || sortSelect.selectedIndex === 1) {
                currentSort = 'asc';
            } else if (val.includes('giảm') || val.includes('desc') || sortSelect.selectedIndex === 2) {
                currentSort = 'desc';
            } else {
                currentSort = 'default';
            }
            currentPage = 1;
            renderCatalog(false);
        };
    }

    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            if ((href.includes('/products?cat=') || href.includes('/products?cat='))) {
                e.preventDefault();
                const catParam = href.split('?cat=')[1];
                window.history.pushState({}, '', href);
                resolveFilterFromQuery();
                currentPage = 1;
                buildCategorySidebar();
                renderCatalog();
            }
        });
    });

    buildCategorySidebar();
    renderCatalog();

    function initFloatingCategoryModal() {
        const btnFloatingCat = document.getElementById('btnFloatingCat');
        const catModalDialog = document.getElementById('catModalDialog');
        const catModalBackdrop = document.getElementById('catModalBackdrop');
        const btnCatModalClose = document.getElementById('btnCatModalClose');
        const sidebarFilter = document.querySelector('.sidebar-filter');

        if (!btnFloatingCat) return;

        function updateBtnVisibility() {
            if (!sidebarFilter) {
                btnFloatingCat.classList.toggle('is-visible', window.scrollY > 220);
                return;
            }
            const rect = sidebarFilter.getBoundingClientRect();
            const shouldShow = rect.bottom < 120 || window.scrollY > 220;
            btnFloatingCat.classList.toggle('is-visible', shouldShow);
        }

        window.addEventListener('scroll', updateBtnVisibility, { passive: true });
        updateBtnVisibility();

        function renderCatModalItems() {
            const modalList = document.getElementById('catModalList');
            if (!modalList) return;
            const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';

            let html = '';
            const isAllActive = currentCategory === 'all' && currentSubcategory === 'all';
            html += `
                <li class="cat-modal-item cat-modal-item--all ${isAllActive ? 'is-active' : ''}" data-cat="all">
                    <span class="cat-modal-name">${lang === 'en' ? 'All Products' : 'Tất cả sản phẩm'}</span>
                </li>
            `;

            CATEGORIES.filter(c => c.slug !== 'all').forEach(cat => {
                const isActive = currentCategory === cat.slug;
                const catName = lang === 'en' ? cat.name_en : cat.name_vi;
                html += `
                    <li class="cat-modal-item ${isActive ? 'is-active' : ''}" data-cat="${cat.slug}">
                        <span class="cat-modal-name">${catName}</span>
                    </li>
                `;
            });

            modalList.innerHTML = html;

            modalList.querySelectorAll('.cat-modal-item').forEach(item => {
                item.addEventListener('click', () => {
                    const catSlug = item.getAttribute('data-cat');
                    currentCategory = catSlug;
                    currentSubcategory = 'all';
                    openAccordionCat = (catSlug !== 'all') ? catSlug : null;
                    currentPage = 1;

                    try {
                        let newUrl = '/products';
                        if (currentCategory !== 'all') {
                            newUrl = `/products?cat=${encodeURIComponent(currentCategory)}`;
                        }
                        history.replaceState(null, '', newUrl);
                    } catch {}

                    updateCategorySidebarState();
                    renderCatalog();
                    closeCatModal();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
        }

        function openCatModal() {
            renderCatModalItems();
            catModalDialog?.classList.add('is-open');
            catModalBackdrop?.classList.add('is-open');
        }

        function closeCatModal() {
            catModalDialog?.classList.remove('is-open');
            catModalBackdrop?.classList.remove('is-open');
        }

        btnFloatingCat.onclick = (e) => {
            e.stopPropagation();
            openCatModal();
        };

        if (btnCatModalClose) {
            btnCatModalClose.onclick = (e) => {
                e.stopPropagation();
                closeCatModal();
            };
        }

        if (catModalBackdrop) {
            catModalBackdrop.onclick = closeCatModal;
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && catModalDialog?.classList.contains('is-open')) {
                closeCatModal();
            }
        });
    }

    initFloatingCategoryModal();
}

export function initProductDetailPage() {
    const mainImg = document.getElementById('mainImage');
    const titleEl = document.querySelector('.pd-info-col h1');
    const priceEl = document.getElementById('pdPrice');
    const descEl = document.querySelector('.pd-desc-box p');
    const metaEl = document.querySelector('.pd-meta');
    const thumbsContainer = document.querySelector('.pd-thumbs') || document.querySelector('.pd-gallery-col');
    if (!titleEl || !mainImg) return;

    const products = getProductList();
    if (!products.length) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const product = (productId && products.find(p => p.id === productId || p.id.toLowerCase() === productId.toLowerCase())) ||
                    products.find(p => p.featured) ||
                    products[0];
    const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';

    const title = lang === 'en' ? (product.name_en || product.name_vi) : (product.name_vi || product.name_en);
    const desc = lang === 'en' ? (product.description_en || product.description_vi) : (product.description_vi || product.description_en);
    const catName = lang === 'en' ? (product.category_name_en || product.category_name) : product.category_name;

    document.title = `${title} | Poeme Japanese Bakery`;
    titleEl.textContent = title;
    mainImg.src = product.img.startsWith("/") ? product.img : "/" + product.img;
    mainImg.alt = title;

    const breadcrumbWrap = document.querySelector('.breadcrumb-wrap .ega-container');
    if (breadcrumbWrap) {
        breadcrumbWrap.innerHTML = `
            <a href="/" data-i18n="crumb_home">${lang === 'en' ? 'Home' : 'Trang chủ'}</a> <span>/</span>
            <a href="/products?cat=${encodeURIComponent(product.category)}">${catName}</a> <span>/</span>
            <strong>${title}</strong>
        `;
    }

    if (thumbsContainer) {
        thumbsContainer.innerHTML = `
            <div class="pd-thumb-item active">
                <img src="${product.img.startsWith("/") ? product.img : "/" + product.img}" alt="${title}">
            </div>
        `;
    }

    if (descEl) descEl.textContent = desc;
    if (metaEl) {
        metaEl.innerHTML = `
            <span>${lang === 'en' ? 'Category:' : 'Loại:'}</span> ${catName} |
            <span>${lang === 'en' ? 'Product Code:' : 'Mã SP:'}</span> ${product.id}
        `;
    }

    let currentSelectedPrice = product.price;
    let selectedVariant = '';

    const oldVariants = document.getElementById('pdVariantsSection');
    if (oldVariants) oldVariants.remove();
    const oldInscription = document.getElementById('pdInscriptionSection');
    if (oldInscription) oldInscription.remove();

    const actionRow = document.querySelector('.pd-action-row');

    if (product.variants && product.variants.length > 0) {
        currentSelectedPrice = product.variants[0].price;
        selectedVariant = product.variants[0].name;

        const variantsSec = document.createElement('div');
        variantsSec.id = 'pdVariantsSection';
        variantsSec.className = 'pd-variants-section';
        const variantsHeading = lang === 'en' ? 'Select Cake Size:' : 'Chọn kích thước bánh:';
        variantsSec.innerHTML = `
            <div class="pd-variants-heading">${variantsHeading}</div>
            <div class="pd-variants-list">
                ${product.variants.map((v, i) => `
                    <button type="button" class="pd-variant-btn ${i === 0 ? 'active' : ''}" data-price="${v.price}" data-name="${v.name}">
                        <span class="v-name">${v.name}</span>
                        <span class="v-price">${formatPrice(v.price)}</span>
                    </button>
                `).join('')}
            </div>
        `;

        if (actionRow && actionRow.parentNode) {
            actionRow.parentNode.insertBefore(variantsSec, actionRow);
        }

        variantsSec.querySelectorAll('.pd-variant-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                variantsSec.querySelectorAll('.pd-variant-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSelectedPrice = parseInt(btn.dataset.price, 10) || product.price;
                selectedVariant = btn.dataset.name || '';
                if (priceEl) priceEl.textContent = formatPrice(currentSelectedPrice);
            });
        });
    }

    if (product.category === 'banh-gato') {
        const inscSec = document.createElement('div');
        inscSec.id = 'pdInscriptionSection';
        inscSec.className = 'pd-inscription-section';
        const inscLabel = lang === 'en' ? 'Cake Inscription (Free):' : 'Viết chữ lên bánh (Miễn phí):';
        const inscPlaceholder = lang === 'en' ? 'E.g. Happy 20th Birthday Minh Chau' : 'Ví dụ: Chúc mừng sinh nhật Minh Châu 20t';
        inscSec.innerHTML = `
            <label for="pdCakeInscription"><i class="fa-solid fa-pen-nib"></i> ${inscLabel}</label>
            <input type="text" id="pdCakeInscription" placeholder="${inscPlaceholder}" maxlength="60" autocomplete="off">
        `;
        if (actionRow && actionRow.parentNode) {
            actionRow.parentNode.insertBefore(inscSec, actionRow);
        }
    }

    if (priceEl) priceEl.textContent = formatPrice(currentSelectedPrice);

    const btnMinus = document.getElementById('btnQtyMinus');
    const btnPlus = document.getElementById('btnQtyPlus');
    const qtyInput = document.getElementById('qty');

    if (btnMinus && btnPlus && qtyInput) {
        btnMinus.onclick = () => {
            let v = parseInt(qtyInput.value, 10) || 1;
            if (v > 1) qtyInput.value = v - 1;
        };
        btnPlus.onclick = () => {
            let v = parseInt(qtyInput.value, 10) || 1;
            qtyInput.value = v + 1;
        };
    }

    const btnAddCart = document.getElementById('btnAddCart');
    const btnBuyNow = document.getElementById('btnBuyNow');

    function createCartItem() {
        const qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
        const inscriptionInput = document.getElementById('pdCakeInscription');
        const inscription = inscriptionInput ? inscriptionInput.value.trim() : '';
        return {
            id: product.id,
            title: title,
            price: currentSelectedPrice,
            qty: qty,
            variant: selectedVariant,
            inscription: inscription,
            img: product.img.startsWith("/") ? product.img : "/" + product.img
        };
    }

    if (btnAddCart) {
        btnAddCart.onclick = () => {
            if (typeof window.CartStore !== 'undefined') {
                window.CartStore.add(createCartItem());
            }
            if (typeof window.showCartToast === 'function') {
                window.showCartToast(title);
            }
        };
    }

    if (btnBuyNow) {
        btnBuyNow.onclick = (e) => {
            e.preventDefault();
            const buyNowItem = createCartItem();
            try {
                sessionStorage.setItem('poeme_buy_now', JSON.stringify([buyNowItem]));
                sessionStorage.setItem('poeme_checkout_mode', 'buy_now');
            } catch (err) {
                console.error('SessionStorage error:', err);
            }
            window.location.href = '/checkout?buy_now=1';
        };
    }

    const detailRow = document.querySelector('.pd-detail-layout') || document.querySelector('.product-detail-box');
    if (detailRow) {
        let relatedSec = document.getElementById('relatedProductsSec');
        if (!relatedSec) {
            relatedSec = document.createElement('div');
            relatedSec.id = 'relatedProductsSec';
            relatedSec.className = 'related-products-section';
            detailRow.parentNode.appendChild(relatedSec);
        }

        const sameSub = products.filter(p =>
            p.id !== product.id &&
            p.subcategory &&
            product.subcategory &&
            p.subcategory.toLowerCase() === product.subcategory.toLowerCase()
        );

        const sameCat = products.filter(p =>
            p.id !== product.id &&
            p.category === product.category &&
            !sameSub.some(s => s.id === p.id)
        );

        const related = [...sameSub, ...sameCat].slice(0, 12);

        if (related.length) {
            const sectionTitle = lang === 'en' ? 'Related Products' : 'Sản phẩm liên quan';
            const showNav = related.length > 1;
            relatedSec.innerHTML = `
                <div class="related-header">
                    <h3 class="related-slider-title" data-i18n="pd_related_title">
                        ${sectionTitle}
                    </h3>
                </div>
                <div class="related-slider-wrapper">
                    ${showNav ? `<button type="button" class="related-nav-btn prev" id="btnRelatedPrev" aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button>` : ''}
                    <div class="related-slider-track" id="relatedSliderTrack">
                        ${related.map(p => {
                            const pTitle = lang === 'en' ? (p.name_en || p.name_vi) : p.name_vi;
                            return `
                            <div class="related-card-item">
                                <a href="/product-detail?id=${encodeURIComponent(p.id)}" class="related-card-link">
                                    <div class="related-card-img">
                                        <img src="${p.img.startsWith("/") ? p.img : "/" + p.img}" alt="${pTitle}" loading="lazy" onerror="this.onerror=null; this.src='/public/images/brand/Poeme Japanese Bakery Logo.png';">
                                    </div>
                                    <div class="related-card-body">
                                        <h4 class="related-card-title" title="${pTitle}">${pTitle}</h4>
                                        <div class="related-card-price">${formatPrice(p.price)}</div>
                                    </div>
                                </a>
                            </div>
                            `;
                        }).join('')}
                    </div>
                    ${showNav ? `<button type="button" class="related-nav-btn next" id="btnRelatedNext" aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button>` : ''}
                </div>
            `;

            const track = document.getElementById('relatedSliderTrack');
            const btnPrev = document.getElementById('btnRelatedPrev');
            const btnNext = document.getElementById('btnRelatedNext');
            const sliderWrapper = relatedSec.querySelector('.related-slider-wrapper');

            if (window.__poemeRelatedTimer) {
                clearInterval(window.__poemeRelatedTimer);
                window.__poemeRelatedTimer = null;
            }

            if (track && showNav) {
                const INTERVAL = 2800;

                function getCardStep() {
                    const firstCard = track.querySelector('.related-card-item');
                    if (!firstCard) return 250;
                    const style = window.getComputedStyle(track);
                    const gap = parseFloat(style.gap || style.columnGap) || 16;
                    return firstCard.offsetWidth + gap;
                }

                function scrollNext() {
                    const step = getCardStep();
                    const maxScroll = track.scrollWidth - track.clientWidth;

                    if (track.scrollLeft >= maxScroll - 15) {
                        track.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        track.scrollBy({ left: step, behavior: 'smooth' });
                    }
                }

                function scrollPrev() {
                    const step = getCardStep();

                    if (track.scrollLeft <= 15) {
                        const maxScroll = track.scrollWidth - track.clientWidth;
                        track.scrollTo({ left: maxScroll, behavior: 'smooth' });
                    } else {
                        track.scrollBy({ left: -step, behavior: 'smooth' });
                    }
                }

                function startAutoPlay() {
                    stopAutoPlay();
                    window.__poemeRelatedTimer = setInterval(scrollNext, INTERVAL);
                }

                function stopAutoPlay() {
                    if (window.__poemeRelatedTimer) {
                        clearInterval(window.__poemeRelatedTimer);
                        window.__poemeRelatedTimer = null;
                    }
                }

                if (btnNext) {
                    btnNext.onclick = (e) => {
                        e.preventDefault();
                        scrollNext();
                        startAutoPlay();
                    };
                }

                if (btnPrev) {
                    btnPrev.onclick = (e) => {
                        e.preventDefault();
                        scrollPrev();
                        startAutoPlay();
                    };
                }

                if (sliderWrapper) {
                    sliderWrapper.onmouseenter = () => stopAutoPlay();
                    sliderWrapper.onmouseleave = () => startAutoPlay();
                    sliderWrapper.ontouchstart = () => stopAutoPlay();
                    sliderWrapper.ontouchend = () => startAutoPlay();
                }

                startAutoPlay();
            }
        }
    }
}

export function initSearchPageCatalog() {
    const searchInput = document.getElementById('searchInput') || document.querySelector('.search-input');
    const searchBtn = document.getElementById('btnSearchSubmit') || document.querySelector('.search-btn');
    const resultsContainer = document.getElementById('searchResults') || document.querySelector('.search-page .ega-row');
    const sortSelect = document.querySelector('.search-sort-select');
    const titleText = document.querySelector('.search-title-text');
    if (!resultsContainer) return;

    const products = getProductList();
    if (!products.length) return;

    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q') || '';
    if (searchInput && initialQuery) {
        searchInput.value = initialQuery;
    }

    function doSearch() {
        const rawQuery = (searchInput ? searchInput.value : '').trim();
        const normQuery = removeDiacritics(rawQuery);
        const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';

        let results = products;
        if (normQuery) {
            results = products.filter(p => {
                const viNorm = removeDiacritics(p.name_vi);
                const enNorm = removeDiacritics(p.name_en);
                const catNorm = removeDiacritics(p.category_name);
                const catEnNorm = removeDiacritics(p.category_name_en);
                const subNorm = removeDiacritics(p.subcategory_name);
                const subEnNorm = removeDiacritics(p.subcategory_name_en);
                const idNorm = removeDiacritics(p.id);
                return viNorm.includes(normQuery) ||
                       enNorm.includes(normQuery) ||
                       catNorm.includes(normQuery) ||
                       catEnNorm.includes(normQuery) ||
                       subNorm.includes(normQuery) ||
                       subEnNorm.includes(normQuery) ||
                       idNorm.includes(normQuery);
            });
        }

        if (sortSelect) {
            const sVal = sortSelect.selectedIndex;
            if (sVal === 1) {
                results = [...results].sort((a, b) => a.price - b.price);
            } else if (sVal === 2) {
                results = [...results].sort((a, b) => b.price - a.price);
            }
        }

        if (titleText) {
            if (rawQuery) {
                titleText.textContent = lang === 'en'
                    ? `Search results for "${rawQuery}"`
                    : `Kết quả tìm kiếm cho "${rawQuery}"`;
            } else {
                titleText.textContent = lang === 'en' ? 'All Products Catalog' : 'Tất cả sản phẩm tìm kiếm';
            }
        }

        if (!results.length) {
            resultsContainer.innerHTML = `
                <div class="ega-col-12 ega-text--center" style="padding: 60px 0;">
                    <p style="font-size: 16px; color: #888;">
                        ${lang === 'en' ? 'No products match your search.' : 'Không tìm thấy sản phẩm phù hợp.'}
                    </p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = results.map(p => {
            const title = lang === 'en' ? (p.name_en || p.name_vi) : (p.name_vi || p.name_en);
            return `
                <div class="ega-col-md-3 ega-col-6 pd-col-item" data-id="${p.id}">
                    <div class="pd-item__wrapper">
                        <a href="/product-detail?id=${encodeURIComponent(p.id)}" class="pd-item">
                            <div class="pd-item__img img-featured">
                                <img src="${p.img.startsWith("/") ? p.img : "/" + p.img}" alt="${title}" loading="lazy">
                            </div>
                            <h3>${title}</h3>
                            <div class="price"><ins class="ega-text--no-underline">${formatPrice(p.price)}</ins></div>
                        </a>
                    </div>
                </div>
            `;
        }).join('');
    }

    if (searchInput) {
        searchInput.oninput = doSearch;
        searchInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                doSearch();
            }
        };
    }
    if (searchBtn) searchBtn.onclick = doSearch;
    if (sortSelect) sortSelect.onchange = doSearch;

    doSearch();
}

export const CatalogModule = {
    CATEGORIES,
    SUBCATEGORIES,
    getProductList,
    formatPrice,
    renderProductCard,
    initHomeCatalog,
    initProductsPageCatalog,
    initProductDetailPage,
    initSearchPageCatalog
};

if (typeof window !== 'undefined') {
    window.CatalogModule = CatalogModule;
}
