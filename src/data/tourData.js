const IMG = '/images/suni/';
const img = (name) => `${IMG}${name}.webp`;

export const tourData = {
  name: "SUNI Studio Ninh Bình",
  tagline: "Ảnh viện gia đình & trẻ em",
  concept: "Cùng Suni lưu giữ những khoảnh khắc thật đẹp và nhận thật nhiều điều bất ngờ nhé!",
  logo: img('logo-suni'),
  hotline: "0366676766",
  hotlineFormatted: "0366 676 766",
  facebookLink: "https://www.facebook.com/SuniStudioNinhBinh",
  googleMapsLink: "https://maps.app.goo.gl/yhWhWZPXs6qJ7Bin8",

  // Địa chỉ hệ thống SUNI Studio
  branches: [
    {
      name: "Suni Studio Ninh Bình",
      address: "255 Nguyễn Công Trứ, Mỹ, Thanh Bình, Ninh Bình (cạnh tòa nhà 5 tầng)",
    },
    {
      name: "Cơ sở Thái Bình",
      address: "Số 12 Chu Văn An, Phường Trần Hưng Đạo, TP. Thái Bình",
    },
    {
      name: "Cơ sở Nam Định",
      address: "Khu 7 Yên Định, Hải Hậu, Nam Định (sân vận động cũ, sau tòa Dr.Eco)",
    },
  ],

  // Slide hero: ảnh ngang cho desktop, ảnh dọc cho mobile
  hero: {
    title: "Lưu giữ khoảnh khắc,",
    titleAccent: "trọn vẹn yêu thương.",
    description: "Suni Studio đồng hành cùng gia đình lưu giữ những khoảnh khắc đáng nhớ của bé yêu và những giây phút sum vầy qua từng khung hình.",
    ctaPrimary: "Khám phá bộ ảnh",
    ctaSecondary: "Liên hệ Suni",
    slides: [
      { wide: img('dgd-04'), tall: img('be-06'), alt: "Đại gia đình mặc áo dài đỏ chụp tại Suni Studio", posWide: "center 25%", posTall: "center 30%" },
      { wide: img('dgd-07'), tall: img('be-12'), alt: "Gia đình trẻ trong bộ ảnh phông tối tại Suni Studio", posWide: "center 30%", posTall: "center 35%" },
      { wide: img('dgd-05'), tall: img('bau-01'), alt: "Gia đình nhiều thế hệ trong bộ ảnh trắng", posWide: "center 25%", posTall: "center 20%" },
      { wide: img('be-10'), tall: img('be-13'), alt: "Bé trong concept Hỷ Lân tại Suni Studio", posWide: "center 40%", posTall: "center 40%" },
      { wide: img('dgd-03'), tall: img('be-07'), alt: "Gia đình sum vầy chụp ảnh tại Suni Studio", posWide: "center 25%", posTall: "center 30%" },
    ],
  },

  highlights: {
    subtitle: "Cùng Suni lưu giữ những khoảnh khắc thật đẹp và nhận thật nhiều điều bất ngờ nhé!",
    headline: "Khoảnh Khắc Của Suni",
    subHeadline: "Mỗi khung hình là một kỷ niệm của gia đình bạn.",
    linkText: "Xem tất cả bộ ảnh",
    images: [
      { src: img('dgd-03'), alt: "Gia đình nhiều thế hệ chụp ảnh tại Suni Studio", pos: "center 30%" },
      { src: img('be-10'), alt: "Bé trong bộ ảnh concept Hỷ Lân", pos: "center 45%" },
      { src: img('dgd-07'), alt: "Gia đình trẻ cùng các bé trong bộ ảnh trang phục đen trắng", pos: "center 35%" },
    ],
  },

  // Mục dịch vụ + cơ sở (thay cho lịch trình cũ)
  services: {
    title: "Dịch Vụ Của Suni",
    description: "Suni Studio đồng hành cùng bố mẹ và gia đình trong từng cột mốc đáng nhớ",
    items: [
      "Chụp ảnh em bé",
      "Chụp ảnh gia đình",
      "Chụp ảnh newborn",
    ],
    branchesLabel: "Hệ thống Suni Studio:",
    collage: [
      { src: img('be-12'), alt: "Bé ngồi giữa những chú gấu bông", pos: "center 30%" },
      { src: img('be-07'), alt: "Bé và người thân trong concept Nguyệt Nhi", pos: "center 35%" },
      { src: img('bau-02'), alt: "Bộ ảnh bầu của mẹ với hoa cẩm tú cầu", pos: "center 30%" },
    ],
  },

  // Catalog nhóm dịch vụ (thay cho bảng giá cũ — không hiển thị giá)
  catalog: {
    title: "Catalog Dịch Vụ",
    description: "Ba nhóm dịch vụ chụp ảnh dành cho em bé và gia đình tại Suni Studio",
    items: [
      {
        id: "em-be",
        title: "Chụp ảnh em bé",
        desc: "Lưu giữ nụ cười, cột mốc phát triển và những khoảnh khắc đáng yêu của bé qua từng concept.",
        cta: "Khám phá bộ ảnh",
        main: { src: img('be-12'), alt: "Bé ngồi giữa những chú gấu bông", pos: "center 28%" },
        thumbs: [
          { src: img('be-13'), alt: "Bé tròn 2 tuổi bên bóng bay" },
          { src: img('be-04'), alt: "Bé trong concept Hỷ Lân" },
          { src: img('be-16'), alt: "Bé trong hộp giấy cùng gấu bông" },
        ],
      },
      {
        id: "gia-dinh",
        title: "Chụp ảnh gia đình",
        desc: "Những bộ ảnh sum vầy cho gia đình trẻ và đại gia đình nhiều thế hệ.",
        cta: "Tìm hiểu dịch vụ",
        main: { src: img('dgd-07'), alt: "Gia đình trẻ trong bộ ảnh phông tối", pos: "center 30%" },
        thumbs: [
          { src: img('album-06'), alt: "Album ảnh gia đình tông nâu" },
          { src: img('dgd-04'), alt: "Đại gia đình áo dài đỏ" },
          { src: img('dgd-01'), alt: "Đại gia đình trong bộ ảnh trắng" },
        ],
      },
      {
        id: "newborn",
        title: "Chụp ảnh newborn",
        desc: "Những khung hình dịu dàng, ấm áp đón thiên thần nhỏ cùng bố mẹ.",
        cta: "Khám phá bộ ảnh",
        // TODO: thay bằng ảnh newborn thật khi studio cung cấp (hiện tạm dùng ảnh bầu)
        main: { src: img('bau-01'), alt: "Bộ ảnh bầu tông kem nhẹ nhàng", pos: "center 22%" },
        thumbs: [
          { src: img('bau-02'), alt: "Mẹ bầu bên hoa cẩm tú cầu" },
          { src: img('bau-05'), alt: "Mẹ bầu với tà váy voan dài" },
          { src: img('bau-03'), alt: "Chân dung mẹ bầu" },
        ],
      },
    ],
  },

  // Mosaic ảnh (Activities)
  mosaic: {
    title: "Những Khung Hình Của Suni",
    description: "Từ nụ cười của bé yêu đến những giây phút sum vầy của cả gia đình",
  },

  gallery: {
    title: "Hình ảnh thực tế từ các bộ ảnh của Suni Studio",
    heading: "Thư Viện Ảnh",
    moreTitle: "Thêm nhiều khoảnh khắc từ Suni",
    // Danh sách dùng chung cho lưới ảnh và Lightbox
    images: [
      { src: img('bau-01'), title: "Bộ ảnh bầu tông kem với hoa cẩm tú cầu", category: "Mẹ bầu" },
      { src: img('be-14'), title: "Nụ cười rạng rỡ của bé bên gấu bông", category: "Em bé" },
      { src: img('dgd-04'), title: "Đại gia đình trong trang phục áo dài đỏ", category: "Đại gia đình" },
      { src: img('be-07'), title: "Bé và người thân trong concept Nguyệt Nhi", category: "Em bé" },
      { src: img('be-13'), title: "Bé tròn 2 tuổi bên bóng bay", category: "Em bé" },
      { src: img('dgd-07'), title: "Gia đình trẻ trong bộ ảnh phông tối", category: "Gia đình" },
      { src: img('be-12'), title: "Bé ngồi giữa những chú gấu bông", category: "Em bé" },
      { src: img('dgd-03'), title: "Gia đình nhiều thế hệ trong bộ ảnh trắng", category: "Đại gia đình" },
      { src: img('bau-02'), title: "Mẹ bầu bên hoa cẩm tú cầu", category: "Mẹ bầu" },
      { src: img('be-02'), title: "Bé trong concept Hỷ Lân", category: "Em bé" },
      { src: img('album-01'), title: "Album gia đình Giai điệu hạnh phúc", category: "Gia đình" },
      { src: img('be-17'), title: "Concept Colorful sinh nhật 2 tuổi", category: "Em bé" },
      { src: img('dgd-01'), title: "Đại gia đình sum vầy trong bộ ảnh trắng", category: "Đại gia đình" },
      { src: img('bau-05'), title: "Mẹ bầu với tà váy voan dài", category: "Mẹ bầu" },
      { src: img('be-01'), title: "Bé cùng người thân trong concept Nguyệt Nhi", category: "Em bé" },
      { src: img('album-06'), title: "Album ảnh gia đình tông nâu", category: "Gia đình" },
      { src: img('dgd-05'), title: "Đại gia đình chụp ảnh tông xanh", category: "Đại gia đình" },
      { src: img('be-16'), title: "Bé trong hộp giấy cùng gấu bông", category: "Em bé" },
      { src: img('bau-03'), title: "Chân dung mẹ bầu", category: "Mẹ bầu" },
      { src: img('dgd-06'), title: "Đại gia đình tông be nhẹ nhàng", category: "Đại gia đình" },
      { src: img('be-04'), title: "Bé bên chú lân xanh", category: "Em bé" },
      { src: img('album-02'), title: "Album gia đình Simple Love", category: "Gia đình" },
      { src: img('be-19'), title: "Bé vui đùa cùng bóng bay", category: "Em bé" },
      { src: img('dgd-02'), title: "Đại gia đình hòa mình trong bộ ảnh cổ điển", category: "Đại gia đình" },
      { src: img('bau-04'), title: "Mẹ bầu nhắm mắt thư thái", category: "Mẹ bầu" },
      { src: img('be-11'), title: "Góc studio gấu bông ấm áp", category: "Em bé" },
      { src: img('album-05'), title: "Album Khúc giao mùa hạnh phúc", category: "Gia đình" },
      { src: img('be-05'), title: "Bé âu yếm bên người thân", category: "Em bé" },
      { src: img('bau-06'), title: "Mẹ bầu trong ánh sáng ấm", category: "Mẹ bầu" },
      { src: img('be-10'), title: "Bé ngồi trên chú lân trong concept Hỷ Lân", category: "Em bé" },
      { src: img('album-07'), title: "Album gia đình Mây xanh mùa hạ", category: "Gia đình" },
      { src: img('be-18'), title: "Bé cười tươi bên gấu bông", category: "Em bé" },
      { src: img('be-08'), title: "Bé bước đi bên người thân", category: "Em bé" },
      { src: img('album-08'), title: "Album gia đình tông xanh lá", category: "Gia đình" },
      { src: img('be-20'), title: "Bé sinh nhật bên bóng bay số 2", category: "Em bé" },
      { src: img('be-03'), title: "Bé bên lân xanh ngày Trung thu", category: "Em bé" },
      { src: img('be-09'), title: "Bé múa cùng người thân", category: "Em bé" },
      { src: img('album-03'), title: "Album gia đình Mono Family", category: "Gia đình" },
      { src: img('album-04'), title: "Album gia đình Trái tim nhỏ", category: "Gia đình" },
    ],
  },

  locationSection: {
    badge: "LIÊN HỆ",
    title: "Kết nối cùng Suni Studio",
    intro: "Ghé thăm Suni Studio hoặc liên hệ để được tư vấn bộ ảnh phù hợp cho bé yêu và gia đình bạn.",
    cta: "XEM BẢN ĐỒ GOOGLE MAPS",
    background: img('collage-suni'),
  },

  faqs: {
    badge: "FAQ",
    title: "CÂU HỎI THƯỜNG GẶP",
    items: [
      {
        q: "Suni Studio chụp những loại ảnh nào?",
        a: "Suni Studio chuyên chụp ảnh em bé, ảnh gia đình và ảnh newborn, đồng hành cùng bố mẹ lưu giữ những cột mốc phát triển của bé và những giây phút sum vầy của cả nhà."
      },
      {
        q: "Suni Studio có những cơ sở nào?",
        a: "Hệ thống SUNI Studio hiện có: Suni Studio Ninh Bình (255 Nguyễn Công Trứ, Mỹ, Thanh Bình, Ninh Bình, cạnh tòa nhà 5 tầng); Cơ sở Thái Bình (Số 12 Chu Văn An, Phường Trần Hưng Đạo, TP. Thái Bình); Cơ sở Nam Định (Khu 7 Yên Định, Hải Hậu, Nam Định, sân vận động cũ, sau tòa Dr.Eco)."
      },
      {
        q: "Gia đình nhiều thế hệ có thể chụp chung không?",
        a: "Suni có các bộ ảnh đại gia đình với nhiều thế hệ cùng chụp chung. Bạn có thể xem các mẫu ảnh thực tế tại mục Hình ảnh hoặc trên fanpage Facebook của Suni."
      },
      {
        q: "Suni có chụp ảnh bầu không?",
        a: "Thư viện ảnh của Suni có các bộ ảnh bầu nhẹ nhàng, ấm áp. Bạn vui lòng liên hệ hotline hoặc fanpage để được tư vấn chi tiết."
      },
      {
        q: "Tôi muốn biết chi tiết gói chụp và đặt lịch thì liên hệ thế nào?",
        a: "Bạn có thể gọi hotline 0366 676 766 hoặc nhắn tin qua fanpage Facebook SUNI Studio Ninh Bình, đội ngũ Suni sẽ tư vấn thông tin gói chụp và hỗ trợ đặt lịch."
      },
      {
        q: "Làm sao để xem thêm nhiều mẫu ảnh của Suni?",
        a: "Bạn có thể xem thư viện ảnh ngay trên website này hoặc truy cập fanpage Facebook SUNI Studio Ninh Bình để cập nhật thêm các bộ ảnh mới."
      }
    ]
  },

  finalCta: {
    kicker: "Cùng Suni lưu giữ khoảnh khắc",
    heading: "NHỮNG KHOẢNH KHẮC ĐẸP\nBẮT ĐẦU TỪ HÔM NAY",
    subheading: "Cùng Suni lưu giữ những khoảnh khắc thật đẹp và nhận thật nhiều điều bất ngờ nhé!",
    ctaPrimary: "LIÊN HỆ SUNI",
    ctaSecondary: "XEM FANPAGE",
    background: img('be-11'),
  },

  formSection: {
    cursiveHeader: "Kết nối cùng Suni Studio",
    heading: "ĐĂNG KÝ NHẬN TƯ VẤN",
    subheading: "Để lại thông tin, đội ngũ Suni sẽ liên hệ để tư vấn bộ ảnh phù hợp cho bé yêu và gia đình bạn.",
    cta: "GỬI THÔNG TIN CHO SUNI",
    hotlineText: "HOTLINE: 0366 676 766",
    image: img('be-06'),
    imageAlt: "Bé và người thân trong bộ ảnh concept Nguyệt Nhi",
    imageTitle: "Cùng Suni lưu giữ khoảnh khắc",
    imageText: "Những khung hình trọn vẹn yêu thương dành cho bé yêu và gia đình bạn",
  },
};


