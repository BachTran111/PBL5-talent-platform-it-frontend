import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { AdminIndustryItem } from '@/types/admin'

type AdminTopIndustriesCardProps = {
  industries: AdminIndustryItem[]
}

export function AdminTopIndustriesCard({ industries }: AdminTopIndustriesCardProps) {
  return (
    <Card className='border-slate-200/80 bg-white/90 py-0 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/8 dark:bg-[#121423]/88 dark:shadow-[0_24px_90px_rgba(0,0,0,0.22)]'>
      <CardContent className='p-5 sm:p-6'>
        <div className='flex items-center justify-between gap-4'>
          <h3 className='text-lg font-bold text-slate-950 dark:text-white'>Top Industries</h3>
          <button
            type='button'
            className='inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-500 dark:text-violet-300'
          >
            View report
            <ArrowRight className='size-4' />
          </button>
        </div>

        <div className='mt-5 space-y-4'>
          {industries.slice(0, 4).map((industry) => {
            const Icon = industry.icon
            return (
              <div key={industry.id}>
                <div className='mb-2 flex items-center gap-3'>
                  <span className='flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-white/8 dark:text-slate-300'>
                    <Icon className='size-4' />
                  </span>
                  <span className='min-w-0 flex-1 truncate text-sm font-bold text-slate-800 dark:text-slate-100'>
                    {industry.name}
                  </span>
                  <span className='text-sm font-bold text-slate-950 dark:text-white'>{industry.value}%</span>
                </div>
                <div className='h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-white/8'>
                  <div
                    className='h-full rounded-full bg-violet-500 shadow-[0_0_18px_rgba(139,92,246,0.25)]'
                    style={{ width: `${industry.value}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
