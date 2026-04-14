import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

type CheckboxFilterItemProps = {
  label: string
  count?: string
  checked: boolean
  onToggle: () => void
}

const CheckboxFilterItem = ({ label, count, checked, onToggle }: CheckboxFilterItemProps) => {
  return (
    <button
      type='button'
      onClick={onToggle}
      className={cn(
        'flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left transition',
        checked ? 'bg-violet-50/80' : 'hover:bg-slate-50'
      )}
    >
      <span className='flex items-center gap-3'>
        <span
          className={cn(
            'flex h-5 w-5 items-center justify-center rounded-md border transition-colors',
            checked ? 'border-violet-500 bg-violet-500 text-white' : 'border-slate-300 bg-white text-transparent'
          )}
        >
          <Check className='h-3.5 w-3.5' />
        </span>
        <span className={cn('text-lg transition-colors', checked ? 'text-slate-950' : 'text-slate-700')}>{label}</span>
      </span>
      {count ? <span className='text-lg text-slate-400'>{count}</span> : null}
    </button>
  )
}

export default CheckboxFilterItem
