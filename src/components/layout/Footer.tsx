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

const Footer = () => {
  return (
    <footer className='border-t bg-slate-50'>
      {/* Main Footer */}
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <div className='space-y-4'>
            <Link to='/' className='flex items-center gap-2'>
              <div className='flex h-9 w-9 items-center justify-center rounded-lg border-b-2 border-purple-600'>
                <svg viewBox='0 0 24 24' className='w-6 h-6 text-violet-600' fill='currentColor'>
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

            {/* Social Icons */}
            <div className='flex items-center gap-3'>
              <a
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-purple-600 hover:text-purple-600'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
                  <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.32 3.91A12.16 12.16 0 013 4.8a4.28 4.28 0 001.33 5.71 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 5.06a8.46 8.46 0 01-2.54.7z' />
                </svg>
              </a>
              <a
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-purple-600 hover:text-purple-600'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
                  <path d='M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                </svg>
              </a>
              <a
                href='#'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-purple-600 hover:text-purple-600'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
                  <path d='M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 000 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 000-10z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
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

      {/* Bottom Bar */}
      <Separator />
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row'>
        <p className='text-sm text-slate-400'>
          © {new Date().getFullYear()} ITJobVN Network. Made with <span className='text-red-500'>❤</span> in Ho Chi Minh
          City.
        </p>
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-1 text-sm text-slate-400'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
            </svg>
            English (EN)
          </span>
          <span className='flex items-center gap-1 text-sm text-slate-400'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-4 w-4'>
              <path d='M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z' />
            </svg>
            15,204 jobs online
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
