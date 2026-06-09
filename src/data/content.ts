export const site = {
  name: 'Natalie Yan Wang',
  title: 'Career Strategist & Real Estate Advisor',
  tagline:
    'Over eight years helping individuals navigate career transitions, cultural integration, and meaningful next steps.',
  email: 'nathaliewang_bc@hotmail.com',
  phone: '604-518-7833',
  location: 'Coquitlam, BC',
  resumeUrl: '/natalie-wang-resume.pdf',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Resume', href: '/natalie-wang-resume.pdf', external: true },
  { label: 'Contact', href: '#contact' },
] as const

export const stats = [
  { value: '8+', label: 'Years in career counselling' },
  { value: '80%+', label: 'Client employment rate' },
  { value: '3x', label: 'Platinum Sales Award' },
] as const

export const aboutHighlights = [
  'M.Ed. in Adult Learning & Global Change — University of British Columbia',
  '8+ years in career counselling and government-funded immigrant services',
  'Certified in Personality Dimensions, Crisis Intervention, and Community Counselling',
  'Fluent in English and Mandarin; active community volunteer in the Tri-Cities',
] as const

export const services = [
  {
    title: 'Career Counselling',
    description:
      'Individual and group guidance on career, personal, and academic concerns — from job search strategy to long-term planning.',
    icon: 'strategy',
  },
  {
    title: 'Cross-Cultural Advising',
    description:
      'Support for foreign credentials, cultural adjustment, and transition issues through culturally responsive counselling.',
    icon: 'operations',
  },
  {
    title: 'Workshops & Events',
    description:
      'Design and delivery of seminars, workshops, and community events — including job fairs and mentorship programs.',
    icon: 'leadership',
  },
  {
    title: 'Real Estate Advisory',
    description:
      'Trusted real estate guidance for clients in the Lower Mainland, backed by three consecutive Platinum Sales Awards.',
    icon: 'growth',
  },
] as const

export const projects = [
  {
    category: 'Community',
    title: 'Career Connection Job Fair',
    description:
      'Coordinated and promoted a regional job fair with SUCCESS, ISS, and MOSAIC — over 4,000 job seekers attended.',
    year: '2009',
  },
  {
    category: 'Immigrant Services',
    title: 'Skills Connect for Immigrants',
    description:
      'Case-managed internationally trained professionals, exceeding client serving targets by 200% with employment rates over 80%.',
    year: '2009–2016',
  },
  {
    category: 'Community',
    title: 'Chinese New Year Celebration',
    description:
      'Organized and hosted a community celebration event with over 500 participants.',
    year: '—',
  },
  {
    category: 'Real Estate',
    title: 'Platinum Sales Award',
    description:
      'Earned Sutton Group Platinum Sales Award three consecutive years — 2017, 2018, and 2019.',
    year: '2017–2019',
  },
] as const

export const testimonials = [
  {
    quote:
      'Exceeded client serving target at 200% while generating employment rates over 80% for job seeker clients in the Skills Connect for Immigrants Program.',
    name: 'Training Innovations',
    role: 'Skills Connect for Immigrants Program',
  },
  {
    quote:
      'Platinum Sales Award recipient three consecutive years — recognized for outstanding performance and client service.',
    name: 'Sutton Group 1st West Realty',
    role: '2017, 2018 & 2019',
  },
  {
    quote:
      'Designed and implemented job search workshops, oriented mentors, and coordinated a Mentor Appreciation event with 200 mentors, mentees, and staff.',
    name: 'S.U.C.C.E.S.S. Employment Services',
    role: 'Burnaby, BC',
  },
] as const
