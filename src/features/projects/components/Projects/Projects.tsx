import { motion } from 'motion/react'
import type { Project } from './Projects.types'
import { ProjectCard } from './ProjectCard'

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Plataforma de comercio electrónico full stack con React, NestJS y PostgreSQL. Incluye pagos con Stripe y panel de administración.',
    tech: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'AWS'],
    github: '#',
    live: '#',
  },
  {
    title: 'API Gateway',
    description:
      'Gateway de API serverless construido con AWS Lambda, API Gateway y DynamoDB. Maneja autenticación, rate limiting y logging.',
    tech: ['AWS Lambda', 'Node.js', 'DynamoDB', 'CDK'],
    github: '#',
    live: '#',
  },
  {
    title: 'Real-time Dashboard',
    description:
      'Dashboard en tiempo real con Next.js, GraphQL subscriptions y WebSockets. Visualización de datos con Recharts.',
    tech: ['Next.js', 'GraphQL', 'WebSockets', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
]

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl mb-16 text-center">
            <span className="text-white">Proyectos</span>{' '}
            <span className="text-[#4D49FC]">Destacados</span>
          </h2>
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} index={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
