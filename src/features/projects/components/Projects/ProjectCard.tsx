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
      className="border border-[#1a1a1a] p-8 hover:border-[#4D49FC] transition-colors group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl text-white">{project.title}</h3>
        <div className="flex gap-4">
          <a
            href={project.github}
            className="text-gray-400 hover:text-[#4D49FC] transition-colors"
            aria-label={`Código fuente de ${project.title}`}
          >
            <Github size={20} />
          </a>
          <a
            href={project.live}
            className="text-gray-400 hover:text-[#4D49FC] transition-colors"
            aria-label={`Demo de ${project.title}`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-sm px-3 py-1 border border-[#4D49FC] text-[#4D49FC]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
