export type Skill = {
  name: string
  icon: string // Simple Icons slug or SVG path
  color?: string
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}
