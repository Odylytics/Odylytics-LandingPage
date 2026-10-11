export type NavItem = { label: string; href: string }

export type Solution = {
  id: string
  name: string
  logo: string | null
  oneLiner: string
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
}

export type RecognitionGroup = {
  solutionId: string
  solutionName: string
  items: Recognition[]
}

export type Partner = {
  name: string
  type: string
  description: string
  logo: string | null
}

export type Testimonial = {
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
}

export const BRAND = {
  wordmark: '/assets/brand/odylytics-wordmark.svg',
  wordmarkDark: '/assets/brand/odylytics-wordmark-dark.svg',
  symbol: '/assets/brand/odylytics-symbol.svg',
  symbolDark: '/assets/brand/odylytics-symbol-dark.svg',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Partners', href: '#partners' },
  { label: 'Team', href: '#team' },
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
    category: 'Disaster response',
    flagship: true,
  },
  {
    id: 'enablecode',
    name: 'EnableCode',
    logo: '/assets/solutions/enablecode.png',
    oneLiner: 'Hands-free, drag-and-drop coding for people with upper-limb disabilities.',
    category: 'Inclusive education',
    flagship: true,
  },
  {
    id: 'airguard',
    name: 'AirGuard',
    logo: '/assets/solutions/airguard.png',
    oneLiner: 'Accessible air-quality monitoring for healthier cities.',
    category: 'Environment',
    flagship: false,
  },
  {
    id: 'includio',
    name: 'Includio',
    logo: '/assets/solutions/includio.png',
    oneLiner: 'One-line description coming soon.', // TODO(content)
    category: 'Category', // TODO(content)
    flagship: false,
  },
  {
    id: 'roomie',
    name: 'RooMie',
    logo: '/assets/solutions/roomie.png',
    oneLiner: 'One-line description coming soon.', // TODO(content)
    category: 'Category', // TODO(content)
    flagship: false,
  },
  {
    id: 'hearwork',
    name: 'HearWork',
    logo: '/assets/solutions/hearwork.png',
    oneLiner: 'One-line description coming soon.', // TODO(content)
    category: 'Category', // TODO(content)
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

// TODO(content): issuer logos (rendered in place of the medal badge when set).
export const RECOGNITION: RecognitionGroup[] = [
  {
    solutionId: 'aquaguard',
    solutionName: 'AquaGuard',
    items: [
      { type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'OISP Presentation Contest', year: '2025', issuerLogo: null },
      { type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'EPICS 8th Competition', issuerLogo: null },
      { type: 'AWARD', place: '2nd', title: '2nd Prize', issuer: 'Bach Khoa Innovation', year: '2026', issuerLogo: null },
    ],
  },
  {
    solutionId: 'enablecode',
    solutionName: 'EnableCode',
    items: [
      { type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'Fessior DevCamp 2026 Prometheus', issuerLogo: null },
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

// TODO(content): one-line description of each partnership.
export const PARTNERS: Partner[] = [
  { name: 'Arizona State University', type: 'Academic', description: 'Short description of what we build together and the outcome it supports.', logo: '/assets/partners/asu.png' },
  { name: 'RMIT University', type: 'Academic', description: 'Short description of what we build together and the outcome it supports.', logo: '/assets/partners/rmit.png' },
  { name: 'Sorbonne Université', type: 'Academic', description: 'Short description of what we build together and the outcome it supports.', logo: '/assets/partners/sorbonne.png' },
  { name: 'University of Technology Sydney', type: 'Academic', description: 'Short description of what we build together and the outcome it supports.', logo: '/assets/partners/uts.png' },
  { name: 'Université Laval', type: 'Academic', description: 'Short description of what we build together and the outcome it supports.', logo: '/assets/partners/laval.png' },
  { name: 'Dow', type: 'Corporate', description: 'Short description of what we build together and the outcome it supports.', logo: '/assets/partners/dow.png' },
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
    quote:
      'Placeholder testimonial from a government or institutional partner. This space holds a 40–80 word quote describing a specific, verifiable outcome they saw after working with Odylytics — for example, how a team made faster decisions with shared, reliable data. Replace it with the approved wording and confirm consent before publishing. Longer quotes like this one open in a dialog so the card stays compact.',
    name: 'Name Surname',
    role: 'Role, Government agency',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    quote:
      'Placeholder testimonial from a delivery partner. Replace with a 40–80 word quote about what you built together and the result it produced.',
    name: 'Name Surname',
    role: 'Role, Partner organisation',
    avatar: null,
    solution: 'AirGuard',
  },
  {
    quote:
      'Placeholder testimonial from an end user or community member. Replace with a 40–80 word quote about how the solution helped them in daily life.',
    name: 'Name Surname',
    role: 'Community member, Location',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
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

// TODO(content): full names and LinkedIn URLs for all 5 members; confirm bios.
export const TEAM: TeamMember[] = [
  {
    name: 'Quân',
    role: 'Chief Executive Officer',
    bio: 'Leads Odylytics’ vision and strategy, building partnerships that bring our solutions to the communities that need them.',
    photo: '/assets/team/quan-a.png',
    linkedin: null,
  },
  {
    name: 'Nghĩa',
    role: 'Chief Technology Officer',
    bio: 'Leads our technology and shared AI core, designing the models that turn sensor and community data into timely predictions.',
    photo: '/assets/team/nghia.png',
    linkedin: null,
    
  },
  {
    name: 'Sơn',
    role: 'Product & UX Lead',
    bio: 'Designs accessible, human-centred experiences so every solution stays simple to use, even in a crisis.',
    photo: '/assets/team/son.png',
    linkedin: null,
  },
  {
    name: 'Quân',
    role: 'Head of Marketing',
    bio: 'Shapes how Odylytics reaches governments, partners and communities, and tells the stories behind our impact.',
    photo: '/assets/team/quan-b.png',
    linkedin: null,
  },
  {
    name: 'Khang',
    role: 'Software Engineer',
    bio: 'Builds the platforms behind our solutions, from real-time data pipelines to the dashboards responders rely on.',
    photo: '/assets/team/khang.png',
    linkedin: null,
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
  email: 'hello@odylytics.com',
}

// TODO(content): real social profile URLs.
export const SOCIALS: NavItem[] = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'YouTube', href: '#' },
]

export const COMPANY_LINKS: NavItem[] = [
  { label: 'About', href: '#home' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Partners', href: '#partners' },
  { label: 'Team', href: '#team' },
]
