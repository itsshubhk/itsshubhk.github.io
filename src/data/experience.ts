import type { Role } from '@/types'

/** Employment dates and recognition come from the supplied CV. */
export const experience: Role[] = [
  {
    id: 'knorr-bremse-tci',
    company: 'Knorr-Bremse TCI',
    title: 'Technical Specialist',
    dates: 'April 2019 – Present',
    location: 'Pune, Maharashtra',
    summary:
      'Currently Technical Specialist, previously Senior Software Engineer, working on enterprise applications, backend services and integrations. Employment began externally in April 2019 and internally in April 2020; these dates describe company tenure, not the start of my current title.',
    responsibilities: [
      'Own end-to-end architecture, interface and design-system decisions, backend services and frontend implementation across three current engineering platforms.',
      'Develop Vue and TypeScript interfaces with Python APIs using FastAPI and Django, including directory integrations and engineering workflows.',
      'Integrate version-controlled project data, live monitoring and asynchronous calculation services with explicit validation and error handling.',
      'Develop and maintain Java/Spring applications, code-generation tooling and C# data-transformation integrations.',
      'Implement automated testing and CI/CD validation, and participate in QA and production release activities.',
    ],
    achievements: [
      'Employee Appreciation Award, TCI Awards — 2021 and 2020.',
      'Feather In Cap recognition, Yantriki coding competition — 2019.',
    ],
    technologies: ['Java', 'Spring', 'Python', 'FastAPI', 'Django', 'Vue 3', 'TypeScript', 'C#', 'SQL', 'Jenkins'],
  },
]
