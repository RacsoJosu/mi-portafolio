export type ExperienceRole = {
  title: string
  period: string
  isCurrent?: boolean
  description: string
  highlights: string[]
}

export type ExperienceItem = {
  id: string
  company: string
  location: string
  period: string
  badge?: string
  roles: ExperienceRole[]
  technologies: string[]
  projects?: {
    name: string
    url?: string
  }[]
}
