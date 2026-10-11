export type NavItem = { label: string; href: string; description?: string }

export type Solution = {
  /** True while real copy is missing: the card shows an 'Updating soon' frame. */
  soon?: boolean
  id: string
  name: string
  logo: string | null
  oneLiner: string
  /** 2–3 sentence project summary shown on the solution card. */
  description: string
  category: string
  flagship: boolean
}

export type Feature = { title: string; text: string }
export type Metric = { value: string; label: string }

export type FeaturedSolution = {
  soon?: boolean
  id: string
  name: string
  logo: string
  badge: string
  tagline: string
  problem: string
  features: Feature[]
  metrics: Metric[]
  cta: string
}

export type RecognitionType = 'AWARD' | 'CERTIFICATION' | 'ACCELERATOR'

export type Recognition = {
  type: RecognitionType
  /** Competition placing shown in the medal badge when there is no issuer logo, e.g. '1st'. */
  place?: string
  title: string
  issuer: string
  year?: string
  context?: string
  issuerLogo: string | null
  /** Photo of the award moment; a framed placeholder is shown until set. */
  image?: string | null
  /** Link to the press article or announcement. */
  href?: string | null
}

export type RecognitionGroup = {
  solutionId: string
  solutionName: string
  items: Recognition[]
}

export type Partner = {
  name: string
  type: string
  /** UTS and HCMUT sit side by side in the centre of the partner row. */
  featured?: boolean
  logo: string | null
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  avatar: string | null
  solution: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  photo: string | null
  linkedin: string | null
  /** URL slug of the member's own profile page: #/team/<slug>. */
  slug: string
  /** One-word title shown under the portrait, e.g. 'CEO'. */
  shortRole: string
  /** Concrete day-to-day responsibilities. */
  responsibilities: string[]
}

export type PostCategory = 'Awards' | 'Press' | 'Milestones' | 'Product'

export type Post = {
  id: string
  title: string
  excerpt: string
  category: PostCategory
  /** Display date, e.g. 'March 2026'. Omitted until confirmed. */
  date?: string
  /** Cover image; a branded placeholder is shown until set. */
  image?: string | null
  /** External article / announcement link. */
  href?: string | null
  source?: string
  featured?: boolean
}

export type Pillar = { title: string; text: string }

export const BRAND = {
  wordmark: '/assets/brand/odylytics-wordmark.svg',
  wordmarkDark: '/assets/brand/odylytics-wordmark-dark.svg',
  symbol: '/assets/brand/odylytics-symbol.svg',
  symbolDark: '/assets/brand/odylytics-symbol-dark.svg',
}

export type NavGroup = { label: string; href?: string; items?: NavItem[] }

/** Top navigation: groups with `items` render as dropdowns. */
export const NAV: NavGroup[] = [
  {
    label: 'Solutions',
    items: [
      { label: 'All solutions', href: '#solutions', description: 'Six digital products built by students' },
      { label: 'AquaGuard', href: '#featured', description: 'Flood rescue coordination' },
      { label: 'EnableCode', href: '#featured', description: 'Hands-free coding education' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'Mission', href: '#mission', description: 'Why we exist and where we are heading' },
      { label: 'Partners', href: '#partners', description: 'Universities and companies we build with' },
      { label: 'Testimonials', href: '#testimonials', description: 'What partners and users say' },
      { label: 'Team', href: '#/team', description: 'The five builders behind Odylytics' },
    ],
  },
  { label: 'Prizes', href: '#recognition' },
  { label: 'News', href: '#/blog' },
  { label: 'Contact', href: '#contact' },
]

// ─── 1. Hero ────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: 'Student-built digital solutions',
  // Option A (selected). Alternatives from CONTENT_OUTLINE.md §1:
  //   B. Intelligent solutions for safer, smarter communities.
  //   C. We build AI that works when it matters most.
  headlineTop: 'Student-built software',
  headlineBottom: 'that replaces labour with',
  rotatingWords: ['logic', 'speed', 'scale', 'insight'],
  srHeadline: 'Student-built software that replaces labour with logic, speed, scale and insight.',
  note: 'Student ideas. Market-ready products.',
  // TODO(content): confirm what Odylytics provides and to whom.
  subheadline:
    'Odylytics takes solutions built by students to market: digital products that raise productivity by replacing manual, repetitive labour with logic.',
  holdCta: { label: 'Hold to find out', doneLabel: "Let's go", target: '#solutions' },
  // TODO(content): confirm marquee keywords.
  marquee: ['AI analytics', 'IoT monitoring', 'Early warning', 'Data platforms', 'Decision support', 'Inclusive design'],
}

// ─── 1b. Mission & direction ────────────────────────────────────────────────

export const MISSION = {
  eyebrow: 'Our mission',
  lead: 'From student idea.',
  main: 'To market.',
  // TODO(content): confirm wording of the mission and vision with the founders.
  mission:
    'We help students turn their digital solutions into products that go to market. We build software that raises productivity by replacing manual, repetitive labour with logic.',
  vision:
    'A world where a good idea from a student becomes a real product used by real people, and where routine work is done by well-designed logic so people can focus on what only they can do.',
  pillarsHeading: 'Where we are heading',
  pillars: [
    {
      title: 'Take student work to market',
      text: 'Give student-built solutions the product, design and business support they need to reach real customers, not stay in a classroom.',
    },
    {
      title: 'Replace labour with logic',
      text: 'Build products that automate repetitive work, from coordinating rescue teams to teaching code, so people spend time on judgement and care.',
    },
    {
      title: 'Build one shared core',
      text: 'Keep a single technical foundation behind every product, so each new solution launches faster and learns from the others.',
    },
    {
      title: 'Grow through partnerships',
      text: 'Work with universities, public bodies and companies in Vietnam and abroad to test, fund and distribute what we build.',
    },
  ] as Pillar[],
}

// ─── 2. Core Digital Solutions ──────────────────────────────────────────────

export const SOLUTIONS_HEADING = {
  eyebrow: 'Core digital solutions',
  lead: 'Six solutions.',
  main: 'One intelligence layer.',
  // TODO(content): confirm intro sentence.
  intro: 'Every Odylytics product starts as a student solution to a real problem and is shaped into something people can use and pay for.',
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'aquaguard',
    name: 'AquaGuard',
    logo: '/assets/solutions/aquaguard.png',
    oneLiner: 'Real-time flood rescue coordination for victims, rescue teams and coordinators.',
    description:
      'Victims send SOS requests, rescue teams see them on a live flood map, and coordinators dispatch help from one shared view. Built for web and mobile and tested in Vietnam’s flood season.',
    category: 'Disaster response',
    flagship: true,
  },
  {
    id: 'enablecode',
    name: 'EnableCode',
    logo: '/assets/solutions/enablecode.png',
    oneLiner: 'Hands-free, drag-and-drop coding for people with upper-limb disabilities.',
    description:
      'A webcam tracks the learner’s head, so gestures move the cursor and click blocks. Programs are assembled by drag and drop, which makes coding possible without a keyboard or mouse.',
    category: 'Inclusive education',
    flagship: true,
  },
  {
    id: 'airguard',
    name: 'AirGuard',
    logo: '/assets/solutions/airguard.png',
    oneLiner: 'Accessible air-quality monitoring for healthier cities.',
    soon: true,
    description: '',
    category: 'Environment',
    flagship: false,
  },
  {
    id: 'includio',
    name: 'Includio',
    logo: '/assets/solutions/includio.png',
    oneLiner: '',
    soon: true,
    description: '',
    category: '',
    flagship: false,
  },
  {
    id: 'roomie',
    name: 'RooMie',
    logo: '/assets/solutions/roomie.png',
    oneLiner: '',
    soon: true,
    description: '',
    category: '',
    flagship: false,
  },
  {
    id: 'hearwork',
    name: 'HearWork',
    logo: '/assets/solutions/hearwork.png',
    oneLiner: '',
    soon: true,
    description: '',
    category: '',
    flagship: false,
  },
]

// ─── 3. Featured Solutions ──────────────────────────────────────────────────

export const FEATURED_HEADING = {
  eyebrow: 'Featured solutions',
  lead: 'Three solutions.',
  main: 'Built to ship.',
}

export const FEATURED: FeaturedSolution[] = [
  {
    id: 'aquaguard',
    name: 'AquaGuard',
    logo: '/assets/solutions/aquaguard.png',
    badge: 'Flagship',
    tagline: 'A multi-platform flood rescue coordination system operating in Vietnam.',
    problem:
      'When floods hit, victims, rescue teams and coordinators are often cut off from each other. AquaGuard connects all three in real time, across web and mobile.',
    features: [
      { title: 'SOS requests', text: 'Victims send a call for help that reaches rescuers instantly.' },
      { title: 'Live flood maps', text: 'One current picture of flooded areas and requests for help.' },
      { title: 'Rescue coordination', text: 'Coordinators and rescue teams work from the same live view.' },
      { title: 'Safety guidance', text: 'Clear instructions for people in affected areas.' },
    ],
    metrics: [
      { value: '3', label: 'Competition awards' },
      { value: '3', label: 'Groups connected' },
      { value: '2', label: 'Platforms: web & mobile' },
    ],
    cta: 'Learn more',
  },
  {
    id: 'enablecode',
    name: 'EnableCode',
    logo: '/assets/solutions/enablecode.png',
    badge: 'Flagship',
    tagline: 'A drag-and-drop coding education platform built for people with upper-limb disabilities.',
    problem:
      'Learning to code assumes a keyboard and mouse, which shuts out people who cannot use their hands. EnableCode lets them write and run code completely hands-free.',
    features: [
      { title: 'AI face tracking', text: 'A webcam follows head movement in real time.' },
      { title: 'Head-gesture cursor', text: 'Head gestures move and click the cursor.' },
      { title: 'Drag-and-drop coding', text: 'Programs built from blocks instead of typed syntax.' },
      { title: 'Hands-free execution', text: 'Write, run and test code without touching a device.' },
    ],
    metrics: [
      { value: '100%', label: 'Hands-free coding' },
      { value: '1st', label: 'Fessior DevCamp 2026' },
    ],
    cta: 'Learn more',
  },
  // TODO(content): fill in Includio when the product story is ready.
  {
    id: 'includio',
    name: 'Includio',
    logo: '/assets/solutions/includio.png',
    badge: 'Next up',
    soon: true,
    tagline: '',
    problem: '',
    features: [],
    metrics: [],
    cta: 'Learn more',
  },
]

// ─── 4. Awards & Certifications ─────────────────────────────────────────────

export const RECOGNITION_HEADING = {
  eyebrow: 'Prizes',
  lead: 'Independent proof.',
  main: 'Recognised for impact.',
  intro: 'Four prizes across competitions in Vietnam, won by one team.',
}

export type GalleryPhoto = { src: string; alt: string; caption: string }

export const GALLERY_HEADING = 'Behind the wins'

// TODO(content): confirm the captions and add more photos as they come in.
export const GALLERY: GalleryPhoto[] = [
  { src: '/assets/gallery/team-working.jpg', alt: 'The team working together around laptops', caption: 'Building AquaGuard together' },
  { src: '/assets/gallery/epics-certificate.jpg', alt: 'The team holding the EPICS certificate of achievement', caption: 'EPICS certificate of achievement' },
  { src: '/assets/gallery/tech-planter.jpg', alt: 'The team in front of the Tech Planter banner', caption: 'Tech Planter' },
]

// TODO(content): award photos (`image`), press links (`href`) and issuer logos.
export const RECOGNITION: RecognitionGroup[] = [
  {
    solutionId: 'aquaguard',
    solutionName: 'AquaGuard',
    items: [
      {
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'OISP Presentation Contest', year: '2025',
        issuerLogo: null, image: null, href: null,
      },
      {
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'EPICS 8th Competition (ASU & Dow Vietnam)', year: '2026',
        issuerLogo: null, image: '/assets/gallery/epics-first-place.jpg', href: null,
      },
      {
        type: 'AWARD', place: '2nd', title: '2nd Prize', issuer: 'Bach Khoa Innovation', year: '2026',
        issuerLogo: null, image: null, href: null,
      },
    ],
  },
  {
    solutionId: 'enablecode',
    solutionName: 'EnableCode',
    items: [
      {
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'Fessior DevCamp 2026 Prometheus', year: '2026',
        issuerLogo: null, image: null, href: null,
      },
    ],
  },
]

// ─── 5. Partnerships ────────────────────────────────────────────────────────

export const PARTNERS_HEADING = {
  eyebrow: 'Partnerships',
  lead: 'Trusted by institutions.',
  main: 'Built with universities.',
  intro: 'We build with the universities and companies that back student innovation.',
}

export const PARTNERS: Partner[] = [
  { name: 'Arizona State University', type: 'Academic', logo: '/assets/partners/row/asu.png' },
  { name: 'RMIT University', type: 'Academic', logo: '/assets/partners/row/rmit.png' },
  { name: 'Dow', type: 'Corporate', logo: '/assets/partners/row/dow.png' },
  { name: 'University of Technology Sydney', type: 'Academic', logo: '/assets/partners/row/uts.png', featured: true },
  // TODO(content): replace hcmut.svg with the official HCMUT logo file.
  { name: 'Ho Chi Minh City University of Technology', type: 'Academic', logo: '/assets/partners/row/hcmut.svg', featured: true },
  { name: 'Sorbonne Université', type: 'Academic', logo: '/assets/partners/row/sorbonne.png' },
  { name: 'Université Laval', type: 'Academic', logo: '/assets/partners/row/laval.png' },
]

export type Stat = { value: number; suffix?: string; label: string }
export const STATS: Stat[] = [
  { value: 4, label: 'Competition prizes' },
  { value: 6, label: 'Digital solutions' },
  { value: 5, label: 'Student builders' },
  { value: 7, label: 'Partner institutions' },
]

// ─── 6. Testimonials ────────────────────────────────────────────────────────

export const TESTIMONIALS_HEADING = {
  eyebrow: 'Testimonials',
  lead: 'People on the ground',
  main: 'already believe in AquaGuard.',
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ms-ni',
    quote:
      'Having experienced severe flooding in Huế, I know how difficult it is to find reliable information and timely help. AquaGuard can help people report their location, request assistance, and stay informed.',
    name: 'Ms. Ni',
    role: 'Flood survivor, Huế, Vietnam',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'vo-thanh-hang',
    quote:
      'What makes AquaGuard unique is its community-centered approach. Citizens can report incidents, share real-time information, and connect with rescuers, building more resilient communities.',
    name: 'Dr. Vo Thanh Hang',
    role: 'Lecturer, Faculty of Environment, HCMUT',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'dinh-nguyen',
    quote: 'A highly valuable and practical solution that can significantly enhance flood rescue and emergency response, with strong potential well beyond Vietnam.',
    name: 'Prof. Dinh N. Nguyen',
    role: 'Professor Emeritus, Laval University, Canada',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'anna-b',
    quote:
      'By bringing citizens, rescuers, and local authorities together on one platform, AquaGuard could significantly strengthen flood emergency coordination in Vietnam.',
    name: 'Anna B.',
    role: 'Water rescue volunteer, WOPR, Warsaw',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'thich-chon-nguyen',
    quote: 'A practical solution that can support humanitarian relief efforts and help communities respond more effectively during flood emergencies.',
    name: 'Most Ven. Thich Chon Nguyen',
    role: 'Charity Committee, Van Hanh Zen Monastery',
    avatar: null,
    solution: 'AquaGuard',
  },
]

// ─── 7. Core Team ───────────────────────────────────────────────────────────

export const TEAM_HEADING = {
  eyebrow: 'Core team',
  lead: 'Five co-founders.',
  main: 'The people behind Odylytics.',
  intro: 'Five students building across product, engineering, design and marketing.',
}

export const TEAM_GROUPS = {
  cofounders: { heading: 'Co-founders', intro: 'The five students who started Odylytics.' },
  advisors: { heading: 'Advisors', intro: 'Mentors and experts who guide our work.' },
  members: { heading: 'Members', intro: 'Students and collaborators building with us.' },
}

// TODO(content): add advisors and members here (same shape as TEAM) when they are ready; empty groups show an 'Updating soon' frame.
export const ADVISORS: TeamMember[] = []
export const MEMBERS: TeamMember[] = []

export const TEAM_TEASER = {
  eyebrow: 'Core team',
  lead: 'Five co-founders.',
  main: 'One mission.',
  intro: 'Meet the people behind Odylytics, what each of them owns, and how they work together.',
}

// TODO(content): full names and LinkedIn URLs for all 5 members; confirm roles, bios and responsibilities.
export const TEAM: TeamMember[] = [
  {
    name: 'Quân',
    slug: 'quan-ceo',
    role: 'Chief Executive Officer',
    shortRole: 'CEO',
    bio: 'Leads Odylytics’ vision and strategy, building partnerships that bring our solutions to the communities that need them.',
    photo: '/assets/team/quan-a.png',
    linkedin: null,
    responsibilities: [
      'Sets company vision, strategy and roadmap',
      'Leads partnerships with universities, governments and sponsors',
      'Represents Odylytics at competitions, events and in the press',
    ],
  },
  {
    name: 'Nghĩa',
    slug: 'nghia-cto',
    role: 'Chief Technology Officer',
    shortRole: 'CTO',
    bio: 'Leads our technology and shared AI core, designing the models that turn sensor and community data into timely predictions.',
    photo: '/assets/team/nghia.png',
    linkedin: null,
    responsibilities: [
      'Owns the shared AI core and system architecture',
      'Trains and evaluates models for flood, air and accessibility use cases',
      'Reviews code, security and technical hiring',
    ],
    
  },
  {
    name: 'Sơn',
    slug: 'son-cpo',
    role: 'Chief Product Officer',
    shortRole: 'CPO',
    bio: 'Designs accessible, human-centred experiences so every solution stays simple to use, even in a crisis.',
    photo: '/assets/team/son.png',
    linkedin: null,
    responsibilities: [
      'Owns the product roadmap across every Odylytics solution',
      'Runs user research with rescue teams and people with disabilities',
      'Leads interface design and the Odylytics design system',
    ],
  },
  {
    name: 'Quân',
    slug: 'quan-marketing',
    role: 'Head of Marketing',
    shortRole: 'Marketing',
    bio: 'Shapes how Odylytics reaches governments, partners and communities, and tells the stories behind our impact.',
    photo: '/assets/team/quan-b.png',
    linkedin: null,
    responsibilities: [
      'Owns brand, website and social channels',
      'Pitches stories to press and manages the news page',
      'Prepares award entries and partner decks',
    ],
  },
  {
    name: 'Khang',
    slug: 'khang-engineer',
    role: 'Software Engineer',
    shortRole: 'Engineer',
    bio: 'Builds the platforms behind our solutions, from real-time data pipelines to the dashboards responders rely on.',
    photo: '/assets/team/khang.png',
    linkedin: null,
    responsibilities: [
      'Builds web and mobile apps for AquaGuard and EnableCode',
      'Maintains data pipelines and the live map',
      'Ships releases and monitors uptime',
    ],
  },
]

// ─── 8. Contact + Footer ────────────────────────────────────────────────────

export const CONTACT = {
  eyebrow: 'Contact',
  lead: "Let's build what matters.",
  main: 'Together.',
  subcopy: "Partnerships, pilots or press — we'd love to hear from you.",
  // TODO(content): add the office address and phone number.
  address: 'Updating soon',
  phone: '',
  email: 'odylytics@gmail.com',
}

// TODO(content): add Facebook / YouTube when the pages exist.
export const SOCIALS: NavItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/odylytics' },
]

export const COMPANY_LINKS: NavItem[] = [
  { label: 'About', href: '#home' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Partners', href: '#partners' },
  { label: 'Team', href: '#team' },
]

// ─── 9. News / Blog ─────────────────────────────────────────────────────────

export const NEWS_HEADING = {
  eyebrow: 'News',
  lead: 'Latest from Odylytics.',
  main: 'Wins, press and milestones.',
  intro: 'Competition results, media coverage and updates from the team.',
}

export const POST_CATEGORIES: ('All' | PostCategory)[] = ['All', 'Awards', 'Press', 'Milestones', 'Product']

// TODO(content): drafts based on known wins. Add dates, cover photos and article links (`href`), and correct any detail.
export const POSTS: Post[] = [
  {
    id: 'quantum-scholarship',
    title: 'Our founder receives the Quantum scholarship',
    excerpt: 'The scholarship backs the next stage of Odylytics, from product research to bringing our solutions to more communities.',
    category: 'Milestones',
    featured: true,
  },
  {
    id: 'thanh-nien-feature',
    title: 'Odylytics featured in Thanh Niên newspaper',
    excerpt: 'Vietnam’s national daily tells the story of a student team building AI for floods and accessibility.',
    category: 'Press',
    source: 'Thanh Niên',
  },
  {
    id: 'aquaguard-oisp-first-prize',
    title: 'AquaGuard wins 1st prize at the OISP Presentation Contest',
    excerpt: 'Our flood rescue coordination platform took first place in the 2025 presentation round.',
    category: 'Awards',
    date: '2025',
  },
  {
    id: 'aquaguard-epics-first-prize',
    title: 'AquaGuard takes 1st prize at the EPICS 8th Competition',
    excerpt: 'Judges recognised how the system connects victims, rescue teams and coordinators in real time.',
    category: 'Awards',
  },
  {
    id: 'aquaguard-bach-khoa-second-prize',
    title: 'AquaGuard earns 2nd prize at Bach Khoa Innovation',
    excerpt: 'A runner-up finish among innovation projects at Ho Chi Minh City University of Technology.',
    category: 'Awards',
    date: '2026',
  },
  {
    id: 'enablecode-devcamp-first-prize',
    title: 'EnableCode wins Fessior DevCamp 2026 Prometheus',
    excerpt: 'Our hands-free coding platform for people with upper-limb disabilities won first place.',
    category: 'Awards',
    date: '2026',
  },
  {
    id: 'team-wins',
    title: 'Our team brings home four prizes in a year',
    excerpt: 'A look back at the competitions, late nights and mentors behind this year’s results.',
    category: 'Milestones',
  },
]

// ─── 10. Footer & legal ─────────────────────────────────────────────────────

export const FOOTER_NOTE =
  'AquaGuard, EnableCode, AirGuard, Includio, RooMie and HearWork are products of Odylytics. Awards and press coverage are credited to their respective organisers and publishers. Some products are in pilot or prototype stage and features may change.'

export const LEGAL_LINKS: NavItem[] = [
  { label: 'Privacy Policy', href: '#/privacy' },
  { label: 'Terms of Use', href: '#/terms' },
  { label: 'Cookie Policy', href: '#/cookies' },
  { label: 'Sitemap', href: '#home' },
  { label: 'Member login', href: '#/login' },
]

export const FOOTER_GROUPS: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Solutions',
    links: [
      { label: 'AquaGuard', href: '#featured' },
      { label: 'EnableCode', href: '#featured' },
      { label: 'AirGuard', href: '#solutions' },
      { label: 'Includio', href: '#solutions' },
      { label: 'RooMie', href: '#solutions' },
      { label: 'HearWork', href: '#solutions' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Mission', href: '#mission' },
      { label: 'Core team', href: '#/team' },
      { label: 'Recognition', href: '#recognition' },
      { label: 'Partners', href: '#partners' },
    ],
  },
  {
    heading: 'News',
    links: [
      { label: 'All news', href: '#/blog' },
      { label: 'Awards', href: '#/blog' },
      { label: 'Press', href: '#/blog' },
      { label: 'Milestones', href: '#/blog' },
    ],
  },
  {
    heading: 'Get in touch',
    links: [
      { label: 'Partnerships', href: '#contact' },
      { label: 'Pilots', href: '#contact' },
      { label: 'Press enquiries', href: '#contact' },
    ],
  },
]

// ─── 11. Story panel and closing call to action ─────────────────────────────

export const STORY = {
  eyebrow: 'Behind the product',
  lead: 'Built by students,',
  main: 'in the room.',
  intro: 'Late nights, competition days and the people who showed up.',
}

export const CLOSING = {
  lead: 'Student ideas.',
  main: 'Market-ready products.',
  cta: 'Get in touch',
}
