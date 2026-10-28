import { experiences } from './const'
import { ExperienceCard } from './ExperienceCard'

export function ExperienceTimeline() {
  return (
    <div className="relative space-y-8 sm:space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-8 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/60 before:via-primary/20 before:to-transparent">
      {experiences.map((item, idx) => (
        <div key={item.id} className="relative pl-10 sm:pl-16">
          {/* Timeline node */}
          <div className="absolute left-2.5 sm:left-6.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-sm shadow-primary/50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          <ExperienceCard item={item} index={idx} />
        </div>
      ))}
    </div>
  )
}
