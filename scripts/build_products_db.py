# Script to build js/data/products.js with all 173 verified bakery products
import json, os

with open("/tmp/items_list.json", "r", encoding="utf-8") as f:
    items = json.load(f)

# Comprehensive dictionary for all 173 products
# (name_en, desc_vi, desc_en, price, is_featured)
PRODUCT_METADATA = {
    # 1. BÁNH GATO (38 items)
    "BanhGatoHaiTangDauTay": (
        "Two-Tier Strawberry Gateau",
        "Cốt bông lan mềm mịn 2 tầng kết hợp kem tươi hảo hạng và dâu tây tươi nhập khẩu.",
        "Delicate 2-tier sponge cake with premium fresh whipped cream and fresh imported strawberries.",
        550000, True
    ),
    "BanhGatoDiamondDauTay": (
        "Diamond Strawberry Gateau",
        "Bánh gato tạo hình kim cương sang trọng phủ kem tươi và dâu tây căng mọng.",
        "Elegant diamond-shaped gateau topped with fresh whipping cream and juicy strawberries.",
        390000, True
    ),
    "BanhGatoFujiTraXanhDauTay": (
        "Fuji Matcha Strawberry Gateau",
        "Hòa quyện trà xanh Uji Nhật Bản thanh mát với vị ngọt dịu của dâu tây tươi.",
        "Refreshing Japanese Uji matcha infused cake paired with sweet fresh strawberries.",
        420000, True
    ),
    "BanhGatoIchigoQuaDauTay": (
        "Ichigo Fresh Strawberry Gateau",
        "Bánh gato phong cách Nhật Bản truyền thống ngập tràn dâu tây Ichigo mọng nước.",
        "Classic Japanese style Ichigo gateau loaded with fresh juicy strawberries.",
        380000, False
    ),
    "BanhGatoKawaiiKemSuaDauTay": (
        "Kawaii Milk Cream Strawberry Gateau",
        "Vị kem sữa tươi béo ngậy ngọt ngào cùng dâu tây tươi trang trí phong cách Kawaii dễ thương.",
        "Sweet rich fresh milk cream gateau adorned with Kawaii strawberry garnishes.",
        370000, False
    ),
    "BanhGatoGreekXoaiVietQuat": (
        "Greek Mango & Blueberry Gateau",
        "Sự kết hợp hoàn hảo giữa sữa chua Hy Lạp thanh nhẹ, xoài ngọt lịm và việt quất tươi.",
        "Delightful Greek yogurt sponge cake topped with fresh sweet mango and blueberries.",
        400000, False
    ),
    "BanhGatoSunshineKemTuoiXoai": (
        "Sunshine Fresh Cream Mango Gateau",
        "Sắc vàng rực rỡ như ánh nắng từ xoài cát chín cây và kem whipping béo mịn.",
        "Radiant sunshine mango cake layered with velvety whipped cream and ripe mango.",
        360000, True
    ),
    "BanhGatoKemTuoiHoaQuaTongHop": (
        "Mixed Fresh Fruit Cream Gateau",
        "Bản hòa tấu sắc màu từ các loại trái cây tươi ngon theo mùa trên nền kem mềm xốp.",
        "Vibrant melody of seasonal fresh fruits on a light, fluffy fresh cream sponge.",
        350000, False
    ),
    "BanhGatoKemTuoiDauTayBanhQuy": (
        "Strawberry Cookie Fresh Cream Gateau",
        "Điểm nhấn giòn rụm từ bánh quy bơ nướng giòn kết hợp kem dâu tây mịn màng.",
        "Crisp butter cookies meet luscious fresh cream and ripe red strawberries.",
        360000, False
    ),
    "BanhGatoMiniKemTuoiSocolaTrang": (
        "Mini White Chocolate Fresh Cream Gateau",
        "Phiên bản bánh mini xinh xắn phủ socola trắng ngọt ngào và kem bông tuyết.",
        "Charming petite gateau draped in sweet Belgian white chocolate and fluffy cream.",
        250000, False
    ),
    "BanhGatoKemTuoiMutHoaQua": (
        "Fruit Jam Fresh Cream Gateau",
        "Lớp mứt trái cây cô đặc tự nhiên xen kẽ cốt bánh bông lan xốp mềm thơm ngát.",
        "Rich natural fruit preserve layered between clouds of soft vanilla sponge cake.",
        340000, False
    ),
    "BanhGatoKemTuoiVuongHoaQua": (
        "Square Mixed Fruit Gateau",
        "Thiết kế vuông hiện đại phủ đầy trái cây tươi nhiệt đới cao cấp.",
        "Contemporary square cut cake crowned with an assortment of fresh tropical fruits.",
        390000, False
    ),
    "BanhGatoKhoaiMonVietQuat": (
        "Taro Blueberry Gateau",
        "Hương vị khoai môn bùi bùi thơm béo quyện cùng sốt việt quất chua ngọt đậm đà.",
        "Earthy fragrant taro sponge cake paired with sweet-tart wild blueberry puree.",
        370000, False
    ),
    "BanhGatoSocolaTornado": (
        "Chocolate Tornado Gateau",
        "Cơn lốc socola đậm đà với các tầng mousse socola đen nguyên chất thượng hạng.",
        "Rich whirlwind of premium dark chocolate ganache and moist cocoa sponge.",
        420000, True
    ),
    "BanhGatoSocolaChayHoaQua": (
        "Lava Chocolate Fruit Gateau",
        "Dòng sốt socola Bỉ chảy tràn hấp dẫn kết hợp dâu tây và hoa quả tươi thanh mát.",
        "Decadent Belgian molten chocolate drizzle draped over fresh seasonal fruits.",
        410000, False
    ),
    "BanhGatoSocolaTimHoaQua": (
        "Heart-Shaped Chocolate Fruit Gateau",
        "Tạo hình trái tim lãng mạn phủ socola bóng mượt điểm xuyết dâu tây tươi.",
        "Romantic heart-shaped cake coated in silky dark chocolate and fresh berries.",
        430000, False
    ),
    "BanhGatoSocolaDenCamVang": (
        "Dark Chocolate Orange Gateau",
        "Hương vị socola đen nguyên chất hòa quyện cùng tinh dầu cam vàng tươi mát sang trọng.",
        "Artisan dark chocolate infused with zesty fresh orange slices and citrus glaze.",
        390000, False
    ),
    "BanhGatoCaPheCacao": (
        "Coffee Cocoa Gateau",
        "Đậm đà hương vị cà phê Robusta hảo hạng hòa quyện cùng bột cacao thơm lừng.",
        "Robust Vietnamese coffee notes blended with premium aromatic cocoa sponge.",
        360000, False
    ),
    "BanhGatoCaPheHoaQuaTuoi": (
        "Coffee Fresh Fruit Gateau",
        "Vị đắng nhẹ quyến rũ của cà phê cân bằng hoàn hảo với vị ngọt thanh từ hoa quả tươi.",
        "Subtle coffee bitterness exquisitely balanced with vibrant sweet fresh fruits.",
        370000, False
    ),
    "BanhGatoCaPheSocolaDauTay": (
        "Mocha Strawberry Gateau",
        "Bộ ba hương vị kinh điển: cà phê thơm nồng, socola đậm vị và dâu tây mọng nước.",
        "The classic trio: aromatic coffee, decadent chocolate, and juicy strawberries.",
        390000, False
    ),
    "BanhGatoCaPheSotSocolaHoaQua": (
        "Coffee Chocolate Drizzle Fruit Gateau",
        "Cốt bánh cà phê mềm xốp phủ sốt socola đen bóng bẩy và trái cây tươi.",
        "Moist coffee sponge crowned with glossy chocolate drizzle and fruit garnishes.",
        380000, False
    ),
    "BanhGatoKemCaPheDauTay": (
        "Coffee Cream Strawberry Gateau",
        "Kem cà phê đánh bông thủ công mềm mịn kết hợp lát dâu tây tươi mọng.",
        "Handcrafted whipped coffee cream paired with sweet, fresh-cut strawberries.",
        360000, False
    ),
    "BanhGatoKemCaPheSotChay": (
        "Dripping Coffee Cream Gateau",
        "Hiệu ứng sốt cà phê chảy nghệ thuật mang lại trải nghiệm thị giác và vị giác tuyệt vời.",
        "Artistic cascading coffee cream drip offering a delightful coffee lover taste.",
        370000, False
    ),
    "BanhGatoCaPheKemTuyetTrang": (
        "Coffee Gateau With Snow Cream",
        "Bánh cà phê phủ lớp kem tuyết trắng thanh khiết ngọt dịu.",
        "Aromatic coffee sponge enveloped in snow-white, silky whipped dairy cream.",
        350000, False
    ),
    "BanhGatoMochaSotCaramel": (
        "Mocha Caramel Swirl Gateau",
        "Hương vị mocha nồng nàn quyện cùng sốt caramel thủ công ngọt bùi quyến rũ.",
        "Rich mocha cake swirled with buttery artisan caramel glaze.",
        380000, False
    ),
    "BanhGatoCaramelFlanTraiCay": (
        "Caramel Flan Fruit Gateau",
        "Sự kết hợp độc đáo giữa cốt bánh gato mềm mịn và lớp flan caramel béo ngậy tan chảy.",
        "Unique harmony of fluffy gateau sponge, creamy caramel flan, and fresh fruits.",
        410000, False
    ),
    "BanhGatoCaramelMacaron": (
        "Caramel Macaron Gateau",
        "Trang trí với những chiếc bánh macaron giòn rụm và sốt caramel béo ngọt.",
        "Garnished with delicate French macarons and rich golden caramel drizzle.",
        430000, False
    ),
    "BanhGatoOperaSocolaCaPheVuong": (
        "Square Opera Chocolate Coffee Cake",
        "Bánh Opera Pháp chuẩn mực với nhiều lớp hạnh nhân, cà phê và ganache socola đậm đặc.",
        "Classic French Opera cake layered with almond sponge, coffee syrup, and ganache.",
        460000, True
    ),
    "BanhGatoTiramisuTronCoDien": (
        "Classic Round Tiramisu Cake",
        "Tiramisu truyền thống Ý với phô mai Mascarpone béo ngậy và hương rượu cà phê nồng ấm.",
        "Traditional Italian tiramisu with velvety mascarpone and espresso-soaked sponge.",
        420000, True
    ),
    "BanhGatoRedVelvetTraiTim": (
        "Heart-Shaped Red Velvet Cake",
        "Sắc đỏ nhung quý phái tạo hình trái tim cùng kem phô mai cream cheese béo chua dịu.",
        "Velvety crimson sponge layered with silky tangy cream cheese frosting.",
        440000, False
    ),
    "BanhGatoRedVelvetTronDauTay": (
        "Round Red Velvet Strawberry Cake",
        "Red Velvet tròn cổ điển kết hợp dâu tây tươi mọng và kem phô mai hảo hạng.",
        "Classic round red velvet cake decorated with fresh strawberries and cream cheese.",
        410000, False
    ),
    "BanhGatoKemTuoiTimDoRedVelvet": (
        "Red Velvet Heart Cream Gateau",
        "Bánh Red Velvet tạo hình trái tim phủ kem tươi đỏ rực rỡ lãng mạn.",
        "Romantic crimson heart-shaped Red Velvet gateau frosted with fresh cream.",
        420000, False
    ),
    "BanhGatoTraiTimDoRuyBang": (
        "Red Ribbon Heart Gateau",
        "Bánh gato trái tim đỏ thắt nơ ruy băng sang trọng cho dịp kỷ niệm.",
        "Elegant red celebration heart cake adorned with an artisan ribbon motif.",
        450000, False
    ),
    "BanhGatoRedVelvetKemTrang": (
        "White Frosted Red Velvet Gateau",
        "Cốt bánh nhung đỏ ẩm mượt phủ lớp kem tươi trắng muốt thanh tao.",
        "Silky red velvet crumb frosted in pure white vanilla cream.",
        390000, False
    ),
    "BanhGatoChiffonTraXanhHoaQua": (
        "Matcha Chiffon Fresh Fruit Gateau",
        "Bánh chiffon trà xanh bông xốp kết hợp kem tươi và hoa quả nhiệt đới tươi mát.",
        "Airy Japanese matcha chiffon cake garnished with fresh seasonal fruits.",
        360000, False
    ),
    "BanhGatoChiffonSocolaHoaQua": (
        "Chocolate Chiffon Fresh Fruit Gateau",
        "Cốt chiffon socola mềm mịn thơm dịu điểm xuyết trái cây tươi ngon ngọt.",
        "Featherlight cocoa chiffon sponge decorated with fresh vibrant fruits.",
        370000, False
    ),
    "BanhGatoMatchaChiffonNguyenChiec": (
        "Whole Kyoto Matcha Chiffon Cake",
        "Bánh chiffon trà xanh nguyên chiếc thơm nức hương matcha Uji thượng hạng.",
        "Whole artisan Kyoto matcha chiffon cake with an ultra-tender texture.",
        350000, False
    ),
    "BanhBongLanTrungMuoiChaBongHop": (
        "Salted Egg & Pork Floss Cake Box",
        "Bánh bông lan trứng muối chà bông nguyên hộp đẫm sốt bơ phô mai béo ngậy.",
        "Whole cake box of savory salted egg sponge with rich cheese sauce and pork floss.",
        160000, True
    ),

    # 2. BÁNH KEM TƯƠI (86 items)
    "BanhMousseXoaiCamTuoi": (
        "Fresh Mango Orange Mousse (Whole)",
        "Mousse xoài kết hợp lát cam vàng mọng nước, chua ngọt hài hòa thanh khiết.",
        "Whole mango mousse topped with fresh orange slices, refreshing and vibrant.",
        320000, True
    ),
    "BanhMousseChanhLeoCamTuoi": (
        "Passion Fruit Orange Mousse (Whole)",
        "Hương thơm chanh leo nồng nàn và múi cam vàng óng ả trên lớp mousse mát lạnh.",
        "Whole passion fruit mousse with luscious fresh orange segments.",
        310000, False
    ),
    "BanhMousseSocolaKemTuoi": (
        "Fresh Cream Chocolate Mousse (Whole)",
        "Mousse socola béo ngậy phủ lớp kem tươi đánh bông xốp nhẹ chuẩn vị Nhật.",
        "Rich chocolate mousse crowned with pillowy whipped cream Japanese style.",
        330000, False
    ),
    "BanhMousseXoaiDaoNhietDoi": (
        "Tropical Mango Peach Mousse (Whole)",
        "Sự hòa quyện ngọt ngào giữa xoài chín và đào giòn thơm mát dịu nhẹ.",
        "Tropical harmony of sweet ripe mango and fragrant sliced peaches.",
        320000, False
    ),
    "BanhMousseSuaChuaDauTay": (
        "Strawberry Yogurt Mousse (Whole)",
        "Sữa chua thanh nhẹ hòa cùng dâu tây Đà Lạt tươi giòn, ít ngọt thanh tao.",
        "Whole light yogurt mousse blended with tart fresh strawberries.",
        310000, False
    ),
    "BanhMousseSuaChuaChanhLeo": (
        "Passion Fruit Yogurt Mousse (Whole)",
        "Mousse sữa chua kết hợp vị chua sắc nét đặc trưng của chanh leo tươi.",
        "Silky yogurt mousse infused with tangy natural passion fruit glaze.",
        310000, False
    ),
    "BanhMousseDauTayKemTuoi": (
        "Fresh Cream Strawberry Mousse (Whole)",
        "Dâu tây mọng đỏ phủ đầy mặt bánh mousse kem tươi béo ngậy ngọt lịm.",
        "Whole strawberry mousse lavished with fresh red berries and sweet cream.",
        330000, False
    ),
    "BanhMousseTraXanhVuong": (
        "Square Matcha Green Tea Mousse (Whole)",
        "Bánh mousse trà xanh tạo hình vuông tinh tế, đậm đà hương matcha Uji thượng hạng.",
        "Square-cut authentic Uji matcha green tea mousse with a deep grassy aroma.",
        340000, False
    ),
    "BanhMousseVietQuatHoaQua": (
        "Blueberry Fruit Mousse (Whole)",
        "Mousse việt quất chua dịu điểm xuyết các loại quả mọng tươi ngon rực rỡ.",
        "Whole wild blueberry mousse accented with a burst of seasonal fresh berries.",
        330000, False
    ),
    "BanhMousseVietQuatVuong": (
        "Square Blueberry Mousse Slice",
        "Miếng mousse việt quất vuông vức, lớp thạch trong veo bóng bẩy bắt mắt.",
        "Petite square blueberry mousse slice layered with glistening berry jelly.",
        48000, False
    ),
    "BanhMousseVietQuatTamGiac": (
        "Triangle Blueberry Mousse Slice",
        "Miếng mousse việt quất cắt tam giác xinh xắn, vị chua ngọt kích thích vị giác.",
        "Triangular slice of creamy blueberry mousse with a delicate crumb base.",
        48000, False
    ),
    "BanhMousseChanhLeoVuong": (
        "Square Passion Fruit Mousse Slice",
        "Mousse chanh leo miếng vuông thanh mát giải nhiệt, chua dịu ngọt thanh.",
        "Refreshing square passion fruit mousse slice with golden jelly topping.",
        45000, False
    ),
    "BanhGatoMousseChanhLeoTamGiac": (
        "Triangle Passion Fruit Gateau Mousse",
        "Cốt bông lan mềm kết hợp lớp mousse chanh leo chua thanh tươi mới.",
        "Triangular slice of passion fruit mousse gateau on tender vanilla sponge.",
        45000, False
    ),
    "BanhMousseSocolaVuong": (
        "Square Chocolate Mousse Slice",
        "Mousse socola vuông đậm đà, vị đắng ngọt êm ái quyến rũ vị giác.",
        "Decadent square dark chocolate mousse slice with rich cocoa dusting.",
        48000, False
    ),
    "BanhMousseTraXanhTamGiac": (
        "Triangle Matcha Mousse Slice",
        "Miếng mousse trà xanh thanh mát, chát nhẹ hậu vị ngọt thanh chuẩn phong vị Kyoto.",
        "Triangle slice of silky matcha mousse with an elegant earthy undertone.",
        48000, False
    ),
    "BanhGatoMousseTraXanhDauDo": (
        "Matcha Red Bean Gateau Mousse",
        "Cặp đôi kinh điển ẩm thực Nhật Bản: matcha thanh tao và đậu đỏ ngọt bùi.",
        "Classic Japanese duo: authentic green tea mousse with sweet Azuki red beans.",
        52000, True
    ),
    "BanhMousseDauTayTuoi": (
        "Fresh Strawberry Mousse Slice",
        "Miếng bánh mousse dâu tây hồng pastel ngọt ngào điểm lát dâu tươi mọng.",
        "Pastel pink strawberry mousse slice topped with freshly sliced strawberry.",
        48000, False
    ),
    "BanhGatoMousseDauTayBaLop": (
        "Three-Layer Strawberry Gateau Mousse",
        "Ba tầng hương vị xen kẽ: bông lan vani, mousse dâu tây và thạch trái cây óng ánh.",
        "Tri-layer gateau mousse showcasing vanilla sponge, strawberry mousse and jelly.",
        52000, False
    ),
    "BanhMousseSuaChuaPhoMai": (
        "Yogurt Cheese Mousse",
        "Sự giao thoa giữa phô mai béo ngậy và sữa chua lên men tự nhiên thanh nhẹ.",
        "Velvety hybrid of probiotic yogurt and rich cream cheese mousse.",
        50000, False
    ),
    "BanhMousseXoaiPhoMai": (
        "Mango Cheese Mousse",
        "Vị xoài nhiệt đới chín thơm quyện cùng vị phô mai béo ngậy đậm đà.",
        "Ripe tropical mango folded into smooth, decadent cream cheese mousse.",
        50000, False
    ),
    "BanhSuKemVaniHop": (
        "Vanilla Choux Box (6 pcs)",
        "Hộp su kem vỏ mềm xốp ngập tràn nhân kem vani tươi thơm nức, ngọt thanh béo ngậy.",
        "Box of 6 soft-shell choux puffs bursting with luscious real vanilla pastry cream.",
        65000, True
    ),
    "BanhSuKemSocolaHop": (
        "Chocolate Choux Box (6 pcs)",
        "Hộp bánh su kem vỏ mềm nhân socola Bỉ đậm đà, mát lạnh sảng khoái.",
        "Box of 6 tender choux pastries loaded with rich, chilled Belgian chocolate cream.",
        68000, True
    ),
    "BanhSuKemVoGionHop": (
        "Craquelin Crispy Choux Box (4 pcs)",
        "Bánh su kem vỏ giòn rụm với lớp phủ cookie craquelin, nhân kem béo mịn tràn ngập.",
        "Box of 4 crunchy craquelin-topped choux filled to the brim with pastry cream.",
        75000, True
    ),
    "BanhSuKemMiniTui": (
        "Mini Choux Pouch (Small)",
        "Túi bánh su kem mini nhỏ xinh vừa ăn, tiện lợi cho bữa xế chiều.",
        "Small grab-and-go pouch of bite-sized sweet cream-filled mini choux.",
        35000, False
    ),
    "BanhSuKemMiniTuiLon": (
        "Mini Choux Pouch (Large)",
        "Túi lớn bánh su kem mini chia sẻ cùng bạn bè và gia đình.",
        "Large party pouch of delicious bite-sized cream puffs to share.",
        60000, False
    ),
    "BanhSuKemNhanVani": (
        "Single Jumbo Vanilla Choux",
        "Chiếc bánh su kem cỡ lớn nhân kem vani ngập tràn mát lạnh.",
        "Single jumbo choux puff overflowing with silky chilled vanilla cream.",
        18000, False
    ),
    "BanhSuKemNhanTraXanh": (
        "Single Jumbo Matcha Choux",
        "Su kem cỡ lớn ngập tràn nhân kem matcha thơm mát ngọt dịu.",
        "Single jumbo choux pastry filled with fragrant Japanese matcha cream.",
        20000, False
    ),
    "BanhSuDaiEclairSocola": (
        "Chocolate Eclair",
        "Bánh su dài kiểu Pháp phủ sốt socola bóng mượt, nhân kem custard đậm đà.",
        "Traditional French eclair with glossy dark chocolate glaze and custard.",
        32000, True
    ),
    "BanhTiramisuHop": (
        "Tiramisu Dessert Box",
        "Hộp Tiramisu tiện lợi với lớp phô mai Mascarpone dày mịn và bột cacao phủ đều.",
        "Convenient dessert box packed with creamy mascarpone, coffee savoiardi and cocoa.",
        75000, True
    ),
    "BanhTiramisuMiengVuong": (
        "Square Tiramisu Slice",
        "Miếng bánh Tiramisu vuông chuẩn vị Ý, đắng dịu hương cà phê thơm nồng.",
        "Square Italian tiramisu slice boasting espresso aromas and mascarpone cream.",
        50000, False
    ),
    "BanhTiramisuMousseTron": (
        "Round Tiramisu Mousse",
        "Tiramisu dạng mousse tròn xốp mềm tan chảy trong miệng.",
        "Round delicate tiramisu mousse presenting a featherlight texture.",
        55000, False
    ),
    "BanhTiramisuTraXanhCoc": (
        "Matcha Tiramisu Cup",
        "Tiramisu trà xanh đựng trong cốc xinh xắn, ngọt thanh mát lành.",
        "Individual cup of matcha tiramisu layered with Uji green tea ladyfingers.",
        45000, False
    ),
    "BanhTiramisuRedVelvetCoc": (
        "Red Velvet Tiramisu Cup",
        "Sự biến tấu độc đáo giữa Red Velvet và Tiramisu phô mai béo ngậy.",
        "Delightful dessert cup fusing red velvet crumbles with velvety tiramisu cream.",
        45000, False
    ),
    "BanhTartDauTay": (
        "Fresh Strawberry Tart",
        "Đế tart nướng bơ giòn rụm kết hợp kem custard ngọt ngào và dâu tây tươi.",
        "Buttery crisp tart shell filled with rich pastry cream and fresh strawberries.",
        55000, True
    ),
    "BanhTartPhoMaiNuong": (
        "Baked Cheese Tart",
        "Bánh tart phô mai nướng vàng ươm kiểu Hokkaido với nhân phô mai béo ngậy chảy nhẹ.",
        "Hokkaido style baked cheese tart with a molten savory-sweet cheese center.",
        38000, True
    ),
    "BanhTartTaoKemPhoMai": (
        "Apple Cream Cheese Tart",
        "Tart táo caramel thơm mùi quế hòa quyện cùng kem phô mai béo ngậy.",
        "Spiced caramelized apple tart paired with rich velvety cream cheese.",
        48000, False
    ),
    "BanhNganLopMilleFeuille": (
        "Mille-Feuille Napoléon",
        "Bánh ngàn lớp giòn tan xen kẽ các tầng kem bơ vani mềm mượt ngọt ngào.",
        "Flaky caramelized puff pastry layered with silky vanilla diplomat cream.",
        58000, True
    ),
    "BanhCuonKemTuoiVani": (
        "Vanilla Fresh Cream Roll Cake",
        "Bánh cuộn bông lan xốp mềm kiểu Nhật cuộn chặt kem tươi thanh mát ngọt nhẹ.",
        "Classic Japanese vanilla Swiss roll swirled with light whipped dairy cream.",
        55000, True
    ),
    "BanhCuonCaPheSocola": (
        "Coffee Chocolate Roll Cake",
        "Bánh cuộn thơm nồng mùi cà phê kết hợp sốt socola đen quyến rũ.",
        "Mocha sponge roll embracing a rich swirl of Belgian dark chocolate ganache.",
        58000, False
    ),
    "BanhCuonTraXanhMatcha": (
        "Matcha Green Tea Roll Cake",
        "Cốt bánh matcha xanh mướt cuộn kem tươi Uji thanh tao, thơm dịu dễ chịu.",
        "Vibrant matcha green tea roll cake with delicate chantilly cream.",
        58000, False
    ),
    "BanhCuonSotPhoMai": (
        "Cheese Lava Roll Cake",
        "Bánh cuộn phủ sốt phô mai tan chảy béo mặn thơm ngậy khó cưỡng.",
        "Soft sponge roll drizzled with a decadent molten savory cheese cream.",
        62000, False
    ),
    "BanhCuonKemBoCaPhe": (
        "Coffee Buttercream Roll Cake",
        "Bánh cuộn kem bơ cà phê đậm vị truyền thống thơm lừng béo ngậy.",
        "Heritage coffee roll cake spread with whipped French coffee buttercream.",
        55000, False
    ),
    "BanhGatoKemTuoiDauTayMieng": (
        "Strawberry Shortcake Slice",
        "Bánh shortcake kinh điển Nhật Bản với dâu tây mọng và kem whipping tươi.",
        "Signature Japanese strawberry shortcake slice with fluffy sponge and fresh cream.",
        50000, True
    ),
    "BanhGatoKemSuaTuoiMiengVuong": (
        "Square Milk Cream Cake Slice",
        "Miếng bánh vuông phủ kem sữa tươi thanh khiết tan ngay trên đầu lưỡi.",
        "Square slice of ultra-fluffy sponge cake frosted with pure milk cream.",
        45000, False
    ),
    "BanhGatoKemTuoiVaniMieng": (
        "Vanilla Fresh Cream Cake Slice",
        "Cốt bánh vani Madagascar thơm phức xen kẽ tầng kem tươi mịn màng.",
        "Madagascar vanilla sponge slice layered with delicate whipped cream.",
        45000, False
    ),
    "BanhGatoKemSuaTuoiDiemDau": (
        "Strawberry Accent Milk Cream Slice",
        "Lát bánh kem sữa tươi tinh khôi điểm một trái dâu tây ngọt ngào.",
        "Snow-white milk cream cake slice accented with a single ripe strawberry.",
        48000, False
    ),
    "BanhGatoKemHongNhanDau": (
        "Pink Strawberry Cream Cake Slice",
        "Bánh kem hồng pastel dễ thương với nhân mứt dâu tây chua ngọt thơm lừng.",
        "Lovely pastel pink cream cake slice featuring a luscious strawberry center.",
        48000, False
    ),
    "BanhGatoKemTuoiNhanDau": (
        "Fresh Cream Strawberry Filled Slice",
        "Cốt bông lan mềm ngập tràn kem tươi và dâu tây thái lát bên trong.",
        "Fluffy sponge cake slice packed with sliced strawberries and sweet cream.",
        48000, False
    ),
    "BanhGatoMutDauKemXanh": (
        "Mint & Strawberry Jam Cake Slice",
        "Sự phối màu tươi vui giữa kem lá bạc hà xanh mát và mứt dâu đỏ au.",
        "Vibrant slice contrasting cool mint frosting with ruby-red strawberry jam.",
        48000, False
    ),
    "BanhGatoSotDauTayMieng": (
        "Glazed Strawberry Cake Slice",
        "Miếng bánh gato phủ sốt dâu tây đỏ tươi mọng óng ánh hấp dẫn.",
        "Moist cake slice generously coated with a glossy sweet strawberry coulis.",
        46000, False
    ),
    "BanhGatoKemXoaiMieng": (
        "Mango Cream Cake Slice",
        "Hương xoài cát nhiệt đới chín mọng lan tỏa trong từng miếng bánh mềm xốp.",
        "Sunny mango cream cake slice infused with natural tropical fruit nectar.",
        48000, False
    ),
    "BanhGatoKemChanhLeoDua": (
        "Passion Fruit Coconut Cake Slice",
        "Hương chanh leo chua thanh kết hợp dừa nạo sấy bùi béo độc đáo.",
        "Tropical harmony slice blending tangy passion fruit with shredded coconut.",
        48000, False
    ),
    "BanhGatoMiengCaPheMocha": (
        "Mocha Coffee Cake Slice",
        "Vị cà phê mocha đậm đà thơm ngát kết hợp socola đen quyến rũ.",
        "Aromatic mocha coffee cake slice finished with a dusting of fine cocoa.",
        48000, False
    ),
    "BanhGatoSotSocolaMieng": (
        "Chocolate Glaze Cake Slice",
        "Cốt bông lan phủ đẫm sốt socola đen nguyên chất bóng mịn hấp dẫn.",
        "Tender sponge slice enveloped in a glistening coat of dark chocolate glaze.",
        48000, False
    ),
    "BanhGatoSocolaKemTuoiVuong": (
        "Square Chocolate Cream Cake",
        "Bánh vuông socola kem tươi mềm mại đậm đà chuẩn vị Pháp.",
        "Square cut chocolate cake layered with silky fresh chocolate cream.",
        48000, False
    ),
    "BanhGatoSocolaVanDa": (
        "Marble Chocolate Cake Slice",
        "Vân đá socola hòa quyện nghệ thuật giữa cốt vani và cốt cacao thơm ngậy.",
        "Artisanal marble cake slice with swirling vanilla and dark cocoa batter.",
        46000, False
    ),
    "BanhGatoSocolaSocKem": (
        "Striped Chocolate Cream Cake",
        "Đường sọc socola trang trí bắt mắt trên nền kem tươi béo ngậy ngọt ngào.",
        "Eye-catching striped chocolate cake slice with rich dairy whipped cream.",
        48000, False
    ),
    "BanhGatoSocolaTrangGuong": (
        "Mirror Glaze Chocolate Cake",
        "Lớp tráng gương socola đen bóng bẩy sang trọng chuẩn phong cách patisserie.",
        "High-gloss mirror glaze chocolate cake slice with a velvety interior.",
        52000, True
    ),
    "BanhGateauChocolatCoDien": (
        "Classic Gateau au Chocolat",
        "Bánh socola nướng cổ điển đậm đặc, ẩm mượt và nồng nàn vị cacao nguyên chất.",
        "Dense, moist traditional French chocolate cake baked to pure perfection.",
        52000, True
    ),
    "BanhOperaSocolaCaPhe": (
        "Opera Coffee Chocolate Slice",
        "Miếng bánh Opera nhiều lớp xen kẽ kem bơ cà phê và ganache socola Bỉ.",
        "Exquisite Opera slice featuring layered almond joconde, espresso and ganache.",
        55000, True
    ),
    "BanhRedVelvetMieng": (
        "Red Velvet Cake Slice",
        "Sắc đỏ nhung quý phái quyện cùng kem phô mai chua ngọt béo ngậy.",
        "Classic Red Velvet slice with vibrant red crumb and tangy cream cheese icing.",
        50000, False
    ),
    "BanhKemVietQuatCocVuong": (
        "Square Blueberry Cream Cup",
        "Cốc bánh kem việt quất đựng trong ly vuông hiện đại tiện dụng.",
        "Contemporary square dessert cup filled with layers of sponge and wild blueberries.",
        45000, False
    ),
    "BanhGatoKemTuoiDaoQuyt": (
        "Peach & Mandarin Fresh Cream Cake",
        "Sự tươi mát sảng khoái từ những múi quýt vàng và miếng đào ngọt giòn.",
        "Refreshing cake slice topped with juicy mandarin segments and sweet peaches.",
        48000, False
    ),
    "BanhGatoHoaQuaHopVuong": (
        "Square Mixed Fruit Bento Cake",
        "Hộp bánh bento vuông phủ đầy trái cây tươi theo mùa ngọt lành.",
        "Petite square bento box cake adorned with an array of fresh seasonal fruits.",
        78000, False
    ),
    "BanhHopCaPheHanhNhan": (
        "Coffee Almond Box Cake",
        "Bánh hộp cà phê béo ngậy phủ đầy hạnh nhân lát rang giòn thơm lừng.",
        "Gourmet coffee dessert box generously topped with toasted sliced almonds.",
        78000, False
    ),
    "BanhHopKemSuaTuoi": (
        "Fresh Milk Cream Box Cake",
        "Hộp bánh kem sữa tươi béo ngậy mềm mịn, vị ngọt thanh mát lạnh.",
        "Chilled fresh milk cream box cake with an irresistible melt-in-mouth crumb.",
        72000, False
    ),
    "BanhHopTraXanhMatcha": (
        "Matcha Box Cake",
        "Bánh hộp trà xanh Uji thơm dịu mang đậm tinh thần trà đạo Nhật Bản.",
        "Artisanal matcha dessert box dusted with authentic Kyoto Uji green tea powder.",
        78000, False
    ),
    "BanhBongLanTrungMuoiChaBong": (
        "Salted Egg & Pork Floss Sponge Slice",
        "Bông lan sốt phô mai béo ngậy kết hợp trứng muối bùi bùi và chà bông thơm lừng.",
        "Savory-sweet sponge cake slice topped with golden salted egg yolk and pork floss.",
        42000, True
    ),
    "BanhBongLanChaBongKepKemHop": (
        "Pork Floss Cream Sandwiched Box",
        "Hộp bánh bông lan chà bông kẹp kem béo ngậy mặn ngọt hòa quyện.",
        "Box of tender sponge sandwiches stuffed with rich cream and savory pork floss.",
        65000, False
    ),
    "BanhBongLanPhoMaiNhatBan": (
        "Japanese Soufflé Cotton Cheesecake",
        "Bánh bông lan phô mai Nhật Bản xốp mềm núng nính, nhẹ như mây tan trên lưỡi.",
        "Ultra-light Japanese cotton soufflé cheesecake that gently jiggles and melts.",
        58000, True
    ),
    "BanhBongLanPhoMaiKepKem": (
        "Cheese Cream Sandwiched Sponge",
        "Bông lan phô mai kẹp kem tươi thanh nhẹ thơm mùi sữa tươi béo ngậy.",
        "Fluffy cheese sponge sandwich hugging a layer of fresh chantilly cream.",
        45000, False
    ),
    "BanhCheesecakeNuong": (
        "New York Baked Cheesecake",
        "Bánh cheesecake nướng truyền thống đậm đặc phô mai béo ngậy và đế bánh giòn.",
        "Rich New York style baked cheesecake on a buttery graham cracker crust.",
        55000, True
    ),
    "BanhCheesecakePhoMaiChay": (
        "Basque Burnt Cheesecake",
        "Cheesecake phô mai cháy kiểu Basque với lớp mặt caramen thơm nồng và tâm bánh chảy béo.",
        "Famous Basque burnt cheesecake with a rustic caramel crust and molten gooey core.",
        58000, True
    ),
    "BanhCheesecakeNuongCaramel": (
        "Caramel Baked Cheesecake",
        "Cheesecake nướng hòa quyện sốt caramel bơ mặn thơm lừng quyến rũ.",
        "Decadent baked cheesecake swirled with artisan salted caramel sauce.",
        58000, False
    ),
    "BanhChiffonSocola": (
        "Chocolate Chiffon Cake",
        "Bánh chiffon socola siêu nhẹ và xốp mềm, vị cacao ngọt dịu nhẹ nhàng.",
        "Airy, cloud-like chocolate chiffon cake with a delicate, tender crumb.",
        40000, False
    ),
    "BanhChiffonTraXanhMatcha": (
        "Matcha Chiffon Cake",
        "Bánh chiffon trà xanh xanh ngát, thơm hương trà thanh khiết thanh tao.",
        "Featherlight green tea chiffon cake infused with Japanese matcha essence.",
        42000, False
    ),
    "BanhCupcakeKemDau": (
        "Strawberry Frosted Cupcake",
        "Cupcake vani nhỏ xinh phủ lớp kem bơ dâu tây ngọt ngào điệu đà.",
        "Charming vanilla cupcake crowned with a swirl of sweet strawberry frosting.",
        28000, False
    ),
    "BanhCupcakeHanhNhanKemBo": (
        "Almond Buttercream Cupcake",
        "Cupcake hạnh nhân bùi béo phủ kem bơ mịn màng thơm nức mũi.",
        "Nutty almond cupcake piped with rich French buttercream and toasted almonds.",
        30000, False
    ),
    "BanhBrownieSocolaHop": (
        "Chocolate Brownie Box (4 pcs)",
        "Hộp 4 bánh brownie socola đậm đặc, vỏ ngoài hơi giòn bên trong ẩm mượt.",
        "Box of 4 fudgy dark chocolate brownies with a crackly top and moist center.",
        75000, True
    ),
    "BanhBrownieSocolaHanhNhanKhay": (
        "Almond Chocolate Brownie Tray",
        "Khay bánh brownie socola rắc đầy hạt hạnh nhân nướng bùi thơm giòn rụm.",
        "Generous tray of dense chocolate brownies packed with crunchy roasted almonds.",
        110000, False
    ),
    "BanhBongLanBoHanhNhan": (
        "Almond Butter Pound Cake",
        "Bông lan bơ Pháp truyền thống thơm ngậy vị bơ và lát hạnh nhân nướng.",
        "Classic French butter pound cake slice topped with sliced almonds.",
        35000, False
    ),
    "BanhBongLanChuoiNuong": (
        "Baked Banana Sponge Cake",
        "Bánh chuối nướng thơm nức tự nhiên từ chuối chín cây, ngọt thanh bổ dưỡng.",
        "Homestyle baked banana bread slice made from naturally sweet ripe bananas.",
        32000, False
    ),
    "BanhTokyoBananaKemTrung": (
        "Tokyo Banana Custard Cake",
        "Bánh bông lan chuối Tokyo trứ danh xốp mềm nhân kem custard chuối béo mịn.",
        "Famous Tokyo style banana sponge cake filled with luscious banana custard cream.",
        35000, True
    ),
    "BanhRanDorayaki": (
        "Japanese Dorayaki Pancake",
        "Bánh rán Doraemon truyền thống mềm xốp kẹp nhân đậu đỏ ngọt bùi hấp dẫn.",
        "Beloved Japanese Dorayaki pancake sandwich filled with sweet Azuki red bean paste.",
        25000, True
    ),
    "BanhCaramelTrungSua": (
        "Japanese Caramel Pudding (Flan)",
        "Caramel trứng sữa mềm mượt núng nính phủ nước đường caramen đắng nhẹ thơm lừng.",
        "Silky Japanese purin caramel flan boasting a delicate bittersweet caramel glaze.",
        22000, True
    ),
    "KemGelatoPoemeCoc": (
        "Poême Artisan Gelato Cup",
        "Kem Gelato thủ công Poême dẻo quánh, mát lạnh đậm đà vị sữa tươi hảo hạng.",
        "Artisanal Poême gelato cup with an intensely creamy, velvety Italian texture.",
        35000, False
    ),

    # 3. BÁNH QUY (14 items)
    "BanhQuyBoHu": (
        "Butter Cookies Jar",
        "Hũ bánh quy bơ nướng vàng giòn, thơm nức mùi bơ New Zealand hảo hạng.",
        "Reusable jar of golden crunchy butter cookies made with premium New Zealand butter.",
        75000, True
    ),
    "BanhQuyCacaoHu": (
        "Cocoa Butter Cookies Jar",
        "Hũ bánh quy cacao giòn rụm, vị đắng ngọt hài hòa từ bột cacao nguyên chất.",
        "Jar of crunchy cocoa cookies infused with rich pure dark chocolate notes.",
        75000, False
    ),
    "BanhQuyLuoiMeoVaniHu": (
        "Vanilla Langue de Chat Jar",
        "Bánh quy lưỡi mèo kiểu Pháp giòn xốp tan chảy, thơm dịu hương vani tự nhiên.",
        "Jar of delicate French Langue de Chat cat-tongue cookies with natural vanilla.",
        80000, True
    ),
    "BanhQuyHanhNhanLatHu": (
        "Almond Tuiles Jar",
        "Bánh quy ngói hạnh nhân dát mỏng nướng giòn rụm bùi thơm khó cưỡng.",
        "Jar of paper-thin, crispy roasted almond tuiles bursting with nutty aromas.",
        85000, True
    ),
    "BanhQuyLuoiMeoSocolaHu": (
        "Chocolate Langue de Chat Jar",
        "Bánh quy lưỡi mèo socola giòn tan, ngọt ngào đậm vị cacao Bỉ.",
        "Jar of crispy chocolate cat-tongue cookies crafted with rich Belgian cocoa.",
        80000, False
    ),
    "BanhQuyLuoiMeoTraXanhHu": (
        "Matcha Langue de Chat Jar",
        "Bánh quy lưỡi mèo trà xanh Uji thơm ngát, giòn rụm và ít ngọt thanh tao.",
        "Jar of Kyoto Uji matcha Langue de Chat cookies offering crisp vegetal sweetness.",
        80000, False
    ),
    "BanhQuyBoTronHu": (
        "Round Butter Shortbread Jar",
        "Hũ bánh quy bơ tròn truyền thống thơm béo, tan mịn trong miệng khi thưởng trà.",
        "Classic round butter shortbread jar, an ideal accompaniment for afternoon tea.",
        75000, False
    ),
    "BanhQuySoChocochipHu": (
        "Chocochip Shell Cookies Jar",
        "Bánh quy tạo hình vỏ sò xinh xắn rắc vụn socola chip giòn rụm ngọt ngào.",
        "Whimsical shell-shaped butter cookies studded with decadent dark chocolate chips.",
        78000, False
    ),
    "BanhQuyLuoiMeoVaniTui": (
        "Vanilla Langue de Chat Pouch",
        "Túi bánh quy lưỡi mèo vani nhỏ gọn, tiện mang theo thưởng thức mọi lúc.",
        "Grab-and-go pouch of crispy vanilla Langue de Chat cookies.",
        48000, False
    ),
    "BanhQuyLuoiMeoSocolaTui": (
        "Chocolate Langue de Chat Pouch",
        "Túi bánh quy lưỡi mèo socola giòn tan đậm đà vị cacao hảo hạng.",
        "Portable pouch of delightful chocolate cat-tongue biscuits.",
        48000, False
    ),
    "BanhQuyLuoiMeoTraXanhTui": (
        "Matcha Langue de Chat Pouch",
        "Túi bánh quy lưỡi mèo matcha thanh mát, món ăn vặt lành mạnh và thơm ngon.",
        "Snack-size pouch of crisp Japanese matcha green tea cat-tongue cookies.",
        48000, False
    ),
    "BanhQuyDuaGionTui": (
        "Crispy Coconut Biscuits Pouch",
        "Bánh quy dừa nướng giòn thơm bùi mùi cơm dừa sấy béo ngậy ngọt ngào.",
        "Crunchy toasted coconut biscuits packed with the aroma of roasted coconut flakes.",
        45000, False
    ),
    "BanhQuyQueNganLopTui": (
        "Layered Pastry Sticks Pouch",
        "Túi bánh quy que ngàn lớp giòn rụm phủ đường caramen thơm phức giòn rụm.",
        "Pouch of flaky, caramelized puff pastry sticks with a light sugar crust.",
        42000, False
    ),
    "BanhQuyQueNganLopHop": (
        "Layered Pastry Sticks Gift Box",
        "Hộp quà bánh quy que ngàn lớp sang trọng, giòn tan thích hợp làm quà tặng.",
        "Elegant gift box of golden crispy puff pastry sticks, perfect for gifting.",
        85000, False
    ),

    # 4. BÁNH MÌ (20 items)
    "BanhMiBoToiNho": (
        "Garlic Butter Bread (Petite)",
        "Bánh mì nướng bơ tỏi thơm lừng, vỏ giòn ruột mềm ngậy sốt bơ tỏi thảo mộc.",
        "Aromatic garlic butter bread with a crispy crust and herb-infused soft crumb.",
        25000, True
    ),
    "BanhMiGoiHoaCucHanhNhan": (
        "Brioche Almond Loaf",
        "Bánh mì hoa cúc Brioche kiểu Pháp thơm nức mùi hoa cam và bơ tươi, rắc hạnh nhân.",
        "French Brioche loaf perfumed with orange blossom water and toasted almonds.",
        55000, True
    ),
    "BanhMiXucXichSotCaChua": (
        "Sausage Roll With Tomato Sauce",
        "Bánh mì xúc xích xông khói thơm ngon kết hợp sốt cà chua và phô mai kéo sợi.",
        "Savory bread roll hugging a smoked frankfurter topped with rich tomato sauce.",
        28000, False
    ),
    "BanhMiChaBongSotMayonnaise": (
        "Pork Floss Mayonnaise Bun",
        "Bánh mì mềm mại phủ đẫm chà bông gà cay ngọt và sốt sốt mayonnaise béo thơm.",
        "Soft bakery bun generously topped with savory pork floss and creamy mayonnaise.",
        28000, False
    ),
    "BanhMiLuaMachDenPhoMai": (
        "Rye Cheese Bread",
        "Bánh mì lúa mạch đen giàu chất xơ kết hợp khối phô mai béo ngậy tốt cho sức khỏe.",
        "Wholesome dark rye artisan bread packed with savory cubes of rich cheese.",
        38000, False
    ),
    "BanhMiKepKemSuaTuoi": (
        "Fresh Milk Cream Bun",
        "Chiếc bánh mì xốp mềm kẹp ngập tràn kem sữa tươi ngọt ngào thanh mát.",
        "Fluffy milk bun sliced and filled with luscious, sweet whipped fresh cream.",
        26000, False
    ),
    "BanhMiNhanPhoMai": (
        "Cheese Stuffed Bun",
        "Bánh mì mềm nhân kem phô mai béo ngậy ngọt dịu tan chảy bên trong.",
        "Soft golden bun hiding a warm, velvety sweet cream cheese filling.",
        28000, False
    ),
    "BanhMiTronChaBong": (
        "Round Pork Floss Bun",
        "Bánh mì tròn mềm xốp phủ ngập chà bông truyền thống mặn ngọt đậm đà.",
        "Classic round bakery bun dusted with savory pork floss and sesame seeds.",
        25000, False
    ),
    "BanhMiTronNhanKemSu": (
        "Custard Cream Round Bun",
        "Bánh mì tròn xốp mềm chứa nhân kem su custard ngọt thơm béo ngậy.",
        "Round Japanese sweet bread filled with silky vanilla custard pastry cream.",
        25000, False
    ),
    "BanhMiMexicoCaPhe": (
        "Rotiboy Mexican Coffee Bun",
        "Bánh mì Mexico với lớp vỏ cà phê giòn rụm bên ngoài và nhân bơ mặn tan chảy bên trong.",
        "Famous Mexican coffee bun with a crisp espresso crust and molten salted butter core.",
        28000, True
    ),
    "BanhMiPizzaXucXichPhoMai": (
        "Sausage & Cheese Bread Pizza",
        "Bánh mì nướng kiểu pizza phủ xúc xích, sốt cà chua và phô mai mozzarella kéo sợi.",
        "Mini bread pizza topped with sliced sausage, sweet corn, and melted mozzarella.",
        35000, False
    ),
    "BanhMiGoiSandwichLatTrang": (
        "White Sandwich Bread Loaf",
        "Bánh mì gối trắng mềm mịn xốp xao, thơm mùi sữa tươi thích hợp ăn sáng mỗi ngày.",
        "Fluffy white sandwich bread loaf, baked fresh daily with pure dairy milk.",
        35000, False
    ),
    "BanhMiGoiNguyenCam": (
        "Whole Wheat Sandwich Loaf",
        "Bánh mì gối nguyên cám giàu dinh dưỡng, ít calo và hỗ trợ lối sống lành mạnh.",
        "Nutritious 100% whole wheat bread loaf loaded with fiber and natural grains.",
        40000, True
    ),
    "BanhMiGoiNhoKhoLat": (
        "Raisin Bread Loaf",
        "Bánh mì gối thơm nức xen kẽ những hạt nho khô ngọt dịu dẻo ngon.",
        "Soft sliced sandwich loaf studded with naturally sweet California raisins.",
        42000, False
    ),
    "BanhMiCuonNhoKhoDanish": (
        "Raisin Danish Pastry Swirl",
        "Bánh mì Danish ngàn lớp cuộn nho khô giòn tan phủ đường bóng hấp dẫn.",
        "Crisp, flaky Danish pastry snail swirled with cinnamon custard and sweet raisins.",
        32000, False
    ),
    "BanhSungBoCroissant": (
        "French Butter Croissant",
        "Bánh sừng bò croissant chuẩn Pháp với hàng chục lớp bơ giòn rụm thơm nức mũi.",
        "Authentic French all-butter croissant with incredible flaky honeycomb layers.",
        32000, True
    ),
    "BanhMiSandwichKepThitNguoi": (
        "Ham & Cheese Club Sandwich",
        "Sandwich tươi kẹp thịt nguội cao cấp, phô mai Cheddar và xà lách giòn ngon.",
        "Freshly made club sandwich layered with savory ham, cheddar cheese and lettuce.",
        38000, False
    ),
    "BanhMiSandwichNguyenCamTamGiac": (
        "Triangle Whole Wheat Sandwich",
        "Bánh sandwich tam giác bánh mì đen kẹp trứng và rau củ tươi nhẹ nhàng dinh dưỡng.",
        "Healthy triangular whole wheat sandwich packed with fresh veggies and egg.",
        35000, False
    ),
    "BanhDonutSocolaCapDoi": (
        "Double Chocolate Donut Pair",
        "Cặp đôi bánh donut chiên giòn phủ sốt socola đen bóng bẩy và cốm màu rực rỡ.",
        "Twin pack of fluffy yeast donuts dipped in Belgian chocolate glaze.",
        32000, False
    ),
    "BanhDonutSocolaTrang": (
        "White Chocolate Glazed Donut",
        "Bánh donut mềm xốp phủ socola trắng ngọt ngào thơm mùi sữa.",
        "Soft golden donut coated in sweet white chocolate frosting and sprinkles.",
        25000, False
    ),

    # 5. NƯỚC (7 items)
    "SuaTraiCayTHTrueJuiceMilk": (
        "TH True JUICE Milk Fruit Drink 300ml",
        "Nước uống sữa trái cây tự nhiên kết hợp sữa tươi sạch TH và nước ép trái cây thật.",
        "Natural fruit juice milk blending clean TH fresh milk and real fruit juice 300ml.",
        18000, False
    ),
    "NuocGaoRangTHTrueRice": (
        "TH True RICE Roasted Rice Drink 300ml",
        "Nước gạo rang tự nhiên thanh khiết, không thêm đường tinh luyện tốt cho sức khỏe.",
        "All-natural roasted rice drink with no added refined sugars, pure and healthy 300ml.",
        18000, False
    ),
    "TraXanhViChanhTHTrueTea": (
        "TH True TEA Lemon Green Tea 350ml",
        "Trà xanh tự nhiên vị chanh tươi mát lành giải nhiệt từ búp trà Shan Tuyết cổ thụ.",
        "Refreshing lemon green tea brewed from organic natural tea leaves 350ml.",
        15000, False
    ),
    "NuocEpCamDaoTHTrueJuice": (
        "TH True JUICE Orange Peach Juice 350ml",
        "Nước ép cam đào tự nhiên 100% nguyên chất, dồi dào Vitamin C tăng đề kháng.",
        "100% natural orange and peach blended juice rich in vitamin C 350ml.",
        22000, False
    ),
    "NuocEpTaoOiTHTrueJuice": (
        "TH True JUICE Apple Guava Juice 350ml",
        "Nước ép táo ổi nguyên chất mát lành, ngọt dịu tự nhiên không chất bảo quản.",
        "Pure apple and guava juice blend with natural gentle sweetness 350ml.",
        22000, False
    ),
    "TraDaoSaTraTacMatOngCozy": (
        "Cozy Peach Lemongrass & Kumquat Honey Tea",
        "Trà Cozy hương vị thảo mộc thanh mát: Đào sả thơm lừng và tắc mật ong dịu ngọt.",
        "Refreshing Cozy ready-to-drink tea bottle in peach lemongrass & kumquat honey.",
        16000, False
    ),
    "NuocTraiCayCapriSunAnhDao": (
        "Capri-Sun Cherry Fruit Juice Pouch",
        "Nước trái cây Capri-Sun vị anh đào nhập khẩu, túi thiếc tiện dụng thơm mát cho bé.",
        "Imported Capri-Sun cherry fruit pouch, fun and refreshing with no artificial colors.",
        20000, False
    ),

    # 6. SNACK (2 items)
    "BanhGaoOneOne": (
        "One One Crispy Rice Crackers 150g",
        "Bánh gạo nướng One One giòn tan thơm bùi vị gạo tự nhiên, ít béo.",
        "Crispy One One baked rice crackers, light and crunchy with natural roasted aroma.",
        28000, False
    ),
    "BanhComChayChaBong": (
        "Crispy Burnt Rice With Pork Floss",
        "Cơm cháy chiên giòn rụm ngập sốt mắm ớt cay nhẹ và chà bông heo hảo hạng.",
        "Savory Saigon crispy burnt rice crackers topped with rich sauce and pork floss.",
        35000, False
    ),

    # 7. PHỤ KIỆN (6 items)
    "MuSinhNhatHoatHinh": (
        "Cartoon Birthday Cone Hat",
        "Mũ sinh nhật chóp nón họa tiết hoạt hình ngộ nghĩnh đáng yêu cho tiệc mừng.",
        "Festive party cone hat adorned with cute cartoon prints and pompom accents.",
        15000, False
    ),
    "NenSoSinhNhatNhuVang": (
        "Gold Glitter Number Birthday Candle",
        "Nến sinh nhật hình số mạ nhũ vàng lấp lánh sang trọng cho chiếc bánh kem.",
        "Glamorous metallic gold glitter number birthday candle (0-9).",
        15000, False
    ),
    "PhaoBongSinhNhat": (
        "Birthday Cake Sparklers (Pack of 6)",
        "Gói 6 que pháo bông cắm bánh sinh nhật phát sáng lung linh an toàn.",
        "Pack of 6 indoor sparkling cake sparklers to illuminate your celebration.",
        30000, False
    ),
    "NenXoanSinhNhatNhieuMau": (
        "Spiral Colorful Birthday Candles (Box of 10)",
        "Hộp 10 cây nến xoắn sinh nhật sắc màu tươi vui rực rỡ.",
        "Box of 10 vibrant metallic spiral birthday candles with holders.",
        20000, False
    ),
    "NenChiSinhNhatAnhKim": (
        "Metallic Slim Birthday Candles (Pack of 12)",
        "Bộ 12 cây nến chỉ dáng thon dài ánh kim phong cách Hàn Quốc thanh lịch.",
        "Pack of 12 sleek minimalist metallic pencil candles in modern pastel and gold.",
        25000, False
    ),
    "BomCaiTocHappyBirthday": (
        "Happy Birthday Hairband",
        "Bờm cài tóc chữ Happy Birthday lấp lánh phụ kiện chụp ảnh nổi bật bữa tiệc.",
        "Glittering Happy Birthday headband, the ultimate celebration photo accessory.",
        25000, False
    )
}

# Verify that all 173 items have metadata
products_output = []
missing_metadata = []

for it in items:
    _id = it["id"]
    if _id not in PRODUCT_METADATA:
        missing_metadata.append(_id)
    else:
        name_en, desc_vi, desc_en, price, feat = PRODUCT_METADATA[_id]
        cat = it["category"]
        img_path = f"public/images/products/{cat}/{_id}.webp"
        products_output.append({
            "id": _id,
            "name_vi": it["name_vi"],
            "name_en": name_en,
            "category": cat,
            "category_name": it["category_name"],
            "category_name_en": it["category_name_en"],
            "price": price,
            "img": img_path,
            "featured": feat,
            "description_vi": desc_vi,
            "description_en": desc_en
        })

print(f"Total processed: {len(products_output)}")
print(f"Missing items: {len(missing_metadata)}")
if missing_metadata:
    print("Missing IDs:", missing_metadata)
    exit(1)

# Generate js/data/products.js
os.makedirs("js/data", exist_ok=True)
js_content = """/**
 * Poeme Japanese Bakery - Centralized Product Catalog Database
 * Total verified items: 173 across 7 categories
 * Generated according to Ponytail Audit Specification
 */

export const PRODUCTS = """ + json.dumps(products_output, ensure_ascii=False, indent=2) + """;

// Global window attachment for non-module script tag compatibility
if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
}
"""

with open("js/data/products.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Generated js/data/products.js successfully! File size:", os.path.getsize("js/data/products.js"), "bytes")
