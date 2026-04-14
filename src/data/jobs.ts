import type { HeroTag, Job } from '@/types'

export const popularTags: HeroTag[] = [
  { label: 'React Native' },
  { label: 'Node.js' },
  { label: 'Python AI' },
  { label: 'DevOps' }
]

export const featuredJobs: Job[] = [
  {
    id: 'senior-java-developer',
    title: 'Senior Java Developer',
    company: 'VNPay',
    location: 'Ho Chi Minh City',
    badge: 'New',
    badgeTone: 'new',
    salary: '$2,500 - $4,000',
    skills: ['Java', 'Spring Boot', 'Microservices'],
    logoText: 'VNPay',
    logoTone: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'fullstack-engineer-react-node',
    title: 'Fullstack Engineer (React/Node)',
    company: 'FPT Software',
    location: 'Hanoi',
    badge: 'Featured',
    badgeTone: 'featured',
    salary: '$1,800 - $3,200',
    skills: ['React', 'TypeScript', 'Node.js'],
    logoText: 'fpt soft',
    logoTone: 'from-slate-800 to-emerald-950'
  },
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    company: 'VNG Corporation',
    location: 'Da Nang',
    badge: 'Featured',
    badgeTone: 'featured',
    salary: '$3,000 - $5,500',
    skills: ['Python', 'PyTorch', 'NLP'],
    logoText: 'V',
    logoTone: 'from-slate-900 to-sky-950'
  }
]
