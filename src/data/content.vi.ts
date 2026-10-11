import type { Content, DeepPartial } from '../hooks/useContent'

/** Vietnamese copy. Keys mirror content.ts; arrays are matched by position. Anything missing stays English. */
export const VI: DeepPartial<Content> = {
  NAV: [
    { label: 'Giải pháp', items: [{ label: 'Tất cả giải pháp', description: 'Sáu sản phẩm số do sinh viên xây dựng' }, { description: 'Điều phối cứu hộ lũ lụt' }, { description: 'Dạy lập trình rảnh tay' }] },
    {
      label: 'Công ty',
      items: [
        { label: 'Sứ mệnh', description: 'Vì sao chúng tôi tồn tại và hướng đi' },
        { label: 'Đối tác', description: 'Trường đại học và doanh nghiệp đồng hành' },
        { label: 'Đánh giá', description: 'Đối tác và người dùng nói gì' },
        { label: 'Đội ngũ', description: 'Năm người đứng sau Odylytics' },
      ],
    },
    { label: 'Giải thưởng' },
    { label: 'Tin tức' },
    { label: 'Liên hệ' },
  ],

  HERO: {
    eyebrow: 'Giải pháp số do sinh viên xây dựng',
    headlineTop: 'Phần mềm của sinh viên',
    headlineBottom: 'thay lao động bằng',
    rotatingWords: ['logic', 'tốc độ', 'quy mô', 'hiểu biết'],
    srHeadline: 'Phần mềm của sinh viên thay lao động bằng logic, tốc độ, quy mô và hiểu biết.',
    note: 'Ý tưởng sinh viên. Sản phẩm sẵn sàng ra thị trường.',
    subheadline:
      'Odylytics đưa các giải pháp do sinh viên xây dựng ra thị trường: sản phẩm số giúp nâng cao năng suất bằng cách thay lao động thủ công, lặp đi lặp lại bằng logic.',
    holdCta: { label: 'Nhấn giữ để khám phá', doneLabel: 'Đi thôi' },
    marquee: ['Phân tích AI', 'Giám sát IoT', 'Cảnh báo sớm', 'Nền tảng dữ liệu', 'Hỗ trợ quyết định', 'Thiết kế bao trùm'],
  },

  MISSION: {
    eyebrow: 'Sứ mệnh',
    lead: 'Từ ý tưởng sinh viên.',
    main: 'Ra thị trường.',
    mission:
      'Chúng tôi giúp sinh viên đưa giải pháp số của mình thành sản phẩm ra thị trường. Chúng tôi xây phần mềm nâng cao năng suất bằng cách thay lao động thủ công, lặp đi lặp lại bằng logic.',
    vision:
      'Một thế giới nơi ý tưởng hay của sinh viên trở thành sản phẩm thật được người thật sử dụng, và công việc thường nhật do logic được thiết kế tốt đảm nhận để con người tập trung vào điều chỉ con người làm được.',
    pillarsHeading: 'Định hướng của chúng tôi',
    pillars: [
      { title: 'Đưa sản phẩm sinh viên ra thị trường', text: 'Cho các giải pháp do sinh viên xây dựng sự hỗ trợ về sản phẩm, thiết kế và kinh doanh để đến được khách hàng thật, thay vì dừng lại ở giảng đường.' },
      { title: 'Thay lao động bằng logic', text: 'Xây sản phẩm tự động hóa công việc lặp lại, từ điều phối đội cứu hộ đến dạy lập trình, để con người dành thời gian cho phán đoán và sự quan tâm.' },
      { title: 'Xây một nền tảng dùng chung', text: 'Giữ một nền tảng kỹ thuật duy nhất đằng sau mọi sản phẩm, để mỗi giải pháp mới ra mắt nhanh hơn và học được từ các giải pháp khác.' },
      { title: 'Lớn lên cùng đối tác', text: 'Hợp tác với trường đại học, cơ quan nhà nước và doanh nghiệp trong nước lẫn quốc tế để thử nghiệm, tài trợ và phân phối sản phẩm.' },
    ],
  },

  SOLUTIONS_HEADING: {
    eyebrow: 'Giải pháp số cốt lõi',
    lead: 'Sáu giải pháp.',
    main: 'Một tầng trí tuệ.',
    intro: 'Mỗi sản phẩm của Odylytics bắt đầu từ một giải pháp của sinh viên cho vấn đề có thật, rồi được hoàn thiện thành thứ người ta có thể dùng và trả tiền.',
  },
  SOLUTIONS: [
    { oneLiner: 'Điều phối cứu hộ lũ lụt theo thời gian thực cho người dân, đội cứu hộ và điều phối viên.', description: 'Người dân gửi yêu cầu SOS, đội cứu hộ thấy ngay trên bản đồ ngập lụt trực tiếp, và điều phối viên cử lực lượng từ một màn hình chung. Có cả web và di động, đã thử nghiệm trong mùa lũ ở Việt Nam.', category: 'Ứng phó thiên tai' },
    { oneLiner: 'Lập trình kéo thả, rảnh tay cho người khuyết tật chi trên.', description: 'Webcam theo dõi đầu người học, cử chỉ đầu di chuyển và nhấp chuột. Chương trình được ghép từ các khối kéo thả, nên có thể lập trình mà không cần bàn phím hay chuột.', category: 'Giáo dục bao trùm' },
    {},
    {},
    {},
    {},
  ],

  FEATURED_HEADING: { eyebrow: 'Giải pháp nổi bật', lead: 'Ba giải pháp.', main: 'Xây để ra mắt.' },
  FEATURED: [
    {
      badge: 'Chủ lực',
      tagline: 'Hệ thống điều phối cứu hộ lũ lụt đa nền tảng đang vận hành tại Việt Nam.',
      problem: 'Khi lũ về, nạn nhân, đội cứu hộ và điều phối viên thường bị cắt đứt liên lạc. AquaGuard kết nối cả ba theo thời gian thực, trên web lẫn di động.',
      features: [
        { title: 'Yêu cầu SOS', text: 'Người dân gửi lời cầu cứu đến tay đội cứu hộ ngay lập tức.' },
        { title: 'Bản đồ lũ trực tiếp', text: 'Một bức tranh cập nhật về vùng ngập và các yêu cầu cứu trợ.' },
        { title: 'Điều phối cứu hộ', text: 'Điều phối viên và đội cứu hộ làm việc trên cùng một màn hình trực tiếp.' },
        { title: 'Hướng dẫn an toàn', text: 'Chỉ dẫn rõ ràng cho người dân trong vùng bị ảnh hưởng.' },
      ],
      metrics: [{ label: 'Giải thưởng cuộc thi' }, { label: 'Nhóm đối tượng được kết nối' }, { label: 'Nền tảng: web & di động' }],
      cta: 'Tìm hiểu thêm',
    },
    {
      badge: 'Chủ lực',
      tagline: 'Nền tảng dạy lập trình kéo thả dành cho người khuyết tật chi trên.',
      problem: 'Học lập trình thường giả định có bàn phím và chuột, khiến người không dùng được tay bị bỏ lại. EnableCode cho phép họ viết và chạy code hoàn toàn rảnh tay.',
      features: [
        { title: 'Nhận diện khuôn mặt bằng AI', text: 'Webcam theo dõi chuyển động đầu theo thời gian thực.' },
        { title: 'Con trỏ bằng cử chỉ đầu', text: 'Cử chỉ đầu di chuyển và nhấp con trỏ.' },
        { title: 'Lập trình kéo thả', text: 'Chương trình ghép từ các khối thay vì gõ cú pháp.' },
        { title: 'Chạy code rảnh tay', text: 'Viết, chạy và kiểm thử code mà không chạm vào thiết bị.' },
      ],
      metrics: [{ label: 'Lập trình rảnh tay' }, { label: 'Fessior DevCamp 2026' }],
      cta: 'Tìm hiểu thêm',
    },
    { badge: 'Sắp tới', cta: 'Tìm hiểu thêm' },
  ],

  RECOGNITION_HEADING: {
    eyebrow: 'Giải thưởng',
    lead: 'Được công nhận độc lập.',
    main: 'Ghi nhận vì tác động.',
    intro: 'Bốn giải thưởng từ các cuộc thi tại Việt Nam, đều của cùng một đội.',
  },
  RECOGNITION: [
    { items: [{ title: 'Giải Nhất' }, { title: 'Giải Nhất' }, { title: 'Giải Nhì' }] },
    { items: [{ title: 'Giải Nhất' }] },
  ],
  GALLERY_HEADING: 'Phía sau những chiến thắng',
  GALLERY: [
    { alt: 'Cả đội làm việc cùng nhau quanh những chiếc laptop', caption: 'Cùng xây dựng AquaGuard' },
    { alt: 'Cả đội cầm giấy chứng nhận EPICS', caption: 'Giấy chứng nhận EPICS' },
    { alt: 'Cả đội chụp trước banner Tech Planter', caption: 'Tech Planter' },
  ],

  PARTNERS_HEADING: {
    eyebrow: 'Đối tác',
    lead: 'Được các tổ chức tin tưởng.',
    main: 'Xây cùng các trường đại học.',
    intro: 'Chúng tôi xây dựng cùng các trường đại học và doanh nghiệp ủng hộ đổi mới sáng tạo của sinh viên.',
  },
  PARTNERS: [{ type: 'Học thuật' }, { type: 'Học thuật' }, { type: 'Doanh nghiệp' }, { type: 'Học thuật' }, { type: 'Học thuật' }, { type: 'Học thuật' }, { type: 'Học thuật' }],
  STATS: [{ label: 'Giải thưởng cuộc thi' }, { label: 'Giải pháp số' }, { label: 'Thành viên sinh viên' }, { label: 'Tổ chức đối tác' }],

  TESTIMONIALS_HEADING: { eyebrow: 'Đánh giá', lead: 'Những người ngoài thực địa', main: 'đã tin vào AquaGuard.' },

  TEAM_HEADING: {
    eyebrow: 'Đội ngũ cốt lõi',
    lead: 'Năm nhà đồng sáng lập.',
    main: 'Những người đứng sau Odylytics.',
    intro: 'Năm sinh viên cùng xây dựng sản phẩm, kỹ thuật, thiết kế và marketing.',
  },
  TEAM: [
    { role: 'Giám đốc điều hành (CEO)', shortRole: 'CEO', bio: 'Dẫn dắt tầm nhìn và chiến lược của Odylytics, xây dựng quan hệ đối tác để đưa giải pháp đến những cộng đồng cần nhất.', responsibilities: ['Đặt tầm nhìn, chiến lược và lộ trình công ty', 'Dẫn dắt hợp tác với trường đại học, chính quyền và nhà tài trợ', 'Đại diện Odylytics tại các cuộc thi, sự kiện và trên báo chí'] },
    { role: 'Giám đốc công nghệ (CTO)', shortRole: 'CTO', bio: 'Dẫn dắt công nghệ và lõi AI dùng chung, thiết kế các mô hình biến dữ liệu cảm biến và cộng đồng thành dự báo kịp thời.', responsibilities: ['Phụ trách lõi AI dùng chung và kiến trúc hệ thống', 'Huấn luyện và đánh giá mô hình cho lũ lụt, không khí và khả năng tiếp cận', 'Rà soát code, bảo mật và tuyển dụng kỹ thuật'] },
    { role: 'Giám đốc sản phẩm (CPO)', shortRole: 'CPO', bio: 'Thiết kế trải nghiệm dễ tiếp cận, lấy con người làm trung tâm để mọi giải pháp vẫn đơn giản dù trong khủng hoảng.', responsibilities: ['Phụ trách lộ trình sản phẩm của mọi giải pháp Odylytics', 'Nghiên cứu người dùng với đội cứu hộ và người khuyết tật', 'Dẫn dắt thiết kế giao diện và hệ thống thiết kế của Odylytics'] },
    { role: 'Trưởng nhóm Marketing', shortRole: 'Marketing', bio: 'Định hình cách Odylytics tiếp cận chính quyền, đối tác và cộng đồng, và kể câu chuyện đằng sau tác động của chúng tôi.', responsibilities: ['Phụ trách thương hiệu, website và mạng xã hội', 'Đưa câu chuyện đến báo chí và quản lý trang tin tức', 'Chuẩn bị hồ sơ dự thi và tài liệu cho đối tác'] },
    { role: 'Kỹ sư phần mềm', shortRole: 'Kỹ sư', bio: 'Xây dựng các nền tảng đằng sau giải pháp, từ luồng dữ liệu thời gian thực đến bảng điều khiển cho đội cứu hộ.', responsibilities: ['Xây ứng dụng web và di động cho AquaGuard và EnableCode', 'Duy trì luồng dữ liệu và bản đồ trực tiếp', 'Phát hành phiên bản và theo dõi hệ thống'] },
  ],
  TEAM_GROUPS: { cofounders: { heading: 'Đồng sáng lập', intro: 'Năm sinh viên đã sáng lập Odylytics.' }, advisors: { heading: 'Cố vấn', intro: 'Những người hướng dẫn và chuyên gia đồng hành cùng chúng tôi.' }, members: { heading: 'Thành viên', intro: 'Sinh viên và cộng sự cùng xây dựng với chúng tôi.' } },
  TEAM_TEASER: { eyebrow: 'Đội ngũ cốt lõi', lead: 'Năm nhà đồng sáng lập.', main: 'Một sứ mệnh.', intro: 'Gặp những người đứng sau Odylytics, vai trò của từng người và cách họ làm việc cùng nhau.' },

  NEWS_HEADING: { eyebrow: 'Tin tức', lead: 'Mới nhất từ Odylytics.', main: 'Giải thưởng, báo chí và cột mốc.', intro: 'Kết quả cuộc thi, tin báo chí và cập nhật từ đội ngũ.' },
  POSTS: [
    { title: 'Nhà sáng lập của chúng tôi nhận học bổng Quantum', excerpt: 'Học bổng hỗ trợ giai đoạn tiếp theo của Odylytics, từ nghiên cứu sản phẩm đến đưa giải pháp đến nhiều cộng đồng hơn.', category: 'Milestones' },
    { title: 'Odylytics lên báo Thanh Niên', excerpt: 'Nhật báo quốc gia kể câu chuyện về một nhóm sinh viên xây dựng AI cho lũ lụt và khả năng tiếp cận.', category: 'Press' },
    { title: 'AquaGuard đoạt giải Nhất cuộc thi thuyết trình OISP', excerpt: 'Nền tảng điều phối cứu hộ lũ lụt của chúng tôi giành giải nhất vòng thuyết trình năm 2025.', category: 'Awards' },
    { title: 'AquaGuard đoạt giải Nhất cuộc thi EPICS lần thứ 8', excerpt: 'Ban giám khảo ghi nhận cách hệ thống kết nối nạn nhân, đội cứu hộ và điều phối viên theo thời gian thực.', category: 'Awards' },
    { title: 'AquaGuard giành giải Nhì Bách Khoa Innovation', excerpt: 'Về nhì trong các dự án đổi mới sáng tạo tại Trường Đại học Bách Khoa TP.HCM.', category: 'Awards' },
    { title: 'EnableCode vô địch Fessior DevCamp 2026 Prometheus', excerpt: 'Nền tảng lập trình rảnh tay cho người khuyết tật chi trên của chúng tôi giành giải nhất.', category: 'Awards' },
    { title: 'Đội ngũ mang về bốn giải thưởng trong một năm', excerpt: 'Nhìn lại các cuộc thi, những đêm thức khuya và người cố vấn đứng sau kết quả năm nay.', category: 'Milestones' },
  ],

  CONTACT: {
    eyebrow: 'Liên hệ',
    lead: 'Cùng xây điều có ý nghĩa.',
    main: 'Cùng nhau.',
    subcopy: 'Hợp tác, thí điểm hay báo chí, chúng tôi luôn muốn lắng nghe bạn.',
  },

  FOOTER_NOTE:
    'AquaGuard, EnableCode, AirGuard, Includio, RooMie và HearWork là sản phẩm của Odylytics. Giải thưởng và tin báo chí thuộc về đơn vị tổ chức và tòa soạn tương ứng. Một số sản phẩm đang trong giai đoạn thí điểm hoặc nguyên mẫu và tính năng có thể thay đổi.',
  FOOTER_GROUPS: [
    { heading: 'Giải pháp' },
    { heading: 'Công ty', links: [{ label: 'Sứ mệnh' }, { label: 'Đội ngũ cốt lõi' }, { label: 'Giải thưởng' }, { label: 'Đối tác' }] },
    { heading: 'Tin tức', links: [{ label: 'Tất cả tin tức' }, { label: 'Giải thưởng' }, { label: 'Báo chí' }, { label: 'Cột mốc' }] },
    { heading: 'Liên hệ', links: [{ label: 'Hợp tác' }, { label: 'Thí điểm' }, { label: 'Báo chí' }] },
  ],
  LEGAL_LINKS: [{ label: 'Chính sách bảo mật' }, { label: 'Điều khoản sử dụng' }, { label: 'Chính sách cookie' }, { label: 'Sơ đồ trang' }, { label: 'Đăng nhập thành viên' }],
}
