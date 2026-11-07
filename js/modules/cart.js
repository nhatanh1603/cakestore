let toastTimer = null;
let memoryCart = null;

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
        if (memoryCart) return memoryCart;
        try {
            const raw = localStorage.getItem(this.KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    },
    save(cart) {
        memoryCart = cart;
        try {
            localStorage.setItem(this.KEY, JSON.stringify(cart));
        } catch {}
        this.updateBadges();
    },
    add(item) {
        const cart = this.get();
        const existing = cart.find(i =>
            i.id === item.id &&
            (i.variant || '') === (item.variant || '') &&
            (i.inscription || '') === (item.inscription || '')
        );
        if (existing) {
            existing.qty += item.qty;
        } else {
            cart.push(item);
        }
        this.save(cart);
    },
    updateQty(index, qty) {
        const cart = this.get();
        if (cart[index]) {
            if (qty <= 0) {
                cart.splice(index, 1);
            } else {
                cart[index].qty = qty;
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
}
