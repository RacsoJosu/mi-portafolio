import type { SkillCategory } from './Skills.types'

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'TanStack Query', icon: 'reactquery' },
      { name: 'TanStack Router', icon: 'tanstack' },
      { name: 'TanStack Start', icon: 'tanstack' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Shadcn UI', icon: 'shadcnui' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'C#', icon: 'dotnet' },
      { name: '.NET 9', icon: 'dotnet' },
      { name: 'Java', icon: 'openjdk' },
    ],
  },
  {
    title: 'DevOps y Nube',
    skills: [
      { name: 'AWS CDK', icon: 'amazonaws' },
      { name: 'AWS Lambda', icon: 'amazons3' }, // S3 is more recognizable if specific lambda fails, but let's try 'awslambda' is not on CDN
      { name: 'AWS S3', icon: 'amazons3' },
      { name: 'DynamoDB', icon: 'amazondynamodb' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Serverless', icon: 'serverless' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
]
