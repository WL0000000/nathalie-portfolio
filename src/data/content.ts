export const pageTitle = 'Natalie Wang for School Trustee | SD43 Coquitlam' as const

export const site = {
  name: 'Natalie Wang',
  pageTitle,
  title: 'School Trustee Candidate, SD43 Coquitlam',
  district: 'School District 43 (Coquitlam)',
  electionDate: 'October 17, 2026',
  tagline:
    'A mother, a volunteer, a neighbour running for the students, families, and teachers of the Tri-Cities.',
  email: 'nathaliewang_bc@hotmail.com',
  phone: '604-518-7833',
  location: 'Coquitlam, BC',
  resumeUrl: '/natalie-wang-resume.pdf',
  profilePhoto: '/natalie-profile.jpg',
} as const

export const navLinks = [
  { label: 'Priorities', href: '#priorities' },
  { label: "Why I'm Running", href: '#why' },
  { label: 'About', href: '#about' },
  { label: 'Get Involved', href: '#contact' },
] as const

export const stats = [
  { value: '17', label: 'Years living in Coquitlam' },
  { value: '3', label: 'Years as PAC Chair, Pinetree Secondary' },
  { value: '5+', label: 'Years serving SD43 families' },
] as const

// Section 2: Priorities, "What I'll Fight For"
export const prioritiesIntro =
  'Every promise on this page comes from what I have seen in SD43 classrooms, at PAC meetings, and in conversations with parents across Coquitlam. These are the four things I want to change.'

export const priorities = [
  {
    title: 'Support for Every Learner',
    description:
      'SD43 does not have enough Education Assistants, counsellors, or speech and language support to meet the needs of the students who rely on them. That gap hurts every child in the classroom, not only the ones with a formal designation. I will push for the staffing and resources that let every student succeed.',
    icon: 'operations',
  },
  {
    title: 'Student Mental Health and Wellbeing',
    description:
      'Kids today are carrying more than any of us did at their age. The district itself has flagged mental health and school safety as top risks. I want serious, sustained investment in counsellors, youth workers, and school culture so students can walk into class feeling safe, seen, and ready to learn.',
    icon: 'leadership',
  },
  {
    title: 'Parents at the Table',
    description:
      'PACs and DPAC exist for a reason. Too often the input goes one way and the decisions come from somewhere else. As a former PAC Chair, I know how much better outcomes get when parents are heard. I will bring that voice to the board and make sure it stays there.',
    icon: 'strategy',
  },
  {
    title: 'Responsible Spending',
    description:
      'Every education dollar should reach the classroom. That means honest budgets, transparent trade-offs, and real answers when families ask where the money went. If we cannot explain a line item to a working parent, it does not belong.',
    icon: 'growth',
  },
] as const

// Section 3: Why I'm Running
export const whyRunning = [
  'I am not a politician. I am a mother, a volunteer, a neighbour. I have lived in Coquitlam for 17 years, and my kids grew up in SD43 schools. That is where this campaign starts.',
  'Over the last several years I served as PAC Chair at Pinetree Secondary and as a DPAC Representative for Maple Creek Middle and Panorama Heights Elementary. I sat in the meetings. I read the budgets. I watched families ask for help that the district could not always give.',
  'Better education is not about test scores. It is about children who know how to ask questions, who feel safe enough to speak up, and who grow up as kind and capable people. It is also about the parents and teachers who make that possible. They deserve a trustee who will actually listen to them.',
  'That is what I want to do for SD43.',
] as const

// Section 4: About Natalie
export const aboutIntro =
  'I have spent my career helping people. First as a career counsellor and case manager for newcomers to Canada, then as a parent leader in SD43, and today as a real estate agent working with Tri-Cities families every day. All of it comes back to the same thing: showing up for people when it matters.'

export const aboutGroups = [
  {
    title: 'Community',
    items: [
      '17 years living in Coquitlam',
      'PAC Chair, Pinetree Secondary (2021 to 2024)',
      'DPAC Representative, Maple Creek Middle School (2020 to 2022)',
      'DPAC Representative, Panorama Heights Elementary PAC (2019 to 2020)',
      'Board Member, Port Coquitlam-Coquitlam EDA',
      'Volunteer, Westwood Community Church',
    ],
  },
  {
    title: 'Career',
    items: [
      'Career counsellor for close to a decade, supporting immigrant families through S.U.C.C.E.S.S. and the Skills Connect for Immigrants Program',
      'Licensed real estate agent with Sutton Group 1st West Realty since 2016',
      'Platinum Sales Award, Sutton Group, every year from 2017 to 2025',
    ],
  },
  {
    title: 'Education',
    items: [
      'Master of Education in Adult Learning and Global Change, University of British Columbia',
      'Diploma in Guidance Studies, University of British Columbia',
      'Master of Arts in English Culture and Literature, Tianjin Foreign Studies University',
    ],
  },
  {
    title: 'Languages',
    items: ['Fluent in English and Mandarin', 'Beginner in French and Hebrew'],
  },
] as const

// Section 5: Get Involved
export const getInvolvedIntro =
  'A campaign like this only works with the community behind it. If you want to help, share ideas, or just say hi, get in touch.'

// Section 6: Footer
export const footer = {
  lines: [
    'Natalie Wang for School Trustee',
    'School District 43 (Coquitlam)',
    'Election Day: October 17, 2026',
  ],
  // TODO: update once the financial agent is officially registered.
  authorization: 'Authorized by the financial agent for Natalie Wang.',
} as const
