import { motion } from 'motion/react'
import type { SkillCategory } from './Skills.types'

type Props = {
  category: SkillCategory
  index: number
}

export function SkillCategoryCard({ category }: Props) {
  // Triple the skills to ensure smooth infinite loop
  const skillsList = [...category.skills, ...category.skills, ...category.skills]

  return (
    <div className="relative w-full overflow-hidden py-12 px-4 rounded-3xl bg-muted/5 border border-border/20 backdrop-blur-md">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max items-center"
          animate={{
            x: [0, -800], // Adjusted for smaller gaps and min-width
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {skillsList.map((skill, sIdx) => (
            <div 
              key={`${skill.name}-${sIdx}`}
              className="flex items-center gap-3 min-w-[140px] group/skill"
            >
              <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center p-3 group-hover/skill:border-primary/50 group-hover/skill:bg-primary/5 transition-all duration-500 shadow-sm relative overflow-hidden">
                {/* Subtle glow on icon hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover/skill:bg-primary/5 blur-xl transition-all" />
                
                <img 
                  src={`https://cdn.simpleicons.org/${skill.icon}/64748b`} 
                  alt={skill.name}
                  className="w-full h-full object-contain relative z-10 transition-all duration-500 group-hover/skill:scale-110 group-hover/skill:brightness-125 grayscale group-hover/skill:grayscale-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/react/64748b`
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white group-hover/skill:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Enhanced gradient masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background via-background/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background via-background/40 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  )
}
