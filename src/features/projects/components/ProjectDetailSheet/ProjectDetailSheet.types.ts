import type { Project } from '../Projects/Projects.types'

export type ProjectDetailSheetProps = {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}
