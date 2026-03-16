import type { SkillCategory } from './Skills.types'

type Props = {
  category: SkillCategory
}

export function SkillCategoryGridCard({ category }: Props) {
  return (
    <div className="relative w-full py-12 px-4 rounded-3xl bg-muted/5 border border-border/20 backdrop-blur-md">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {category.skills.map((skill, sIdx) => (
          <div
            key={`${skill.name}-${sIdx}`}
            className="flex flex-col items-center gap-3 group/skill"
          >
            <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center p-3 group-hover/skill:border-primary/50 group-hover/skill:bg-primary/5 transition-all duration-500 shadow-sm relative overflow-hidden">
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
            <span className="text-sm font-semibold text-white group-hover/skill:text-primary transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
