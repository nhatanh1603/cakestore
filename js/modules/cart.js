let toastTimer = null;
let memoryCart = null;

export function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function sanitizeItem(item, products = null) {
    if (!item || typeof item !== 'object') return null;
    const prods = products || (typeof window !== 'undefined' && Array.isArray(window.PRODUCTS) ? window.PRODUCTS : null);
    let authenticPrice = Number(item.price) || 0;
    let authenticTitle = item.title || item.name || '';
    let authenticImg = item.img || '';

    if (prods && item.id) {
        const prod = prods.find(p => p.id === item.id);
        if (prod) {
            authenticPrice = Number(prod.price) || 0;
            if (item.variant && Array.isArray(prod.variants)) {
                const mv = prod.variants.find(v => v.name === item.variant || v.size === item.variant);
                if (mv && typeof mv.price === 'number') authenticPrice = mv.price;
            }
            if (prod.title) authenticTitle = prod.title;
            if (prod.img) authenticImg = prod.img;
        }
    }

    const safeQty = Math.max(1, Math.min(99, parseInt(item.qty, 10) || 1));
    const safeInscription = typeof item.inscription === 'string' ? item.inscription.slice(0, 100) : '';
    const safeVariant = typeof item.variant === 'string' ? item.variant.slice(0, 50) : '';

    return {
        ...item,
        title: authenticTitle,
        price: authenticPrice,
        qty: safeQty,
        inscription: safeInscription,
        variant: safeVariant,
        img: authenticImg
    };
}

export function showCartToast(itemName) {
    let popup = document.getElementById('cartToastPopup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'cartToastPopup';
        popup.className = 'cart-toast-popup';
        popup.setAttribute('role', 'status');
        popup.setAttribute('aria-live', 'polite');
        popup.innerHTML = `
            <div class="cart-toast-icon"><i class="fa-solid fa-check"></i></div>
            <div class="cart-toast-text">
                <span class="cart-toast-title"></span>
                <span class="cart-toast-sub"></span>
            </div>
        `;
        document.body.appendChild(popup);
    }

    const lang = (typeof getLanguage === 'function' ? getLanguage() : localStorage.getItem('poeme_lang')) || 'en';
    const i18nDict = (typeof I18N !== 'undefined' && I18N[lang]) ? I18N[lang] : null;
    const titleEl = popup.querySelector('.cart-toast-title');
    const subEl = popup.querySelector('.cart-toast-sub');

    if (titleEl) {
        titleEl.textContent = i18nDict?.toast_added_title || (lang === 'en' ? 'Added to cart!' : 'Đã thêm vào giỏ hàng!');
    }
    if (subEl) {
        subEl.textContent = itemName || (i18nDict?.toast_added_sub || '');
    }

    clearTimeout(toastTimer);
    popup.classList.remove('is-leaving');
    popup.classList.add('is-visible');

    toastTimer = setTimeout(() => {
        popup.classList.add('is-leaving');
        setTimeout(() => {
            popup.classList.remove('is-visible', 'is-leaving');
        }, 320);
    }, 1400);
}

export const CartStore = {
    KEY: 'poeme_cart',
    get() {
        if (memoryCart) return memoryCart.map(i => sanitizeItem(i)).filter(Boolean);
        try {
            const raw = localStorage.getItem(this.KEY);
            const parsed = raw ? JSON.parse(raw) : [];
            if (Array.isArray(parsed)) {
                return parsed.map(i => sanitizeItem(i)).filter(Boolean);
            }
            return [];
        } catch {
            return [];
        }
    },
    save(cart) {
        const cleanCart = (cart || []).map(i => sanitizeItem(i)).filter(Boolean);
        memoryCart = cleanCart;
        try {
            localStorage.setItem(this.KEY, JSON.stringify(cleanCart));
        } catch {}
        this.updateBadges();
    },
    add(item) {
        const sanitized = sanitizeItem(item);
        if (!sanitized) return;
        const cart = this.get();
        const existing = cart.find(i =>
            i.id === sanitized.id &&
            (i.variant || '') === (sanitized.variant || '') &&
            (i.inscription || '') === (sanitized.inscription || '')
        );
        if (existing) {
            existing.qty = Math.min(99, (existing.qty || 0) + (sanitized.qty || 1));
        } else {
            cart.push(sanitized);
        }
        this.save(cart);
    },
    updateQty(index, qty) {
        const cart = this.get();
        if (cart[index]) {
            if (qty <= 0) {
                cart.splice(index, 1);
            } else {
                cart[index].qty = Math.max(1, Math.min(99, parseInt(qty, 10) || 1));
            }
            this.save(cart);
        }
    },
    remove(index) {
        const cart = this.get();
        cart.splice(index, 1);
        this.save(cart);
    },
    clear() {
        memoryCart = [];
        try {
            localStorage.removeItem(this.KEY);
        } catch {}
        this.updateBadges();
    },
    count() {
        return this.get().reduce((sum, item) => sum + (item.qty || 0), 0);
    },
    subtotal() {
        return this.get().reduce((sum, item) => sum + ((item.price || 0) * (item.qty || 0)), 0);
    },
    formatVND(amount) {
        return (amount || 0).toLocaleString('vi-VN') + '₫';
    },
    updateBadges() {
        const count = this.count();
        document.querySelectorAll('.cart-num').forEach(badge => {
            badge.textContent = count;
        });
    }
};

if (typeof window !== 'undefined') {
    window.CartStore = CartStore;
    window.showCartToast = showCartToast;
    window.escapeHtml = escapeHtml;
    window.sanitizeItem = sanitizeItem;
}
