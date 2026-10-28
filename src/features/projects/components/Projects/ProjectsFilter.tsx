import { motion } from 'motion/react'
import { projectCategories } from './const'
import type { ProjectCategory } from './Projects.types'

type Props = {
  activeCategory: ProjectCategory
  onSelectCategory: (category: ProjectCategory) => void
}

export function ProjectsFilter({ activeCategory, onSelectCategory }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
      {projectCategories.map((cat) => {
        const isActive = activeCategory === cat.id
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className="relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer select-none focus:outline-none"
          >
            {isActive && (
              <motion.div
                layoutId="activeProjectFilter"
                className="absolute inset-0 rounded-full bg-primary/20 border border-primary/50 shadow-sm shadow-primary/20"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors ${
                isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
