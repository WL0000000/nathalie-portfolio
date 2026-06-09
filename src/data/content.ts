export const site = {
  name: 'Nathalie Laurent',
  title: 'Business Strategist & Consultant',
  tagline:
    'Helping organizations grow with clarity, structure, and measurable results.',
  email: 'hello@nathalielaurent.com',
  phone: '+1 (555) 234-8901',
  location: 'Montreal, Canada',
  linkedin: 'https://linkedin.com',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const stats = [
  { value: '12+', label: 'Years experience' },
  { value: '80+', label: 'Clients served' },
  { value: '95%', label: 'Client retention' },
] as const

export const services = [
  {
    title: 'Business Strategy',
    description:
      'Define clear direction, prioritize initiatives, and align teams around outcomes that matter.',
    icon: 'strategy',
  },
  {
    title: 'Operations & Process',
    description:
      'Streamline workflows, reduce friction, and build systems that scale without sacrificing quality.',
    icon: 'operations',
  },
  {
    title: 'Leadership Advisory',
    description:
      'Support executives and managers with coaching, decision frameworks, and stakeholder alignment.',
    icon: 'leadership',
  },
  {
    title: 'Growth Planning',
    description:
      'Identify market opportunities, refine positioning, and create actionable roadmaps for expansion.',
    icon: 'growth',
  },
] as const

export const projects = [
  {
    category: 'Retail',
    title: 'National expansion roadmap',
    description:
      'Led a 6-month strategic review that unlocked 18% revenue growth across three new regions.',
    year: '2025',
  },
  {
    category: 'Healthcare',
    title: 'Operational turnaround',
    description:
      'Redesigned patient intake and scheduling, cutting wait times by 32% within one quarter.',
    year: '2024',
  },
  {
    category: 'Technology',
    title: 'Go-to-market repositioning',
    description:
      'Refined messaging and sales enablement for a B2B SaaS firm entering enterprise markets.',
    year: '2024',
  },
  {
    category: 'Finance',
    title: 'Leadership development program',
    description:
      'Built a manager training framework adopted by 40+ leaders across regional offices.',
    year: '2023',
  },
] as const

export const testimonials = [
  {
    quote:
      'Nathalie brought structure to a complex initiative when we needed it most. Her recommendations were practical, data-informed, and immediately actionable.',
    name: 'Marcus Chen',
    role: 'COO, Northline Group',
  },
  {
    quote:
      'She listens carefully, challenges assumptions respectfully, and delivers work that leadership teams can actually implement.',
    name: 'Sophie Tremblay',
    role: 'Director of Operations, Helix Health',
  },
  {
    quote:
      'Our executive team left every session with clearer priorities and stronger alignment. A rare combination of strategic depth and operational rigor.',
    name: 'David Okonkwo',
    role: 'CEO, Meridian Labs',
  },
] as const
