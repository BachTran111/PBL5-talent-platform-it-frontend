import { cn } from '@/lib/utils'

type BadgeProps = {
  label: string
  tone?: 'new' | 'featured' | 'neutral'
  className?: string
}

const toneClasses = {
  new: 'bg-emerald-100 text-emerald-700',
  featured: 'bg-sky-100 text-sky-700',
  neutral: 'bg-violet-100 text-violet-700'
}

const Badge = ({ label, tone = 'neutral', className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide',
        toneClasses[tone],
        className
      )}
    >
      {label}
    </span>
  )
}

export default Badge
