export type NavItem = { label: string; href: string }

export type Solution = {
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

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#mission' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Team', href: '#team' },
  { label: 'News', href: '#/blog' },
  { label: 'Contact', href: '#contact' },
]

// ─── 1. Hero ────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: 'AI-powered digital solutions',
  // Option A (selected). Alternatives from CONTENT_OUTLINE.md §1:
  //   B. Intelligent solutions for safer, smarter communities.
  //   C. We build AI that works when it matters most.
  headlineTop: 'AI that turns data',
  headlineBottom: 'into decisions that',
  rotatingWords: ['predict', 'protect', 'respond', 'recover'],
  srHeadline: 'AI that turns data into decisions that predict, protect, respond and recover.',
  // TODO(content): confirm what Odylytics provides and to whom.
  subheadline:
    'Odylytics is an AI startup delivering real-time monitoring, predictive analytics and decision-support platforms for governments, enterprises and communities.',
  holdCta: { label: 'Hold to find out', doneLabel: "Let's go", target: '#solutions' },
  // TODO(content): confirm marquee keywords.
  marquee: ['AI analytics', 'IoT monitoring', 'Early warning', 'Data platforms', 'Decision support', 'Inclusive design'],
}

// ─── 1b. Mission & direction ────────────────────────────────────────────────

export const MISSION = {
  eyebrow: 'Our mission',
  lead: 'Engineering safer communities.',
  main: 'One decision at a time.',
  // TODO(content): confirm wording of the mission and vision with the founders.
  mission:
    'We build AI that gives people the right information at the moment it matters: before a flood, during a crisis, and in everyday life for those the digital world forgot.',
  vision:
    'A future where every community, whatever its size or ability, has the intelligence it needs to anticipate risk, respond fast and recover together.',
  pillarsHeading: 'Where we are heading',
  pillars: [
    {
      title: 'Prove it in the field',
      text: 'Take AquaGuard and EnableCode from award-winning prototypes to pilots with local governments, schools and rescue teams.',
    },
    {
      title: 'Build one shared AI core',
      text: 'Keep a single intelligence layer behind every product, so each new solution launches faster and learns from the others.',
    },
    {
      title: 'Design for everyone',
      text: 'Make accessibility a starting point, not an add-on, from hands-free coding to disaster alerts anyone can understand.',
    },
    {
      title: 'Grow through partnerships',
      text: 'Work with universities, public bodies and companies in Vietnam and abroad to bring research into real communities.',
    },
  ] as Pillar[],
}

// ─── 2. Core Digital Solutions ──────────────────────────────────────────────

export const SOLUTIONS_HEADING = {
  eyebrow: 'Core digital solutions',
  lead: 'Six solutions.',
  main: 'One intelligence layer.',
  // TODO(content): confirm intro sentence.
  intro: 'Each Odylytics solution shares the same AI core — built once, adapted to every domain we serve.',
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
    description:
      // TODO(content): draft from the product name; confirm with the team.
      'Low-cost sensors and a simple dashboard turn raw air-quality readings into clear, local alerts that residents, schools and city teams can act on.',
    category: 'Environment',
    flagship: false,
  },
  {
    id: 'includio',
    name: 'Includio',
    logo: '/assets/solutions/includio.png',
    oneLiner: 'Inclusion tools that help organisations welcome everyone.',
    description:
      // TODO(content): draft from the product name; confirm with the team.
      'A platform that helps organisations make events, workplaces and services open to people of all abilities, with practical checklists and guidance.',
    category: 'Inclusive design',
    flagship: false,
  },
  {
    id: 'roomie',
    name: 'RooMie',
    logo: '/assets/solutions/roomie.png',
    oneLiner: 'Safer, smarter matching for shared living.',
    description:
      // TODO(content): draft from the product name; confirm with the team.
      'Matches people with compatible housemates and homes using shared preferences and trust signals, so finding a place to live feels safer and simpler.',
    category: 'Community',
    flagship: false,
  },
  {
    id: 'hearwork',
    name: 'HearWork',
    logo: '/assets/solutions/hearwork.png',
    oneLiner: 'Accessible employment for deaf and hard-of-hearing people.',
    description:
      // TODO(content): draft from the product name; confirm with the team.
      'Connects deaf and hard-of-hearing people with employers, using live captioning and visual communication tools to make interviews and daily work accessible.',
    category: 'Inclusive employment',
    flagship: false,
  },
]

// ─── 3. Featured Solutions ──────────────────────────────────────────────────

export const FEATURED_HEADING = {
  eyebrow: 'Featured solutions',
  lead: 'Two platforms.',
  main: 'Proven in the field.',
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
]

// ─── 4. Awards & Certifications ─────────────────────────────────────────────

export const RECOGNITION_HEADING = {
  eyebrow: 'Recognition',
  lead: 'Independent proof.',
  main: 'Recognised for impact.',
}

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
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'EPICS 8th Competition',
        issuerLogo: null, image: null, href: null,
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
  main: 'Built with communities.',
  // TODO(content): partnership intro sentence.
  intro: 'We work with public bodies, researchers and companies to turn reliable data into everyday safety.',
}

export const PARTNERS: Partner[] = [
  { name: 'Arizona State University', type: 'Academic', logo: '/assets/partners/asu.png' },
  { name: 'RMIT University', type: 'Academic', logo: '/assets/partners/rmit.png' },
  { name: 'Sorbonne Université', type: 'Academic', logo: '/assets/partners/sorbonne.png' },
  { name: 'University of Technology Sydney', type: 'Academic', logo: '/assets/partners/uts.png' },
  { name: 'Université Laval', type: 'Academic', logo: '/assets/partners/laval.png' },
  { name: 'Dow', type: 'Corporate', logo: '/assets/partners/dow.png' },
]

// ─── 6. Testimonials ────────────────────────────────────────────────────────

export const TESTIMONIALS_HEADING = {
  eyebrow: 'Testimonials',
  lead: 'In their words.',
  main: 'What our partners and users say.',
}

// TODO(content): 4 approved quotes with name, role, photo and consent.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'seed-1',
    quote:
      'Placeholder testimonial from a government or institutional partner. This space holds a 40–80 word quote describing a specific, verifiable outcome they saw after working with Odylytics — for example, how a team made faster decisions with shared, reliable data. Replace it with the approved wording and confirm consent before publishing. Longer quotes like this one open in a dialog so the card stays compact.',
    name: 'Name Surname',
    role: 'Role, Government agency',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'seed-2',
    quote:
      'Placeholder testimonial from a delivery partner. Replace with a 40–80 word quote about what you built together and the result it produced.',
    name: 'Name Surname',
    role: 'Role, Partner organisation',
    avatar: null,
    solution: 'AirGuard',
  },
  {
    id: 'seed-3',
    quote:
      'Placeholder testimonial from an end user or community member. Replace with a 40–80 word quote about how the solution helped them in daily life.',
    name: 'Name Surname',
    role: 'Community member, Location',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'seed-4',
    quote:
      'Placeholder testimonial from an expert or mentor. Replace with a 40–80 word quote on the team, the approach and the potential impact.',
    name: 'Name Surname',
    role: 'Mentor, Organisation',
    avatar: null,
    solution: 'Odylytics',
  },
]

// ─── 7. Core Team ───────────────────────────────────────────────────────────

export const TEAM_HEADING = {
  eyebrow: 'Core team',
  lead: 'Five builders.',
  main: 'The people behind Odylytics.',
  intro: 'Five builders working across AI, engineering, design and community impact.',
}

// TODO(content): full names and LinkedIn URLs for all 5 members; confirm roles, bios and responsibilities.
export const TEAM: TeamMember[] = [
  {
    name: 'Quân',
    role: 'Chief Executive Officer',
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
    role: 'Chief Technology Officer',
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
    role: 'Product & UX Lead',
    bio: 'Designs accessible, human-centred experiences so every solution stays simple to use, even in a crisis.',
    photo: '/assets/team/son.png',
    linkedin: null,
    responsibilities: [
      'Runs user research with rescue teams and people with disabilities',
      'Designs interfaces and the Odylytics design system',
      'Turns feedback into the product backlog',
    ],
  },
  {
    name: 'Quân',
    role: 'Head of Marketing',
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
    role: 'Software Engineer',
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
  // TODO(content): confirm address, phone and email.
  address: 'Street address, City, Country',
  phone: '+00 000 000 000',
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
  { label: 'Cookie Policy', href: '#/privacy' },
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
      { label: 'Core team', href: '#team' },
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
