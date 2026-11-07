# Cake Store

A production-grade, zero-dependency e-commerce client engineered for Poeme Japanese Bakery. Built strictly on the native web platform using semantic HTML5, modern CSS3, and ES6+ modules.

---

## Technical Review

### 1. Platform & Runtime Architecture
- **Vanilla Core:** Zero frontend frameworks (no React, Vue, jQuery, or Bootstrap). No bundling overhead, virtual DOM abstraction, or runtime polyfill footprint.
- **Modularity:** Native ECMAScript Modules (`type="module"`), separation of concerns between state controllers, DOM renderers, and localized data stores.
- **State & Persistence:** Decoupled cart and checkout state management with an in-memory RAM fallback for strict sandboxes (private browsing, third-party cookie restrictions).
- **Internationalization (i18n):** Client-side dynamic dictionary synchronization supporting runtime switching between Vietnamese and English across all static views.

### 2. Styling & Rendering Pipeline
- **CSS Architecture:** Layered stylesheet hierarchy (`base.css`, `header-footer.css`, `home.css`, `pages.css`) using CSS Custom Properties for design tokens.
- **Rendering Performance:** Elimination of layout thrashing and reflow bottlenecks. All interactive animations (drawers, modal overlays, search transitions) execute strictly on the GPU compositor thread via `transform` and `opacity` with cubic-bezier timing curves.
- **Layout Engine:** Custom multi-column grid system combining modern CSS Grid and Flexbox with responsive breakpoints covering viewports from 320px to 1440px+.

---

## Directory Structure

```text
.
├── 404.html                     # Root fallback 404 handler
├── index.html                   # Primary landing and storefront view
├── favicon.ico                  # Multi-resolution browser icon (16x16, 32x32, 48x48)
├── apple-touch-icon.png         # iOS touch icon
├── robots.txt                   # Web crawler directives
├── sitemap.xml                  # Canonical sitemap index
├── site.webmanifest             # Progressive Web Application manifest
├── _redirects                   # Static hosting rewrite and 404 routing rules
├── css/
│   ├── base.css                 # CSS reset, variables, grid foundations, typography
│   ├── header-footer.css        # Navigation bar, drawer menu, search bar, footer
│   ├── home.css                 # Landing page layouts and featured product sections
│   └── pages.css                # Catalog, product detail, cart, checkout, stores
├── js/
│   ├── main.js                  # Entry point, router, and page-level lifecycle coordinator
│   ├── data/
│   │   ├── products.js          # Product schema, metadata catalog, and inventory models
│   │   └── i18n.js              # Localization dictionaries and dynamic translation engine
│   └── modules/
│       ├── cart.js              # Cart state management, calculations, storage persistence
│       ├── catalog.js           # Filter pipeline, search index, rendering, product carousel
│       └── order.js             # Form validation, regex validation, checkout transaction flow
├── pages/
│   ├── about.html               # Brand history and information
│   ├── cart.html                # Cart management interface
│   ├── checkout.html            # Checkout transaction interface
│   ├── product-detail.html      # Product inspection and dynamic carousel
│   ├── products.html            # Filterable product catalog
│   ├── search.html              # Search interface and keyword query results
│   ├── stores.html              # Store locator and retail network
│   └── 404.html                 # Secondary page-level 404 view
├── public/
│   ├── Poeme Dessert Logo Icon.png
│   ├── Poeme Japanese Bakery Logo.png
│   └── images/
│       ├── banner/              # Hero visuals and decorative assets
│       ├── brand/               # Official brand identity assets
│       ├── icons/               # Navigation, utility, and category iconography
│       └── products/            # Optimized product imagery
├── scripts/
│   └── build_products_db.py     # Data extraction and schema generation utility
└── tests/
    ├── test_js_logic.mjs        # Automated integration tests for cart, checkout, and i18n
    ├── test_ui_performance.js   # Frame rate and compositor smoothness benchmark
    └── test_ui_responsive.js    # Headless Chromium viewport and layout validation suite
```

---

## Technologies Used

| Layer | Implementation | Notes |
| :--- | :--- | :--- |
| Markup | HTML5 Semantic Standard | Zero unsemantic wrappers, full accessibility tree compliance |
| Styling | Modern CSS3 | Custom variables, Flexbox, CSS Grid, hardware-accelerated transforms |
| Logic | JavaScript (ES6+ Standards) | Native modules, URLSearchParams API, LocalStorage with memory fallback |
| Typography | Google Fonts | Montserrat, Pacifico |
| Iconography | Font Awesome 6 | Vector web icons |
| Tooling | Python 3, Node.js | Verification scripts and automated headless testing harness |

---

## Legal & Intellectual Property Notice

All product names, photographs, commercial logos, trademarks, and brand identity elements featured in this project are the intellectual property of **Poeme Japanese Bakery** ([poemecake.vn](https://poemecake.vn)).

This repository exists strictly for academic evaluation, code review, and educational portfolio analysis. No commercial use or unauthorized endorsement is implied.
