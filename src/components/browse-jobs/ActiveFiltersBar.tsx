import { Sparkles, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type ActiveFiltersBarProps = {
  filters: string[]
  resultCount: number
  onRemove: (filter: string) => void
  onClearAll: () => void
}

const ActiveFiltersBar = ({ filters, resultCount, onRemove, onClearAll }: ActiveFiltersBarProps) => {
  return (
    <div className='rounded-[26px] border border-slate-200/80 bg-white/85 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex min-w-0 flex-wrap items-center gap-2.5'>
          <span className='inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1.5 text-sm font-semibold text-violet-700'>
            <Sparkles className='h-4 w-4' />
            Suggested filters
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              type='button'
              onClick={() => onRemove(filter)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700'
              )}
            >
              {filter}
              <X className='h-3.5 w-3.5' />
            </button>
          ))}
        </div>

        <div className='flex flex-wrap items-center gap-3 text-sm text-slate-500'>
          <span>Showing 1–10 of {resultCount.toLocaleString()} jobs</span>
          {filters.length > 0 ? (
            <button
              type='button'
              onClick={onClearAll}
              className='font-semibold text-violet-700 transition-colors hover:text-violet-900'
            >
              Clear all
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ActiveFiltersBar
