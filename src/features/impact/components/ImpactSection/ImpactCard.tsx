import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import type { ImpactArea } from './ImpactSection.types'

type Props = {
  impact: ImpactArea
  index: number
}

export function ImpactCard({ impact, index }: Props) {
  const Icon = impact.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="
        relative flex flex-col justify-between
        rounded-2xl p-6 sm:p-8
        border border-border/60 bg-card/60 backdrop-blur-md
        hover:border-primary/50 hover:shadow-[0_0_30px_rgba(77,73,252,0.12)]
        transition-all duration-300 group
      "
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Icon size={24} />
          </div>
          {impact.metricHighlight && (
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-600/40 text-emerald-400">
              {impact.metricHighlight}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {impact.title}
        </h3>

        <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-4">
          {impact.subtitle}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {impact.description}
        </p>
      </div>

      <div className="pt-4 border-t border-border/40">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-2.5">
          Evidencias verificables
        </span>
        <ul className="space-y-1.5">
          {impact.evidence.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-foreground/85">
              <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
