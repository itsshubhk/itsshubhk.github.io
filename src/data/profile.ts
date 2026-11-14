import type { Profile } from '@/types'

/**
 * Single source of truth for personal information.
 *
 * Values containing "your-" or "example.com" are PLACEHOLDERS. Replace them
 * with your real details before deploying (see README -> "Updating your information").
 */
export const profile: Profile = {
  name: 'Shubham Khare',
  brand: 'SHUBHAM KHARE',
  role: 'Technical Specialist',
  yearsOfExperience: 8,
  siteUrl: 'https://shuhbamkhare.github.io',
  email: 'itsshubhk@gmail.com',
  resumePath: 'resume.pdf', // file lives at public/resume.pdf
  headline: {
    line1: "Hey, I'm Shubham.",
    line2: 'I build software that solves real-world problems.',
  },
  subheading:
    "Eight years building enterprise software with Java and Python. I own architecture, interface design and implementation across the stack, and I'm now expanding into Applied AI and Forward Deployed Engineering.",
  heroTags: [
    'Java',
    'Spring Boot',
    'Python',
    'FastAPI',
    'Backend Engineering',
    'Enterprise Systems',
    'Applied AI',
  ],
  facts: [
    { value: '8 yrs', label: 'Software engineering' },
    { value: 'Java + Python', label: 'Backend depth' },
    { value: 'Enterprise', label: 'Systems & integrations' },
  ],
  about: {
    heading: 'A little about me',
    paragraphs: [
      "I'm a Technical Specialist at Knorr-Bremse TCI in Pune, with eight years of experience in enterprise software. My foundation spans Java and Spring, Python with FastAPI and Django, and Vue interfaces that make complex engineering workflows usable.",
      "I enjoy the space between a business problem and a working system. Understanding the context, making sensible technical choices, testing carefully and delivering reliably matter as much to me as writing the code.",
      "I'm currently working on an industrial engineering workbench, a message management platform and an engineering calculation platform, owning architecture, design-system decisions and implementation end to end. Their names and descriptions are generalized here to protect confidential work.",
      "My next chapter is Applied AI and Forward Deployed Engineering. I'm learning RAG, LLM APIs and agentic workflows, with three planned AI and automation portfolio concepts alongside my professional projects. My focus is turning those ideas into practical systems, building on my enterprise engineering background.",
    ],
    highlights: [
      {
        title: 'Backend first',
        text: 'Java, Spring, Python, FastAPI, Django and enterprise integrations.',
      },
      {
        title: 'Problem translator',
        text: 'Comfortable turning business problems into scoped, working technical solutions.',
      },
      {
        title: 'Growing into AI',
        text: 'Learning Applied AI and FDE skills in the open, through hands-on projects.',
      },
    ],
  },
  contact: {
    heading: ['Have an interesting problem?', "Let's build something meaningful."],
    subheading:
      "I'm open to opportunities in Forward Deployed Engineering, Applied AI and enterprise software engineering.",
  },
  footerTagline: 'Designed with curiosity. Built with code.',
  social: [
    { key: 'github', label: 'GitHub', url: 'https://github.com/ShuhbamKhare', enabled: true },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/itsshubhk/',
      enabled: true,
    },
    { key: 'email', label: 'Gmail', url: 'mailto:itsshubhk@gmail.com', enabled: true },
    {
      key: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/shubhkhare/',
      enabled: true,
    },
  ],
}
