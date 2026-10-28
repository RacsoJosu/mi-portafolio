import { motion } from 'motion/react'
import { ArrowRightLeft, Zap, Cloud, Users2, Bot, Sparkles } from 'lucide-react'
import developerImage from '@/assets/oscar-vallecillo.jpg'

const metrics = [
  {
    id: 'migration',
    icon: ArrowRightLeft,
    title: 'PHP ➔ Node/TS',
    subtitle: 'Migración Core Legacy',
    badge: 'Producción',
    iconColor: 'text-primary',
    position: 'top-2 -left-4 sm:-left-10',
    delay: 0.1,
  },
  {
    id: 'performance',
    icon: Zap,
    title: '~5 min ➔ 800ms',
    subtitle: 'Optimización Batch ~5k',
    badge: '-85% Latencia',
    iconColor: 'text-amber-400',
    position: 'top-5 -right-4 sm:-right-10',
    delay: 0.2,
  },
  {
    id: 'ai-workflows',
    icon: Bot,
    title: 'Workflows con IA',
    subtitle: 'AGENTS.md & Subagentes',
    badge: 'Ingeniería Asistida',
    iconColor: 'text-purple-400',
    position: 'top-[44%] -left-6 sm:-left-14',
    delay: 0.3,
  },
  {
    id: 'leadership',
    icon: Users2,
    title: 'Liderazgo Técnico',
    subtitle: 'Equipo de 5 Desarrolladores',
    badge: 'Tech Lead',
    iconColor: 'text-primary',
    position: 'top-[48%] -right-6 sm:-right-12',
    delay: 0.4,
  },
  {
    id: 'devops',
    icon: Cloud,
    title: 'Docker & AWS',
    subtitle: 'Multi-stage CI/CD',
    badge: 'Amplify .yml',
    iconColor: 'text-sky-400',
    position: '-bottom-3 right-0 sm:right-2',
    delay: 0.5,
  },
]

export function FloatingMetrics() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center py-6 sm:py-10">
      {/* Ambient background glow behind image */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Center Image Container with stylized border & aura */}
      <div className="relative w-[270px] sm:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 via-black/40 to-black/80 p-2 shadow-2xl shadow-black/80">
        {/* Decorative corner light */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-2xl rounded-full pointer-events-none" />

        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
          <img
            src={developerImage}
            alt="Oscar Vallecillo — Tech Lead"
            className="w-full h-full object-cover -translate-x-[10%] scale-[1.32] object-[center_42%] filter brightness-[1.03] contrast-[1.12] saturate-[1.12]"
          />
          {/* Subtle warm & tech lighting vignette */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
          {/* Subtle bottom shadow mask so it blends seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

          {/* Bottom badge on the portrait */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-max px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-primary/30 flex items-center gap-2 shadow-lg z-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide">
              Tech Lead & Cloud Architect
            </span>
            <Sparkles size={13} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Satellite Cards (Fijas, sin lag de animación continua, con respuesta inmediata al hover) */}
      <div className="absolute inset-0 pointer-events-none">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: metric.delay }}
              whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.15 } }}
              className={`absolute ${metric.position} pointer-events-auto z-20 cursor-default hidden sm:block`}
            >
              <div className="group relative rounded-xl p-3 bg-black/85 backdrop-blur-xl border border-white/15 hover:border-primary/60 transition-all duration-200 shadow-xl shadow-black/90 min-w-[190px] sm:min-w-[205px]">
                {/* Glow layer on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="flex items-center gap-2.5">
                  <div
                    className={`p-2 rounded-lg bg-white/5 border border-white/10 ${metric.iconColor} group-hover:bg-primary/15 transition-colors flex-shrink-0`}
                  >
                    <Icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white font-mono block truncate">
                      {metric.title}
                    </span>
                    <p className="text-[10.5px] text-muted-foreground truncate">
                      {metric.subtitle}
                    </p>
                  </div>
                </div>

                {/* Micro badge */}
                <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9.5px] text-primary font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {metric.badge}
                  </span>
                  <span className="text-[8.5px] text-white/40 uppercase tracking-widest font-mono">
                    Producción
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile-only responsive pill grid */}
      <div className="sm:hidden absolute -bottom-28 inset-x-0 grid grid-cols-2 gap-2 z-20">
        {metrics.slice(0, 4).map((metric) => (
          <div
            key={metric.id}
            className="rounded-xl p-2 bg-black/90 backdrop-blur-md border border-white/15 text-center"
          >
            <span className="text-[11px] font-bold text-primary block font-mono truncate">{metric.title}</span>
            <span className="text-[9.5px] text-muted-foreground truncate block">{metric.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
