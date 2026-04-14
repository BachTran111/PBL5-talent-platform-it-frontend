import { ChevronDown, MapPin, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

type JobsSearchBarProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
  compact?: boolean
  className?: string
}

const JobsSearchBar = ({ searchQuery, onSearchChange, compact = false, className }: JobsSearchBarProps) => {
  return (
    <div
      className={cn(
        'flex items-center rounded-[24px] border border-slate-200/80 bg-white px-4 shadow-[0_14px_36px_rgba(15,23,42,0.04)]',
        compact ? 'h-14' : 'h-[68px]',
        className
      )}
    >
      <Search className='h-5 w-5 text-slate-400' />
      <input
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder='Search by job title, skill or company...'
        className={cn(
          'w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400',
          compact ? 'px-3 text-sm' : 'px-4 text-base'
        )}
      />
      <div className='hidden h-7 w-px bg-slate-200 lg:block' />
      <button
        type='button'
        className={cn(
          'hidden items-center text-left text-slate-600 lg:flex',
          compact ? 'gap-2 pl-3 text-sm' : 'gap-3 pl-4 text-base'
        )}
      >
        <MapPin className='h-4 w-4 text-slate-400' />
        <span>Hanoi, HCM...</span>
        <ChevronDown className='h-4 w-4 text-slate-400' />
      </button>
    </div>
  )
}

export default JobsSearchBar
