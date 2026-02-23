// Site Configuration for AM:PM Media

export const siteConfig = {
  name: 'AM:PM Media',
  description: 'A multi-disciplinary creative agency ecosystem based in Glasgow, Scotland',
  domain: 'mediampm.com',
  location: 'Glasgow, Scotland',
  tagline: 'Creating around the clock',
}

export type DivisionStatus = 'active' | 'launching-soon'
export type Pillar = 'CREATE' | 'GROW' | 'GUIDE' | 'BUILD'

export interface Division {
  id: string
  name: string
  shortName: string
  displayName: string // For the big hero text (e.g., "CREATIVE", "VISION")
  tagline: string
  description: string
  services: string[]
  status: DivisionStatus
  pillar: Pillar
  color: string
  bgColor: string // Background color for division page
  textColor: string // Text color for division page
  icon: string
  href: string
}

export const pillars: Record<Pillar, { name: string; description: string }> = {
  CREATE: {
    name: 'CREATE',
    description: 'Produce assets — design, video, audio',
  },
  GROW: {
    name: 'GROW',
    description: 'Drive results — marketing, distribution, ads',
  },
  GUIDE: {
    name: 'GUIDE',
    description: 'Strategy + systems — consulting, ops',
  },
  BUILD: {
    name: 'BUILD',
    description: 'Long-term expansion — ventures, products, IP',
  },
}

export const divisions: Division[] = [
  // ============================================
  // PILLAR 1: CREATE — Produce assets
  // ============================================
  {
    id: 'creative',
    name: 'AM:PM Creative',
    shortName: 'Creative',
    displayName: 'CREATIVE',
    tagline: 'Design that converts',
    description: 'Premium branding, web design, and content systems that elevate brands and drive conversions. We craft visual identities that resonate and digital experiences that perform.',
    services: ['Branding & Identity', 'Web Design & Development', 'Design Systems', 'Content Systems', 'UI/UX Design', 'Conversion Optimization'],
    status: 'active',
    pillar: 'CREATE',
    color: '#000000',
    bgColor: '#F8F8F8',
    textColor: '#000000',
    icon: 'Palette',
    href: '/creative',
  },
  {
    id: 'vision',
    name: 'AM:PM Vision',
    shortName: 'Vision',
    displayName: 'VISION',
    tagline: 'Stories in motion',
    description: 'Dynamic video production and editing that captures attention and drives engagement. From short-form social content to documentary storytelling and campaign creatives.',
    services: ['Video Production', 'Video Editing', 'Short-Form Content', 'Documentary', 'Campaign Videos', 'Storytelling'],
    status: 'active',
    pillar: 'CREATE',
    color: '#FFFFFF',
    bgColor: '#3D3D3D',
    textColor: '#B8B8B8',
    icon: 'Film',
    href: '/vision',
  },
  {
    id: 'studio',
    name: 'AM:PM Studio',
    shortName: 'Studio',
    displayName: 'STUDIO',
    tagline: 'Sound perfected',
    description: 'Professional recording, mixing, and mastering services alongside comprehensive music production. Where raw talent meets polished production.',
    services: ['Recording', 'Mixing', 'Mastering', 'Music Production', 'Sound Design', 'Artist Development'],
    status: 'active',
    pillar: 'CREATE',
    color: '#3D3D3D',
    bgColor: '#C8CDD3',
    textColor: '#3D3D3D',
    icon: 'Music',
    href: '/studio',
  },
  {
    id: 'records',
    name: 'AM:PM Records',
    shortName: 'Records',
    displayName: 'RECORDS',
    tagline: 'Artists amplified',
    description: 'Record label services, artist development, and music distribution for emerging and established artists.',
    services: ['Artist Development', 'Music Distribution', 'A&R', 'Label Services'],
    status: 'launching-soon',
    pillar: 'CREATE',
    color: '#9B59B6',
    bgColor: '#1a1a2e',
    textColor: '#FFFFFF',
    icon: 'Disc',
    href: '#',
  },
  {
    id: 'quill',
    name: 'AM:PM Quill',
    shortName: 'Quill',
    displayName: 'QUILL',
    tagline: 'Words that resonate',
    description: 'Publishing, storytelling, and creative journalism that connects brands with audiences through compelling narratives.',
    services: ['Publishing', 'Storytelling', 'Creative Journalism', 'Copywriting', 'Content Strategy'],
    status: 'launching-soon',
    pillar: 'CREATE',
    color: '#F39C12',
    bgColor: '#2C3E50',
    textColor: '#FFFFFF',
    icon: 'PenTool',
    href: '#',
  },
  {
    id: 'atelier-prive',
    name: 'AM:PM Atelier Privé',
    shortName: 'Atelier Privé',
    displayName: 'ATELIER PRIVÉ',
    tagline: 'Exclusive craft',
    description: 'Bespoke fashion, merchandise design, and premium brand goods for discerning clients and elevated brands.',
    services: ['Fashion Design', 'Merchandise', 'Brand Goods', 'Luxury Products'],
    status: 'launching-soon',
    pillar: 'CREATE',
    color: '#C0392B',
    bgColor: '#1a1a1a',
    textColor: '#FFFFFF',
    icon: 'Crown',
    href: '#',
  },

  // ============================================
  // PILLAR 2: GROW — Drive results
  // ============================================
  {
    id: 'impact',
    name: 'AM:PM Impact',
    shortName: 'Impact',
    displayName: 'IMPACT',
    tagline: 'Growth engineered',
    description: 'Data-driven marketing strategy, paid social campaigns, and conversion optimization that delivers measurable results. Strategic growth, quantified. Separate SaaS platform coming soon.',
    services: ['Marketing Strategy', 'Paid Social Ads', 'Campaign Management', 'Conversion Optimization', 'Analytics', 'Performance Marketing'],
    status: 'active',
    pillar: 'GROW',
    color: '#E44F2A',
    bgColor: '#1a0a06',
    textColor: '#F5F5DC',
    icon: 'TrendingUp',
    href: '/impact',
  },

  // ============================================
  // PILLAR 3: GUIDE — Strategy + systems
  // ============================================
  {
    id: 'insight',
    name: 'AM:PM Insight',
    shortName: 'Insight',
    displayName: 'INSIGHT',
    tagline: 'Strategy decoded',
    description: 'Consultancy and strategic business guidance for brands ready to scale with clarity and purpose.',
    services: ['Business Consultancy', 'Strategic Planning', 'Brand Strategy', 'Growth Advisory'],
    status: 'launching-soon',
    pillar: 'GUIDE',
    color: '#16A085',
    bgColor: '#0f2027',
    textColor: '#FFFFFF',
    icon: 'Compass',
    href: '#',
  },
  {
    id: 'mastery',
    name: 'AM:PM Mastery',
    shortName: 'Mastery',
    displayName: 'MASTERY',
    tagline: 'Knowledge transferred',
    description: 'Education, training, and learning products for creative professionals and ambitious teams.',
    services: ['Training Programs', 'Workshops', 'Learning Products', 'Professional Development'],
    status: 'launching-soon',
    pillar: 'GUIDE',
    color: '#1ABC9C',
    bgColor: '#1a1a2e',
    textColor: '#FFFFFF',
    icon: 'GraduationCap',
    href: '#',
  },

  // ============================================
  // PILLAR 4: BUILD — Long-term expansion
  // ============================================
  {
    id: 'ventures',
    name: 'AM:PM Ventures',
    shortName: 'Ventures',
    displayName: 'VENTURES',
    tagline: 'Investing in vision',
    description: 'Strategic expansion, investments, and new business lines that extend the AM:PM ecosystem.',
    services: ['Investments', 'Business Development', 'Strategic Partnerships', 'New Ventures'],
    status: 'launching-soon',
    pillar: 'BUILD',
    color: '#2C3E50',
    bgColor: '#0a0a0a',
    textColor: '#FFFFFF',
    icon: 'Briefcase',
    href: '#',
  },
  {
    id: 'colosseum',
    name: 'AM:PM Colosseum',
    shortName: 'Colosseum',
    displayName: 'COLOSSEUM',
    tagline: 'Champions elevated',
    description: 'Sports and athlete branding with future collaborations that bring elite performance to brand building.',
    services: ['Athlete Branding', 'Sports Marketing', 'Talent Partnerships', 'Event Collaborations'],
    status: 'launching-soon',
    pillar: 'BUILD',
    color: '#8E44AD',
    bgColor: '#1a0a1a',
    textColor: '#FFFFFF',
    icon: 'Trophy',
    href: '#',
  },
  {
    id: 'groundup',
    name: 'AM:PM Ground Up',
    shortName: 'Ground Up',
    displayName: 'GROUND UP',
    tagline: 'Building futures',
    description: 'Philanthropy, scholarships, and grants supporting the next generation of creative talent.',
    services: ['Scholarships', 'Grants', 'Community Programs', 'Mentorship'],
    status: 'launching-soon',
    pillar: 'BUILD',
    color: '#27AE60',
    bgColor: '#0a1a0a',
    textColor: '#FFFFFF',
    icon: 'Heart',
    href: '#',
  },
]

export const activeDivisions = divisions.filter(d => d.status === 'active')
export const launchingSoonDivisions = divisions.filter(d => d.status === 'launching-soon')

// Navigation links for the simple top nav (matching Webflow site)
export const navLinks = [
  { name: 'Work', href: '/work' },
  { name: ':Creative', href: '/creative' },
  { name: ':Vision', href: '/vision' },
  { name: ':Studio', href: '/studio' },
  { name: ':Impact', href: '/impact' },
]

export const navigationPillars = [
  {
    name: 'CREATE',
    description: pillars.CREATE.description,
    divisions: divisions.filter(d => d.pillar === 'CREATE'),
  },
  {
    name: 'GROW',
    description: pillars.GROW.description,
    divisions: divisions.filter(d => d.pillar === 'GROW'),
  },
  {
    name: 'GUIDE',
    description: pillars.GUIDE.description,
    divisions: divisions.filter(d => d.pillar === 'GUIDE'),
  },
  {
    name: 'BUILD',
    description: pillars.BUILD.description,
    divisions: divisions.filter(d => d.pillar === 'BUILD'),
  },
]
