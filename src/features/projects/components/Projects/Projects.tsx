import type { ComponentProps } from 'react'
import { motion } from 'motion/react'
import { cn } from '#/shared/components/ui/utils'
import { ProjectsFilter } from './ProjectsFilter'

export function Projects({ className, children, ...rest }: ComponentProps<'section'>) {
  return (
    <section
      id="projects"
      className={cn('min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden bg-background', className)}
      {...rest}
    >
      <div className="max-w-7xl w-full mx-auto">{children}</div>
    </section>
  )
}

Projects.Header = function Header({ className, ...rest }: ComponentProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn('text-center mb-10', className)}
      {...rest}
    >
      <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-3 inline-block">
        Portafolio de Soluciones
      </span>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
        Proyectos <span className="text-primary">Destacados</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        Sistemas reales en producción, arquitecturas cloud en AWS y aplicaciones full stack de alto impacto.
      </p>
    </motion.div>
  )
}

Projects.Filter = ProjectsFilter

Projects.List = function List({ children, className, ...rest }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
