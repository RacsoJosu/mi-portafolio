import { ExternalLink, Github, Lock, CheckCircle2, Cpu, Wrench } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '#/shared/components/ui/sheet'
import type { ProjectDetailSheetProps } from './ProjectDetailSheet.types'

export function ProjectDetailSheet({ project, isOpen, onClose }: ProjectDetailSheetProps) {
  if (!project) return null

  return (
    <Sheet>
      <SheetContent
        isOpen={isOpen}
        onClose={onClose}
        side="right"
        className="w-full sm:max-w-lg overflow-y-auto bg-card/95 backdrop-blur-2xl border-l border-primary/25 p-6 sm:p-8 flex flex-col justify-between"
      >
        <div className="space-y-6">
          <SheetHeader className="text-left space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.badge && (
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {project.badge}
                </span>
              )}
              <span className="text-xs text-muted-foreground font-mono">
                {project.category.toUpperCase()}
              </span>
            </div>

            <SheetTitle className="text-xl sm:text-2xl font-bold text-foreground">
              {project.title}
            </SheetTitle>

            {project.metrics && (
              <p className="text-xs sm:text-sm font-medium text-primary">
                ⚡ {project.metrics}
              </p>
            )}
            <SheetDescription className="sr-only">
              Detalles técnicos y de ingeniería de {project.title}
            </SheetDescription>
          </SheetHeader>

          {/* Implementation Description */}
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
            <h4 className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <Cpu className="text-primary" size={15} />
              Implementación & Arquitectura
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical bullets */}
          {project.details && project.details.length > 0 && (
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <Wrench className="text-primary" size={14} />
                Decisiones de Ingeniería & DevOps
              </h4>
              <ul className="space-y-2.5">
                {project.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={15} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Stack Tecnológico
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-foreground/90 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-white/10">
          {project.isPrivate ? (
            <span className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-muted-foreground text-xs">
              <Lock size={15} />
              Código Privado / Empresa
            </span>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-muted-foreground hover:border-primary hover:text-primary transition-colors text-xs font-medium"
            >
              <Github size={16} />
              Ver Repositorio
            </a>
          )}

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs font-semibold shadow-sm"
          >
            <ExternalLink size={15} />
            Ir a la app en vivo
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
