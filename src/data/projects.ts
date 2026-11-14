import type { Project } from '@/types'

/**
 * Professional projects are ongoing and anonymized for public use.
 * Learning concepts stay Planned until implementation details exist.
 * - Set `github` / `demo` to real URLs when available (null shows a "coming soon" state).
 * - Add screenshots to public/images/projects/ and list them in `screenshots`.
 */
export const projects: Project[] = [
  {
    slug: 'industrial-engineering-workbench',
    kind: 'professional',
    private: true,
    title: 'Industrial Engineering Workbench',
    status: 'In Progress',
    tagline: 'Complex engineering workflows, one coherent workspace.',
    description:
      'An engineering application that brings configuration, live monitoring and reporting into a Vue interface backed by Python APIs.',
    art: 'workflow',
    accent: 'blue',
    ownership:
      'End-to-end ownership of software architecture, interface and design-system decisions, API integrations, implementation, testing and technical delivery.',
    overview:
      'An ongoing professional engineering workbench. The application combines a Vue 3 and TypeScript frontend with FastAPI services and integrations for project data, directory access and live monitoring. Its public name and description are anonymized.',
    problem:
      'Engineering users need to configure complex systems, inspect operational data and generate reports without jumping between disconnected tools.',
    solution:
      'A consistent interface connects configuration screens, live telemetry views and reporting workflows. API services keep integration concerns separate, while automated tests validate the application across layers.',
    architecture: [
      { label: 'Vue 3 interface', detail: 'Reusable components, configuration screens and engineering data views.' },
      { label: 'FastAPI services', detail: 'REST endpoints, input handling and service integration boundaries.' },
      { label: 'Live monitoring', detail: 'WebSocket-based communication and telemetry workflows.' },
      { label: 'Enterprise adapters', detail: 'Directory access, version-controlled project data and reporting integrations.' },
    ],
    technologies: ['Vue 3', 'TypeScript', 'Python', 'FastAPI', 'WebSockets', 'REST APIs', 'SVN', 'Automated Testing'],
    github: null,
    demo: null,
    screenshots: [],
  },
  {
    slug: 'engineering-message-platform',
    kind: 'professional',
    private: true,
    title: 'Engineering Message Management Platform',
    status: 'In Progress',
    tagline: 'A structured foundation for shared engineering knowledge.',
    description:
      'A modular platform for managing engineering messages, with a typed Vue frontend and FastAPI application boundaries.',
    art: 'knowledge',
    accent: 'yellow',
    ownership:
      'End-to-end architecture and design-system ownership, technology decisions, frontend and backend implementation, identity integration and CI/test setup.',
    overview:
      'An ongoing professional message-management application. The codebase has modular authentication, authorization, directory, activity and search boundaries. Catalog persistence is still evolving, so it is not presented as a finished database-backed product.',
    problem:
      'Teams need a consistent place to access engineering messages, with clear access rules and a maintainable structure for future catalog features.',
    solution:
      'A Vue and TypeScript application uses typed API contracts against modular FastAPI services. Domain interfaces separate application behavior from directory and persistence adapters, allowing the implementation to grow without coupling the interface to storage details.',
    architecture: [
      { label: 'Typed Vue frontend', detail: 'Shared UI components, state management and typed OpenAPI integration.' },
      { label: 'Modular FastAPI backend', detail: 'Separated application, domain and infrastructure responsibilities.' },
      { label: 'Identity and authorization', detail: 'Directory integration, role mapping and request protection.' },
      { label: 'Persistence boundaries', detail: 'Repository interfaces; current in-memory foundations are not claimed as completed durable storage.' },
    ],
    technologies: ['Vue 3', 'TypeScript', 'Python', 'FastAPI', 'OpenAPI', 'Pinia', 'Jenkins', 'Automated Testing'],
    github: null,
    demo: null,
    screenshots: [],
  },
  {
    slug: 'engineering-calculation-platform',
    kind: 'professional',
    private: true,
    title: 'Engineering Calculation Platform',
    status: 'In Progress',
    tagline: 'From structured project inputs to traceable calculations.',
    description:
      'A full-stack engineering platform for project configuration, versioned inputs and asynchronous calculation-service integration.',
    art: 'incident',
    accent: 'coral',
    ownership:
      'End-to-end software architecture, UI and design-system decisions, backend and frontend development, service orchestration, integration and validation.',
    overview:
      'An ongoing professional platform combining a Vue interface, a Django backend and a separate FastAPI calculation service. My work includes the application and integration architecture, connecting an existing calculation runtime through explicit service contracts.',
    problem:
      'Engineering calculations need structured inputs, validation and a clear relationship to the project revision that produced them. Users also need to follow long-running work and cancel it when necessary.',
    solution:
      'The application manages versioned project data, assembles validated input snapshots and submits asynchronous calculation jobs. Service boundaries expose status, results, cancellation and structured errors back to the interface.',
    architecture: [
      { label: 'Vue workspace', detail: 'Project configuration, data visualization and calculation workflow interfaces.' },
      { label: 'Django API layer', detail: 'Project-data operations, validation and calculation orchestration.' },
      { label: 'FastAPI job service', detail: 'Asynchronous job lifecycle, status, results and cooperative cancellation.' },
      { label: 'Versioned data and runtime adapter', detail: 'Git-backed project data and integration with an existing calculation runtime.' },
    ],
    technologies: ['Vue 3', 'TypeScript', 'Python', 'Django', 'FastAPI', 'REST APIs', 'Git', 'Automated Testing'],
    github: null,
    demo: null,
    screenshots: [],
  },
  {
    slug: 'ai-devops-incident-investigation',
    kind: 'learning',
    title: 'AI DevOps Incident Investigation Platform',
    status: 'Planned',
    tagline: 'From failing build to likely root cause.',
    description:
      'An AI-powered platform that investigates Jenkins build failures and application logs, searches technical documentation, identifies potential root causes and recommends solutions.',
    art: 'incident',
    accent: 'blue',
    overview:
      'A planned platform that acts as a first-line investigator for failing builds. It collects Jenkins build output and application logs, retrieves relevant technical documentation and past tickets, and produces a ranked list of likely root causes with suggested fixes.',
    problem:
      'When a CI build or service fails, engineers lose time switching between Jenkins consoles, log files, wikis and Jira tickets to piece together what went wrong. The same failures are often diagnosed repeatedly because past knowledge is hard to find.',
    solution:
      'An agentic workflow gathers evidence from builds and logs, retrieves matching documentation through RAG, reasons over the combined context and returns a grounded summary with references, so that an engineer can verify and act quickly. Humans stay in the loop for any change.',
    architecture: [
      { label: 'Jenkins & logs', detail: 'Ingest build failures and application logs.' },
      { label: 'FastAPI service', detail: 'API layer and orchestration entry point.' },
      { label: 'LangGraph agent', detail: 'Multi-step investigation workflow with tool calls.' },
      { label: 'RAG retrieval', detail: 'Embeddings and vector search over documentation.' },
      { label: 'PostgreSQL + pgvector', detail: 'Stores investigations, embeddings and feedback.' },
      { label: 'Jira', detail: 'Links findings to existing tickets.' },
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LLM APIs',
      'RAG',
      'LangGraph',
      'PostgreSQL',
      'pgvector',
      'Jenkins',
      'Jira',
    ],
    github: null,
    demo: null,
    screenshots: [],
  },
  {
    slug: 'enterprise-knowledge-assistant',
    kind: 'learning',
    title: 'Enterprise Knowledge Assistant',
    status: 'Planned',
    tagline: 'Grounded answers, with sources.',
    description:
      'An intelligent knowledge assistant that searches technical documentation and provides grounded answers with source references.',
    art: 'knowledge',
    accent: 'yellow',
    overview:
      'A planned assistant for engineering teams that answers questions from their own technical documentation, and shows exactly which documents each answer came from.',
    problem:
      'Technical knowledge is scattered across wikis, runbooks and design documents. Keyword search misses context, and generic chatbots can produce confident answers that are not grounded in the organisation’s real documentation.',
    solution:
      'Documents are chunked, embedded and indexed. At question time the assistant retrieves the most relevant passages, generates an answer constrained to that context, and returns source references so every claim can be checked.',
    architecture: [
      { label: 'Document ingestion', detail: 'Chunk and clean technical documentation.' },
      { label: 'Embeddings', detail: 'Convert chunks into vectors.' },
      { label: 'PostgreSQL vectors', detail: 'Vector search alongside relational metadata.' },
      { label: 'FastAPI service', detail: 'Retrieval and answer generation endpoints.' },
      { label: 'Cited answer', detail: 'Response with source references.' },
    ],
    technologies: ['Python', 'FastAPI', 'RAG', 'Embeddings', 'Vector Search', 'PostgreSQL'],
    github: null,
    demo: null,
    screenshots: [],
  },
  {
    slug: 'enterprise-workflow-automation',
    kind: 'learning',
    title: 'Enterprise Workflow Automation Platform',
    status: 'Planned',
    tagline: 'Connect the APIs. Automate the busywork.',
    description:
      'A platform that connects enterprise APIs and automates engineering workflows.',
    art: 'workflow',
    accent: 'coral',
    overview:
      'A planned integration platform that connects internal and third-party enterprise APIs and runs repeatable engineering workflows on top of them.',
    problem:
      'Engineering teams rely on many tools that do not talk to each other, so routine tasks such as status updates, ticket creation and notifications are handled by hand and are easy to get wrong.',
    solution:
      'A Spring Boot core exposes reliable REST APIs and workflow definitions backed by SQL, while Python and FastAPI services handle integration adapters and automation logic. The focus is on clear contracts, retries, auditability and testing.',
    architecture: [
      { label: 'REST integrations', detail: 'Adapters to enterprise and third-party APIs.' },
      { label: 'Spring Boot core', detail: 'Workflow definitions, orchestration and security.' },
      { label: 'FastAPI services', detail: 'Lightweight automation and data-processing tasks.' },
      { label: 'SQL database', detail: 'Workflow state and audit history.' },
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs', 'SQL'],
    github: null,
    demo: null,
    screenshots: [],
  },
]
