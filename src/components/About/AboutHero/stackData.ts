interface StackCategory {
  title: string
  items: string[]
}

export const stackData: StackCategory[] = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn/ui',
      'TanStack Query',
      'TanStack Router'
    ]
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Prisma ORM',
      'REST API',
      'GraphQL'
    ]
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Figma',
      'Insomnia',
      'Docker',
      'Zod',
      'Vite'
    ]
  }
]
