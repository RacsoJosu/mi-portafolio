import { motion } from 'motion/react'
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react'
import type { ExperienceItem } from './Experience.types'

type Props = {
  item: ExperienceItem
  index: number
}

export function ExperienceCard({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md p-6 sm:p-8 hover:border-primary/40 transition-all duration-300 shadow-lg shadow-black/40"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <Briefcase size={16} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {item.badge}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            {item.company}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-2">
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} />
              {item.location}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} />
              {item.period}
            </span>
          </div>
        </div>
      </div>

      {/* Roles & Achievements */}
      <div className="space-y-6 pt-6">
        {item.roles.map((role) => (
          <div key={role.title} className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                {role.title}
                {role.isCurrent && (
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30 animate-pulse">
                    Actual
                  </span>
                )}
              </h4>
              <span className="text-xs text-muted-foreground font-mono">
                {role.period}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {role.description}
            </p>

            <ul className="space-y-2 pt-1">
              {role.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Projects Links */}
      {item.projects && item.projects.length > 0 && (
        <div className="mt-6 pt-5 border-t border-white/5">
          <span className="text-xs font-semibold text-foreground/80 block mb-2.5">
            Plataformas desarrolladas:
          </span>
          <div className="flex flex-wrap gap-2">
            {item.projects.map((proj) =>
              proj.url ? (
                <a
                  key={proj.name}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 text-primary hover:bg-primary/15 transition-colors font-medium"
                >
                  {proj.name}
                  <ExternalLink size={12} />
                </a>
              ) : (
                <span
                  key={proj.name}
                  className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground"
                >
                  {proj.name}
                </span>
              )
            )}
          </div>
        </div>
      )}

      {/* Tech Chips */}
      <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-1.5">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2.5 py-1 rounded-md bg-secondary/80 text-foreground/90 border border-white/5 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
