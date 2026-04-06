interface JourneyItem {
  title: string
  role: string
  period: string
  details: string[]
}

export const journeyData: JourneyItem[] = [
  {
    title: 'Team Projects',
    role: 'Frontend Developer Trainee',
    period: 'October 2024 - March 2025',
    details: [
      'Worked alongside experienced professional developers in a real team environment.',
      'Contributed to feature development and improved practical collaboration skills.',
      'Gained hands-on experience with real-world workflows and workplace communication.'
    ]
  },
  {
    title: 'Freelance',
    role: 'Frontend / Backend Developer',
    period: 'October 2025 - February 2026',
    details: [
      'Completed several small freelance development tasks.',
      'Built responsive user interfaces and client-oriented solutions.',
      'Improved practical development and problem-solving skills.'
    ]
  },
  {
    title: 'Personal Projects',
    role: 'Full-Stack Developer',
    period: 'September 2024 - Present',
    details: [
      'Actively preparing for a professional full-stack developer role.',
      'Focused on improving both frontend and backend development skills.',
      'Building portfolio and pet projects using React, Next.js, NestJS, and PostgreSQL.'
    ]
  }
]
