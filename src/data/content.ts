export const site = {
  name: 'Natalie Wang',
  pageTitle: 'Natalie Wang | Portfolio',
  title: 'Career Strategist & Real Estate Advisor',
  tagline:
    'Career counselling, immigrant employment services, and real estate advisory based in Coquitlam, BC.',
  email: 'nathaliewang_bc@hotmail.com',
  phone: '604-518-7833',
  location: 'Coquitlam, BC',
  resumeUrl: '/natalie-wang-resume.pdf',
  profilePhoto: '/natalie-profile.jpg',
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
  'M.Ed., Adult Learning and Global Change, University of British Columbia',
  '8+ years in career counselling and government-funded immigrant services',
  'Certified in Personality Dimensions, Crisis Intervention, and Community Counselling',
  'Fluent in English and Mandarin; volunteer work in the Tri-Cities',
] as const

export const services = [
  {
    title: 'Career Counselling',
    description:
      'One-on-one and group support for career, personal, and academic questions, including job search planning and skills upgrading.',
    icon: 'strategy',
  },
  {
    title: 'Cross-Cultural Advising',
    description:
      'Help with foreign credential recognition, cultural adjustment, and settlement issues for newcomers to Canada.',
    icon: 'operations',
  },
  {
    title: 'Workshops & Events',
    description:
      'Planning and delivery of job search workshops, seminars, job fairs, and community events.',
    icon: 'leadership',
  },
  {
    title: 'Real Estate Advisory',
    description:
      'Residential real estate services in the Lower Mainland. Three-time Sutton Group Platinum Sales Award recipient.',
    icon: 'growth',
  },
] as const

export const projects = [
  {
    category: 'Community',
    title: 'Career Connection Job Fair',
    description:
      'Coordinated a regional job fair with SUCCESS, ISS, and MOSAIC. More than 4,000 job seekers attended.',
    year: '2009',
  },
  {
    category: 'Immigrant Services',
    title: 'Skills Connect for Immigrants',
    description:
      'Case-managed internationally trained professionals and met client service targets at 200%, with employment rates above 80%.',
    year: '2009-2016',
  },
  {
    category: 'Community',
    title: 'Chinese New Year Celebration',
    description:
      'Organized and hosted a community event with more than 500 participants.',
    year: 'n/a',
  },
  {
    category: 'Real Estate',
    title: 'Platinum Sales Award',
    description:
      'Received the Sutton Group Platinum Sales Award in 2017, 2018, and 2019.',
    year: '2017-2019',
  },
] as const

export const testimonials = [
  {
    quote:
      'Met client service targets at 200% and helped job seekers reach employment rates above 80% through the Skills Connect for Immigrants Program.',
    name: 'Training Innovations',
    role: 'Skills Connect for Immigrants Program',
  },
  {
    quote:
      'Platinum Sales Award recipient in 2017, 2018, and 2019 for sales performance and client service.',
    name: 'Sutton Group 1st West Realty',
    role: 'Real Estate',
  },
  {
    quote:
      'Developed job search workshops, trained mentors, and organized a Mentor Appreciation event for 200 mentors, mentees, and staff.',
    name: 'S.U.C.C.E.S.S. Employment Services',
    role: 'Burnaby, BC',
  },
] as const
