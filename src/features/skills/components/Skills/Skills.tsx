import { motion } from 'motion/react'
import type { SkillCategory } from './Skills.types'
import { SkillCategoryCard } from './SkillCategoryCard'

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'C#', '.NET 9', 'Java', 'GraphQL', 'REST'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS Lambda', 'S3', 'CDK', 'Docker', 'Serverless'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-16 text-center">
            <span className="text-[#4D49FC]">Skills</span>{' '}
            <span className="text-white">&</span>{' '}
            <span className="text-white">Tecnologías</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <SkillCategoryCard key={category.title} category={category} index={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
