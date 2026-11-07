export const CATEGORIES = [
  {
    "slug": "all",
    "name_vi": "Tất cả sản phẩm",
    "name_en": "All Products",
    "icon": "fa-solid fa-layer-group"
  },
  {
    "slug": "banh-gato",
    "name_vi": "Bánh Gato",
    "name_en": "Gateaux & Cakes",
    "icon": "fa-solid fa-cake-candles"
  },
  {
    "slug": "banh-kem-tuoi",
    "name_vi": "Bánh Kem Tươi",
    "name_en": "Fresh Cream & Mousse",
    "icon": "fa-solid fa-ice-cream"
  },
  {
    "slug": "banh-quy",
    "name_vi": "Bánh Quy",
    "name_en": "Cookies & Biscuits",
    "icon": "fa-solid fa-cookie"
  },
  {
    "slug": "banh-mi",
    "name_vi": "Bánh Mì",
    "name_en": "Breads & Pastries",
    "icon": "fa-solid fa-bread-slice"
  },
  {
    "slug": "phu-kien",
    "name_vi": "Phụ Kiện",
    "name_en": "Party Accessories",
    "icon": "fa-solid fa-wand-magic-sparkles"
  },
  {
    "slug": "nuoc",
    "name_vi": "Đồ Uống",
    "name_en": "Beverages",
    "icon": "fa-solid fa-mug-hot"
  },
  {
    "slug": "snack",
    "name_vi": "Snacks & Đồ Ăn Vặt",
    "name_en": "Snacks & Tidbits",
    "icon": "fa-solid fa-bowl-food"
  }
];

export const SUBCATEGORIES = [
  {
    "slug": "banh-gato-nguyen-chiec",
    "parent": "banh-gato",
    "name_vi": "Bánh Gato Sinh Nhật & Sự Kiện",
    "name_en": "Birthday & Event Gateaux"
  },
  {
    "slug": "banh-gato-cho-be",
    "parent": "banh-gato",
    "name_vi": "Bánh Tạo Hình Cho Bé",
    "name_en": "Kids Themed Cakes"
  },
  {
    "slug": "banh-gato-tinh-yeu",
    "parent": "banh-gato",
    "name_vi": "Bánh Trái Tim & Tình Yêu",
    "name_en": "Love & Heart Cakes"
  },
  {
    "slug": "dong-mousse",
    "parent": "banh-kem-tuoi",
    "name_vi": "Dòng Bánh Mousse Tươi",
    "name_en": "Fresh Mousse Cakes"
  },
  {
    "slug": "dong-su-kem",
    "parent": "banh-kem-tuoi",
    "name_vi": "Dòng Su Kem (Choux Cream)",
    "name_en": "Choux Pastries"
  },
  {
    "slug": "dong-tiramisu",
    "parent": "banh-kem-tuoi",
    "name_vi": "Dòng Tiramisu & Cà Phê",
    "name_en": "Tiramisu & Coffee Pastries"
  },
  {
    "slug": "dong-tart-ngan-lop",
    "parent": "banh-kem-tuoi",
    "name_vi": "Dòng Tart & Ngàn Lớp",
    "name_en": "Tarts & Mille-Feuille"
  },
  {
    "slug": "dong-banh-cuon-cat-mieng",
    "parent": "banh-kem-tuoi",
    "name_vi": "Bánh Cuộn & Bánh Cắt Miếng",
    "name_en": "Roll Cakes & Slices"
  },
  {
    "slug": "cookies-hop",
    "parent": "banh-quy",
    "name_vi": "Hộp Cookies Thủ Công",
    "name_en": "Artisan Cookies Box"
  },
  {
    "slug": "cookies-tui",
    "parent": "banh-quy",
    "name_vi": "Túi Cookies & Bánh Que",
    "name_en": "Cookies Pouches & Stick Pies"
  },
  {
    "slug": "banh-mi-man-ngot",
    "parent": "banh-mi",
    "name_vi": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "name_en": "Savory & Sweet Breads"
  },
  {
    "slug": "banh-mi-goi-sandwich",
    "parent": "banh-mi",
    "name_vi": "Bánh Mì Gối & Sandwich",
    "name_en": "Toast Loaves & Sandwiches"
  },
  {
    "slug": "banh-sung-bo-danish",
    "parent": "banh-mi",
    "name_vi": "Bánh Sừng Bò & Donut",
    "name_en": "Croissants & Donuts"
  },
  {
    "slug": "phu-kien-sinh-nhat",
    "parent": "phu-kien",
    "name_vi": "Nến & Mũ Sinh Nhật",
    "name_en": "Birthday Candles & Hats"
  },
  {
    "slug": "nuoc-sua-trai-cay",
    "parent": "nuoc",
    "name_vi": "Sữa Trái Cây & Nước Gạo",
    "name_en": "Fruit Milk & Rice Drink"
  },
  {
    "slug": "nuoc-tra-hoa-qua",
    "parent": "nuoc",
    "name_vi": "Trà & Nước Ép Nguyên Chất",
    "name_en": "Tea & Pure Fruit Juice"
  },
  {
    "slug": "snack-do-an-vat",
    "parent": "snack",
    "name_vi": "Bánh Gạo & Cơm Cháy",
    "name_en": "Crispy Crackers & Burnt Rice"
  }
];

export const PRODUCTS = [
  {
    "id": "DreamyFloral",
    "name_vi": "Dreamy floral",
    "name_en": "Dreamy Floral Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/dreamy-floral.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Dreamy floral hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Dreamy floral prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "PinkOHaraRose",
    "name_vi": "Pink O'hara rose",
    "name_en": "Pink O'Hara Rose Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/pink-o-hara-rose.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Pink O'hara rose hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Pink O'hara rose prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "LavenderBlossom",
    "name_vi": "Lavender blossom",
    "name_en": "Lavender Blossom Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/lavender-blossom.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Lavender blossom hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Lavender blossom prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "IvoryBlossom",
    "name_vi": "Ivory blossom",
    "name_en": "Ivory Blossom Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/ivory-blossom.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Ivory blossom hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Ivory blossom prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GreenGarden",
    "name_vi": "Green Garden",
    "name_en": "Green Garden Matcha Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/green-garden.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Green Garden hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Green Garden prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "RomanticTulips",
    "name_vi": "Romantic tulips",
    "name_en": "Romantic Tulips Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/romantic-tulips.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Romantic tulips hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Romantic tulips prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "StrawberryHeart",
    "name_vi": "Strawberry heart",
    "name_en": "Strawberry Heart Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/strawberry-heart.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Strawberry heart hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Strawberry heart prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "CherryBlossoms",
    "name_vi": "Cherry blossoms",
    "name_en": "Cherry Blossoms Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/cherry-blossoms.webp",
    "featured": true,
    "description_vi": "Bánh sinh nhật Cherry blossoms hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Cherry blossoms prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "EnglishRose",
    "name_vi": "English rose",
    "name_en": "English Rose Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/english-rose.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật English rose hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted English rose prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "MayNganLop",
    "name_vi": "Mây ngàn lớp",
    "name_en": "Mille-Feuille Cloud Pastry",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 55000,
    "img": "public/images/products/banh-mi/may-ngan-lop.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm: Bột mỳ, bơ, đường, trứng, sữa. Bánh có lớp phủ giòn và nhân bánh dai có thể xé tách lớp.&nbsp;",
    "description_en": "Authentic handcrafted Mây ngàn lớp prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 55000
      }
    ]
  },
  {
    "id": "BongLanTrungMuoiVuong",
    "name_vi": "Bông lan trứng muối vuông",
    "name_en": "Square Salted Egg Sponge",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/bong-lan-trung-muoi-vuong.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm: cốt bông lan mềm cùng với sốt trứng. Phủ bên trên là phomai, trứng muối và ruốc.",
    "description_en": "Authentic handcrafted Bông lan trứng muối vuông prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "CupcakeTinhYeu",
    "name_vi": "Cupcake tình yêu",
    "name_en": "Love Strawberry Cupcake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/cupcake-tinh-yeu.webp",
    "featured": false,
    "description_vi": "Set cupcake trang trí ngọt ngào. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Cupcake tình yêu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KemTuoiChanMay",
    "name_vi": "Kem tươi chan mây",
    "name_en": "Whipped Cream Cloud Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/kem-tuoi-chan-may.webp",
    "featured": false,
    "description_vi": "Gato chan mây trang trí ngọt ngào. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Kem tươi chan mây prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "TraiTim",
    "name_vi": "Trái tim",
    "name_en": "Heart Shaped Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/trai-tim.webp",
    "featured": false,
    "description_vi": "Gato trái tim trang trí ngọt ngào. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Trái tim prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KemTuoiTim",
    "name_vi": "Kem tươi tim",
    "name_en": "Fresh Cream Heart Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/kem-tuoi-tim.webp",
    "featured": false,
    "description_vi": "Gato kem tươi trang trí trái tim chocolate ngọt ngào. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Kem tươi tim prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-tinh-yeu",
    "subcategory_name": "Bánh Trái Tim & Tình Yêu",
    "subcategory_name_en": "Love & Heart Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ChocoVelvetTraiCay",
    "name_vi": "Choco Velvet trái cây",
    "name_en": "Choco Velvet Cream Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/choco-velvet-trai-cay.webp",
    "featured": false,
    "description_vi": "Gato chocolate velvet trang trí cùng trái cây ngọt ngào Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Choco Velvet trái cây prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GioTraiCay",
    "name_vi": "Giỏ trái cây",
    "name_en": "Fresh Fruit Basket Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gio-trai-cay.webp",
    "featured": false,
    "description_vi": "Gato kem tươi trang trí trái cây tươi ngọt ngào. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Giỏ trái cây prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GauYeu1",
    "name_vi": "Gấu yêu",
    "name_en": "Beloved Bear Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gau-yeu-1.webp",
    "featured": false,
    "description_vi": "Gato gấu yêu vị kem tươi. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Gấu yêu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GauYeu",
    "name_vi": "Gấu yêu",
    "name_en": "Beloved Bear Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gau-yeu.webp",
    "featured": false,
    "description_vi": "Gato gấu yêu vị chocolate. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Gấu yêu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "XeTang",
    "name_vi": "Xe tăng",
    "name_en": "Tank Themed Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/xe-tang.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích xe tăng. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Xe tăng prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GauHappy",
    "name_vi": "Gấu happy",
    "name_en": "Happy Bear Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gau-happy.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích gấu happy. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Gấu happy prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KhungLong",
    "name_vi": "Khủng long",
    "name_en": "Dino Themed Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/khung-long.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích khủng long. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Khủng long prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ThoCon2",
    "name_vi": "Thỏ con",
    "name_en": "Bunny Themed Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/tho-con-2.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích thỏ con. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Thỏ con prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "BoBaby",
    "name_vi": "Bơ baby",
    "name_en": "Baby Avocado Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/bo-baby.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích trái bơ. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Bơ baby prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ThoCon1",
    "name_vi": "Thỏ con",
    "name_en": "Bunny Themed Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/tho-con-1.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích thỏ con. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Thỏ con prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GauTrang",
    "name_vi": "Gấu trắng",
    "name_en": "White Bear Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gau-trang.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích nhân vật gấu trắng. Sản phẩm không sử dụng chất bảo quản, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Gấu trắng prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "CunCon",
    "name_vi": "Cún con",
    "name_en": "Puppy Dog Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/cun-con.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích cún con Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Cún con prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "CuuBaby",
    "name_vi": "Cừu baby",
    "name_en": "Baby Sheep Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/cuu-baby.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích cừu baby. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Cừu baby prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ThoCon",
    "name_vi": "Thỏ con",
    "name_en": "Bunny Themed Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/tho-con.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích thỏ con. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Thỏ con prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GauTruc",
    "name_vi": "gấu trúc",
    "name_en": "Panda Bear Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gau-truc.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích gấu trúc. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted gấu trúc prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GauNau",
    "name_vi": "Gấu nâu",
    "name_en": "Brown Bear Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/gau-nau.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích nhân vật gấu nâu. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Gấu nâu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "CuuDen",
    "name_vi": "Cừu đen",
    "name_en": "Black Sheep Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/cuu-den.webp",
    "featured": false,
    "description_vi": "Bánh Gato tạo hình dành cho các bé yêu thích nhân vật cừu đen sấm sét. Sản phẩm không sử dụng chất bảo quản, trang trí bằng màu thực phẩm an toàn cho sức khỏe, đạt tiêu chuẩn kiểm định chất lượng.&nbsp;Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Cừu đen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-cho-be",
    "subcategory_name": "Bánh Tạo Hình Cho Bé",
    "subcategory_name_en": "Kids Themed Cakes",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "HopCookiesLuoiMeoSocola",
    "name_vi": "Hộp cookies lưỡi mèo socola",
    "name_en": "Chocolate Langue de Chat Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-luoi-meo-socola.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa, bột socola.&nbsp;",
    "description_en": "Authentic handcrafted Hộp cookies lưỡi mèo socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "HopCookiesLuoiMeoTraXanh",
    "name_vi": "Hộp cookies lưỡi mèo trà xanh",
    "name_en": "Matcha Langue de Chat Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-luoi-meo-tra-xanh.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa, bột matcha Nhật Bản.",
    "description_en": "Authentic handcrafted Hộp cookies lưỡi mèo trà xanh prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "HopCookiesNho",
    "name_vi": "Hộp cookies nho",
    "name_en": "Raisin Cookies Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-nho.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa, nho khô.&nbsp;",
    "description_en": "Authentic handcrafted Hộp cookies nho prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "HopCookiesLuoiMeoHanhNhan",
    "name_vi": "Hộp cookies lưỡi mèo hạnh nhân",
    "name_en": "Almond Langue de Chat Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 65000,
    "img": "public/images/products/banh-quy/hop-cookies-luoi-meo-hanh-nhan.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa, hạnh nhân sấy khô.",
    "description_en": "Authentic handcrafted Hộp cookies lưỡi mèo hạnh nhân prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 65000
      }
    ]
  },
  {
    "id": "HopCookiesLuoiMeo",
    "name_vi": "Hộp cookies lưỡi mèo",
    "name_en": "Langue de Chat Cookies Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-luoi-meo.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa.",
    "description_en": "Authentic handcrafted Hộp cookies lưỡi mèo prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "HopCookiesBo",
    "name_vi": "Hộp cookies bơ",
    "name_en": "Butter Cookies Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-bo.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa.",
    "description_en": "Authentic handcrafted Hộp cookies bơ prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "HopCookiesSocolaChips",
    "name_vi": "Hộp cookies socola chips",
    "name_en": "Chocochip Cookies Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-socola-chips.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa và kẹo socola chips.",
    "description_en": "Authentic handcrafted Hộp cookies socola chips prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "HopCookiesCaCao",
    "name_vi": "Hộp cookies ca cao",
    "name_en": "Cocoa Cookies Box",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 60000,
    "img": "public/images/products/banh-quy/hop-cookies-ca-cao.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa và bột cacao.&nbsp;",
    "description_en": "Authentic handcrafted Hộp cookies ca cao prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-hop",
    "subcategory_name": "Hộp Cookies Thủ Công",
    "subcategory_name_en": "Artisan Cookies Box",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 60000
      }
    ]
  },
  {
    "id": "SuKemPhomaiTraiCay",
    "name_vi": "Su Kem phomai trái cây",
    "name_en": "Fruit Cheese Choux Puff",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/su-kem-phomai-trai-cay.webp",
    "featured": false,
    "description_vi": "Món bánh Su Kem phomai trái cây thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted Su Kem phomai trái cây prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "MousseChanhLeoXmas",
    "name_vi": "Mousse chanh leo Xmas",
    "name_en": "Passion Fruit Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-chanh-leo-xmas.webp",
    "featured": false,
    "description_vi": "Món bánh Mousse chanh leo Xmas thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted Mousse chanh leo Xmas prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "Xmas2Tang",
    "name_vi": "Xmas 2 tầng",
    "name_en": "Xmas 2 Tầng",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/xmas-2-tang.webp",
    "featured": false,
    "description_vi": "Sản phẩm đặt theo yêu cầu.&nbsp;",
    "description_en": "Authentic handcrafted Xmas 2 tầng prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ThapSuKem",
    "name_vi": "Tháp su kem xmas",
    "name_en": "Choux Pastry Tower",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/thap-su-kem.webp",
    "featured": false,
    "description_vi": "Sản phẩm đặt theo yêu cầu.",
    "description_en": "Authentic handcrafted Tháp su kem xmas prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "CupcakeXmas",
    "name_vi": "Cupcake Xmas",
    "name_en": "Christmas Cupcake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/cupcake-xmas.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Cupcake Xmas hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Cupcake Xmas prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "SantaClaus1",
    "name_vi": "Santa Claus",
    "name_en": "Santa Claus Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/santa-claus-1.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Santa Claus hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Santa Claus prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GocCaySocolaNau",
    "name_vi": "Gốc cây socola nâu",
    "name_en": "Chocolate Yule Log Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/goc-cay-socola-nau.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Gốc cây socola nâu hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Gốc cây socola nâu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KhucCuiSocolaMini",
    "name_vi": "Khúc củi socola mini",
    "name_en": "Mini Yule Log Pastry",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/khuc-cui-socola-mini.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Khúc củi socola mini hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Khúc củi socola mini prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KhucCuiPhuKemTuoi",
    "name_vi": "Khúc củi phủ kem tươi",
    "name_en": "Mini Yule Log Pastry",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/khuc-cui-phu-kem-tuoi.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Khúc củi phủ kem tươi hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Khúc củi phủ kem tươi prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KhucCuiNauXmas",
    "name_vi": "Khúc củi phủ socola nâu",
    "name_en": "Mini Yule Log Pastry",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/khuc-cui-nau-xmas.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Khúc củi phủ socola nâu hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Khúc củi phủ socola nâu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "KhucCuiXmas",
    "name_vi": "Khúc củi phủ socola đen",
    "name_en": "Mini Yule Log Pastry",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/khuc-cui-xmas.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật Khúc củi phủ socola đen hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted Khúc củi phủ socola đen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoChocolateMini",
    "name_vi": "GATO CHOCOLATE MINI",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-chocolate-mini.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE MINI hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE MINI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ChocolateChanMayMini",
    "name_vi": "GATO CHOCOLATE CHAN MÂY MINI",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/chocolate-chan-may-mini.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE CHAN MÂY MINI hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE CHAN MÂY MINI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoChocolate3",
    "name_vi": "GATO CHOCOLATE",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-chocolate-3.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Tiramisu1",
    "name_vi": "TIRAMISU",
    "name_en": "Classic Tiramisu",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/tiramisu-1.webp",
    "featured": false,
    "description_vi": "Món bánh TIRAMISU thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted TIRAMISU prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tiramisu",
    "subcategory_name": "Dòng Tiramisu & Cà Phê",
    "subcategory_name_en": "Tiramisu & Coffee Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "GatoKemTuoiPhuRedVelvet2",
    "name_vi": "GATO KEM TƯƠI PHỦ RED VELVET",
    "name_en": "Red Velvet Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-phu-red-velvet-2.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI PHỦ RED VELVET hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI PHỦ RED VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoKemTuoiPhuRedVelvet1",
    "name_vi": "GATO KEM TƯƠI PHỦ RED VELVET",
    "name_en": "Red Velvet Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-phu-red-velvet-1.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI PHỦ RED VELVET hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI PHỦ RED VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "MousseSuaChuaChanhLeo",
    "name_vi": "MOUSSE SỮA CHUA CHANH LEO",
    "name_en": "Mousse Sữa Chua Chanh Leo",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-sua-chua-chanh-leo.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE SỮA CHUA CHANH LEO thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE SỮA CHUA CHANH LEO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "GatoChocolate2",
    "name_vi": "GATO CHOCOLATE",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-chocolate-2.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoChocolate1",
    "name_vi": "GATO CHOCOLATE",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-chocolate-1.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoChocolate",
    "name_vi": "GATO CHOCOLATE",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-chocolate.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "RedVelvet2",
    "name_vi": "RED VELVET",
    "name_en": "Red Velvet Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/red-velvet-2.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật RED VELVET hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted RED VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoKemTuoiPhuRedVelvet",
    "name_vi": "GATO KEM TƯƠI PHỦ RED VELVET",
    "name_en": "Red Velvet Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-phu-red-velvet.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI PHỦ RED VELVET hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI PHỦ RED VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Opera1",
    "name_vi": "OPERA",
    "name_en": "Opera Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/opera-1.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật OPERA hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted OPERA prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "MousseChanhLeo2",
    "name_vi": "MOUSSE CHANH LEO",
    "name_en": "Passion Fruit Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-chanh-leo-2.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE CHANH LEO thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE CHANH LEO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseTraXanh",
    "name_vi": "MOUSSE TRÀ XANH",
    "name_en": "Matcha Green Tea Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-tra-xanh.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE TRÀ XANH thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE TRÀ XANH prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseChanhLeo1",
    "name_vi": "MOUSSE CHANH LEO",
    "name_en": "Passion Fruit Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-chanh-leo-1.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE CHANH LEO thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE CHANH LEO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseDao",
    "name_vi": "MOUSSE ĐÀO",
    "name_en": "Peach Cream Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-dao.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE ĐÀO thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE ĐÀO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseChocoDua",
    "name_vi": "MOUSSE CHOCO DỪA",
    "name_en": "Chocolate Coconut Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-choco-dua.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE CHOCO DỪA thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE CHOCO DỪA prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseDauDua",
    "name_vi": "MOUSSE sữa chua phúc bồn tử",
    "name_en": "Mousse Sữa Chua Phúc Bồn Tử",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-dau-dua.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE sữa chua phúc bồn tử thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE sữa chua phúc bồn tử prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseVietQuat1",
    "name_vi": "MOUSSE VIỆT QUẤT",
    "name_en": "Blueberry Cream Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-viet-quat-1.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE VIỆT QUẤT thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE VIỆT QUẤT prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "MousseDau",
    "name_vi": "MOUSSE DÂU",
    "name_en": "Strawberry Cream Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-dau.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE DÂU thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE DÂU prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "GatoKemTuoiMini1",
    "name_vi": "GATO KEM TƯƠI MINI",
    "name_en": "Fresh Cream Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-mini-1.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI MINI hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI MINI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "MousseVietQuat",
    "name_vi": "MOUSSE VIỆT QUẤT",
    "name_en": "Blueberry Cream Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/mousse-viet-quat.webp",
    "featured": false,
    "description_vi": "Món bánh MOUSSE VIỆT QUẤT thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted MOUSSE VIỆT QUẤT prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "GatoKemTuoiPhuChocoVelvet",
    "name_vi": "GATO KEM TƯƠI PHỦ CHOCO VELVET",
    "name_en": "Choco Velvet Cream Cake",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-phu-choco-velvet.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI PHỦ CHOCO VELVET hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI PHỦ CHOCO VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoKemTuoiMutTraiCay",
    "name_vi": "GATO KEM TƯƠI MỨT TRÁI CÂY",
    "name_en": "Fresh Cream Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-mut-trai-cay.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI MỨT TRÁI CÂY hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI MỨT TRÁI CÂY prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoKemTuoiMini",
    "name_vi": "GATO KEM TƯƠI MINI",
    "name_en": "Fresh Cream Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-mini.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI MINI hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI MINI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoMiniKemTuoi",
    "name_vi": "GATO KEM TƯƠI MINI",
    "name_en": "Fresh Cream Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-mini-kem-tuoi.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI MINI hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI MINI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoKemTuoiVuong",
    "name_vi": "GATO KEM TƯƠI VUÔNG",
    "name_en": "Fresh Cream Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi-vuong.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI VUÔNG hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI VUÔNG prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoKemTuoi",
    "name_vi": "GATO KEM TƯƠI",
    "name_en": "Fresh Cream Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-kem-tuoi.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO KEM TƯƠI hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO KEM TƯƠI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ChocolateVelvet",
    "name_vi": "CHOCOLATE VELVET",
    "name_en": "Chocolate Velvet",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/chocolate-velvet.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật CHOCOLATE VELVET hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted CHOCOLATE VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoSocola",
    "name_vi": "GATO CHOCOLATE",
    "name_en": "Chocolate Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-socola.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CHOCOLATE hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CHOCOLATE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoCappuccino1",
    "name_vi": "GATO CAPPUCCINO",
    "name_en": "Cappuccino Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-cappuccino-1.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CAPPUCCINO hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CAPPUCCINO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoCappuccino",
    "name_vi": "GATO CAPPUCCINO",
    "name_en": "Cappuccino Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-cappuccino.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CAPPUCCINO hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CAPPUCCINO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "GatoCaramen",
    "name_vi": "GATO CARAMEN",
    "name_en": "Caramel Flan Gateau",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/gato-caramen.webp",
    "featured": false,
    "description_vi": "Món bánh GATO CARAMEN thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted GATO CARAMEN prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "GatoCafe",
    "name_vi": "GATO CAFE",
    "name_en": "Cafe Mocha Gateau",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/gato-cafe.webp",
    "featured": false,
    "description_vi": "Bánh sinh nhật GATO CAFE hảo hạng, làm từ cốt bông lan Nhật Bản mềm xốp kết hợp cùng lớp kem tươi cao cấp thanh nhẹ, trang trí tinh tế.",
    "description_en": "Authentic handcrafted GATO CAFE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ChiffonSocola1",
    "name_vi": "CHiffon socola",
    "name_en": "Japanese Chiffon Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/chiffon-socola-1.webp",
    "featured": false,
    "description_vi": "Món bánh CHiffon socola thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted CHiffon socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "ChiffonChanMay",
    "name_vi": "CHIFFON CHAN MÂY",
    "name_en": "Japanese Chiffon Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 45000,
    "img": "public/images/products/banh-kem-tuoi/chiffon-chan-may.webp",
    "featured": false,
    "description_vi": "Món bánh CHIFFON CHAN MÂY thanh mát đặc trưng của tiệm Poeme, hòa quyện hương vị trái cây tự nhiên và kem tươi mịn màng, bảo quản mát 2-6°C.",
    "description_en": "Authentic handcrafted CHIFFON CHAN MÂY prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "SandwichDen",
    "name_vi": "Sandwich đen",
    "name_en": "Japanese Sandwich Loaf",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/sandwich-den.webp",
    "featured": false,
    "description_vi": "Sandwich đen được làm từ bột lúa mạch&nbsp; đen &nbsp;giàu chất xơ, hỗ trợ tiêu hóa và mang lại cảm giác no lâu.",
    "description_en": "Authentic handcrafted Sandwich đen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-goi-sandwich",
    "subcategory_name": "Bánh Mì Gối & Sandwich",
    "subcategory_name_en": "Toast Loaves & Sandwiches",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "MoussePhucBonTu1",
    "name_vi": "Mousse phúc bồn tử",
    "name_en": "Mousse Phúc Bồn Tử",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-phuc-bon-tu-1.webp",
    "featured": false,
    "description_vi": "Bạt bánh bông lan kết hợp cùng mousse và thạch rau câu vị phúc bồn tử.&nbsp;",
    "description_en": "Authentic handcrafted Mousse phúc bồn tử prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "MousseBluberryVuong",
    "name_vi": "Mousse bluberry vuông",
    "name_en": "Mousse Bluberry Vuông",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-bluberry-vuong.webp",
    "featured": false,
    "description_vi": "Bạt bánh bông lan kết hợp cùng mousse và thạch rau câu vị việt quất.&nbsp;",
    "description_en": "Authentic handcrafted Mousse bluberry vuông prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "CatKemMan",
    "name_vi": "Cắt kem mặn",
    "name_en": "Cắt Kem Mặn",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/cat-kem-man.webp",
    "featured": false,
    "description_vi": "Một công thức cải tiến mới từ bếp trưởng của Poeme, vẫn kem tươi nhưng được bổ sung thêm vị mặn thanh nhẹ, đảm bảo sẽ đem đến những trải nghiệm bất ngờ và vô cùng độc đáo cho các thực khách.&nbsp;",
    "description_en": "Authentic handcrafted Cắt kem mặn prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "MousseCaramen",
    "name_vi": "Mousse caramen",
    "name_en": "Caramel Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-caramen.webp",
    "featured": false,
    "description_vi": "Bánh là sự kết hợp của gato bông lan vani, mousse caramen thơm ngon và thạch cafe.&nbsp;",
    "description_en": "Authentic handcrafted Mousse caramen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "BrownieSocola",
    "name_vi": "Brownie socola",
    "name_en": "Brownie Socola",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/brownie-socola.webp",
    "featured": false,
    "description_vi": "Brownie có mềm ẩm, khi ăn có vị đắng của Socola, vị ngọt của đường và mùi thơm nhẹ của bột bánh",
    "description_en": "Authentic handcrafted Brownie socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "BatDauTuoi",
    "name_vi": "Bát Dâu Tươi",
    "name_en": "Fresh Strawberry Tart Bowl",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/bat-dau-tuoi.webp",
    "featured": false,
    "description_vi": "Bát dâu có lớp đế là bánh tart, phủ chocolate, kem tươi và trên cùng là những trái dâu tươi chín đỏ mọng.&nbsp;",
    "description_en": "Authentic handcrafted Bát Dâu Tươi prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tart-ngan-lop",
    "subcategory_name": "Dòng Tart & Ngàn Lớp",
    "subcategory_name_en": "Tarts & Mille-Feuille",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "JamDao",
    "name_vi": "JAM ĐÀO",
    "name_en": "Jam Đào",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/jam-dao.webp",
    "featured": false,
    "description_vi": "Cấu tạo của bánh gồm các lớp bông lan vani kẹp xen kẽ các lớp mứt đào. Phủ bên trên là lớp mứt đào.",
    "description_en": "Authentic handcrafted JAM ĐÀO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "JamDua",
    "name_vi": "JAM DỨA",
    "name_en": "Jam Dứa",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/jam-dua.webp",
    "featured": false,
    "description_vi": "Cấu tạo của bánh gồm các lớp bông lan vani kẹp xen kẽ các lớp mứt dứa. Phủ bên trên là lớp mứt dứa.",
    "description_en": "Authentic handcrafted JAM DỨA prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "JamDau",
    "name_vi": "JAM DÂU",
    "name_en": "Jam Dâu",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/jam-dau.webp",
    "featured": false,
    "description_vi": "Cấu tạo của bánh gồm các lớp bông lan vani kẹp xen kẽ các lớp mứt dâu. Phủ bên trên là lớp mứt dâu.",
    "description_en": "Authentic handcrafted JAM DÂU prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "CuonBongLanMix",
    "name_vi": "CUỘN BÔNG LAN MIX",
    "name_en": "Mixed Cream Swiss Roll",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/cuon-bong-lan-mix.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm 3 miếng bánh cuộn và 3 hương vị: Cuộn bông lan cafe, cuộn bông lan trà xanh và cuộn bông lan caramen&nbsp;",
    "description_en": "Authentic handcrafted CUỘN BÔNG LAN MIX prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "SuaChuaBlueberry",
    "name_vi": "SỮA CHUA BLUEBERRY",
    "name_en": "Sữa Chua Blueberry",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/sua-chua-blueberry.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh là việt quất được xay nhuyễn với sữa chua, dưới cùng là lớp bông lan vani.",
    "description_en": "Authentic handcrafted SỮA CHUA BLUEBERRY prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "ChocoVelvet",
    "name_vi": "CHOCO VELVET",
    "name_en": "Choco Velvet Cream Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/choco-velvet.webp",
    "featured": false,
    "description_vi": "Thành phần: Chocolate velvet, kem cheese.",
    "description_en": "Authentic handcrafted CHOCO VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "DaduBlueberry",
    "name_vi": "DADU BLUEBERRY",
    "name_en": "Dadu Blueberry",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/dadu-blueberry.webp",
    "featured": false,
    "description_vi": "Thành phần: Bánh bông lan vani, kem việt quất",
    "description_en": "Authentic handcrafted DADU BLUEBERRY prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "DaduRedVelvet",
    "name_vi": "DADU RED VELVET",
    "name_en": "Red Velvet Gateau",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/dadu-red-velvet.webp",
    "featured": false,
    "description_vi": "Thành phần: Bánh bông lan red velvet, kem tươi, bột red velvet",
    "description_en": "Authentic handcrafted DADU RED VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "BanhMiBoPhap",
    "name_vi": "BÁNH MÌ BƠ PHÁP",
    "name_en": "French Butter Bread",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 18000,
    "img": "public/images/products/banh-mi/banh-mi-bo-phap.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột mì, bơ.",
    "description_en": "Authentic handcrafted BÁNH MÌ BƠ PHÁP prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "SyuCheese",
    "name_vi": "SYU CHEESE",
    "name_en": "Crispy Cheese Choux",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 45000,
    "img": "public/images/products/banh-mi/syu-cheese.webp",
    "featured": false,
    "description_vi": "Kem phomai công thức riêng béo ngậy được bơm bên trong lớp vỏ mềm mềm dai dai&nbsp;",
    "description_en": "Authentic handcrafted SYU CHEESE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 45000
      }
    ]
  },
  {
    "id": "Kabocha",
    "name_vi": "KABOCHA",
    "name_en": "Japanese Kabocha Pumpkin Bun",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 10000,
    "img": "public/images/products/banh-mi/kabocha.webp",
    "featured": false,
    "description_vi": "Thành phần gồm bột mì, bơ, đường.",
    "description_en": "Authentic handcrafted KABOCHA prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 10000
      }
    ]
  },
  {
    "id": "TrungChim",
    "name_vi": "TRỨNG CHIM",
    "name_en": "Trứng Chim",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/trung-chim.webp",
    "featured": false,
    "description_vi": "Thành phần gồm bột mì, bơ, đường.",
    "description_en": "Authentic handcrafted TRỨNG CHIM prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "VungNhat",
    "name_vi": "VỪNG NHẬT",
    "name_en": "Vừng Nhật",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/vung-nhat.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột mì, đường, sữa bột, trứng, muối và vừng",
    "description_en": "Authentic handcrafted VỪNG NHẬT prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "StickPie",
    "name_vi": "STICK PIE",
    "name_en": "Japanese Stick Pie",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 30000,
    "img": "public/images/products/banh-quy/stick-pie.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột mì, bơ, đường, muối",
    "description_en": "Authentic handcrafted STICK PIE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "CookiesHanhNhan",
    "name_vi": "Túi COOKIES HẠNH NHÂN",
    "name_en": "Túi Cookies Hạnh Nhân",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 55000,
    "img": "public/images/products/banh-quy/cookies-hanh-nhan.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa và hạnh nhân",
    "description_en": "Authentic handcrafted Túi COOKIES HẠNH NHÂN prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 55000
      }
    ]
  },
  {
    "id": "LuoiMeoSocola",
    "name_vi": "LƯỠI MÈO SOCOLA",
    "name_en": "Chocolate Langue de Chat Pouch",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 50000,
    "img": "public/images/products/banh-quy/luoi-meo-socola.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa và socola",
    "description_en": "Authentic handcrafted LƯỠI MÈO SOCOLA prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "CookiesBo",
    "name_vi": "Túi COOKIES BƠ",
    "name_en": "Túi Cookies Bơ",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 50000,
    "img": "public/images/products/banh-quy/cookies-bo.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa",
    "description_en": "Authentic handcrafted Túi COOKIES BƠ prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "BanhMemSocola",
    "name_vi": "BÁNH MỀM SOCOLA",
    "name_en": "Japanese Soft Bread",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 55000,
    "img": "public/images/products/banh-kem-tuoi/banh-mem-socola.webp",
    "featured": false,
    "description_vi": "Castella là loại bánh gato đặc biệt. Lớp gato mềm, mịn dai và không quá ngọt, vị socola",
    "description_en": "Authentic handcrafted BÁNH MỀM SOCOLA prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 55000
      }
    ]
  },
  {
    "id": "BanhMemTraXanh",
    "name_vi": "BÁNH MỀM TRÀ XANH",
    "name_en": "Japanese Soft Bread",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 55000,
    "img": "public/images/products/banh-kem-tuoi/banh-mem-tra-xanh.webp",
    "featured": false,
    "description_vi": "Castella là loại bánh gato đặc biệt. Lớp gato mềm, mịn dai và không quá ngọt, vị trà xanh",
    "description_en": "Authentic handcrafted BÁNH MỀM TRÀ XANH prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 55000
      }
    ]
  },
  {
    "id": "DonutSocolaTrang",
    "name_vi": "DONUT SOCOLA TRẮNG",
    "name_en": "Chocolate Coated Donut",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 20000,
    "img": "public/images/products/banh-mi/donut-socola-trang.webp",
    "featured": false,
    "description_vi": "Bột mì được tạo thành hình tròn và rán lên, trang trí bằng kem chocolate.",
    "description_en": "Authentic handcrafted DONUT SOCOLA TRẮNG prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-sung-bo-danish",
    "subcategory_name": "Bánh Sừng Bò & Donut",
    "subcategory_name_en": "Croissants & Donuts",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "DonutSocolaDen",
    "name_vi": "DONUT SOCOLA ĐEN",
    "name_en": "Chocolate Coated Donut",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 20000,
    "img": "public/images/products/banh-mi/donut-socola-den.webp",
    "featured": false,
    "description_vi": "Bột mì được tạo thành hình tròn và rán lên, trang trí bằng kem chocolate.",
    "description_en": "Authentic handcrafted DONUT SOCOLA ĐEN prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-sung-bo-danish",
    "subcategory_name": "Bánh Sừng Bò & Donut",
    "subcategory_name_en": "Croissants & Donuts",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "MousseOiDao",
    "name_vi": "MOUSSE ỔI ĐÀO",
    "name_en": "Guava Peach Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-oi-dao.webp",
    "featured": false,
    "description_vi": "Thành phần: kem tươi, ổi đào, bánh bông lan.",
    "description_en": "Authentic handcrafted MOUSSE ỔI ĐÀO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "DonutDoi",
    "name_vi": "DONUT ĐÔI",
    "name_en": "Chocolate Coated Donut",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/donut-doi.webp",
    "featured": false,
    "description_vi": "Thành phần: bột mỳ, chocolate.",
    "description_en": "Authentic handcrafted DONUT ĐÔI prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-sung-bo-danish",
    "subcategory_name": "Bánh Sừng Bò & Donut",
    "subcategory_name_en": "Croissants & Donuts",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "RedVelvet",
    "name_vi": "RED VELVET",
    "name_en": "Red Velvet Gateau",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/red-velvet.webp",
    "featured": false,
    "description_vi": "Thành phần: bánh Red Velvet, kem cheese.",
    "description_en": "Authentic handcrafted RED VELVET prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "DaduChocolate",
    "name_vi": "DADU CHOCOLATE",
    "name_en": "Dadu Chocolate",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/dadu-chocolate.webp",
    "featured": false,
    "description_vi": "Thành phần: bánh bông lan, kem tươi chocolate.",
    "description_en": "Authentic handcrafted DADU CHOCOLATE prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "DaduTraXanh",
    "name_vi": "DADU TRÀ XANH",
    "name_en": "Dadu Trà Xanh",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/dadu-tra-xanh.webp",
    "featured": false,
    "description_vi": "Thành phần: Bánh bông lan trà xanh, kem tươi, bột trà xanh",
    "description_en": "Authentic handcrafted DADU TRÀ XANH prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "SuaChuaChanhLeo",
    "name_vi": "SỮA CHUA CHANH LEO",
    "name_en": "Sữa Chua Chanh Leo",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/sua-chua-chanh-leo.webp",
    "featured": false,
    "description_vi": "Thành phần: chanh leo tươi, kem tươi, sữa chua, bánh bông lan.",
    "description_en": "Authentic handcrafted SỮA CHUA CHANH LEO prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "Mellow",
    "name_vi": "MELLOW",
    "name_en": "Mellow",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mellow.webp",
    "featured": false,
    "description_vi": "Thành phần: bánh bông lan, kem bơ, bột cacao.",
    "description_en": "Authentic handcrafted MELLOW prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "MoussePhucBonTu",
    "name_vi": "MOUSSE PHÚC BỒN TỬ",
    "name_en": "Mousse Phúc Bồn Tử",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-phuc-bon-tu.webp",
    "featured": false,
    "description_vi": "Thành phần: kem tươi, phúc bồn tử.",
    "description_en": "Authentic handcrafted MOUSSE PHÚC BỒN TỬ prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "MousseDuaHau",
    "name_vi": "MOUSSE DƯA HẤU",
    "name_en": "Watermelon Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-dua-hau.webp",
    "featured": false,
    "description_vi": "Bánh là sự kết hợp của lớp bông lan mềm và kem mousse được làm từ miếng dưa hấu tươi.",
    "description_en": "Authentic handcrafted MOUSSE DƯA HẤU prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "Castle",
    "name_vi": "Castle",
    "name_en": "Castle",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/castle.webp",
    "featured": false,
    "description_vi": "Bánh bao gồm 3 lớp bông lan vani xen kẽ 2 lớp kem vani ngọt dịu, bên trên xếp 1 lớp quả dâu tây tươi mọng. Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Castle prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "TShirt",
    "name_vi": "T-shirt",
    "name_en": "T-Shirt",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/t-shirt.webp",
    "featured": false,
    "description_vi": "Chiếc áo cầu thủ được cấu tạo bởi 3 lớp bánh và 2 lớp kem. Bánh có thể đổi cốt và kem tươi tùy theo ý thích.",
    "description_en": "Authentic handcrafted T-shirt prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Spiderman",
    "name_vi": "Spiderman",
    "name_en": "Spiderman",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/spiderman.webp",
    "featured": false,
    "description_vi": "Bánh được tạo bởi các lớp bông lan và kem tươi xen kẽ nhau. Bánh có thể thay cốt và kem tùy theo ý&nbsp; thích.",
    "description_en": "Authentic handcrafted Spiderman prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "SocccerBall",
    "name_vi": "Socccer Ball",
    "name_en": "Socccer Ball",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/socccer-ball.webp",
    "featured": false,
    "description_vi": "Bánh 3D quả bóng được tạo nên bởi 3 lớp bánh và 2 lớp kem vani. Bạn có thể thay đổi cốt gato và vị kem theo sở thích.",
    "description_en": "Authentic handcrafted Socccer Ball prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Piggy",
    "name_vi": "Piggy",
    "name_en": "Piggy",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/piggy.webp",
    "featured": false,
    "description_vi": "Bánh lợn hồng xinh yêu được tạo bởi các lớp bông lan và kem tươi vani. Bạn có thể thay đổi cốt bánh và vị kem tùy thích.&nbsp;",
    "description_en": "Authentic handcrafted Piggy prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Map",
    "name_vi": "Map",
    "name_en": "Map",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/map.webp",
    "featured": false,
    "description_vi": "Chiếc bánh bản đồ này được cấu tạo bởi 3 lớp bánh bông lan và 2 lớp kem tươi vani. Bạn có thể thay cốt bánh và kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Map prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "ICream",
    "name_vi": "I-cream",
    "name_en": "I-Cream",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/i-cream.webp",
    "featured": false,
    "description_vi": "Bánh chú gà con xinh yêu dành cho các bé. Bạn có thể chọn cốt bông lan và kem tươi tùy thích.",
    "description_en": "Authentic handcrafted I-cream prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Car",
    "name_vi": "Car",
    "name_en": "Car",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/car.webp",
    "featured": false,
    "description_vi": "Chiếc Macqueen dành cho các bé trai được cấu tạo bởi lớp bông lan mềm mịn xen kẽ là lớp kem vani. Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Car prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Bunny",
    "name_vi": "Bunny",
    "name_en": "Bunny",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/bunny.webp",
    "featured": false,
    "description_vi": "Bé thỏ xinh yêu được cấu tạo bởi 3 lớp bông lan vani cùng với 2 lớp kem vani thơm mát. Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Bunny prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "Anpanman",
    "name_vi": "Anpanman",
    "name_en": "Anpanman",
    "category": "banh-gato",
    "category_name": "Bánh Gato",
    "category_name_en": "Gateaux & Birthday Cakes",
    "price": 350000,
    "img": "public/images/products/banh-gato/anpanman.webp",
    "featured": false,
    "description_vi": "Bánh Gato dành cho các bé yêu thích nhân vật hoạt hình Anpanman. Bánh được kết hợp bởi 3 lớp bánh gato chocolate cùng với 2 lớp kem tươi chocolate. Bánh có thể đổi cốt gato và vị kem tươi tùy thích.",
    "description_en": "Authentic handcrafted Anpanman prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-gato-nguyen-chiec",
    "subcategory_name": "Bánh Gato Sinh Nhật & Sự Kiện",
    "subcategory_name_en": "Birthday & Event Gateaux",
    "variants": [
      {
        "size": "16cm",
        "name": "Size 16cm (4-6 người)",
        "price": 350000
      },
      {
        "size": "18cm",
        "name": "Size 18cm (6-8 người)",
        "price": 437500
      },
      {
        "size": "20cm",
        "name": "Size 20cm (8-10 người)",
        "price": 542500
      }
    ]
  },
  {
    "id": "LuoiMeoTraXanh",
    "name_vi": "Lưỡi mèo trà xanh",
    "name_en": "Matcha Langue de Chat Pouch",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 50000,
    "img": "public/images/products/banh-quy/luoi-meo-tra-xanh.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm đường, sữa và bột trà xanh.",
    "description_en": "Authentic handcrafted Lưỡi mèo trà xanh prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "LuoiMeo",
    "name_vi": "Lưỡi mèo",
    "name_en": "Vanilla Langue de Chat Pouch",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 50000,
    "img": "public/images/products/banh-quy/luoi-meo.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm đường, sữa và bột.&nbsp;",
    "description_en": "Authentic handcrafted Lưỡi mèo prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "Pamia",
    "name_vi": "Túi Cookies Pamia",
    "name_en": "Pamia Palmier Cookies Pouch",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 50000,
    "img": "public/images/products/banh-quy/pamia.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm đường, sữa và bột.",
    "description_en": "Authentic handcrafted Túi Cookies Pamia prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "CookiesBoChip",
    "name_vi": "Túi Cookies sô chip",
    "name_en": "Túi Cookies Sô Chip",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 50000,
    "img": "public/images/products/banh-quy/cookies-bo-chip.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột, đường, bơ, sữa và socola chip.",
    "description_en": "Authentic handcrafted Túi Cookies sô chip prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "Biscot",
    "name_vi": "Biscot",
    "name_en": "Crispy Almond Biscotti",
    "category": "banh-quy",
    "category_name": "Bánh Quy",
    "category_name_en": "Cookies & Biscuits",
    "price": 22000,
    "img": "public/images/products/banh-quy/biscot.webp",
    "featured": false,
    "description_vi": "Những lát bánh mì được phết bơ và đường được nướng giòn rụm.",
    "description_en": "Authentic handcrafted Biscot prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "cookies-tui",
    "subcategory_name": "Túi Cookies & Bánh Que",
    "subcategory_name_en": "Cookies Pouches & Stick Pies",
    "variants": [
      {
        "size": "standard",
        "name": "Hộp tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "SanwichNguCoc",
    "name_vi": "Sandwich Ngũ cốc",
    "name_en": "Japanese Sandwich Loaf",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 28000,
    "img": "public/images/products/banh-mi/sanwich-ngu-coc.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm bột mì, bơ, ngũ cốc.",
    "description_en": "Authentic handcrafted Sandwich Ngũ cốc prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-goi-sandwich",
    "subcategory_name": "Bánh Mì Gối & Sandwich",
    "subcategory_name_en": "Toast Loaves & Sandwiches",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 28000
      }
    ]
  },
  {
    "id": "BanhMyDen",
    "name_vi": "Bánh mỳ đen",
    "name_en": "Dark Rye Bread",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 15000,
    "img": "public/images/products/banh-mi/banh-my-den.webp",
    "featured": false,
    "description_vi": "Thành phần gồm bột mì đen.",
    "description_en": "Authentic handcrafted Bánh mỳ đen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 15000
      }
    ]
  },
  {
    "id": "BanhMyPhomaiChay",
    "name_vi": "Bánh mỳ phomai chảy",
    "name_en": "Lava Cheese Bread",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 32000,
    "img": "public/images/products/banh-mi/banh-my-phomai-chay.webp",
    "featured": false,
    "description_vi": "Kem phomai béo ngậy được bơm bên trong chiếc bánh mỳ tròn xinh.",
    "description_en": "Authentic handcrafted Bánh mỳ phomai chảy prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 32000
      }
    ]
  },
  {
    "id": "PizzaMini",
    "name_vi": "Pizza Mini",
    "name_en": "Mini Japanese Pizza",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 18000,
    "img": "public/images/products/banh-mi/pizza-mini.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm bột mì, ngô ngọt, ớt ngọt và xúc xích.",
    "description_en": "Authentic handcrafted Pizza Mini prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "BanhMiHoaCuc",
    "name_vi": "Bánh mì hoa cúc",
    "name_en": "French Brioche Loaf",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 55000,
    "img": "public/images/products/banh-mi/banh-mi-hoa-cuc.webp",
    "featured": false,
    "description_vi": "Bột hoa cúc được nhào nhuyễn rắc trên cùng là hạt hạnh nhân.",
    "description_en": "Authentic handcrafted Bánh mì hoa cúc prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 55000
      }
    ]
  },
  {
    "id": "KhoaiTronTo",
    "name_vi": "Bánh mỳ khoai tròn",
    "name_en": "Bánh Mỳ Khoai Tròn",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/khoai-tron-to.webp",
    "featured": false,
    "description_vi": "Thành phần gồm bột khoai, bơ, đường.&nbsp;",
    "description_en": "Authentic handcrafted Bánh mỳ khoai tròn prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "SanwichNho1",
    "name_vi": "Sandwich Nho",
    "name_en": "Japanese Sandwich Loaf",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/sanwich-nho-1.webp",
    "featured": false,
    "description_vi": "Những lát bánh mì sandwich được kết hợp thêm nho khô.",
    "description_en": "Authentic handcrafted Sandwich Nho prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-goi-sandwich",
    "subcategory_name": "Bánh Mì Gối & Sandwich",
    "subcategory_name_en": "Toast Loaves & Sandwiches",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "SanwichLat",
    "name_vi": "Sandwich lát",
    "name_en": "Japanese Sandwich Loaf",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 18000,
    "img": "public/images/products/banh-mi/sanwich-lat.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm đường, sữa và bột.",
    "description_en": "Authentic handcrafted Sandwich lát prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-goi-sandwich",
    "subcategory_name": "Bánh Mì Gối & Sandwich",
    "subcategory_name_en": "Toast Loaves & Sandwiches",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "Paparoti",
    "name_vi": "Paparoti",
    "name_en": "Paparoti Mexican Coffee Bun",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/paparoti.webp",
    "featured": false,
    "description_vi": "Thành phần bánh gồm lớp bột mì nướng cùng mặt bánh giòn rụm, nhận bên trong có phomai.",
    "description_en": "Authentic handcrafted Paparoti prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "BanhMyKem",
    "name_vi": "Bánh Mỳ Kem",
    "name_en": "Fresh Milk Cream Bun",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 18000,
    "img": "public/images/products/banh-mi/banh-my-kem.webp",
    "featured": false,
    "description_vi": "Thành phần bánh gồm bột mì nướng và lớp kem bơ bên trong.",
    "description_en": "Authentic handcrafted Bánh Mỳ Kem prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "SungBoNho",
    "name_vi": "Sừng Bò Nho",
    "name_en": "Butter Croissant",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/sung-bo-nho.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm đường, sữa và bột, nho khô.",
    "description_en": "Authentic handcrafted Sừng Bò Nho prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-sung-bo-danish",
    "subcategory_name": "Bánh Sừng Bò & Donut",
    "subcategory_name_en": "Croissants & Donuts",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "SungBoTo",
    "name_vi": "Sừng Bò To",
    "name_en": "Butter Croissant",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/sung-bo-to.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm đường, sữa và bột.",
    "description_en": "Authentic handcrafted Sừng Bò To prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-sung-bo-danish",
    "subcategory_name": "Bánh Sừng Bò & Donut",
    "subcategory_name_en": "Croissants & Donuts",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "ChaPhomai",
    "name_vi": "Bánh Mỳ Chả Phomai",
    "name_en": "Ham & Cheese Savory Bread",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/cha-phomai.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm bột mì được nướng cùng xúc xích thêm một chút sốt phomai và tương ớt.",
    "description_en": "Authentic handcrafted Bánh Mỳ Chả Phomai prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "ChaRuoc",
    "name_vi": "Bánh Mỳ Chả Ruốc",
    "name_en": "Savory Pork Floss Bun",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/cha-ruoc.webp",
    "featured": false,
    "description_vi": "Thành phần bánh gồm bột mì được nướng cùng xúc xích và carot thái nhỏ.",
    "description_en": "Authentic handcrafted Bánh Mỳ Chả Ruốc prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "ChaBong",
    "name_vi": "Bánh mỳ chà Bông",
    "name_en": "Pork Floss Soft Bread",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 25000,
    "img": "public/images/products/banh-mi/cha-bong.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm lớp bánh mì mềm phết sốt trứng và ruốc.",
    "description_en": "Authentic handcrafted Bánh mỳ chà Bông prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-man-ngot",
    "subcategory_name": "Bánh Mì Mặn & Bánh Mì Bơ Ngọt",
    "subcategory_name_en": "Savory & Sweet Breads",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "BanhCaramen",
    "name_vi": "Bánh Caramen",
    "name_en": "Japanese Caramel Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 20000,
    "img": "public/images/products/banh-kem-tuoi/banh-caramen.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm lớp bông lan Caramen xen kẽ là các lớp kem tươi Caramen.",
    "description_en": "Authentic handcrafted Bánh Caramen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "BongLanTrungMuoi",
    "name_vi": "Bông Lan Trứng Muối 16cm",
    "name_en": "Salted Egg Sponge Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 100000,
    "img": "public/images/products/banh-kem-tuoi/bong-lan-trung-muoi.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm cốt bông lan mềm cùng với sốt trứng. Phủ bên trên là phomai, trứng muối và ruốc.",
    "description_en": "Authentic handcrafted Bông Lan Trứng Muối 16cm prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 100000
      }
    ]
  },
  {
    "id": "CupcakeTrungMuoi",
    "name_vi": "Cupcake Trứng Muối",
    "name_en": "Cupcake Trứng Muối",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 15000,
    "img": "public/images/products/banh-kem-tuoi/cupcake-trung-muoi.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm cốt bông lan mềm cùng với sốt trứng. Phủ bên trên là phomai, trứng muối và ruốc.",
    "description_en": "Authentic handcrafted Cupcake Trứng Muối prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 15000
      }
    ]
  },
  {
    "id": "CuonBongLanSocola",
    "name_vi": "Cuộn bông lan Socola",
    "name_en": "Japanese Swiss Roll",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/cuon-bong-lan-socola.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm cốt bánh bông lan socola cùng với kem tươi socola.",
    "description_en": "Authentic handcrafted Cuộn bông lan Socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "CuonBongLanCafe",
    "name_vi": "Cuộn bông lan Caramen",
    "name_en": "Japanese Swiss Roll",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/cuon-bong-lan-cafe.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm cốt bông lan Cafe cùng với kem tươi Cafe.",
    "description_en": "Authentic handcrafted Cuộn bông lan Caramen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "CuonBongLanTraXanh",
    "name_vi": "Cuộn bông lan trà xanh",
    "name_en": "Japanese Swiss Roll",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/cuon-bong-lan-tra-xanh.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm cốt bánh bông lan trà xanh cùng với kem tươi trà xanh.",
    "description_en": "Authentic handcrafted Cuộn bông lan trà xanh prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "CuonBongLan",
    "name_vi": "Cuộn bông lan",
    "name_en": "Japanese Swiss Roll",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/cuon-bong-lan.webp",
    "featured": false,
    "description_vi": "Thành phần bao gồm cuộn bông lan vani cùng với kem tươi vani.",
    "description_en": "Authentic handcrafted Cuộn bông lan prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "Derika",
    "name_vi": "Derika",
    "name_en": "Derika",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 18000,
    "img": "public/images/products/banh-kem-tuoi/derika.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm cốt bánh, nho khô và rượu Rum. Phủ lên trên một lớp chocolate mỏng.",
    "description_en": "Authentic handcrafted Derika prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "Opera",
    "name_vi": "Opera",
    "name_en": "Opera Chocolate Gateau",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/opera.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm các lớp: bánh bông lan cafe, kem bơ, bông lan chocolate đặc, kem tươi socola, bông lan chocolate, kem tươi choco và lớp choco cứng.",
    "description_en": "Authentic handcrafted Opera prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "Rarechesse",
    "name_vi": "Rare Chesse",
    "name_en": "Rare Chesse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/rarechesse.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm đế bánh Tart nướng cùng với phomat tươi.",
    "description_en": "Authentic handcrafted Rare Chesse prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "TamGiacTra",
    "name_vi": "Tam Giác Trà",
    "name_en": "Tam Giác Trà",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/tam-giac-tra.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm bông lan trà xanh Nhật Bản cùng lớp thạch trà trên mặt bánh.",
    "description_en": "Authentic handcrafted Tam Giác Trà prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "CafeMouka",
    "name_vi": "Cafe Mouka",
    "name_en": "Cafe Mouka",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/cafe-mouka.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh bao gồm lớp gato Mouka cafe cùng lớp thạch cafe trên bề mặt bánh.",
    "description_en": "Authentic handcrafted Cafe Mouka prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tiramisu",
    "subcategory_name": "Dòng Tiramisu & Cà Phê",
    "subcategory_name_en": "Tiramisu & Coffee Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "Tiramisu",
    "name_vi": "Tiramisu",
    "name_en": "Classic Tiramisu",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 28000,
    "img": "public/images/products/banh-kem-tuoi/tiramisu.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh bao gồm đế bánh bông lan mỏng, lớp kem tiramisu béo ngậy cùng bột cacao.",
    "description_en": "Authentic handcrafted Tiramisu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tiramisu",
    "subcategory_name": "Dòng Tiramisu & Cà Phê",
    "subcategory_name_en": "Tiramisu & Coffee Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 28000
      }
    ]
  },
  {
    "id": "CafeJelly",
    "name_vi": "Cafe Jelly",
    "name_en": "Cafe Jelly",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 18000,
    "img": "public/images/products/banh-kem-tuoi/cafe-jelly.webp",
    "featured": false,
    "description_vi": "Thành phần của sản phẩm bao gồm các viên thạch cafe, được phủ bên trên là lớp kem tươi.",
    "description_en": "Authentic handcrafted Cafe Jelly prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tiramisu",
    "subcategory_name": "Dòng Tiramisu & Cà Phê",
    "subcategory_name_en": "Tiramisu & Coffee Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "MousseChocolate",
    "name_vi": "Mousse Chocolate",
    "name_en": "Mousse Chocolate",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-chocolate.webp",
    "featured": false,
    "description_vi": "Thành phần bánh bao gồm lớp bông lan chocolate, lớp mousse chocolate cùng với lớp kem tươi chocolate phủ trên.",
    "description_en": "Authentic handcrafted Mousse Chocolate prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "MousseTra",
    "name_vi": "Mousse Trà",
    "name_en": "Mousse Trà",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-tra.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh bao gồm lớp bông lan trà xanh cùng lớp mousse trà xanh Nhât.",
    "description_en": "Authentic handcrafted Mousse Trà prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "ThachMit",
    "name_vi": "Thạch Mít",
    "name_en": "Thạch Mít",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/thach-mit.webp",
    "featured": false,
    "description_vi": "Chiếc bánh được tạo nên bởi lớp bông lan mỏng, cùng với lớp mít tươi xay nhuyễn, trên cùng là lớp thạch mít tươi.",
    "description_en": "Authentic handcrafted Thạch Mít prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "MousseChanhLeoVuong",
    "name_vi": "Mousse Chanh Leo Vuông",
    "name_en": "Passion Fruit Mousse",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/mousse-chanh-leo-vuong.webp",
    "featured": false,
    "description_vi": "Bánh bao gồm lớp bông lan vani, lớp mousse chanh leo và thạch chanh leo tươi.",
    "description_en": "Authentic handcrafted Mousse Chanh Leo Vuông prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-mousse",
    "subcategory_name": "Dòng Bánh Mousse Tươi",
    "subcategory_name_en": "Fresh Mousse Cakes",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "ThachXoai",
    "name_vi": "Thạch Xoài",
    "name_en": "Thạch Xoài",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/thach-xoai.webp",
    "featured": false,
    "description_vi": "Bánh gồm các lớp bông lan, lớp thạch xoài xay nhuyễn và lớp thạch xoài tươi.",
    "description_en": "Authentic handcrafted Thạch Xoài prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "SanwichNho",
    "name_vi": "Sandwich các vị",
    "name_en": "Japanese Sandwich Loaf",
    "category": "banh-mi",
    "category_name": "Bánh Mì",
    "category_name_en": "Breads & Pastries",
    "price": 30000,
    "img": "public/images/products/banh-mi/sanwich-nho.webp",
    "featured": false,
    "description_vi": "Bánh sanwich được kẹp bên trong bởi salat, trứng, thịt hun khói và cá ngừ. Bánh có 3 loại là salat, trứng thịt hun khói và trứng cá ngừ.",
    "description_en": "Authentic handcrafted Sandwich các vị prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "banh-mi-goi-sandwich",
    "subcategory_name": "Bánh Mì Gối & Sandwich",
    "subcategory_name_en": "Toast Loaves & Sandwiches",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "BanhMem",
    "name_vi": "Bánh mềm",
    "name_en": "Japanese Soft Bread",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 50000,
    "img": "public/images/products/banh-kem-tuoi/banh-mem.webp",
    "featured": false,
    "description_vi": "Castella là loại bánh gato đặc biệt. Lớp gato mềm, mịn dai và không quá ngọt.",
    "description_en": "Authentic handcrafted Bánh mềm prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 50000
      }
    ]
  },
  {
    "id": "MilleFeuille",
    "name_vi": "Mille Feuille",
    "name_en": "Classic Mille-Feuille",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/mille-feuille.webp",
    "featured": false,
    "description_vi": "Bánh được nướng giòn rụm xếp nhiều lớp lên nhau, kèm theo là lớp kem béo ngậy.",
    "description_en": "Authentic handcrafted Mille Feuille prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tart-ngan-lop",
    "subcategory_name": "Dòng Tart & Ngàn Lớp",
    "subcategory_name_en": "Tarts & Mille-Feuille",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "SoVoRacDuong",
    "name_vi": "Socola Vỡ Rắc Đường",
    "name_en": "Socola Vỡ Rắc Đường",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/so-vo-rac-duong.webp",
    "featured": false,
    "description_vi": "Cốt bánh socola đặc không có kem tươi, bên trên được phủ một lớp đường&nbsp; bột mỏng.",
    "description_en": "Authentic handcrafted Socola Vỡ Rắc Đường prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "CaramenDacBiet",
    "name_vi": "Caramen Đặc Biệt",
    "name_en": "Special Caramel Pudding",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 16000,
    "img": "public/images/products/banh-kem-tuoi/caramen-dac-biet.webp",
    "featured": false,
    "description_vi": "Pudding Caramen kết hợp thêm kem Anchor.",
    "description_en": "Authentic handcrafted Caramen Đặc Biệt prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 16000
      }
    ]
  },
  {
    "id": "Caramen",
    "name_vi": "Caramen",
    "name_en": "Caramen",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 10000,
    "img": "public/images/products/banh-kem-tuoi/caramen.webp",
    "featured": false,
    "description_vi": "Pudding caramen.",
    "description_en": "Authentic handcrafted Caramen prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 10000
      }
    ]
  },
  {
    "id": "Pound",
    "name_vi": "Pound",
    "name_en": "Pound",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 15000,
    "img": "public/images/products/banh-kem-tuoi/pound.webp",
    "featured": false,
    "description_vi": "Chiếc bánh bông lan bao gồm nho khô và hạnh nhân.",
    "description_en": "Authentic handcrafted Pound prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 15000
      }
    ]
  },
  {
    "id": "Madoline",
    "name_vi": "Madoline",
    "name_en": "Madoline",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 12000,
    "img": "public/images/products/banh-kem-tuoi/madoline.webp",
    "featured": false,
    "description_vi": "Bánh bông lan mềm mịn không có thêm topping.",
    "description_en": "Authentic handcrafted Madoline prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 12000
      }
    ]
  },
  {
    "id": "Dua",
    "name_vi": "Dứa",
    "name_en": "Dứa",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 20000,
    "img": "public/images/products/banh-kem-tuoi/dua.webp",
    "featured": false,
    "description_vi": "Bánh được nướng bởi dứa tươi nghiền và bánh cookie.",
    "description_en": "Authentic handcrafted Dứa prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "Tao",
    "name_vi": "Táo",
    "name_en": "Táo",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 20000,
    "img": "public/images/products/banh-kem-tuoi/tao.webp",
    "featured": false,
    "description_vi": "Bánh được tạo nên bởi táo tươi và bánh cookie được nướng vàng ở nhiệt độ thích hợp.",
    "description_en": "Authentic handcrafted Táo prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "SyBust",
    "name_vi": "Sy Bust",
    "name_en": "Sy Bust",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/sy-bust.webp",
    "featured": false,
    "description_vi": "Đặc trưng của bánh là kem syu trộn cùng táo tươi, được nướng vàng ươm.",
    "description_en": "Authentic handcrafted Sy Bust prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "FomatNuong",
    "name_vi": "Fomat Nướng",
    "name_en": "Baked Cheese Tart",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/fomat-nuong.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh là phomat tươi được nướng cùng lớp bánh Tart.",
    "description_en": "Authentic handcrafted Fomat Nướng prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tart-ngan-lop",
    "subcategory_name": "Dòng Tart & Ngàn Lớp",
    "subcategory_name_en": "Tarts & Mille-Feuille",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "FomatCam",
    "name_vi": "Fomat Cam",
    "name_en": "Orange Cheese Tart",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/fomat-cam.webp",
    "featured": false,
    "description_vi": "Bánh phomat vị kem mềm mịn. Phủ trên cùng là lớp mứt cam mỏng.",
    "description_en": "Authentic handcrafted Fomat Cam prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tart-ngan-lop",
    "subcategory_name": "Dòng Tart & Ngàn Lớp",
    "subcategory_name_en": "Tarts & Mille-Feuille",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "Chuoi",
    "name_vi": "Chuối",
    "name_en": "Chuối",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 20000,
    "img": "public/images/products/banh-kem-tuoi/chuoi.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh gồm bánh bông lan, chuối tươi và kem tươi vani.",
    "description_en": "Authentic handcrafted Chuối prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "Cupcake",
    "name_vi": "CupCake",
    "name_en": "Cupcake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 18000,
    "img": "public/images/products/banh-kem-tuoi/cupcake.webp",
    "featured": false,
    "description_vi": "Chiếc bánh cốc được bơm thêm bông hoa kem tươi trên mặt bánh.",
    "description_en": "Authentic handcrafted CupCake prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "SuaChuaDuDu",
    "name_vi": "Sữa Chua Đu Đủ",
    "name_en": "Sữa Chua Đu Đủ",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/sua-chua-du-du.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh là đu đủ tươi xay cùng sữa chua được đặt trên 1 lớp gato mỏng.",
    "description_en": "Authentic handcrafted Sữa Chua Đu Đủ prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "SuaChuaDau",
    "name_vi": "Sữa Chua Dâu",
    "name_en": "Sữa Chua Dâu",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/sua-chua-dau.webp",
    "featured": false,
    "description_vi": "Thành phần của bánh là dâu tây được xay nhuyễn với sữa chua, dưới cùng là lớp gato vaini.",
    "description_en": "Authentic handcrafted Sữa Chua Dâu prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "DauDacBiet",
    "name_vi": "Cắt dâu đặc biệt",
    "name_en": "Cắt Dâu Đặc Biệt",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/dau-dac-biet.webp",
    "featured": false,
    "description_vi": "Bánh là sự kết hợp của lớp gato mềm mịn hòa quyện cùng lớp kem Anchor béo mát, nên trong có kẹp dâu tươi.",
    "description_en": "Authentic handcrafted Cắt dâu đặc biệt prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "Sahere",
    "name_vi": "Sahere",
    "name_en": "Sahere",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/sahere.webp",
    "featured": false,
    "description_vi": "Bánh là sự kết hợp của bánh gato socola đặc cùng lớp mứt việt quất bên ngoài.",
    "description_en": "Authentic handcrafted Sahere prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "Gatosocola",
    "name_vi": "Gato Socola",
    "name_en": "Gato Socola",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/gatosocola.webp",
    "featured": false,
    "description_vi": "Bánh kem truyền thống vị socola.",
    "description_en": "Authentic handcrafted Gato Socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "ChiffonSocola",
    "name_vi": "Chiffon Socola",
    "name_en": "Japanese Chiffon Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/chiffon-socola.webp",
    "featured": false,
    "description_vi": "Bánh được tạo nên từ cốt chiffon mềm dai kết hợp cùng kem tươi socola.",
    "description_en": "Authentic handcrafted Chiffon Socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "ChiffonTra",
    "name_vi": "Chiffon Trà",
    "name_en": "Japanese Chiffon Cake",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/chiffon-tra.webp",
    "featured": false,
    "description_vi": "Bánh được làm bởi cốt bánh chiffon kết hợp với kem matcha và bột trà Nhật.",
    "description_en": "Authentic handcrafted Chiffon Trà prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "DorayakiTra",
    "name_vi": "Dorayaki Trà",
    "name_en": "Japanese Dorayaki",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/dorayaki-tra.webp",
    "featured": false,
    "description_vi": "Vỏ bánh matcha dai mềm kết hợp với đậu đỏ nhuyễn xào.",
    "description_en": "Authentic handcrafted Dorayaki Trà prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "DorayakiThuong",
    "name_vi": "Dorayaki Truyền Thống",
    "name_en": "Japanese Dorayaki",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/dorayaki-thuong.webp",
    "featured": false,
    "description_vi": "Dorayaki là 1 loại bánh truyền thống của Nhật Bản. Vỏ bánh được rán và kẹp bên trong là nhân đậu đỏ xào.&nbsp;",
    "description_en": "Authentic handcrafted Dorayaki Truyền Thống prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "SyuKemNho",
    "name_vi": "Syu Kem Vani",
    "name_en": "Vanilla Choux Cream Puff",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 20000,
    "img": "public/images/products/banh-kem-tuoi/syu-kem-nho.webp",
    "featured": false,
    "description_vi": "Bánh là sự kết hợp của kem syu và kem tươi, trên cùng được phủ 1 lớp đường bột ngọt dịu.",
    "description_en": "Authentic handcrafted Syu Kem Vani prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 20000
      }
    ]
  },
  {
    "id": "SyuKemTra",
    "name_vi": "Syu Kem Trà",
    "name_en": "Matcha Choux Cream Puff",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/syu-kem-tra.webp",
    "featured": false,
    "description_vi": "Bánh là sự kết hợp của kem syu, kem tươi và bột matcha Nhật Bản.",
    "description_en": "Authentic handcrafted Syu Kem Trà prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "Ekura",
    "name_vi": "Ekura",
    "name_en": "Chocolate Éclair",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 22000,
    "img": "public/images/products/banh-kem-tuoi/ekura.webp",
    "featured": false,
    "description_vi": "Kem suy đánh cùng kem tươi được bơm trong vỏ giòn tạo nên chiếc bánh ekura đặc trưng.",
    "description_en": "Authentic handcrafted Ekura prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 22000
      }
    ]
  },
  {
    "id": "BabySuysocola",
    "name_vi": "Baby Syu Socola",
    "name_en": "Baby Chocolate Choux Box",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 35000,
    "img": "public/images/products/banh-kem-tuoi/baby-suysocola.webp",
    "featured": false,
    "description_vi": "Bên trong hộp bánh là 6 chiếc bánh suy kem nhỏ vị socola.&nbsp;",
    "description_en": "Authentic handcrafted Baby Syu Socola prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 35000
      }
    ]
  },
  {
    "id": "BabySuy",
    "name_vi": "Baby Syu Vani",
    "name_en": "Baby Vanilla Choux Box",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 30000,
    "img": "public/images/products/banh-kem-tuoi/baby-suy.webp",
    "featured": false,
    "description_vi": "Hộp bánh bao gồm 6 chiếc suy kem truyền thống.",
    "description_en": "Authentic handcrafted Baby Syu Vani prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-su-kem",
    "subcategory_name": "Dòng Su Kem (Choux Cream)",
    "subcategory_name_en": "Choux Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 30000
      }
    ]
  },
  {
    "id": "BabyKemTuoi",
    "name_vi": "Baby Cake Kem Tươi",
    "name_en": "Baby Cake Kem Tươi",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/baby-kem-tuoi.webp",
    "featured": false,
    "description_vi": "Hộp bánh gồm 8 miếng bánh nhỏ vị kem tươi vani.",
    "description_en": "Authentic handcrafted Baby Cake Kem Tươi prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "BabyCakeTra",
    "name_vi": "Baby Cake Trà",
    "name_en": "Baby Cake Trà",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/baby-cake-tra.webp",
    "featured": false,
    "description_vi": "Những miếng bánh trà xanh Nhật Bản được xếp gọn gàng trong chiếc hộp xinh xinh.",
    "description_en": "Authentic handcrafted Baby Cake Trà prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "BabyCake",
    "name_vi": "Baby Cake Cafe",
    "name_en": "Baby Cake Cafe",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/baby-cake.webp",
    "featured": false,
    "description_vi": "Hộp bánh nhỏ xinh gồm 8 miếng bánh baby cake cafe thơm ngậy vị kem bơ.",
    "description_en": "Authentic handcrafted Baby Cake Cafe prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-tiramisu",
    "subcategory_name": "Dòng Tiramisu & Cà Phê",
    "subcategory_name_en": "Tiramisu & Coffee Pastries",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "CoconutCream",
    "name_vi": "Coconut Cream",
    "name_en": "Coconut Cream",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 25000,
    "img": "public/images/products/banh-kem-tuoi/coconut-cream.webp",
    "featured": false,
    "description_vi": "Chiếc bánh kem dừa là sự kết hợp xen kẽ hoàn hảo giữa các tầng bánh bông lan và kem dừa. Trên cùng được rắc lớp vụn dừa tươi thơm ngon.",
    "description_en": "Authentic handcrafted Coconut Cream prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 25000
      }
    ]
  },
  {
    "id": "Capuchino",
    "name_vi": "Cuốn Cappuccino",
    "name_en": "Cappuccino Cream Roll",
    "category": "banh-kem-tuoi",
    "category_name": "Bánh Kem Tươi",
    "category_name_en": "Fresh Cream & Mousse",
    "price": 18000,
    "img": "public/images/products/banh-kem-tuoi/capuchino.webp",
    "featured": false,
    "description_vi": "Bánh được kết hợp từ cuộn bông lan cafe và lớp kem capuchino. Phủ lên trên là 1 lớp đường nướng bột quế thơm lừng.",
    "description_en": "Authentic handcrafted Cuốn Cappuccino prepared with premium natural ingredients following traditional Japanese bakery recipes.",
    "subcategory": "dong-banh-cuon-cat-mieng",
    "subcategory_name": "Bánh Cuộn & Bánh Cắt Miếng",
    "subcategory_name_en": "Roll Cakes & Slices",
    "variants": [
      {
        "size": "standard",
        "name": "Phần tiêu chuẩn",
        "price": 18000
      }
    ]
  },
  {
    "id": "NenSoSinhNhatNhuVang",
    "name_vi": "Nến Số Sinh Nhật Nhũ Vàng",
    "name_en": "Gold Glitter Number Birthday Candle",
    "category": "phu-kien",
    "category_name": "Phụ Kiện",
    "category_name_en": "Party Accessories",
    "price": 15000,
    "img": "public/images/products/phu-kien/NenSoSinhNhatNhuVang.webp",
    "featured": false,
    "description_vi": "Nến số sinh nhật ánh vàng sang trọng lấp lánh cho bữa tiệc ấm cúng.",
    "description_en": "Elegant gold glitter number candle for festive birthday cakes.",
    "subcategory": "phu-kien-sinh-nhat",
    "subcategory_name": "Nến & Mũ Sinh Nhật",
    "subcategory_name_en": "Birthday Candles & Hats",
    "variants": [
      {
        "size": "standard",
        "name": "Cây nến",
        "price": 15000
      }
    ]
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
    "featured": false,
    "description_vi": "Pháo sáng phụt trang trí bánh kem an toàn, tạo khoảnh khắc thắp nến lung linh.",
    "description_en": "Sparkling cake pyrotechnics for unforgettable celebration moments.",
    "subcategory": "phu-kien-sinh-nhat",
    "subcategory_name": "Nến & Mũ Sinh Nhật",
    "subcategory_name_en": "Birthday Candles & Hats",
    "variants": [
      {
        "size": "standard",
        "name": "Vỉ 6 cây",
        "price": 35000
      }
    ]
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
    "featured": false,
    "description_vi": "Mũ chóp sinh nhật họa tiết dễ thương sắc màu cho bé và bạn bè.",
    "description_en": "Fun colorful birthday party hat for kids and guests.",
    "subcategory": "phu-kien-sinh-nhat",
    "subcategory_name": "Nến & Mũ Sinh Nhật",
    "subcategory_name_en": "Birthday Candles & Hats",
    "variants": [
      {
        "size": "standard",
        "name": "Cái",
        "price": 12000
      }
    ]
  },
  {
    "id": "SuaTraiCayTHTrueJuiceMilk",
    "name_vi": "Sữa trái cây TH True JUICE Milk 300ml",
    "name_en": "TH True JUICE Milk Fruit Drink 300ml",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-sua-trai-cay",
    "subcategory_name": "Sữa Trái Cây & Nước Gạo",
    "subcategory_name_en": "Fruit Milk & Rice Drink",
    "price": 18000,
    "img": "public/images/products/nuoc/SuaTraiCayTHTrueJuiceMilk.webp",
    "featured": false,
    "description_vi": "Nước uống sữa trái cây tự nhiên kết hợp sữa tươi sạch TH và nước ép trái cây thật thanh mát.",
    "description_en": "Natural fruit juice milk blending clean TH fresh milk and real fruit juice 300ml.",
    "variants": []
  },
  {
    "id": "NuocGaoRangTHTrueRice",
    "name_vi": "Nước gạo rang TH True RICE 300ml",
    "name_en": "TH True RICE Roasted Rice Drink 300ml",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-sua-trai-cay",
    "subcategory_name": "Sữa Trái Cây & Nước Gạo",
    "subcategory_name_en": "Fruit Milk & Rice Drink",
    "price": 18000,
    "img": "public/images/products/nuoc/NuocGaoRangTHTrueRice.webp",
    "featured": false,
    "description_vi": "Nước gạo rang tự nhiên thanh khiết, không thêm đường tinh luyện tốt cho sức khỏe.",
    "description_en": "All-natural roasted rice drink with no added refined sugars, pure and healthy 300ml.",
    "variants": []
  },
  {
    "id": "TraXanhViChanhTHTrueTea",
    "name_vi": "Trà xanh vị chanh TH True TEA 350ml",
    "name_en": "TH True TEA Lemon Green Tea 350ml",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-tra-hoa-qua",
    "subcategory_name": "Trà & Nước Ép Nguyên Chất",
    "subcategory_name_en": "Tea & Pure Fruit Juice",
    "price": 15000,
    "img": "public/images/products/nuoc/TraXanhViChanhTHTrueTea.webp",
    "featured": false,
    "description_vi": "Trà xanh tự nhiên vị chanh tươi mát lành giải nhiệt từ búp trà Shan Tuyết cổ thụ.",
    "description_en": "Refreshing lemon green tea brewed from organic natural tea leaves 350ml.",
    "variants": []
  },
  {
    "id": "NuocEpCamDaoTHTrueJuice",
    "name_vi": "Nước ép cam đào TH True JUICE 350ml",
    "name_en": "TH True JUICE Orange Peach Juice 350ml",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-tra-hoa-qua",
    "subcategory_name": "Trà & Nước Ép Nguyên Chất",
    "subcategory_name_en": "Tea & Pure Fruit Juice",
    "price": 22000,
    "img": "public/images/products/nuoc/NuocEpCamDaoTHTrueJuice.webp",
    "featured": false,
    "description_vi": "Nước ép cam đào tự nhiên 100% nguyên chất, dồi dào Vitamin C tăng cường đề kháng.",
    "description_en": "100% natural orange and peach blended juice rich in vitamin C 350ml.",
    "variants": []
  },
  {
    "id": "NuocEpTaoOiTHTrueJuice",
    "name_vi": "Nước ép táo ổi TH True JUICE 350ml",
    "name_en": "TH True JUICE Apple Guava Juice 350ml",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-tra-hoa-qua",
    "subcategory_name": "Trà & Nước Ép Nguyên Chất",
    "subcategory_name_en": "Tea & Pure Fruit Juice",
    "price": 22000,
    "img": "public/images/products/nuoc/NuocEpTaoOiTHTrueJuice.webp",
    "featured": false,
    "description_vi": "Nước ép táo ổi nguyên chất mát lành, ngọt dịu tự nhiên không chất bảo quản.",
    "description_en": "Pure apple and guava juice blend with natural gentle sweetness 350ml.",
    "variants": []
  },
  {
    "id": "TraDaoSaTraTacMatOngCozy",
    "name_vi": "Trà đào sả & tắc mật ong Cozy",
    "name_en": "Cozy Peach Lemongrass & Kumquat Honey Tea",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-tra-hoa-qua",
    "subcategory_name": "Trà & Nước Ép Nguyên Chất",
    "subcategory_name_en": "Tea & Pure Fruit Juice",
    "price": 16000,
    "img": "public/images/products/nuoc/TraDaoSaTraTacMatOngCozy.webp",
    "featured": false,
    "description_vi": "Trà Cozy hương vị thảo mộc thanh mát: Đào sả thơm lừng và tắc mật ong dịu ngọt.",
    "description_en": "Refreshing Cozy ready-to-drink tea bottle in peach lemongrass & kumquat honey.",
    "variants": []
  },
  {
    "id": "NuocTraiCayCapriSunAnhDao",
    "name_vi": "Nước trái cây Capri-Sun vị anh đào",
    "name_en": "Capri-Sun Cherry Fruit Juice Pouch",
    "category": "nuoc",
    "category_name": "Đồ Uống",
    "category_name_en": "Beverages",
    "subcategory": "nuoc-tra-hoa-qua",
    "subcategory_name": "Trà & Nước Ép Nguyên Chất",
    "subcategory_name_en": "Tea & Pure Fruit Juice",
    "price": 20000,
    "img": "public/images/products/nuoc/NuocTraiCayCapriSunAnhDao.webp",
    "featured": false,
    "description_vi": "Nước trái cây Capri-Sun vị anh đào nhập khẩu, túi thiếc tiện dụng thơm mát cho bé.",
    "description_en": "Imported Capri-Sun cherry fruit pouch, fun and refreshing with no artificial colors.",
    "variants": []
  },
  {
    "id": "BanhGaoOneOne",
    "name_vi": "Bánh gạo One One 150g",
    "name_en": "One One Crispy Rice Crackers 150g",
    "category": "snack",
    "category_name": "Snacks & Đồ Ăn Vặt",
    "category_name_en": "Snacks & Tidbits",
    "subcategory": "snack-do-an-vat",
    "subcategory_name": "Bánh Gạo & Cơm Cháy",
    "subcategory_name_en": "Crispy Crackers & Burnt Rice",
    "price": 28000,
    "img": "public/images/products/snack/BanhGaoOneOne.webp",
    "featured": false,
    "description_vi": "Bánh gạo nướng One One giòn tan thơm bùi vị gạo tự nhiên, ít béo thơm ngon.",
    "description_en": "Crispy One One baked rice crackers, light and crunchy with natural roasted aroma.",
    "variants": []
  },
  {
    "id": "BanhComChayChaBong",
    "name_vi": "Cơm cháy chà bông",
    "name_en": "Crispy Burnt Rice With Pork Floss",
    "category": "snack",
    "category_name": "Snacks & Đồ Ăn Vặt",
    "category_name_en": "Snacks & Tidbits",
    "subcategory": "snack-do-an-vat",
    "subcategory_name": "Bánh Gạo & Cơm Cháy",
    "subcategory_name_en": "Crispy Crackers & Burnt Rice",
    "price": 35000,
    "img": "public/images/products/snack/BanhComChayChaBong.webp",
    "featured": false,
    "description_vi": "Cơm cháy chiên giòn rụm ngập sốt mắm ớt cay nhẹ và chà bông heo hảo hạng.",
    "description_en": "Savory Saigon crispy burnt rice crackers topped with rich sauce and pork floss.",
    "variants": []
  }
];
