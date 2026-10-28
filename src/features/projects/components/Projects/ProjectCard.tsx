import { motion } from 'motion/react'
import { ExternalLink, Github, Lock, Info } from 'lucide-react'
import type { Project } from './Projects.types'

type Props = {
  project: Project
  index: number
  onOpenDetails?: (project: Project) => void
}

export function ProjectCard({ project, index, onOpenDetails }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col rounded-xl border border-white/10 bg-card/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/5"
    >
      {/* Browser mockup header */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-muted/40 border-b border-white/10 flex-shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <div className="ml-2 flex-1 bg-background/50 rounded h-4 overflow-hidden px-2 flex items-center">
          <span className="text-[10px] text-muted-foreground truncate font-mono">
            {project.live}
          </span>
        </div>
        {project.badge && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {project.badge}
          </span>
        )}
      </div>

      {/* Project preview image -> Clicking opens live app */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir ${project.title} en vivo`}
        className="relative h-44 sm:h-48 overflow-hidden bg-muted/20 cursor-pointer block group/img"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
            Sin vista previa disponible
          </div>
        )}
        <div className="absolute inset-0 bg-background/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground shadow-md">
            <ExternalLink size={14} /> Abrir app en vivo
          </span>
        </div>
      </a>

      {/* Card content focused on implementation */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/title block"
          >
            <h3 className="text-base sm:text-lg font-bold text-foreground group-hover/title:text-primary transition-colors flex items-center gap-1.5">
              <span>{project.title}</span>
              <ExternalLink size={14} className="opacity-0 group-hover/title:opacity-100 transition-opacity text-primary shrink-0" />
            </h3>
          </a>

          {/* Implementation summary (focused, precise, no fluff) */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech tags & Actions */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-muted-foreground font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            {/* Primary Action: Direct link to app */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/15 border border-primary/40 text-primary hover:bg-primary/25 transition-colors text-xs font-semibold"
            >
              <ExternalLink size={14} />
              Ir a la app
            </a>

            {/* Optional Details Sheet drawer trigger */}
            {onOpenDetails && (
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                title="Ver arquitectura y detalles técnicos"
                className="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg border border-white/10 text-muted-foreground hover:border-primary hover:text-primary transition-colors text-xs font-medium cursor-pointer"
              >
                <Info size={14} />
                <span>Detalles</span>
              </button>
            )}

            {/* GitHub or Private Code badge */}
            {project.isPrivate ? (
              <span
                title="Código Privado de Empresa"
                className="p-2 rounded-lg border border-white/10 bg-white/5 text-muted-foreground inline-flex items-center justify-center"
              >
                <Lock size={15} />
              </span>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Ver repositorio en GitHub"
                className="p-2 rounded-lg border border-white/10 text-muted-foreground hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                <Github size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
