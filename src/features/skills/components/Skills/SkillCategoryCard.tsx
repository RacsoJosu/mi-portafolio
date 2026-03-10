import { motion } from 'motion/react'
import type { SkillCategory } from './Skills.types'

type Props = {
  category: SkillCategory
  index: number
}

export function SkillCategoryCard({ category, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="border border-[#1a1a1a] p-8 hover:border-[#4D49FC] transition-colors"
    >
      <h3 className="text-xl mb-6 text-[#4D49FC]">{category.title}</h3>
      <ul className="space-y-3">
        {category.skills.map((skill) => (
          <li key={skill} className="text-gray-400">
            <span className="text-[#4D49FC] mr-2">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
