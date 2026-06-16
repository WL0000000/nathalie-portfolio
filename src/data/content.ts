export const pageTitle = 'Natalie Wang | School Trustee Candidate – SD43 Coquitlam' as const

export const site = {
  name: 'Natalie Wang',
  pageTitle,
  title: 'School Trustee Candidate | SD43 Coquitlam',
  tagline:
    'Parent leader, career counsellor, and community advocate running for School Trustee in School District 43 Coquitlam.',
  email: 'nathaliewang_bc@hotmail.com',
  phone: '604-518-7833',
  location: 'Coquitlam, BC',
  resumeUrl: '/natalie-wang-resume.pdf',
  profilePhoto: '/natalie-profile.jpg',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#services' },
  { label: 'Highlights', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Resume', href: '/natalie-wang-resume.pdf', external: true },
  { label: 'Contact', href: '#contact' },
] as const

export const stats = [
  { value: '8+', label: 'Years in career counselling' },
  { value: '5+', label: 'Years serving school communities' },
  { value: '80%+', label: 'Client employment rate' },
] as const

export const aboutHighlights = [
  'M.Ed., Adult Learning and Global Change, University of British Columbia',
  '8+ years in career counselling and government-funded immigrant services',
  'PAC Chair, Pinetree Secondary School (3 years, 2021–2024)',
  'DPAC Representative, Panorama Heights Elementary (2019–2020) and Maple Creek Middle School (2020–2021)',
  'Certified in Personality Dimensions, Crisis Intervention, and Community Counselling',
  'Fluent in English and Mandarin; deep roots in the Tri-Cities community',
] as const

export const services = [
  {
    title: 'Career Counselling',
    description:
      'One-on-one and group support for career, academic, and personal development — helping community members find meaningful employment and build lasting skills.',
    icon: 'strategy',
  },
  {
    title: 'Newcomer & Cross-Cultural Support',
    description:
      'Supporting immigrant families through credential recognition, cultural integration, and navigating school and community systems in Coquitlam.',
    icon: 'operations',
  },
  {
    title: 'Community & School Engagement',
    description:
      'Leading PAC meetings, district advisory councils, job fairs, and community events that connect families with schools and local resources.',
    icon: 'leadership',
  },
  {
    title: 'Real Estate Advisory',
    description:
      'Residential real estate services across the Lower Mainland, helping families put down roots in the Coquitlam community. Sutton Group Platinum Sales Award recipient, 2017–2025.',
    icon: 'growth',
  },
] as const

export const projects = [
  {
    category: 'School Leadership',
    title: 'PAC Chair, Pinetree Secondary School',
    description:
      'Served three consecutive years as PAC Chair, representing parent voices, coordinating school events, and partnering with school administration on student and family needs.',
    year: '2021–2024',
  },
  {
    category: 'District Parent Advisory',
    title: 'DPAC Representative, Maple Creek Middle School',
    description:
      'Represented Maple Creek families at the District Parent Advisory Council, bringing parent perspectives into district-level education discussions for School District 43.',
    year: '2020–2021',
  },
  {
    category: 'District Parent Advisory',
    title: 'DPAC Representative, Panorama Heights Elementary',
    description:
      'Represented Panorama Heights Elementary families at the District Parent Advisory Council, advocating for school community needs at the district level.',
    year: '2019–2020',
  },
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
    year: '2009–2016',
  },
  {
    category: 'Community',
    title: 'Chinese New Year Celebration',
    description:
      'Organized and hosted a community celebration with more than 500 participants, bringing together families from across the Tri-Cities.',
    year: 'n/a',
  },
  {
    category: 'Real Estate',
    title: 'Platinum Sales Award',
    description:
      'Platinum Sales Award recipient from 2017 to 2025 for sales performance and client service.',
    year: '2017–2025',
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
      'Platinum Sales Award recipient from 2017 to 2025 for sales performance and client service.',
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
