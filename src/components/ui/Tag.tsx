import { cn } from '@/lib/utils'

type TagProps = {
  label: string
  className?: string
}

const Tag = ({ label, className }: TagProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-300 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700',
        className
      )}
    >
      {label}
    </span>
  )
}

export default Tag
