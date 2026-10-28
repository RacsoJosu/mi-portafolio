import type { Project } from './Projects.types'
import { ProjectCard } from './ProjectCard'

type Props = {
  project: Project
  index: number
  selectedProject?: string
  setSelectedProject?: (selectedProject: string) => void
  onOpenDetails?: (project: Project) => void
}

/**
 * @deprecated Use unified ProjectCard component which is responsive across all screen sizes.
 */
export function ProjectCardMobile({ project, index, onOpenDetails, setSelectedProject }: Props) {
  const handleOpen = onOpenDetails ?? ((p: Project) => setSelectedProject?.(p.title))
  return <ProjectCard project={project} index={index} onOpenDetails={handleOpen} />
}
