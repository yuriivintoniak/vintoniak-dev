interface SkillCategory {
  title: string
  items: string[]
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    items: [
      'HTML5',
      'CSS3',
      'ReactJS',
      'NextJS',
      'TypeScript',
      'Tailwind CSS'
    ]
  },
  {
    title: 'Backend',
    items: [
      'NodeJS',
      'NestJS',
      'ExpressJS',
      'REST API',
      'GraphQL',
      'Prisma ORM'
    ]
  },
  {
    title: 'Database & Tools',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Git',
      'GitHub',
      'Vercel',
      'Insomnia'
    ]
  },
  {
    title: 'Soft Skills',
    items: [
      'Team Collaboration',
      'Problem Solving',
      'Communication',
      'Responsibility',
      'Attention to Detail',
      'Continuous Learning'
    ]
  }
]
