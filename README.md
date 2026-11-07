# Poeme Japanese Bakery - E-Commerce Web Application

Dự án website thương mại điện tử giới thiệu và đặt hàng bánh ngọt Nhật Bản thương hiệu **Poeme Japanese Bakery**. Dự án được xây dựng hoàn toàn bằng công nghệ Web thuần (**Vanilla HTML5, CSS3, JavaScript ES6+**), không phụ thuộc vào bất kỳ thư viện hay framework bên thứ ba nặng nề nào.

---

## 🌟 Điểm nổi bật về mặt Kỹ thuật (Technical Highlights)

1. **Kiến trúc Web thuần (100% Vanilla Stack):**
   - Không dùng Bootstrap, jQuery hay React; tự xây dựng toàn bộ hệ thống Grid (EGA Grid, CSS Grid đa cột), Mega Menu phân tầng và State Management.
   - Hiệu năng tải trang cực nhanh (< 0.1s), không gánh hàng trăm KB mã nguồn dư thừa.

2. **Giao diện chuẩn hiện đại & Hiệu năng 60 FPS:**
   - Triệt tiêu 100% hiện tượng sụt khung hình (jank/layout thrashing) bằng cách chuyển đổi toàn bộ animation sang GPU Compositor (`transform`, `opacity`).
   - Đường cong chuyển động cao cấp `cubic-bezier(0.16, 1, 0.3, 1)` cho thanh tìm kiếm trượt, dropdown menu và giỏ hàng.
   - Lưới sản phẩm phẳng vuông góc (`border-radius: 0`) đồng nhất theo phong cách tối giản Nhật Bản.
   - Responsive hoàn hảo trên 13 dải kích thước màn hình từ Mobile (320px) đến Desktop (1280px+).

3. **Luồng Nghiệp vụ Bán hàng Hoàn chỉnh (End-to-End E-Commerce Flow):**
   - **Catalog & Filter:** Phân loại danh mục, lọc theo từ khóa, sắp xếp theo giá và ngày, cuộn tải trang vô tận (Infinite Scroll).
   - **Related Products Slider:** Tự động nhận diện danh mục cùng loại, chạy tuần hoàn (auto-loop carousel), hỗ trợ vuốt chạm cảm ứng có quán tính (`-webkit-overflow-scrolling: touch`).
   - **Cart Management (Giỏ hàng):** Thêm, xóa, cập nhật số lượng, tính toán tổng tiền chính xác theo thời gian thực.
   - **Storage Fallback Resilience:** Cơ chế dự phòng lưu trữ trên RAM khi người dùng duyệt web ở chế độ ẩn danh (Private Browsing) hoặc trình duyệt chặn cookie/storage.
   - **Direct Checkout (Đặt hàng 1 chạm):** Kiểm tra hợp lệ dữ liệu (regex số điện thoại Việt Nam, quận/phường Hà Nội), tự sinh mã đơn hàng độc bản `#P...` và hiển thị thẻ hoàn tất tức thì.

4. **Hệ thống Song ngữ Động (i18n - Internationalization):**
   - Hỗ trợ chuyển đổi mượt mà giữa tiếng Anh (EN) và tiếng Việt (VI) trên toàn bộ 8 trang.
   - Tự động đồng bộ hóa từ điển ngôn ngữ cho toàn bộ cơ sở dữ liệu sản phẩm qua `registerProductsI18n`.

---

## 📁 Cấu trúc Thư mục Dự án (Project Structure)

```text
├── index.html                   # Trang chủ (Hero Banner, Danh mục, Sản phẩm nổi bật)
├── favicon.ico                  # Icon định danh trình duyệt
├── robots.txt                   # Cấu hình chỉ mục tìm kiếm
├── sitemap.xml                  # Bản đồ website chuẩn SEO
├── site.webmanifest             # Cấu hình PWA & Mobile Bookmark
├── css/                         # Hệ thống Stylesheet phân tầng
│   ├── base.css                 # Reset, Biến toàn cục (:root), Grid, Typography
│   ├── header-footer.css        # Mega Menu, Search bar, Dropdown, Footer, Floating widget
│   ├── home.css                 # Bố cục & Banner nghệ thuật trang chủ
│   └── pages.css                # Bố cục các trang con (Catalog, Detail, Cart, Checkout, Stores)
├── js/                          # Hệ thống JavaScript ES6 Modules
│   ├── main.js                  # Điều phối khởi tạo theo từng trang
│   ├── data/
│   │   ├── products.js          # Cơ sở dữ liệu danh mục & sản phẩm
│   │   └── i18n.js              # Bộ máy dịch thuật song ngữ Anh - Việt
│   └── modules/
│       ├── catalog.js           # Bộ lọc, tìm kiếm, hiển thị lưới & slider sản phẩm
│       ├── cart.js              # Quản lý trạng thái giỏ hàng & bộ đệm RAM
│       └── order.js             # Xử lý đơn hàng, địa chỉ & biểu mẫu đặt hàng
├── pages/                       # Các trang chức năng độc lập
│   ├── about.html               # Trang Giới thiệu & Câu chuyện thương hiệu
│   ├── cart.html                # Trang Giỏ hàng
│   ├── checkout.html            # Trang Đặt hàng & Xác nhận đơn
│   ├── product-detail.html      # Trang Chi tiết sản phẩm & Sản phẩm liên quan
│   ├── products.html            # Trang Danh mục & Bộ lọc sản phẩm
│   ├── search.html              # Trang Tra cứu & Kết quả tìm kiếm
│   ├── stores.html              # Trang Hệ thống cửa hàng & Bản đồ
│   └── 404.html                 # Trang báo lỗi 404 thân thiện
├── public/                      # Tài nguyên tĩnh (Hình ảnh, Logo, Icons)
│   ├── images/
│   │   ├── banner/              # Ảnh banner nghệ thuật & hoa văn
│   │   ├── brand/               # Logo nhận diện thương hiệu
│   │   ├── icons/               # Bộ icon danh mục bánh
│   │   └── products/            # Ảnh WebP chất lượng cao của từng sản phẩm
├── scripts/                     # Công cụ hỗ trợ
│   └── build_products_db.py     # Script tự động trích xuất & chuẩn hóa dữ liệu bánh
└── tests/                       # Bộ kiểm thử tự động hóa
    ├── test_ui_responsive.js    # Kiểm tra tràn viền & console error trên Headless Chromium
    ├── test_ui_performance.js   # Đo đạc FPS và độ mượt chuyển động
    └── test_js_logic.mjs        # Kiểm thử tích hợp Cart, Checkout & i18n
```

---

## 🚀 Hướng dẫn Cài đặt & Chạy Thử (How to Run)

Dự án sử dụng chuẩn **ES6 Modules**, vì vậy cần được mở qua một HTTP Server cục bộ thay vì nhấp đúp tệp `file://`.

### Cách 1: Sử dụng VS Code Live Server (Khuyên dùng)
1. Cài đặt tiện ích mở rộng **Live Server** trên VS Code.
2. Nhấp chuột phải vào tệp `index.html` và chọn **Open with Live Server**.
3. Trang web sẽ tự động mở tại `http://127.0.0.1:5500`.

### Cách 2: Sử dụng Python
Mở Terminal tại thư mục dự án và chạy:
```bash
python3 -m http.server 5500
```
Truy cập trình duyệt: `http://localhost:5500`.

### Cách 3: Sử dụng Node.js
```bash
npx serve -l 5500 .
```

---

## 🧪 Kiểm thử Tự động (Automated Verification)

Dự án đi kèm bộ kịch bản kiểm thử tự động đo đạc trực tiếp trên Headless Chromium:

```bash
# Kiểm thử toàn diện Logic Giỏ hàng, Đặt hàng & Dịch thuật
node tests/test_js_logic.mjs

# Kiểm thử Responsive & Tràn màn hình trên cả 8 trang
node tests/test_ui_responsive.js
```

**Kết quả kiểm chuẩn:**
- Console Errors: `0`
- Horizontal Overflows: `0` (100% viewport an toàn)
- Broken Assets / Links: `0`

---

## 📜 Giấy phép & Tuyên bố Bản quyền (Disclaimer)

Dự án được xây dựng và phát triển nhằm mục đích học tập và làm bài tập môn học. Toàn bộ hình ảnh, ý tưởng nhận diện thương hiệu và bản quyền gốc thuộc về **Poeme Japanese Bakery** ([poemecake.vn](https://poemecake.vn)).
