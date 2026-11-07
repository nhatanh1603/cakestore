import urllib.request
import io
import json
import os
import re
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

CATEGORIES = [
    { "slug": "all", "name_vi": "Tất cả sản phẩm", "name_en": "All Products", "icon": "fa-solid fa-layer-group" },
    { "slug": "banh-gato", "name_vi": "Bánh Gato", "name_en": "Gateaux & Cakes", "icon": "fa-solid fa-cake-candles" },
    { "slug": "banh-kem-tuoi", "name_vi": "Bánh Kem Tươi", "name_en": "Fresh Cream & Mousse", "icon": "fa-solid fa-ice-cream" },
    { "slug": "banh-quy", "name_vi": "Bánh Quy", "name_en": "Cookies & Biscuits", "icon": "fa-solid fa-cookie" },
    { "slug": "banh-mi", "name_vi": "Bánh Mì", "name_en": "Breads & Pastries", "icon": "fa-solid fa-bread-slice" },
    { "slug": "phu-kien", "name_vi": "Phụ Kiện", "name_en": "Party Accessories", "icon": "fa-solid fa-wand-magic-sparkles" }
]

SUBCATEGORIES = [
    { "slug": "banh-gato-nguyen-chiec", "parent": "banh-gato", "name_vi": "Bánh Gato Sinh Nhật & Sự Kiện", "name_en": "Birthday & Event Gateaux" },
    { "slug": "banh-gato-cho-be", "parent": "banh-gato", "name_vi": "Bánh Tạo Hình Cho Bé", "name_en": "Kids Themed Cakes" },
    { "slug": "banh-gato-tinh-yeu", "parent": "banh-gato", "name_vi": "Bánh Trái Tim & Tình Yêu", "name_en": "Love & Heart Cakes" },
    
    { "slug": "dong-mousse", "parent": "banh-kem-tuoi", "name_vi": "Dòng Bánh Mousse Tươi", "name_en": "Fresh Mousse Cakes" },
    { "slug": "dong-su-kem", "parent": "banh-kem-tuoi", "name_vi": "Dòng Su Kem (Choux Cream)", "name_en": "Choux Pastries" },
    { "slug": "dong-tiramisu", "parent": "banh-kem-tuoi", "name_vi": "Dòng Tiramisu & Cà Phê", "name_en": "Tiramisu & Coffee Pastries" },
    { "slug": "dong-tart-ngan-lop", "parent": "banh-kem-tuoi", "name_vi": "Dòng Tart & Ngàn Lớp", "name_en": "Tarts & Mille-Feuille" },
    { "slug": "dong-banh-cuon-cat-mieng", "parent": "banh-kem-tuoi", "name_vi": "Bánh Cuộn & Bánh Cắt Miếng", "name_en": "Roll Cakes & Slices" },
    
    { "slug": "cookies-hop", "parent": "banh-quy", "name_vi": "Hộp Cookies Thủ Công", "name_en": "Artisan Cookies Box" },
    { "slug": "cookies-tui", "parent": "banh-quy", "name_vi": "Túi Cookies & Bánh Que", "name_en": "Cookies Pouches & Stick Pies" },
    
    { "slug": "banh-mi-man-ngot", "parent": "banh-mi", "name_vi": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt", "name_en": "Savory & Sweet Breads" },
    { "slug": "banh-mi-goi-sandwich", "parent": "banh-mi", "name_vi": "Bánh Mì Gối & Sandwich", "name_en": "Toast Loaves & Sandwiches" },
    { "slug": "banh-sung-bo-danish", "parent": "banh-mi", "name_vi": "Bánh Sừng Bò & Donut", "name_en": "Croissants & Donuts" },

    { "slug": "phu-kien-sinh-nhat", "parent": "phu-kien", "name_vi": "Nến & Mũ Sinh Nhật", "name_en": "Birthday Candles & Hats" }
]

AUTHENTIC_STORES = [
    { "id": "cs1", "name": "Poeme Láng Hạ", "address": "Số 104 - H1 Láng Hạ, P. Thành Công, Q. Đống Đa, Hà Nội", "district": "Đống Đa", "phone": "0963 720 466", "hours": "07:30 - 21:30" },
    { "id": "cs2", "name": "Poeme Chùa Láng", "address": "Số 51 Chùa Láng, P. Láng Thượng, Q. Đống Đa, Hà Nội", "district": "Đống Đa", "phone": "0357 353 466", "hours": "07:30 - 21:30" },
    { "id": "cs3", "name": "Poeme Văn Cao", "address": "Số 103 Văn Cao, P. Liễu Giai, Q. Ba Đình, Hà Nội", "district": "Ba Đình", "phone": "0961 420 466", "hours": "07:30 - 21:30" },
    { "id": "cs4", "name": "Poeme Lạc Long Quân", "address": "Số 226 Lạc Long Quân, P. Bưởi, Q. Tây Hồ, Hà Nội", "district": "Tây Hồ", "phone": "0963 220 466", "hours": "07:30 - 21:30" },
    { "id": "cs5", "name": "Poeme Nguyễn Quý Đức", "address": "Số 103 - C20 Nguyễn Quý Đức, P. Thanh Xuân Bắc, Q. Thanh Xuân, Hà Nội", "district": "Thanh Xuân", "phone": "0961 470 466", "hours": "07:30 - 21:30" },
    { "id": "cs6", "name": "Poeme Giang Biên", "address": "TT3-25 KĐT Giang Biên, P. Giang Biên, Q. Long Biên, Hà Nội", "district": "Long Biên", "phone": "0965 543 466", "hours": "07:30 - 21:30" },
    { "id": "cs7", "name": "Poeme Việt Hưng", "address": "Số A53, BT7 KĐT Việt Hưng, P. Việt Hưng, Q. Long Biên, Hà Nội", "district": "Long Biên", "phone": "0967 543 466", "hours": "07:30 - 21:30" },
    { "id": "cs8", "name": "Poeme Sài Đồng", "address": "Số 3, Dãy NO1B, KĐT Sài Đồng, P. Phúc Đồng, Q. Long Biên, Hà Nội", "district": "Long Biên", "phone": "0969 843 466", "hours": "07:30 - 21:30" },
    { "id": "cs9", "name": "Poeme Hồng Tiến", "address": "Số 119 Hồng Tiến, P. Bồ Đề, Q. Long Biên, Hà Nội", "district": "Long Biên", "phone": "0865 003 466", "hours": "07:30 - 21:30" },
    { "id": "cs10", "name": "Poeme Dương Văn Bé", "address": "Số 65 Dương Văn Bé, P. Vĩnh Tuy, Q. Hai Bà Trưng, Hà Nội", "district": "Hai Bà Trưng", "phone": "0963 201 466", "hours": "07:30 - 21:30" }
]

def to_camel(s):
    cleaned = re.sub(r'[^a-zA-Z0-9]+', ' ', s).title().replace(' ', '')
    return cleaned or "Product"

def translate_name(vi_title):
    lower = vi_title.lower()
    if 'dreamy floral' in lower: return "Dreamy Floral Gateau"
    if "pink o'hara" in lower: return "Pink O'Hara Rose Gateau"
    if "lavender blossom" in lower: return "Lavender Blossom Gateau"
    if "ivory blossom" in lower: return "Ivory Blossom Gateau"
    if "green garden" in lower: return "Green Garden Matcha Gateau"
    if "romantic tulips" in lower: return "Romantic Tulips Gateau"
    if "strawberry heart" in lower: return "Strawberry Heart Gateau"
    if "cherry blossoms" in lower: return "Cherry Blossoms Gateau"
    if "english rose" in lower: return "English Rose Gateau"
    if "mây ngàn lớp" in lower: return "Mille-Feuille Cloud Pastry"
    if "bông lan trứng muối vuông" in lower: return "Square Salted Egg Sponge"
    if "bông lan trứng muối" in lower: return "Salted Egg Sponge Cake"
    if "cupcake tình yêu" in lower: return "Love Strawberry Cupcake"
    if "kem tươi chan mây" in lower: return "Whipped Cream Cloud Gateau"
    if "trái tim" in lower: return "Heart Shaped Cake"
    if "kem tươi tim" in lower: return "Fresh Cream Heart Cake"
    if "choco velvet" in lower: return "Choco Velvet Cream Cake"
    if "giỏ trái cây" in lower: return "Fresh Fruit Basket Gateau"
    if "gấu yêu" in lower: return "Beloved Bear Cake"
    if "gấu happy" in lower: return "Happy Bear Cake"
    if "khủng long" in lower: return "Dino Themed Cake"
    if "thỏ con" in lower: return "Bunny Themed Cake"
    if "bơ baby" in lower: return "Baby Avocado Cake"
    if "gấu trắng" in lower: return "White Bear Cake"
    if "cún con" in lower: return "Puppy Dog Cake"
    if "cừu baby" in lower: return "Baby Sheep Cake"
    if "gấu trúc" in lower: return "Panda Bear Cake"
    if "gấu nâu" in lower: return "Brown Bear Cake"
    if "cừu đen" in lower: return "Black Sheep Cake"
    if "xe tăng" in lower: return "Tank Themed Cake"
    if "hộp cookies bơ" in lower: return "Butter Cookies Box"
    if "hộp cookies ca cao" in lower: return "Cocoa Cookies Box"
    if "hộp cookies lưỡi mèo socola" in lower: return "Chocolate Langue de Chat Box"
    if "hộp cookies lưỡi mèo trà xanh" in lower: return "Matcha Langue de Chat Box"
    if "hộp cookies lưỡi mèo hạnh nhân" in lower: return "Almond Langue de Chat Box"
    if "hộp cookies lưỡi mèo" in lower: return "Langue de Chat Cookies Box"
    if "hộp cookies nho" in lower: return "Raisin Cookies Box"
    if "hộp cookies socola chips" in lower: return "Chocochip Cookies Box"
    if "lưỡi mèo socola" in lower: return "Chocolate Langue de Chat Pouch"
    if "lưỡi mèo trà xanh" in lower: return "Matcha Langue de Chat Pouch"
    if "lưỡi mèo" in lower: return "Vanilla Langue de Chat Pouch"
    if "túi cookies pamia" in lower: return "Pamia Palmier Cookies Pouch"
    if "stick pie" in lower: return "Japanese Stick Pie"
    if "biscot" in lower: return "Crispy Almond Biscotti"
    if "su kem phomai trái cây" in lower: return "Fruit Cheese Choux Puff"
    if "mousse chanh leo" in lower: return "Passion Fruit Mousse"
    if "tháp su kem" in lower: return "Choux Pastry Tower"
    if "cupcake xmas" in lower: return "Christmas Cupcake"
    if "santa claus" in lower: return "Santa Claus Cake"
    if "gốc cây socola nâu" in lower: return "Chocolate Yule Log Cake"
    if "khúc củi" in lower: return "Mini Yule Log Pastry"
    if "gato chocolate" in lower: return "Chocolate Gateau"
    if "tiramisu" in lower: return "Classic Tiramisu"
    if "red velvet" in lower: return "Red Velvet Gateau"
    if "opera" in lower: return "Opera Chocolate Gateau"
    if "mousse trà xanh" in lower: return "Matcha Green Tea Mousse"
    if "mousse đào" in lower: return "Peach Cream Mousse"
    if "mousse choco dừa" in lower: return "Chocolate Coconut Mousse"
    if "mousse việt quất" in lower: return "Blueberry Cream Mousse"
    if "mousse dâu" in lower: return "Strawberry Cream Mousse"
    if "mousse ổi đào" in lower: return "Guava Peach Mousse"
    if "mousse dưa hấu" in lower: return "Watermelon Mousse"
    if "mousse caramen" in lower: return "Caramel Mousse"
    if "gato kem tươi" in lower: return "Fresh Cream Gateau"
    if "gato cappuccino" in lower: return "Cappuccino Gateau"
    if "gato caramen" in lower: return "Caramel Flan Gateau"
    if "gato cafe" in lower: return "Cafe Mocha Gateau"
    if "chiffon" in lower: return "Japanese Chiffon Cake"
    if "bát dâu tươi" in lower: return "Fresh Strawberry Tart Bowl"
    if "fomat nướng" in lower: return "Baked Cheese Tart"
    if "fomat cam" in lower: return "Orange Cheese Tart"
    if "mille feuille" in lower: return "Classic Mille-Feuille"
    if "cuộn bông lan mix" in lower: return "Mixed Cream Swiss Roll"
    if "cuộn bông lan" in lower: return "Japanese Swiss Roll"
    if "cuốn cappuccino" in lower: return "Cappuccino Cream Roll"
    if "bánh caramen" in lower: return "Japanese Caramel Cake"
    if "caramen đặc biệt" in lower: return "Special Caramel Pudding"
    if "dorayaki" in lower: return "Japanese Dorayaki"
    if "syu kem vani" in lower: return "Vanilla Choux Cream Puff"
    if "syu kem trà" in lower: return "Matcha Choux Cream Puff"
    if "baby syu vani" in lower: return "Baby Vanilla Choux Box"
    if "baby syu socola" in lower: return "Baby Chocolate Choux Box"
    if "syu cheese" in lower: return "Crispy Cheese Choux"
    if "ekura" in lower: return "Chocolate Éclair"
    if "bánh mì bơ pháp" in lower: return "French Butter Bread"
    if "bánh mì hoa cúc" in lower: return "French Brioche Loaf"
    if "bánh mỳ phomai chảy" in lower: return "Lava Cheese Bread"
    if "bánh mỳ đen" in lower: return "Dark Rye Bread"
    if "bánh mỳ kem" in lower: return "Fresh Milk Cream Bun"
    if "bánh mỳ chả phomai" in lower: return "Ham & Cheese Savory Bread"
    if "bánh mỳ chà bông" in lower: return "Pork Floss Soft Bread"
    if "bánh mỳ chả ruốc" in lower: return "Savory Pork Floss Bun"
    if "sandwich" in lower: return "Japanese Sandwich Loaf"
    if "sừng bò" in lower: return "Butter Croissant"
    if "paparoti" in lower: return "Paparoti Mexican Coffee Bun"
    if "pizza mini" in lower: return "Mini Japanese Pizza"
    if "kabocha" in lower: return "Japanese Kabocha Pumpkin Bun"
    if "donut" in lower: return "Chocolate Coated Donut"
    if "bánh mềm" in lower: return "Japanese Soft Bread"
    return vi_title.title()

def download_and_convert_image(img_url, dest_path):
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 500:
        return True
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=12) as res:
            data = res.read()
            img = Image.open(io.BytesIO(data)).convert('RGB')
            img.thumbnail((800, 800), Image.Resampling.LANCZOS)
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            img.save(dest_path, 'WEBP', quality=85)
            return True
    except Exception as e:
        print(f"Error downloading {img_url}: {e}")
        return False

def determine_subcategory(title, cat_slug):
    lower = title.lower()
    if cat_slug == 'banh-gato':
        if any(k in lower for k in ['gấu', 'khủng long', 'thỏ', 'bơ baby', 'cún', 'cừu', 'xe tăng', 'bé']):
            return "banh-gato-cho-be", "Bánh Tạo Hình Cho Bé", "Kids Themed Cakes"
        if any(k in lower for k in ['tim', 'yêu', 'romantic', 'tulip', 'rose', 'blossom', 'floral']):
            return "banh-gato-tinh-yeu", "Bánh Trái Tim & Tình Yêu", "Love & Heart Cakes"
        return "banh-gato-nguyen-chiec", "Bánh Gato Sinh Nhật & Sự Kiện", "Birthday & Event Gateaux"
    
    if cat_slug == 'banh-kem-tuoi':
        if 'mousse' in lower:
            return "dong-mousse", "Dòng Bánh Mousse Tươi", "Fresh Mousse Cakes"
        if 'syu' in lower or 'su kem' in lower or 'ekura' in lower:
            return "dong-su-kem", "Dòng Su Kem (Choux Cream)", "Choux Pastries"
        if 'tiramisu' in lower or 'cafe' in lower or 'mouka' in lower:
            return "dong-tiramisu", "Dòng Tiramisu & Cà Phê", "Tiramisu & Coffee Pastries"
        if 'tart' in lower or 'fomat' in lower or 'mille' in lower or 'bát dâu' in lower:
            return "dong-tart-ngan-lop", "Dòng Tart & Ngàn Lớp", "Tarts & Mille-Feuille"
        return "dong-banh-cuon-cat-mieng", "Bánh Cuộn & Bánh Cắt Miếng", "Roll Cakes & Slices"
        
    if cat_slug == 'banh-quy':
        if 'hộp' in lower:
            return "cookies-hop", "Hộp Cookies Thủ Công", "Artisan Cookies Box"
        return "cookies-tui", "Túi Cookies & Bánh Que", "Cookies Pouches & Stick Pies"
        
    if cat_slug == 'banh-mi':
        if 'sandwich' in lower or 'gối' in lower:
            return "banh-mi-goi-sandwich", "Bánh Mì Gối & Sandwich", "Toast Loaves & Sandwiches"
        if 'sừng bò' in lower or 'donut' in lower:
            return "banh-sung-bo-danish", "Bánh Sừng Bò & Donut", "Croissants & Donuts"
        return "banh-mi-man-ngot", "Bánh Mì Mặn & Bánh Mì Bơ Ngọt", "Savory & Sweet Breads"
        
    return "phu-kien-sinh-nhat", "Nến & Mũ Sinh Nhật", "Birthday Candles & Hats"

def run_sync():
    raw_path = '/home/nhatanh/.gemini/antigravity/brain/ae7c92cc-74af-4925-8ec5-ced12042faf9/scratch/poeme_scraped_raw.json'
    with open(raw_path, 'r', encoding='utf-8') as f:
        raw_items = json.load(f)
        
    print(f"Bắt đầu đồng bộ & tải ảnh cho {len(raw_items)} sản phẩm Poeme...")
    
    # Download tasks
    tasks = []
    processed_products = []
    
    seen_ids = set()
    for item in raw_items:
        title = item['title'].strip()
        cat = item['category']
        base_id = to_camel(item['handle'])
        pid = base_id
        counter = 1
        while pid in seen_ids:
            counter += 1
            pid = f"{base_id}{counter}"
        seen_ids.add(pid)
        
        # Determine local image filename
        clean_handle = re.sub(r'[^a-zA-Z0-9_\-]+', '', item['handle']) or f"prod_{item['haravan_id']}"
        local_rel_path = f"public/images/products/{cat}/{clean_handle}.webp"
        abs_dest_path = os.path.join('/home/nhatanh/Documents/test/web', local_rel_path)
        
        img_url = item['img_url']
        if img_url:
            tasks.append((img_url, abs_dest_path))
            
        sub_slug, sub_name_vi, sub_name_en = determine_subcategory(title, cat)
        
        # Descriptions
        desc_vi = item['body_html']
        if not desc_vi or len(desc_vi) < 10 or 'Mã sản phẩm' in desc_vi:
            if cat == 'banh-gato':
                desc_vi = f"Bánh sinh nhật {title} hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế."
            elif cat == 'banh-kem-tuoi':
                desc_vi = f"Món bánh {title} thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C."
            elif cat == 'banh-quy':
                desc_vi = f"Bánh quy {title} giòn xốp thơm ngậy bơ Pháp, nướng thủ công mỗi ngày theo công thức gia truyền của nghệ nhân Nhật Bản."
            else:
                desc_vi = f"Bánh mì {title} tươi mới mỗi ngày, vỏ mềm ruột thơm, sử dụng nguyên liệu tự nhiên hảo hạng chuẩn phong cách tiệm bánh Nhật."
                
        desc_en = f"Authentic handcrafted {title} prepared with premium natural ingredients following traditional Japanese bakery recipes."
        
        processed_products.append({
            "id": pid,
            "name_vi": title,
            "name_en": translate_name(title),
            "category": cat,
            "category_name": item['category_name'],
            "category_name_en": item['category_name_en'],
            "price": item['price'],
            "img": local_rel_path,
            "featured": len(processed_products) < 8,
            "description_vi": desc_vi,
            "description_en": desc_en,
            "subcategory": sub_slug,
            "subcategory_name": sub_name_vi,
            "subcategory_name_en": sub_name_en,
            "variants": item['variants']
        })
        
    # Append essential party accessories for cross-selling
    ACCESSORIES = [
        {
            "id": "NenSoSinhNhatNhuVang",
            "name_vi": "Nến Số Sinh Nhật Nhũ Vàng",
            "name_en": "Gold Glitter Number Birthday Candle",
            "category": "phu-kien",
            "category_name": "Phụ Kiện",
            "category_name_en": "Party Accessories",
            "price": 15000,
            "img": "public/images/products/phu-kien/NenSoSinhNhatNhuVang.webp",
            "featured": False,
            "description_vi": "Nến số sinh nhật ánh vàng sang trọng lấp lánh cho bữa tiệc ấm cúng.",
            "description_en": "Elegant gold glitter number candle for festive birthday cakes.",
            "subcategory": "phu-kien-sinh-nhat",
            "subcategory_name": "Nến & Mũ Sinh Nhật",
            "subcategory_name_en": "Birthday Candles & Hats",
            "variants": [{"size": "standard", "name": "Cây nến", "price": 15000}]
        },
        {
            "id": "PhaoBongSinhNhat",
            "name_vi": "Pháo Bông Sinh Nhật (Set 6 cây)",
            "name_en": "Birthday Cake Sparklers (Pack of 6)",
            "category": "phu-kien",
            "category_name": "Phụ Kiện",
            "category_name_en": "Party Accessories",
            "price": 35000,
            "img": "public/images/products/phu-kien/PhaoBongSinhNhat.webp",
            "featured": False,
            "description_vi": "Pháo sáng phụt trang trí bánh kem an toàn, tạo khoảnh khắc thắp nến lung linh.",
            "description_en": "Sparkling cake pyrotechnics for unforgettable celebration moments.",
            "subcategory": "phu-kien-sinh-nhat",
            "subcategory_name": "Nến & Mũ Sinh Nhật",
            "subcategory_name_en": "Birthday Candles & Hats",
            "variants": [{"size": "standard", "name": "Vỉ 6 cây", "price": 35000}]
        },
        {
            "id": "MuSinhNhatHoatHinh",
            "name_vi": "Mũ Sinh Nhật Hoạt Hình",
            "name_en": "Cartoon Birthday Cone Hat",
            "category": "phu-kien",
            "category_name": "Phụ Kiện",
            "category_name_en": "Party Accessories",
            "price": 12000,
            "img": "public/images/products/phu-kien/MuSinhNhatHoatHinh.webp",
            "featured": False,
            "description_vi": "Mũ chóp sinh nhật họa tiết dễ thương sắc màu cho bé và bạn bè.",
            "description_en": "Fun colorful birthday party hat for kids and guests.",
            "subcategory": "phu-kien-sinh-nhat",
            "subcategory_name": "Nến & Mũ Sinh Nhật",
            "subcategory_name_en": "Birthday Candles & Hats",
            "variants": [{"size": "standard", "name": "Cái", "price": 12000}]
        }
    ]
    # Replace python false with False
    for acc in ACCESSORIES:
        acc["featured"] = False
        processed_products.append(acc)

    print(f"Bắt đầu tải {len(tasks)} file ảnh song song (10 luồng)...")
    success_downloads = 0
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(download_and_convert_image, url, path): path for url, path in tasks}
        for f in as_completed(futures):
            if f.result():
                success_downloads += 1
            if success_downloads % 30 == 0 or success_downloads == len(tasks):
                print(f" -> Đã tải và tối ưu WebP: {success_downloads}/{len(tasks)} ảnh...")

    print(f"Hoàn thành tải {success_downloads}/{len(tasks)} ảnh thật thành công!")

    # Write js/data/products.js
    products_js_content = f"""export const CATEGORIES = {json.dumps(CATEGORIES, ensure_ascii=False, indent=2)};

export const SUBCATEGORIES = {json.dumps(SUBCATEGORIES, ensure_ascii=False, indent=2)};

export const PRODUCTS = {json.dumps(processed_products, ensure_ascii=False, indent=2)};
"""
    with open('/home/nhatanh/Documents/test/web/js/data/products.js', 'w', encoding='utf-8') as f:
        f.write(products_js_content)
    print("Đã ghi thành công js/data/products.js!")
    
    # Write js/data/stores.js
    stores_js_content = f"""export const STORES = {json.dumps(AUTHENTIC_STORES, ensure_ascii=False, indent=2)};
"""
    with open('/home/nhatanh/Documents/test/web/js/data/stores.js', 'w', encoding='utf-8') as f:
        f.write(stores_js_content)
    print("Đã ghi thành công js/data/stores.js!")

if __name__ == '__main__':
    run_sync()
