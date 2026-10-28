export type ProjectCategory = 'all' | 'production' | 'frontend' | 'cloud'

export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  live: string
  image?: string
  category: 'production' | 'frontend' | 'cloud'
  badge?: string
  isPrivate?: boolean
  details?: string[]
  metrics?: string
}
