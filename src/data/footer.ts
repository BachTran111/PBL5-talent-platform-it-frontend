import type { FooterLinkGroup, NavItem } from '@/types'

export const navigationItems: NavItem[] = [
  { label: 'Find Jobs', href: '/jobs' },
  { label: 'Companies', href: '/companies' },
  { label: 'Career Advice', href: '/career-advice' },
  { label: 'For Employers', href: '/for-employers' }
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'For Candidates',
    links: [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Remote Jobs', href: '/jobs?type=remote' },
      { label: 'CV Templates', href: '/cv-templates' },
      { label: 'Salaries', href: '/salaries' }
    ]
  },
  {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '/employer/post-job' },
      { label: 'Candidate Search', href: '/candidate-search' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Hiring Solutions', href: '/hiring-solutions' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help-center' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' }
    ]
  }
]
