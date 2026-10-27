import type { LucideIcon } from 'lucide-react'

export type ImpactArea = {
  id: string
  title: string
  subtitle: string
  icon: LucideIcon
  description: string
  evidence: string[]
  metricHighlight?: string
}
