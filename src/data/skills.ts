import type { SkillGroup } from '@/types'

/** Unified skillset, grouped by engineering discipline rather than experience level. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: 'Services, APIs and enterprise application foundations.',
    skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Django', 'REST APIs'],
    accent: 'blue',
  },
  {
    title: 'Frontend',
    description: 'Interfaces, reusable components and typed application code.',
    skills: ['Vue.js', 'Vue 3', 'JavaScript', 'TypeScript'],
    accent: 'yellow',
  },
  {
    title: 'Engineering',
    description: 'Data, version control and reliable software delivery.',
    skills: ['SQL', 'Git', 'Jenkins', 'CI/CD', 'Testing', 'Debugging'],
    accent: 'coral',
  },
  {
    title: 'Applied AI',
    description: 'Retrieval, embeddings and LLM-powered application patterns.',
    skills: ['LLM APIs', 'RAG', 'Embeddings', 'Vector Databases'],
    accent: 'lavender',
  },
  {
    title: 'Agentic AI',
    description: 'Orchestration, tool integration and connected workflows.',
    skills: ['LangGraph', 'LangChain', 'MCP', 'Tool Calling'],
    accent: 'lavender',
  },
  {
    title: 'Cloud and Deployment',
    description: 'Cloud infrastructure, application packaging and deployment.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'Cloud-Native Networking'],
    accent: 'lavender',
  },
  {
    title: 'AI Production Engineering',
    description: 'Evaluation, visibility and safety for intelligent systems.',
    skills: ['Evaluation', 'Observability', 'Monitoring', 'Security'],
    accent: 'lavender',
  },
]
