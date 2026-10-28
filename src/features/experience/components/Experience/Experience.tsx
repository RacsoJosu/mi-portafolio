import type { ComponentProps } from 'react'
import { motion } from 'motion/react'
import { cn } from '#/shared/components/ui/utils'
import { ExperienceTimeline } from './ExperienceTimeline'

export function Experience({ className, children, ...rest }: ComponentProps<'section'>) {
  return (
    <section
      id="experiencia"
      className={cn('py-24 px-6 relative overflow-hidden bg-background', className)}
      {...rest}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

Experience.Header = function Header({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn('text-center mb-16', className)}
      {...rest}
    >
      <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-3 inline-block">
        Trayectoria Profesional
      </span>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
        Experiencia & <span className="text-primary">Liderazgo Técnico</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Impacto real en producción: dirección técnica de equipos, arquitectura cloud en AWS,
        optimización de rendimiento y desarrollo full stack.
      </p>
    </motion.div>
  )
}

Experience.Timeline = ExperienceTimeline
