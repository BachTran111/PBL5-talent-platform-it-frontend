import type { FooterLinkGroup, NavItem } from '@/types'

export const navigationItems: NavItem[] = [
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Career Advice', href: '/jobs' },
  { label: 'For Employers', href: '/employer/jobs/create' }
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'For Candidates',
    links: [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Remote Jobs', href: '/jobs' },
      { label: 'CV Templates', href: '/jobs' },
      { label: 'Salaries', href: '/jobs' }
    ]
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '/employer/jobs/create' },
      { label: 'Candidate Search', href: '/employer/candidates' },
      { label: 'Pricing', href: '/employer' },
      { label: 'Hiring Solutions', href: '/employer' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/jobs' },
      { label: 'Contact Us', href: '/jobs' },
      { label: 'Privacy Policy', href: '/jobs' },
      { label: 'Terms of Service', href: '/jobs' }
    ]
  }
]
