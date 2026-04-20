import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  actionLabel?: string
  actionHref?: string
  accent?: boolean
  className?: string
}

const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  actionLabel,
  actionHref,
  accent = false,
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
      <div className='flex items-start gap-4'>
        {accent ? <span className='mt-1 h-10 w-1 rounded-full bg-gradient-to-b from-violet-600 to-fuchsia-500' /> : null}
        <div className='space-y-2'>
          {eyebrow ? (
            <p className='text-xs font-semibold uppercase tracking-[0.32em] text-slate-400'>{eyebrow}</p>
          ) : null}
          <h2 className='text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-[2rem]'>{title}</h2>
          {subtitle ? <p className='max-w-2xl text-sm text-slate-500 sm:text-base'>{subtitle}</p> : null}
        </div>
      </div>

      {actionLabel && actionHref ? (
        <Link
          to={actionHref}
          className='inline-flex items-center gap-2 self-start text-sm font-semibold text-violet-700 transition-colors hover:text-violet-900'
        >
          {actionLabel}
          <ArrowRight className='h-4 w-4' />
        </Link>
      ) : null}
    </div>
  )
}

export default SectionHeading
