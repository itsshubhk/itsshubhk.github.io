export type SocialKey = 'github' | 'linkedin' | 'email' | 'instagram'

export interface SocialLink {
  key: SocialKey
  label: string
  /** Full URL (mailto: for email). */
  url: string
  /** Optional links are hidden when `enabled` is false. */
  enabled: boolean
}

export interface Profile {
  name: string
  brand: string
  role: string
  yearsOfExperience: number
  siteUrl: string
  email: string
  resumePath: string
  headline: { line1: string; line2: string }
  subheading: string
  heroTags: string[]
  facts: { value: string; label: string }[]
  about: {
    heading: string
    paragraphs: string[]
    highlights: { title: string; text: string }[]
  }
  contact: {
    heading: [string, string]
    subheading: string
  }
  footerTagline: string
  social: SocialLink[]
}

export interface Role {
  id: string
  company: string
  title: string
  dates: string
  location?: string
  summary: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  /** True while the entry still contains placeholder text. */
  placeholder?: boolean
}

export type ProjectStatus = 'Planned' | 'In Progress' | 'Completed'

export type ProjectArt = 'incident' | 'knowledge' | 'workflow'

export interface ArchitectureNode {
  label: string
  detail: string
}

export interface ProjectScreenshot {
  src: string
  alt: string
}

export interface Project {
  slug: string
  kind: 'professional' | 'learning'
  private?: boolean
  ownership?: string
  title: string
  status: ProjectStatus
  tagline: string
  description: string
  art: ProjectArt
  accent: 'blue' | 'yellow' | 'coral' | 'lavender'
  overview: string
  problem: string
  solution: string
  architecture: ArchitectureNode[]
  technologies: string[]
  /** Leave null until the repository exists. */
  github: string | null
  /** Leave null until a live demo exists. */
  demo: string | null
  /** Add image paths (relative to /public) once you have screenshots. */
  screenshots: ProjectScreenshot[]
}

export interface SkillGroup {
  title: string
  description?: string
  skills: string[]
  accent: 'blue' | 'yellow' | 'coral' | 'lavender'
}
