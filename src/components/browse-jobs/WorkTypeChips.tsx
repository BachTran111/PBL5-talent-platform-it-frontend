import { cn } from '@/lib/utils'
import type { FilterOption } from '@/types'

type WorkTypeChipsProps = {
  options: FilterOption[]
  selected: string[]
  onToggle: (value: string) => void
}

const WorkTypeChips = ({ options, selected, onToggle }: WorkTypeChipsProps) => {
  return (
    <div className='flex flex-wrap gap-3'>
      {options.map((option) => {
        const isActive = selected.includes(option.value)

        return (
          <button
            key={option.value}
            type='button'
            onClick={() => onToggle(option.value)}
            className={cn(
              'rounded-xl border px-4 py-2 text-base transition',
              isActive
                ? 'border-violet-500 bg-violet-50 text-violet-700 shadow-[0_8px_20px_rgba(124,58,237,0.08)]'
                : 'border-slate-200 bg-white text-slate-700 hover:border-violet-200 hover:bg-violet-50'
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default WorkTypeChips
