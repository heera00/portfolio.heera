import type { Achievement, Project, SkillGroup } from '../types'

export const heroIntro =
  'Full-stack developer and cybersecurity enthusiast focused on building useful software while learning AI, networking, DevOps, and system design.'

export const aboutText =
  'I enjoy building real-world software that solves practical problems. My current journey blends full-stack development with cybersecurity, networking, DevOps, and AI so I can design robust systems from end to end.'

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Zustand', 'Axios'] },
  { title: 'Backend', items: ['Django', 'DRF', 'WebSockets', 'Django Channels'] },
  { title: 'Database', items: ['PostgreSQL', 'Redis', 'Qdrant'] },
  { title: 'DevOps', items: ['Git', 'GitHub', 'Docker', 'Linux', 'Ubuntu', 'Nginx', 'Certbot'] },
  { title: 'Security', items: ['Nmap', 'Wireshark', 'Burp Suite'] },
  { title: 'AI', items: ['RAG', 'LLMs', 'Ollama', 'Qwen', 'Llama', 'n8n'] },
]

export const projects: Project[] = [
  {
    id: 'housey',
    name: 'HOUSEY',
    summary: 'Real-time online Housie/Tambola platform with multiplayer gameplay and live dashboards.',
    details:
      'HOUSEY is built for smooth real-time interaction between players and admins, featuring synchronized gameplay, ticket booking, automated number calling, and claim flows.',
    technologies: ['React', 'TypeScript', 'Django', 'WebSockets', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Nginx'],
    category: 'featured',
    featured: true,
    githubUrl: 'https://github.com/your-github-username/housey',
    demoUrl: 'https://your-demo-link.example.com',
    highlights: [
      'Real-time multiplayer gameplay',
      'Ticket booking and prize management',
      'Automated number calling and claims flow',
      'Dedicated admin and player dashboards',
      'Reliable WebSocket communication',
    ],
  },
  {
    id: 'studyhub',
    name: 'NITMN StudyHub',
    summary: 'A student platform for materials, PDFs, and previous-year questions.',
    details:
      'This platform helps students discover and access resources using an easy UI backed by Google Drive, Sheets, and Apps Script integrations.',
    technologies: ['React', 'Google Drive', 'Google Sheets', 'Google Apps Script'],
    category: 'platform',
    githubUrl: 'https://github.com/your-github-username/nitmn-studyhub',
    demoUrl: 'https://your-demo-link.example.com',
    highlights: ['Organized materials browsing', 'PDF and PYQ accessibility', 'Simple content management workflow'],
  },
  {
    id: 'coaching',
    name: 'Coaching Website',
    summary: 'Dynamic coaching-center website with content-driven updates.',
    details:
      'A maintainable website connected with Google Apps Script, Sheets, and Drive to keep announcements and materials up-to-date without complex admin overhead.',
    technologies: ['React', 'Google Apps Script', 'Google Sheets', 'Google Drive'],
    category: 'web',
    githubUrl: 'https://github.com/your-github-username/coaching-website',
    demoUrl: 'https://your-demo-link.example.com',
    highlights: ['Dynamic content updates', 'Data-driven pages', 'Simple maintenance workflow'],
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    summary: 'A premium developer portfolio focused on clarity, motion, and accessibility.',
    details:
      'This website highlights projects, skills, and learning trajectory with smooth interactions, reusable components, and responsive design.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    category: 'personal',
    githubUrl: 'https://github.com/your-github-username/portfolio',
    demoUrl: 'https://your-demo-link.example.com',
    highlights: ['Component-based architecture', 'Accessible interactions', 'Modern animated UI'],
  },
]

export const cybersecurityInterests = [
  'Networking',
  'Web security',
  'API security',
  'Authentication',
  'Nmap',
  'Wireshark',
  'Burp Suite',
  'Linux',
]

export const achievements: Achievement[] = [
  { title: 'NIT Manipur internal hackathon', description: 'Active participant in campus innovation and collaboration.' },
  {
    title: 'SIH26092 — AI-Driven Scheme Matching for Marginalized Entrepreneurs',
    description: 'Contributed to problem-solving and ideation for social impact.',
  },
  { title: 'Inter-NIT Badminton participation', description: 'Represented in competitive sports with discipline and consistency.' },
  { title: 'Intra-year football team winner', description: 'Part of the winning team in intra-year football competition.' },
]

export const learningNow = [
  'DSA in C++',
  'Competitive Programming',
  'Cybersecurity',
  'Cloud',
  'AI/RAG',
  'System Design',
  'Networking',
  'DevOps',
  'Advanced Git/GitHub',
]

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'platform', label: 'Platform' },
  { id: 'web', label: 'Web' },
  { id: 'personal', label: 'Personal' },
] as const

export type ProjectFilter = (typeof projectFilters)[number]['id']
