import { PRODUCTS } from './data/products.js';
import { STORES } from './data/stores.js';
import { I18N, setLanguage, getLanguage, registerProductsI18n } from './data/i18n.js';
import { CartStore, showCartToast } from './modules/cart.js';
import { OrderStore, HANOI_DISTRICTS, validateVietnamPhone } from './modules/order.js';
import {
    CatalogModule,
    initHomeCatalog,
    initProductsPageCatalog,
    initProductDetailPage,
    initSearchPageCatalog
} from './modules/catalog.js';

if (typeof window !== 'undefined' && window.location) {
    const p = window.location.pathname;
    if (p.endsWith('.html') || p === '/index.html' || p === '/index') {
        const clean = p.replace(/\/index(\.html)?$/, '/').replace(/\.html$/, '');
        const target = (clean || '/') + window.location.search + window.location.hash;
        try {
            window.history.replaceState(null, '', target);
        } catch {}
    }
}

if (typeof registerProductsI18n === 'function') {
    registerProductsI18n(PRODUCTS);
}

if (typeof window !== 'undefined') {
    window.PRODUCTS = PRODUCTS;
}

export function toggleFloatingContact(e) {
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
        e.stopPropagation();
    }
    const floatingContactWidget = document.getElementById('floatingContactWidget');
    if (!floatingContactWidget) return;
    const isCollapsed = floatingContactWidget.classList.toggle('is-collapsed');
    const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';
    const i18nDict = (typeof I18N !== 'undefined' && I18N[lang]) ? I18N[lang] : null;
    const titleText = isCollapsed
        ? (i18nDict?.float_expand || (lang === 'en' ? 'Expand contact' : 'Mở liên hệ'))
        : (i18nDict?.float_toggle || (lang === 'en' ? 'Collapse contact' : 'Thu gọn liên hệ'));
    document.querySelectorAll('#btnToggleContact, .float-toggle').forEach(b => b.setAttribute('title', titleText));
}

if (typeof window !== 'undefined') {
    window.toggleFloatingContact = toggleFloatingContact;
}

function init() {

    const currentLang = getLanguage();
    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);

            if (typeof initHomeCatalog === 'function' && document.querySelector('.mustbuy__product')) {
                initHomeCatalog();
            }
            if (typeof initProductsPageCatalog === 'function' && document.getElementById('productGrid')) {
                initProductsPageCatalog();
            }
            if (typeof initProductDetailPage === 'function' && document.querySelector('.pd-info-col')) {
                initProductDetailPage();
            }
            if (typeof initSearchPageCatalog === 'function' && document.querySelector('.search-page')) {
                initSearchPageCatalog();
            }
            if (typeof renderCartPage === 'function' && document.getElementById('cartContentLayout')) {
                renderCartPage();
            }
            if (typeof renderCheckoutPreview === 'function' && document.getElementById('checkoutItemsList')) {
                renderCheckoutPreview();
            }
        });
    });

    CartStore.updateBadges();

    const toggleContactBtns = document.querySelectorAll('#btnToggleContact, .float-toggle');
    const floatingContactWidget = document.getElementById('floatingContactWidget');
    if (toggleContactBtns.length && floatingContactWidget) {
        toggleContactBtns.forEach(btn => {
            btn.onclick = (e) => toggleFloatingContact(e);
        });
    }

    const menuToggle = document.getElementById('menu-toggle');
    const primaryMenu = document.getElementById('primary-menu');
    if (menuToggle && primaryMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('is-active');
            const isOpen = primaryMenu.classList.toggle('is-open');
            document.body.classList.toggle('menu-open', isOpen);
        });

        document.addEventListener('click', (e) => {
            if (primaryMenu.classList.contains('is-open') && !primaryMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                primaryMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-active');
                document.body.classList.remove('menu-open');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && primaryMenu.classList.contains('is-open')) {
                primaryMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-active');
                document.body.classList.remove('menu-open');
            }
        });

        const hasChildItems = document.querySelectorAll('#primary-menu .ega-menu__item.has-child');
        hasChildItems.forEach(item => {
            const link = item.querySelector(':scope > a');
            if (link) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 991) {
                        e.preventDefault();
                        e.stopPropagation();
                        const wasExpanded = item.classList.contains('is-expanded');
                        hasChildItems.forEach(other => other.classList.remove('is-expanded'));
                        if (!wasExpanded) {
                            item.classList.add('is-expanded');
                        }
                    }
                });
            }
        });
    }

    if (document.querySelector('.mustbuy__product')) {
        initHomeCatalog();
    }
    if (document.getElementById('productGrid')) {
        initProductsPageCatalog();
    }
    if (document.querySelector('.pd-info-col')) {
        initProductDetailPage();
    }
    if (document.querySelector('.search-page')) {
        initSearchPageCatalog();
    }

    function renderCartPage() {
        const cartItemList = document.getElementById('cartItemList');
        const cartContentLayout = document.getElementById('cartContentLayout');
        const emptyCartState = document.getElementById('emptyCartState');
        const cartCountTitle = document.getElementById('cartCountTitle');
        const cartSubtotalVal = document.getElementById('cartSubtotalVal');
        const cartTotalVal = document.getElementById('cartTotalVal');

        if (!cartContentLayout || !emptyCartState) return;

        const cart = CartStore.get();
        const lang = getLanguage();

        if (cart.length === 0) {
            cartContentLayout.style.display = 'none';
            emptyCartState.style.display = 'block';
            if (cartCountTitle) cartCountTitle.textContent = '0';
            CartStore.updateBadges();
            return;
        }

        cartContentLayout.style.display = 'grid';
        emptyCartState.style.display = 'none';
        if (cartCountTitle) cartCountTitle.textContent = CartStore.count();

        if (cartItemList) {
            const removeText = lang === 'en' ? 'Remove' : 'Xóa';
            cartItemList.innerHTML = cart.map((item, idx) => {
                const displayTitle = (I18N[lang] && I18N[lang][item.id]) ? I18N[lang][item.id] : item.title;
                const variantHtml = item.variant ? `<p class="cart-item-variant"><span class="cart-variant-tag">${item.variant}</span></p>` : '';
                const inscriptionHtml = item.inscription ? `
                    <div class="cart-item-inscription">
                        <i class="fa-solid fa-pen-nib"></i> <strong>${lang === 'en' ? 'Inscription:' : 'Lời chúc:'}</strong> "${item.inscription}"
                    </div>
                ` : '';
                return `
                <div class="cart-item-card" data-idx="${idx}">
                    <div class="cart-item-img">
                        <img src="${item.img.startsWith("/") ? item.img : "/" + item.img}" alt="${displayTitle}" onerror="this.onerror=null; this.src='/public/images/brand/Poeme Japanese Bakery Logo.png';">
                    </div>
                    <div class="cart-item-info">
                        <h3 class="cart-item-title">${displayTitle}</h3>
                        ${variantHtml}
                        ${inscriptionHtml}
                        <span class="cart-item-price">${(item.price || 0).toLocaleString('vi-VN')}₫</span>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-box">
                            <button type="button" class="btn-cart-minus" data-idx="${idx}">-</button>
                            <input type="text" value="${item.qty}" readonly>
                            <button type="button" class="btn-cart-plus" data-idx="${idx}">+</button>
                        </div>
                        <span class="cart-item-subtotal">${((item.price || 0) * (item.qty || 1)).toLocaleString('vi-VN')}₫</span>
                        <button type="button" class="btn-remove-item" data-idx="${idx}">
                            <i class="fa-solid fa-trash-can"></i> ${removeText}
                        </button>
                    </div>
                </div>
            `;
            }).join('');

            cartItemList.querySelectorAll('.btn-cart-minus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.idx, 10);
                    const current = cart[idx].qty;
                    if (current > 1) {
                        CartStore.updateQty(idx, current - 1);
                    } else {
                        CartStore.remove(idx);
                    }
                    renderCartPage();
                });
            });

            cartItemList.querySelectorAll('.btn-cart-plus').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.idx, 10);
                    CartStore.updateQty(idx, cart[idx].qty + 1);
                    renderCartPage();
                });
            });

            cartItemList.querySelectorAll('.btn-remove-item').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.dataset.idx, 10);
                    CartStore.remove(idx);
                    renderCartPage();
                });
            });
        }

        const accGrid = document.getElementById('cartAccessoriesGrid');
        if (accGrid) {
            const accessories = PRODUCTS.filter(p => p.category === 'phu-kien');
            accGrid.innerHTML = accessories.map(acc => {
                const accTitle = (lang === 'en' ? acc.name_en : acc.name_vi) || acc.name_vi;
                const quickAddText = lang === 'en' ? '+ Quick Add' : '+ Thêm nhanh';
                return `
                    <div class="cart-acc-card">
                        <div class="cart-acc-thumb">
                            <img src="${acc.img.startsWith('/') ? acc.img : '/' + acc.img}" alt="${accTitle}">
                        </div>
                        <div class="cart-acc-details">
                            <h4 class="cart-acc-title">${accTitle}</h4>
                            <div class="cart-acc-price">${(acc.price || 0).toLocaleString('vi-VN')}₫</div>
                        </div>
                        <button type="button" class="btn-acc-quick-add" data-id="${acc.id}">
                            ${quickAddText}
                        </button>
                    </div>
                `;
            }).join('');

            accGrid.querySelectorAll('.btn-acc-quick-add').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.dataset.id;
                    const target = accessories.find(a => a.id === id);
                    if (target) {
                        const itemTitle = (lang === 'en' ? target.name_en : target.name_vi) || target.name_vi;
                        CartStore.add({
                            id: target.id,
                            title: itemTitle,
                            price: target.price,
                            qty: 1,
                            variant: '',
                            inscription: '',
                            img: target.img
                        });
                        showCartToast(itemTitle);
                        renderCartPage();
                    }
                });
            });
        }

        const sub = CartStore.subtotal();
        const formattedSub = sub.toLocaleString('vi-VN') + '₫';
        if (cartSubtotalVal) cartSubtotalVal.textContent = formattedSub;
        if (cartTotalVal) cartTotalVal.textContent = formattedSub;
        CartStore.updateBadges();
    }

    if (document.getElementById('cartContentLayout')) {
        renderCartPage();
        const orderNoteEl = document.getElementById('orderNote');
        if (orderNoteEl) {
            orderNoteEl.value = localStorage.getItem('poeme_order_note') || '';
            orderNoteEl.addEventListener('input', () => {
                localStorage.setItem('poeme_order_note', orderNoteEl.value);
            });
        }
    }

    const checkoutDistrictSelect = document.querySelector('.checkout-form #districtSelect');
    const checkoutWardSelect = document.querySelector('.checkout-form #wardSelect');
    const checkoutForm = document.getElementById('checkoutForm');
    const orderSuccessBox = document.getElementById('orderSuccessBox');
    const checkoutHeading = document.getElementById('checkoutHeading');

    if (checkoutDistrictSelect && checkoutWardSelect) {
        checkoutDistrictSelect.addEventListener('change', () => {
            const selectedDistrict = checkoutDistrictSelect.value;
            const wards = HANOI_DISTRICTS[selectedDistrict] || [];
            const lang = getLanguage();
            const defaultWard = lang === 'en' ? 'Select ward' : 'Chọn phường / xã';
            checkoutWardSelect.innerHTML = `<option value="">${defaultWard}</option>` +
                wards.map(w => `<option value="${w}">${w}</option>`).join('');

            const wrap = checkoutDistrictSelect.closest('.form-req-wrap');
            if (wrap) wrap.classList.remove('has-error');
        });

        checkoutWardSelect.addEventListener('change', () => {
            const wrap = checkoutWardSelect.closest('.form-req-wrap');
            if (wrap) wrap.classList.remove('has-error');
        });
    }

    const checkoutItemsList = document.getElementById('checkoutItemsList');
    const checkoutSubtotal = document.getElementById('checkoutSubtotal');
    const checkoutTotal = document.getElementById('checkoutTotal');
    const couponInput = document.getElementById('couponInput');
    const btnApplyCoupon = document.getElementById('btnApplyCoupon');
    const discountRow = document.getElementById('discountRow');
    const discountVal = document.getElementById('discountVal');
    const checkoutCouponRow = document.getElementById('checkoutCouponRow');

    let appliedDiscount = 0;
    let appliedCoupon = '';
    let lastPlacedOrder = null;
    try {
        const savedOrder = sessionStorage.getItem('poeme_last_placed_order');
        if (savedOrder) lastPlacedOrder = JSON.parse(savedOrder);
    } catch {}

    function renderCheckoutPreview() {
        if (!checkoutItemsList) return;

        if (orderSuccessBox && orderSuccessBox.style.display === 'flex') {
            if (!lastPlacedOrder) {
                const orders = OrderStore.all();
                if (orders.length > 0) lastPlacedOrder = orders[0];
            }
            if (lastPlacedOrder) {
                const lang = getLanguage();
                checkoutItemsList.innerHTML = (lastPlacedOrder.items || []).map(item => {
                    const displayTitle = (I18N[lang] && I18N[lang][item.id]) ? I18N[lang][item.id] : item.title;
                    const variantHtml = item.variant ? `<p style="font-size: 12px; color: #777; margin: 2px 0;">${item.variant}</p>` : '';
                    const inscHtml = item.inscription ? `<p style="font-size: 11.5px; color: #b7532a; font-style: italic; margin: 2px 0;"><i class="fa-solid fa-pen-nib"></i> "${item.inscription}"</p>` : '';
                    return `
                    <div class="cart-item-preview">
                        <div class="cart-thumb">
                            <img src="${item.img.startsWith("/") ? item.img : "/" + item.img}" alt="${displayTitle}" onerror="this.onerror=null; this.src='/public/images/brand/Poeme Japanese Bakery Logo.png';">
                            <span class="cart-qty-badge">${item.qty}</span>
                        </div>
                        <div style="flex: 1;">
                            <h4 style="font-size: 14px; margin-bottom: 2px;">${displayTitle}</h4>
                            ${variantHtml}
                            ${inscHtml}
                        </div>
                        <strong style="font-size: 14px; color: var(--text-dark);">${((item.price || 0) * (item.qty || 1)).toLocaleString('vi-VN')}₫</strong>
                    </div>
                    `;
                }).join('');

                if (checkoutSubtotal) checkoutSubtotal.textContent = (lastPlacedOrder.subtotal || 0).toLocaleString('vi-VN') + '₫';
                if (lastPlacedOrder.discount > 0 && discountRow && discountVal) {
                    discountRow.style.display = 'flex';
                    discountVal.textContent = `-${lastPlacedOrder.discount.toLocaleString('vi-VN')}₫`;
                }
                if (checkoutTotal) checkoutTotal.textContent = (lastPlacedOrder.totalAmount || 0).toLocaleString('vi-VN') + '₫';
                if (checkoutCouponRow) checkoutCouponRow.style.display = 'none';
                return;
            }
        }

        let checkoutCart = CartStore.get();
        if (checkoutCart.length === 0) {
            if (!orderSuccessBox || orderSuccessBox.style.display !== 'flex') {
                window.location.replace('/cart');
                return;
            }
        }

        const lang = getLanguage();
        checkoutItemsList.innerHTML = checkoutCart.map(item => {
            const displayTitle = (I18N[lang] && I18N[lang][item.id]) ? I18N[lang][item.id] : item.title;
            const variantHtml = item.variant ? `<p style="font-size: 12px; color: #777; margin: 2px 0;">${item.variant}</p>` : '';
            const inscHtml = item.inscription ? `<p style="font-size: 11.5px; color: #b7532a; font-style: italic; margin: 2px 0;"><i class="fa-solid fa-pen-nib"></i> "${item.inscription}"</p>` : '';
            return `
            <div class="cart-item-preview">
                <div class="cart-thumb">
                    <img src="${item.img.startsWith("/") ? item.img : "/" + item.img}" alt="${displayTitle}" onerror="this.onerror=null; this.src='/public/images/brand/Poeme Japanese Bakery Logo.png';">
                    <span class="cart-qty-badge">${item.qty}</span>
                </div>
                <div style="flex: 1;">
                    <h4 style="font-size: 14px; margin-bottom: 2px;">${displayTitle}</h4>
                    ${variantHtml}
                    ${inscHtml}
                </div>
                <strong style="font-size: 14px; color: var(--text-dark);">${((item.price || 0) * (item.qty || 1)).toLocaleString('vi-VN')}₫</strong>
            </div>
            `;
        }).join('');

        const baseTotal = checkoutCart.reduce((sum, i) => sum + ((i.price || 0) * (i.qty || 1)), 0);
        if (checkoutSubtotal) checkoutSubtotal.textContent = baseTotal.toLocaleString('vi-VN') + '₫';
        if (checkoutTotal) checkoutTotal.textContent = Math.max(0, baseTotal - appliedDiscount).toLocaleString('vi-VN') + '₫';
    }

    if (checkoutItemsList) {
        renderCheckoutPreview();

        if (btnApplyCoupon && couponInput && discountRow && checkoutTotal) {
            btnApplyCoupon.addEventListener('click', () => {
                const code = couponInput.value.trim().toUpperCase();
                const curLang = getLanguage();
                let checkoutCart = CartStore.get();
                const baseTotal = checkoutCart.reduce((sum, i) => sum + ((i.price || 0) * (i.qty || 1)), 0);

                if (code === 'POEME' || code === 'FRESH' || code === 'POEME10' || code === 'GIAMGIA10') {
                    appliedDiscount = Math.round(baseTotal * 0.1);
                    appliedCoupon = code;
                    discountRow.style.display = 'flex';
                    if (discountVal) discountVal.textContent = `-${appliedDiscount.toLocaleString('vi-VN')}₫`;
                    checkoutTotal.textContent = Math.max(0, baseTotal - appliedDiscount).toLocaleString('vi-VN') + '₫';
                    showCartToast(curLang === 'en'
                        ? `Coupon applied: 10% OFF (-${appliedDiscount.toLocaleString('vi-VN')}₫)`
                        : `Đã áp dụng mã ưu đãi 10% (-${appliedDiscount.toLocaleString('vi-VN')}₫)!`);
                } else if (!code) {
                    showCartToast(curLang === 'en' ? 'Please enter a coupon code.' : 'Vui lòng nhập mã giảm giá.');
                } else {
                    appliedDiscount = 0;
                    appliedCoupon = '';
                    discountRow.style.display = 'none';
                    checkoutTotal.textContent = baseTotal.toLocaleString('vi-VN') + '₫';
                    showCartToast(curLang === 'en' ? 'Invalid coupon code.' : 'Mã giảm giá không hợp lệ.');
                }
            });
        }
    }

    if (checkoutForm && orderSuccessBox) {
        const phoneInput = document.getElementById('custPhone');
        const checkoutFormError = document.getElementById('checkoutFormError');
        const checkoutFormErrorText = document.getElementById('checkoutFormErrorText');
        const optDelivery = document.getElementById('optDelivery');
        const optPickup = document.getElementById('optPickup');
        const optDeliveryWrap = document.getElementById('optDeliveryWrap');
        const optPickupWrap = document.getElementById('optPickupWrap');
        const deliveryFieldsWrap = document.getElementById('deliveryFieldsWrap');
        const pickupFieldsWrap = document.getElementById('pickupFieldsWrap');
        const storeBranchSelect = document.getElementById('storeBranchSelect');
        const selectedStoreCard = document.getElementById('selectedStoreCard');
        const storeCardName = document.getElementById('storeCardName');
        const storeCardAddress = document.getElementById('storeCardAddress');
        const storeCardPhone = document.getElementById('storeCardPhone');
        const pickupDateInput = document.getElementById('pickupDate');
        const pickupTimeSlotSelect = document.getElementById('pickupTimeSlot');
        const custNoteTextarea = document.getElementById('custNote');

        if (custNoteTextarea) {
            custNoteTextarea.value = localStorage.getItem('poeme_order_note') || '';
        }

        if (pickupDateInput) {
            const today = new Date().toISOString().split('T')[0];
            pickupDateInput.setAttribute('min', today);
            if (!pickupDateInput.value) {
                pickupDateInput.value = today;
            }
        }

        if (storeBranchSelect && typeof STORES !== 'undefined') {
            if (storeBranchSelect.options.length <= 1) {
                STORES.forEach(s => {
                    const opt = document.createElement('option');
                    opt.value = s.id;
                    opt.textContent = `${s.name} - ${s.address}`;
                    storeBranchSelect.appendChild(opt);
                });
            }

            storeBranchSelect.addEventListener('change', () => {
                const wrap = storeBranchSelect.closest('.form-req-wrap');
                if (wrap) wrap.classList.remove('has-error');
                if (checkoutFormError) checkoutFormError.style.display = 'none';
                const store = STORES.find(s => s.id === storeBranchSelect.value);
                if (store && selectedStoreCard) {
                    selectedStoreCard.style.display = 'flex';
                    if (storeCardName) storeCardName.textContent = store.name;
                    if (storeCardAddress) storeCardAddress.textContent = store.address;
                    if (storeCardPhone) storeCardPhone.innerHTML = `<i class="fa-solid fa-phone"></i> Hotline: ${store.phone} (${store.hours})`;
                } else if (selectedStoreCard) {
                    selectedStoreCard.style.display = 'none';
                }
            });
        }

        function updateFulfillmentUI() {
            const isDelivery = optDelivery ? optDelivery.checked : true;
            if (optDeliveryWrap && optPickupWrap) {
                optDeliveryWrap.classList.toggle('active', isDelivery);
                optPickupWrap.classList.toggle('active', !isDelivery);
            }
            if (deliveryFieldsWrap) deliveryFieldsWrap.style.display = isDelivery ? 'block' : 'none';
            if (pickupFieldsWrap) pickupFieldsWrap.style.display = isDelivery ? 'none' : 'block';
            if (checkoutFormError) checkoutFormError.style.display = 'none';
        }

        if (optDelivery && optPickup) {
            optDelivery.addEventListener('change', updateFulfillmentUI);
            optPickup.addEventListener('change', updateFulfillmentUI);
        }

        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
                const wrap = phoneInput.closest('.form-req-wrap');
                if (wrap && validateVietnamPhone(e.target.value.trim())) {
                    wrap.classList.remove('has-error');
                }
                if (checkoutFormError) checkoutFormError.style.display = 'none';
            });
        }

        ['custName', 'custAddress', 'pickupDate', 'pickupTimeSlot'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', () => {
                    const wrap = input.closest('.form-req-wrap');
                    if (wrap && input.value.trim()) {
                        wrap.classList.remove('has-error');
                    }
                    if (checkoutFormError) checkoutFormError.style.display = 'none';
                });
                input.addEventListener('change', () => {
                    const wrap = input.closest('.form-req-wrap');
                    if (wrap && input.value.trim()) {
                        wrap.classList.remove('has-error');
                    }
                    if (checkoutFormError) checkoutFormError.style.display = 'none';
                });
            }
        });

        [checkoutDistrictSelect, checkoutWardSelect].forEach(sel => {
            if (sel) {
                sel.addEventListener('change', () => {
                    if (checkoutFormError) checkoutFormError.style.display = 'none';
                });
            }
        });

        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isDelivery = optDelivery ? optDelivery.checked : true;
            const nameInput = document.getElementById('custName');
            const addressInput = document.getElementById('custAddress');

            let hasErrors = false;
            let firstInvalidEl = null;
            let errorMessage = '';

            const requiredFields = [
                { el: nameInput, val: nameInput?.value.trim() },
                { el: pickupDateInput, val: pickupDateInput?.value.trim() },
                { el: pickupTimeSlotSelect, val: pickupTimeSlotSelect?.value.trim() }
            ];

            if (isDelivery) {
                requiredFields.push(
                    { el: addressInput, val: addressInput?.value.trim() },
                    { el: checkoutDistrictSelect, val: checkoutDistrictSelect?.value.trim() },
                    { el: checkoutWardSelect, val: checkoutWardSelect?.value.trim() }
                );
            } else {
                requiredFields.push(
                    { el: storeBranchSelect, val: storeBranchSelect?.value.trim() }
                );
            }

            requiredFields.forEach(({ el, val }) => {
                if (!el) return;
                const wrap = el.closest('.form-req-wrap');
                if (!val) {
                    hasErrors = true;
                    if (wrap) wrap.classList.add('has-error');
                    if (!firstInvalidEl) firstInvalidEl = el;
                } else {
                    if (wrap) wrap.classList.remove('has-error');
                }
            });

            const phoneVal = phoneInput ? phoneInput.value.trim() : '';
            const phoneWrap = phoneInput?.closest('.form-req-wrap');
            const isValidPhone = validateVietnamPhone(phoneVal);
            const lang = getLanguage();

            if (!phoneVal) {
                hasErrors = true;
                if (phoneWrap) phoneWrap.classList.add('has-error');
                if (!firstInvalidEl) firstInvalidEl = phoneInput;
                errorMessage = lang === 'en'
                    ? 'Please enter your 10-digit phone number.'
                    : 'Vui lòng nhập số điện thoại gồm 10 chữ số.';
            } else if (!isValidPhone) {
                hasErrors = true;
                if (phoneWrap) phoneWrap.classList.add('has-error');
                if (!firstInvalidEl) firstInvalidEl = phoneInput;
                errorMessage = lang === 'en'
                    ? 'Please enter a valid 10-digit phone number (e.g. 0912345678).'
                    : 'Vui lòng nhập đúng và đủ 10 chữ số điện thoại (ví dụ: 0912345678).';
            } else {
                if (phoneWrap) phoneWrap.classList.remove('has-error');
            }

            if (hasErrors) {
                if (!errorMessage) {
                    errorMessage = lang === 'en'
                        ? 'Please fill in all required fields (*).'
                        : 'Vui lòng điền đầy đủ các thông tin bắt buộc (*).';
                }
                if (checkoutFormError && checkoutFormErrorText) {
                    checkoutFormErrorText.textContent = errorMessage;
                    checkoutFormError.style.display = 'flex';
                }
                if (firstInvalidEl) firstInvalidEl.focus();
                return;
            }

            const name = nameInput.value.trim();
            const phone = phoneVal;
            const street = addressInput ? addressInput.value.trim() : '';
            const district = checkoutDistrictSelect ? checkoutDistrictSelect.value.trim() : '';
            const ward = checkoutWardSelect ? checkoutWardSelect.value.trim() : '';
            const email = document.getElementById('custEmail')?.value.trim() || '';
            const receiptDateVal = pickupDateInput ? pickupDateInput.value.trim() : '';
            const receiptTimeVal = pickupTimeSlotSelect ? pickupTimeSlotSelect.value.trim() : '';
            const noteVal = custNoteTextarea ? custNoteTextarea.value.trim() : '';

            const currentCart = CartStore.get();
            const baseTotal = currentCart.reduce((sum, i) => sum + ((i.price || 0) * (i.qty || 1)), 0);
            const finalAmount = Math.max(0, baseTotal - appliedDiscount);

            const selectedStore = !isDelivery && storeBranchSelect ? STORES.find(s => s.id === storeBranchSelect.value) : null;

            const order = OrderStore.create({
                customerName: name,
                customerPhone: phone,
                customerEmail: email,
                fulfillmentMethod: isDelivery ? 'delivery' : 'pickup',
                storeBranchId: selectedStore ? selectedStore.id : null,
                storeBranchName: selectedStore ? selectedStore.name : null,
                storeBranchAddress: selectedStore ? selectedStore.address : null,
                storeBranchPhone: selectedStore ? selectedStore.phone : null,
                addressDetail: isDelivery ? street : (selectedStore ? selectedStore.address : ''),
                ward: isDelivery ? ward : '',
                district: isDelivery ? district : (selectedStore ? selectedStore.district : ''),
                city: 'Hà Nội',
                receiptDate: receiptDateVal,
                receiptTimeSlot: receiptTimeVal,
                items: currentCart,
                subtotal: baseTotal,
                discount: appliedDiscount,
                couponCode: appliedCoupon,
                totalAmount: finalAmount,
                note: noteVal
            });
            localStorage.removeItem('poeme_order_note');
            lastPlacedOrder = order;
            try {
                sessionStorage.setItem('poeme_last_placed_order', JSON.stringify(order));
            } catch {}

            if (checkoutHeading) checkoutHeading.style.display = 'none';
            const hanoiNote = document.getElementById('hanoiDeliveryNote') || document.querySelector('.hanoi-delivery-note');
            if (hanoiNote) hanoiNote.style.display = 'none';
            const coBreadcrumb = document.querySelector('.checkout-breadcrumb');
            if (coBreadcrumb) coBreadcrumb.style.display = 'none';
            checkoutForm.style.display = 'none';

            const topCheckoutCrumb = document.getElementById('topCheckoutCrumb');
            if (topCheckoutCrumb) {
                topCheckoutCrumb.setAttribute('data-i18n', 'co_crumb_success');
                topCheckoutCrumb.textContent = lang === 'en' ? 'Order Placed Successfully' : 'Đặt hàng thành công';
            }

            const succOrderId = document.getElementById('succOrderId');
            const succMethod = document.getElementById('succMethod');
            const succTime = document.getElementById('succTime');
            const succCustomer = document.getElementById('succCustomer');
            const succAddressDetail = document.getElementById('succAddressDetail');
            const succAddressArea = document.getElementById('succAddressArea');
            const succNoteRow = document.getElementById('succNoteRow');
            const succNoteDivider = document.getElementById('succNoteDivider');
            const succNote = document.getElementById('succNote');

            if (succOrderId) succOrderId.textContent = order.id;
            if (succMethod) {
                succMethod.textContent = isDelivery
                    ? (lang === 'en' ? 'Home Delivery (Hanoi only)' : 'Giao hàng tận nơi (Chỉ tại Hà Nội)')
                    : (lang === 'en' ? `Store Pickup: ${order.storeBranchName}` : `Nhận tại cửa hàng: ${order.storeBranchName}`);
            }
            if (succTime) {
                succTime.textContent = `${receiptDateVal} | ${receiptTimeVal}`;
            }
            if (succCustomer) succCustomer.textContent = `${name} | ${phone}`;

            if (succAddressDetail) {
                succAddressDetail.textContent = isDelivery ? street : (order.storeBranchAddress || '');
            }
            if (succAddressArea) {
                succAddressArea.textContent = isDelivery
                    ? `Phường ${ward}, ${district}, Hà Nội`
                    : `Hotline: ${order.storeBranchPhone || '0963 720 466'} (07:30 - 21:30)`;
            }

            if (noteVal) {
                if (succNoteRow) succNoteRow.style.display = 'flex';
                if (succNoteDivider) succNoteDivider.style.display = 'block';
                if (succNote) succNote.textContent = `"${noteVal}"`;
            } else {
                if (succNoteRow) succNoteRow.style.display = 'none';
                if (succNoteDivider) succNoteDivider.style.display = 'none';
            }

            orderSuccessBox.style.display = 'flex';

            renderCheckoutPreview();

            CartStore.clear();
        });
    }

    const storeButtons = document.querySelectorAll('.store-item-btn, .store-item');
    const storeMap = document.getElementById('storeMap');
    const storeDistrictSelect = document.querySelector('.stores-sidebar #districtSelect') ||
        document.querySelector('.district-select') ||
        document.getElementById('storeDistrictSelect');

    if (storeButtons.length && storeMap) {
        storeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                storeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const address = btn.getAttribute('data-address');
                if (address) {
                    storeMap.src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
                }
            });
        });

        if (storeDistrictSelect) {
            storeDistrictSelect.addEventListener('change', () => {
                const selected = storeDistrictSelect.value;
                let firstVisible = null;
                storeButtons.forEach(btn => {
                    const district = btn.getAttribute('data-district') || '';
                    if (selected === 'Tất cả' || selected === 'All' || selected === '' || district.includes(selected)) {
                        btn.style.display = 'block';
                        if (!firstVisible) firstVisible = btn;
                    } else {
                        btn.style.display = 'none';
                    }
                });
                if (firstVisible) firstVisible.click();
            });
        }
    }

    document.querySelectorAll('.footer-email-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const lang = getLanguage();
            showCartToast(lang === 'en'
                ? 'Thank you for subscribing to Poeme newsletter!'
                : 'Cảm ơn bạn đã đăng ký nhận tin từ Poeme!');
            form.reset();
        });
    });

    const btnSearchToggles = document.querySelectorAll('.btn-search-toggle');
    const headerSearchBar = document.getElementById('headerSearchBar');
    const btnSearchClose = document.getElementById('btnSearchClose');
    const headerSearchInput = document.getElementById('headerSearchInput');
    const headerSearchForm = document.getElementById('headerSearchForm');

    function openHeaderSearch() {
        if (!headerSearchBar) return;
        headerSearchBar.classList.add('is-open');
        btnSearchToggles.forEach(b => b.classList.add('is-active'));
        const headerEl = document.querySelector('header');
        if (headerEl) headerEl.classList.add('is-search-open');
        document.body.classList.add('is-search-open');
        setTimeout(() => { headerSearchInput?.focus(); }, 180);
    }

    function closeHeaderSearch() {
        if (!headerSearchBar) return;
        headerSearchBar.classList.remove('is-open');
        btnSearchToggles.forEach(b => b.classList.remove('is-active'));
        const headerEl = document.querySelector('header');
        if (headerEl) headerEl.classList.remove('is-search-open');
        document.body.classList.remove('is-search-open');
    }

    if (btnSearchToggles.length && headerSearchBar) {
        btnSearchToggles.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (headerSearchBar.classList.contains('is-open')) {
                    closeHeaderSearch();
                } else {
                    openHeaderSearch();
                }
            });
        });
    }

    if (btnSearchClose && headerSearchBar) {
        btnSearchClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeHeaderSearch();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && headerSearchBar?.classList.contains('is-open')) {
            closeHeaderSearch();
        }
    });

    document.addEventListener('click', (e) => {
        if (headerSearchBar?.classList.contains('is-open')) {
            if (!headerSearchBar.contains(e.target) && !Array.from(btnSearchToggles).some(b => b.contains(e.target))) {
                closeHeaderSearch();
            }
        }
    });

    if (headerSearchForm) {
        headerSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = headerSearchInput ? headerSearchInput.value.trim() : '';
            if (!query) {
                headerSearchInput?.focus();
                return;
            }
            const isSubpage = window.location.pathname.includes('/pages/');
            const targetUrl = isSubpage
                ? `/search?q=${encodeURIComponent(query)}`
                : `/search?q=${encodeURIComponent(query)}`;
            window.location.href = targetUrl;
        });
    }
}

if (typeof window !== 'undefined') {
    window.PoemeApp = {
        init,
        PRODUCTS,
        I18N,
        CartStore,
        OrderStore,
        CatalogModule
    };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
