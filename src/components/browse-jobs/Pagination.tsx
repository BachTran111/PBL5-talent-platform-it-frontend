import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
}

const pages = [1, 2, 3, 12]

const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3 rounded-[26px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm'>
      <button
        type='button'
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className='flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 transition hover:border-violet-200 hover:text-violet-700'
      >
        <ChevronLeft className='h-5 w-5' />
      </button>

      {pages.map((page, index) => (
        <div key={`${page}-${index}`} className='flex items-center gap-3'>
          {index === 3 ? (
            <>
              <span className='px-1 text-slate-400'>
                <MoreHorizontal className='h-5 w-5' />
              </span>
              <button
                type='button'
                onClick={() => onPageChange(page)}
                className='flex h-12 min-w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-lg text-slate-700 transition hover:border-violet-200 hover:text-violet-700'
              >
                {page}
              </button>
            </>
          ) : (
            <button
              type='button'
              onClick={() => onPageChange(page)}
              className={cn(
                'flex h-12 min-w-12 items-center justify-center rounded-2xl border px-4 text-lg transition',
                currentPage === page
                  ? 'border-violet-500 bg-violet-600 text-white shadow-[0_12px_30px_rgba(124,58,237,0.24)]'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-violet-200 hover:text-violet-700'
              )}
            >
              {page}
            </button>
          )}
        </div>
      ))}

      <button
        type='button'
        onClick={() => onPageChange(currentPage + 1)}
        className='flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 transition hover:border-violet-200 hover:text-violet-700'
      >
        <ChevronRight className='h-5 w-5' />
      </button>
    </div>
  )
}

export default Pagination
