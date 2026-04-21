import { ArrowRight, FileText, Lightbulb, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

import Container from '@/components/ui/Container'

const resources = [
  {
    title: 'CV tips',
    description: 'Shape a concise technical profile that recruiters can scan quickly.',
    icon: FileText
  },
  {
    title: 'Interview prep',
    description: 'Practice the questions and signals that matter in modern tech interviews.',
    icon: ShieldCheck
  },
  {
    title: 'Salary guide',
    description: 'Use market ranges to set better expectations before applying.',
    icon: Lightbulb
  }
]

const ResourcesPage = () => {
  return (
    <div className='min-h-screen bg-[linear-gradient(180deg,#f8f5ff_0%,#ffffff_42%,#f8fafc_100%)] text-slate-950'>
      <Container className='py-12 sm:py-16'>
        <section className='max-w-3xl'>
          <p className='text-xs font-bold uppercase tracking-[0.28em] text-violet-600'>Resources</p>
          <h1 className='mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl'>Career resources for job search</h1>
          <p className='mt-4 max-w-2xl text-base leading-7 text-slate-600'>
            Practical guides for preparing applications, interviews, and offer conversations.
          </p>
        </section>

        <section className='mt-10 grid gap-4 md:grid-cols-3'>
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <Link
                key={resource.title}
                to='/jobs'
                className='group rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_16px_42px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_24px_58px_rgba(124,58,237,0.13)]'
              >
                <span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700'>
                  <Icon className='h-5 w-5' />
                </span>
                <h2 className='mt-5 text-lg font-bold text-slate-950'>{resource.title}</h2>
                <p className='mt-2 text-sm leading-6 text-slate-500'>{resource.description}</p>
                <span className='mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-700'>
                  Explore
                  <ArrowRight className='h-4 w-4 transition group-hover:translate-x-1' />
                </span>
              </Link>
            )
          })}
        </section>
      </Container>
    </div>
  )
}

export default ResourcesPage
