import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

const footerLinks = {
  candidates: {
    title: 'For Candidates',
    links: [
      { label: 'Browse Jobs', href: '/jobs' },
      { label: 'Remote Jobs', href: '/jobs?type=remote' },
      { label: 'CV Templates', href: '/cv-templates' },
      { label: 'Salaries', href: '/salaries' }
    ]
  },
  employers: {
    title: 'For Employers',
    links: [
      { label: 'Post a Job', href: '/employer/post-job' },
      { label: 'Candidate Search', href: '/employer/search' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Hiring Solutions', href: '/hiring-solutions' }
    ]
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  }
}

const AuthFooter = () => {
  return (
    <footer className='border-t bg-slate-50'>
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <Link to='/' className='flex items-center gap-2'>
              <div className='flex h-9 w-9 items-center justify-center rounded-lg border-b-2 border-purple-600'>
                <svg viewBox='0 0 24 24' className='h-6 w-6 text-violet-600' fill='currentColor'>
                  <rect x='3' y='3' width='7' height='7' rx='1' />
                  <rect x='14' y='3' width='7' height='7' rx='1' />
                  <rect x='3' y='14' width='7' height='7' rx='1' />
                  <rect x='14' y='14' width='7' height='7' rx='1' />
                </svg>
              </div>
              <span className='text-xl font-bold text-slate-800'>ITJobVN</span>
            </Link>
            <p className='text-sm leading-relaxed text-slate-500'>
              The premium destination for IT professionals in Vietnam. We help developers find meaningful work at the
              best tech companies.
            </p>
          </div>

          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className='mb-4 text-sm font-semibold text-slate-800'>{section.title}</h3>
              <ul className='space-y-3'>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className='text-sm text-slate-500 transition-colors hover:text-purple-600'>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row'>
        <p className='text-sm text-slate-400'>© 2024 ITJobVN Network. Made with love in Ho Chi Minh City.</p>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-slate-400'>English (EN)</span>
          <span className='text-sm text-slate-400'>15,204 jobs online</span>
        </div>
      </div>
    </footer>
  )
}

export default AuthFooter
