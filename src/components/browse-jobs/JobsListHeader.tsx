import { ChevronDown, Flame, Sparkles, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

type JobsListHeaderProps = {
  totalJobs: number
}

const quickViews = [
  { label: 'Latest', icon: Flame, active: false },
  { label: 'Best Match', icon: Sparkles, active: true },
  { label: 'Saved Jobs', icon: Star, active: false }
]

const JobsListHeader = ({ totalJobs }: JobsListHeaderProps) => {
  return (
    <div className='rounded-[30px] border border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] backdrop-blur-sm sm:p-7'>
      <div className='flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between'>
        <div className='space-y-4'>
          <div className='space-y-2'>
            <h1 className='text-[2.3rem] font-semibold tracking-[-0.05em] text-slate-950'>Recommended Jobs</h1>
            <p className='text-lg text-slate-500'>Found {totalJobs.toLocaleString()} matching jobs for you</p>
          </div>

          <div className='flex flex-wrap gap-3'>
            {quickViews.map((view) => {
              const Icon = view.icon
              return (
                <button
                  key={view.label}
                  type='button'
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition',
                    view.active
                      ? 'border-violet-200 bg-violet-50 text-violet-700 shadow-[0_8px_20px_rgba(124,58,237,0.08)]'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-700'
                  )}
                >
                  <Icon className='h-4 w-4' />
                  {view.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className='grid shrink-0 gap-3 sm:grid-cols-2 lg:w-[300px] xl:w-[320px]'>
          <div className='rounded-[24px] border border-slate-200 bg-slate-50/80 px-4 py-4'>
            <p className='text-sm text-slate-400'>Showing</p>
            <p className='mt-1 text-lg font-semibold tracking-[-0.03em] text-slate-950'>1-10 of {totalJobs.toLocaleString()}</p>
          </div>

          <button
            type='button'
            className='inline-flex items-center justify-between rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-base text-slate-600 shadow-[0_8px_20px_rgba(15,23,42,0.03)] transition hover:border-violet-200 hover:bg-violet-50'
          >
            <div className='text-left'>
              <p className='text-sm text-slate-400'>Sort by</p>
              <p className='mt-1 text-[15px] font-semibold text-violet-700'>Newest First</p>
            </div>
            <ChevronDown className='h-4 w-4 text-slate-400' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobsListHeader
