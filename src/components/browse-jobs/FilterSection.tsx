import { cn } from '@/lib/utils'

type FilterSectionProps = {
  title: string
  children: React.ReactNode
  className?: string
}

const FilterSection = ({ title, children, className }: FilterSectionProps) => {
  return (
    <section className={cn('space-y-5', className)}>
      <h3 className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>{title}</h3>
      {children}
    </section>
  )
}

export default FilterSection
