import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { SkillCategory } from './Skills.types'
import { SkillCategoryCard } from './SkillCategoryCard'

const skillCategories: SkillCategory[] = [
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
    title: 'DevOps & Cloud',
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

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="min-h-fit flex items-center justify-center px-6 pt-24 pb-12 bg-background/50 relative overflow-hidden">
      {/* Background purely decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tight">
              <span className="text-primary">Skills</span>{' '}
              <span className="text-muted-foreground">&</span>{' '}
              <span className="text-white">Technologies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologías favoritas y herramientas que utilizo para dar vida a productos digitales excepcionales.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-muted/20 p-1.5 rounded-full border border-border/50 backdrop-blur-sm relative print:hidden">
              {skillCategories.map((category, idx) => (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(idx)}
                  className={`
                    px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative z-10
                    ${activeTab === idx ? 'text-primary-foreground' : 'text-muted-foreground hover:text-white'}
                  `}
                >
                  {category.title}
                  {activeTab === idx && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Single Carousel Container */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <SkillCategoryCard category={skillCategories[activeTab]} index={0} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
