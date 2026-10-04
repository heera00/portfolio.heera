export type NavItem = {
  id: string
  label: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Project = {
  id: string
  name: string
  summary: string
  details: string
  technologies: string[]
  category: 'featured' | 'platform' | 'web' | 'personal'
  highlights: string[]
  githubUrl: string
  demoUrl: string
  featured?: boolean
}

export type Achievement = {
  title: string
  description: string
}

export type SiteConfig = {
  name: string
  tagline: string
  title: string
  subtitle: string
  location: string
  education: string
  email: string
  github: string
  linkedin: string
  resume: string
}
