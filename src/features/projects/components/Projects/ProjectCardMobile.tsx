import { useState } from 'react'
import { motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from './Projects.types'
import { cn } from '#/shared/components/ui/utils'

type Props = {
  project: Project
  index: number
}

// ──────────── MOBILE COMPONENT (Click/Tap to flip with Fixed Long Height) ────────────
export function ProjectCardMobile({ project, index }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="[perspective:1000px] w-full h-[480px] lg:hidden relative"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Flip wrapper */}
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]",
          isFlipped && "[transform:rotateY(180deg)]"
        )}
      >
        {/* ──────────── FRONT FACE ──────────── */}
        <div
          className="
            absolute inset-0
            flex flex-col overflow-hidden rounded-xl
            border border-border bg-card/50 backdrop-blur-sm
            [backface-visibility:hidden]
          "
        >
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 px-4 py-2 bg-muted/30 border-b border-border flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            <div className="ml-2 flex-1 bg-background/50 rounded h-4 overflow-hidden px-2 flex items-center">
              <span className="text-[10px] text-muted-foreground truncate opacity-50">
                {project.live}
              </span>
            </div>
          </div>

          {/* Project image */}
          <div className="flex-1 relative overflow-hidden bg-muted/20">
            {project.image ? (
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Sin vista previa disponible</span>
              </div>
            )}
          </div>

          {/* Title bar at bottom */}
          <div className="px-5 py-4 bg-card border-t border-border flex-shrink-0">
            <h3 className="text-lg font-bold text-foreground truncate">
              {project.title}
            </h3>
          </div>
        </div>

        {/* ──────────── BACK FACE ──────────── */}
        <div
          className="
            absolute inset-0
            flex flex-col justify-between
            rounded-xl p-6
            border border-primary/30
            bg-card backdrop-blur-sm
            [backface-visibility:hidden]
            [transform:rotateY(180deg)]
          "
        >
          {/* Project title */}
          <h3 className="text-2xl font-bold text-primary mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <div className="flex-1 overflow-y-auto no-scrollbar mb-4 pr-1">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {project.description}
            </p>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links - Stacked vertically for mobile */}
          <div className="flex flex-col gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-muted-foreground text-sm font-medium active:scale-95 transition-transform"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm font-medium active:scale-95 transition-transform"
            >
              <ExternalLink size={18} />
              Ver proyecto
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
