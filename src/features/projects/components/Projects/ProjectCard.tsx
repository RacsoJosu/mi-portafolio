import { motion } from 'motion/react'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from './Projects.types'

type Props = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col border border-border overflow-hidden hover:border-primary hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] transition-all duration-300 group bg-card/50 backdrop-blur-sm rounded-xl"
    >
      {/* Browser-style Header & Preview */}
      <div className="relative group/preview overflow-hidden border-b border-border">
        {/* Browser Header Bar */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-muted/30 border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <div className="ml-2 flex-1 bg-background/50 rounded h-4 overflow-hidden px-2 flex items-center">
            <span className="text-[10px] text-muted-foreground truncate opacity-50">{project.live}</span>
          </div>
        </div>
        
        {/* Project Image */}
        <div className="aspect-video relative overflow-hidden bg-muted/20">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`Vista previa de ${project.title}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Sin vista previa disponible</span>
            </div>
          )}
          
          {/* Link Overlay on Hover */}
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all transform translate-y-4 group-hover/preview:translate-y-0 duration-300"
              title="Ver código en GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all transform translate-y-4 group-hover/preview:translate-y-0 duration-300 delay-75"
              title="Ver sitio en vivo"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
              {project.title === 'RedMedicaTel' ? 'Professional' : 'Project'}
            </span>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium transition-all hover:bg-primary/15 hover:border-primary/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
