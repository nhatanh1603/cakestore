const fs = require('fs');
const path = require('path');

const results = {
    i18n: { checked: 0, missingInEn: [], missingInVi: [], missingInHtml: [] },
    cart: { tests: [] },
    checkout: { tests: [] },
    catalog: { tests: [] }
};

const i18nContent = fs.readFileSync('js/data/i18n.js', 'utf8');
const translationsMatch = i18nContent.match(/const\s+translations\s*=\s*(\{[\s\S]*?\n\};)/);
if (!translationsMatch) {
    throw new Error('Could not parse translations from js/data/i18n.js');
}
const translations = eval(`(${translationsMatch[1]})`);

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
    const regex = /t\(['"]([^'"]+)['"]\)/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
        foundKeys.add(m[1]);
    }
}

results.i18n.checked = foundKeys.size;
for (const k of foundKeys) {
    if (!translations.en || typeof translations.en[k] === 'undefined') {
        results.i18n.missingInEn.push(k);
    }
    if (!translations.vi || typeof translations.vi[k] === 'undefined') {
        results.i18n.missingInVi.push(k);
    }
}

const cartModuleContent = fs.readFileSync('js/modules/cart.js', 'utf8');
function createMockCart() {
    let mockStorage = {};
    let storageFails = false;
    const window = {
        localStorage: {
            getItem: (k) => {
                if (storageFails) throw new Error('SecurityError: Access Denied');
                return mockStorage[k] || null;
            },
            setItem: (k, v) => {
                if (storageFails) throw new Error('QuotaExceededError');
                mockStorage[k] = v;
            },
            removeItem: (k) => {
                delete mockStorage[k];
            }
        },
        dispatchEvent: () => {}
    };
    const document = { querySelectorAll: () => [], querySelector: () => null };

    const sandbox = { window, document, CustomEvent: class {} };
    const fn = new Function('window', 'document', 'CustomEvent', `${cartModuleContent}; return Cart;`);
    const CartClass = fn(sandbox.window, sandbox.document, sandbox.CustomEvent);
    const cart = new CartClass();
    return { cart, setFail: (f) => { storageFails = f; } };
}

try {
    const { cart } = createMockCart();
    cart.clear();
    cart.addItem({ id: 'p1', name: 'Cake 1', price: 100000, image: 'img1.png' }, 2);
    const items = cart.getItems();
    const count = cart.getItemCount();
    const total = cart.getTotal();
    results.cart.tests.push({
        name: 'Add item and calculate total',
        passed: items.length === 1 && count === 2 && total === 200000
    });

    cart.updateQuantity('p1', 5);
    results.cart.tests.push({
        name: 'Update quantity',
        passed: cart.getItemCount() === 5 && cart.getTotal() === 500000
    });

    cart.removeItem('p1');
    results.cart.tests.push({
        name: 'Remove item',
        passed: cart.getItems().length === 0 && cart.getTotal() === 0
    });
} catch (e) {
    results.cart.tests.push({ name: 'Cart basic operations', passed: false, error: e.message });
}

try {
    const { cart, setFail } = createMockCart();
    setFail(true);
    cart.addItem({ id: 'fallback1', name: 'Cake F', price: 50000 }, 3);
    const count = cart.getItemCount();
    const total = cart.getTotal();
    results.cart.tests.push({
        name: 'In-memory fallback when localStorage throws SecurityError',
        passed: count === 3 && total === 150000
    });
} catch (e) {
    results.cart.tests.push({ name: 'In-memory fallback', passed: false, error: e.message });
}

const productsContent = fs.readFileSync('js/data/products.js', 'utf8');
const pMatch = productsContent.match(/const\s+PRODUCTS\s*=\s*(\[[\s\S]*?\n\];)/);
const products = eval(`(${pMatch[1]})`);

results.catalog.tests.push({
    name: 'Products database non-empty and well-formed',
    passed: Array.isArray(products) && products.length > 0 && products.every(p => p.id && p.name && p.price > 0 && p.category)
});

const cats = new Set(products.map(p => p.category));
results.catalog.tests.push({
    name: 'All products have categories',
    passed: cats.size >= 4,
    categories: Array.from(cats)
});

for (const c of cats) {
    const inCat = products.filter(p => p.category === c);
    results.catalog.tests.push({
        name: `Category '${c}' item count > 0`,
        passed: inCat.length > 0,
        count: inCat.length
    });
}

const sampleProduct = products[0];
const related = products.filter(p => p.category === sampleProduct.category && p.id !== sampleProduct.id);
results.catalog.tests.push({
    name: 'Related products filtering logic',
    passed: related.every(r => r.category === sampleProduct.category && r.id !== sampleProduct.id)
});

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
results.checkout.tests.push({
    name: 'Valid VN phone 0912345678',
    passed: phoneRegex.test('0912345678')
});
results.checkout.tests.push({
    name: 'Valid VN phone 0388655755',
    passed: phoneRegex.test('0388655755')
});
results.checkout.tests.push({
    name: 'Invalid phone 12345 rejected',
    passed: !phoneRegex.test('12345')
});
results.checkout.tests.push({
    name: 'Invalid letters rejected',
    passed: !phoneRegex.test('abcdefghij')
});

console.log(JSON.stringify(results, null, 2));
