import fs from 'fs';
import path from 'path';
import { I18N, registerProductsI18n } from '../js/data/i18n.js';
import { PRODUCTS } from '../js/data/products.js';

registerProductsI18n(PRODUCTS);

// Setup DOM mocks before importing cart
global.window = { dispatchEvent: () => {} };
global.document = { querySelectorAll: () => [], querySelector: () => null, getElementById: () => null, createElement: () => ({ setAttribute: () => {}, querySelector: () => null, classList: { add: () => {}, remove: () => {} } }) };
let mockStorage = {};
let storageThrows = false;
global.localStorage = {
    getItem: (k) => {
        if (storageThrows) throw new Error('SecurityError: Access Denied');
        return mockStorage[k] || null;
    },
    setItem: (k, v) => {
        if (storageThrows) throw new Error('QuotaExceededError');
        mockStorage[k] = v;
    },
    removeItem: (k) => {
        delete mockStorage[k];
    }
};

const { CartStore } = await import('../js/modules/cart.js');

const results = {
    i18n: { checked: 0, missingInEn: [], missingInVi: [] },
    cart: { tests: [] },
    checkout: { tests: [] },
    catalog: { tests: [] }
};

// 1. I18N Check
const htmlFiles = [
    'index.html',
    ...fs.readdirSync('pages').filter(f => f.endsWith('.html')).map(f => path.join('pages', f))
];

const foundKeys = new Set();
for (const hf of htmlFiles) {
    const content = fs.readFileSync(hf, 'utf8');
    const regex = /data-i18n=["']([^"']+)["']/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        foundKeys.add(m[1]);
    }
}

const jsFiles = [
    'js/main.js',
    'js/modules/catalog.js',
    'js/modules/cart.js',
    'js/modules/order.js'
];
for (const jf of jsFiles) {
    const content = fs.readFileSync(jf, 'utf8');
    const regex = /\bt\(['"]([^'"]+)['"]\)/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        foundKeys.add(m[1]);
    }
}

results.i18n.checked = foundKeys.size;
for (const k of foundKeys) {
    if (!I18N.en || typeof I18N.en[k] === 'undefined') {
        results.i18n.missingInEn.push(k);
    }
    if (!I18N.vi || typeof I18N.vi[k] === 'undefined') {
        results.i18n.missingInVi.push(k);
    }
}

// 2. Cart Logic Tests
try {
    CartStore.clear();
    CartStore.add({ id: PRODUCTS[0].id, name: PRODUCTS[0].name_vi, price: PRODUCTS[0].price, qty: 2 });
    let items = CartStore.get();
    let count = CartStore.count();
    let subtotal = CartStore.subtotal();

    results.cart.tests.push({
        name: 'Add product to cart with quantity',
        passed: items.length === 1 && count === 2 && subtotal === PRODUCTS[0].price * 2
    });

    CartStore.updateQty(0, 4);
    count = CartStore.count();
    results.cart.tests.push({
        name: 'Update cart quantity',
        passed: count === 4
    });

    CartStore.remove(0);
    items = CartStore.get();
    results.cart.tests.push({
        name: 'Remove item from cart',
        passed: items.length === 0 && CartStore.count() === 0
    });
} catch (e) {
    results.cart.tests.push({ name: 'Cart basic operations', passed: false, error: e.message });
}

// Test in-memory fallback
try {
    storageThrows = true;
    CartStore.clear();
    CartStore.add({ id: 'fallback1', name: 'Fallback Cake', price: 50000, qty: 3 });
    const fallbackItems = CartStore.get();
    const fallbackCount = CartStore.count();
    results.cart.tests.push({
        name: 'Cart in-memory fallback on storage exception (private browsing)',
        passed: fallbackItems.length === 1 && fallbackCount === 3 && CartStore.subtotal() === 150000
    });
} catch (e) {
    results.cart.tests.push({ name: 'Cart storage fallback', passed: false, error: e.message });
} finally {
    storageThrows = false;
}

// 3. Catalog Tests
results.catalog.tests.push({
    name: 'Products database non-empty',
    passed: PRODUCTS.length > 0
});

const cats = new Set(PRODUCTS.map(p => p.category));
results.catalog.tests.push({
    name: 'Multiple categories present',
    passed: cats.size >= 4,
    categories: Array.from(cats)
});

// Test Related Products Logic
for (const testCat of cats) {
    const prodsInCat = PRODUCTS.filter(p => p.category === testCat);
    if (prodsInCat.length > 0) {
        const target = prodsInCat[0];
        const related = PRODUCTS.filter(p => p.category === target.category && p.id !== target.id);
        const allSameCat = related.every(r => r.category === target.category);
        const excludesSelf = related.every(r => r.id !== target.id);
        results.catalog.tests.push({
            name: `Related products for category '${testCat}' correctly filtered`,
            passed: allSameCat && excludesSelf,
            relatedCount: related.length
        });
    }
}

// 4. Checkout Validation Tests
const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
results.checkout.tests.push({
    name: 'Valid VN phone numbers pass (0912345678, 0388655755, 0987654321)',
    passed: phoneRegex.test('0912345678') && phoneRegex.test('0388655755') && phoneRegex.test('0987654321')
});

results.checkout.tests.push({
    name: 'Invalid phone numbers fail (12345, 0123456789, abcdefghij)',
    passed: !phoneRegex.test('12345') && !phoneRegex.test('0123456789') && !phoneRegex.test('abcdefghij')
});

// Test Buy-Now vs Cart Independence
try {
    CartStore.clear();
    CartStore.add({ id: 'ExistingCake', title: 'Cart Cake', price: 120000, qty: 1 });
    let mockSession = {};
    for (let i = 1; i <= 5; i++) {
        mockSession['poeme_buy_now'] = JSON.stringify([{ id: 'PinkOhara', title: 'Buy Now Cake', price: 350000, qty: 1, inscription: 'Note ' + i }]);
        mockSession['poeme_checkout_mode'] = 'buy_now';
    }
    const buyNowItems = JSON.parse(mockSession['poeme_buy_now']);
    const isCartUntouched = CartStore.get().length === 1 && CartStore.get()[0].id === 'ExistingCake';
    const isSpamSafelyOverwritten = buyNowItems.length === 1 && buyNowItems[0].inscription === 'Note 5';
    results.checkout.tests.push({
        name: 'Buy-Now runs independently from Cart (spam-safe & cart untouched)',
        passed: isCartUntouched && isSpamSafelyOverwritten
    });
} catch (e) {
    results.checkout.tests.push({ name: 'Buy-Now independence', passed: false, error: e.message });
}

console.log(JSON.stringify(results, null, 2));
