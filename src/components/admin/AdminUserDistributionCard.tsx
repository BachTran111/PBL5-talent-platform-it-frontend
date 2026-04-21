import { Card, CardContent } from '@/components/ui/card'
import type { AdminDistributionItem } from '@/types/admin'

type AdminUserDistributionCardProps = {
  items: AdminDistributionItem[]
}

export function AdminUserDistributionCard({ items }: AdminUserDistributionCardProps) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const segments = items.reduce<{ item: AdminDistributionItem; dash: number; offset: number }[]>(
    (accumulator, item) => {
      const previousOffset = accumulator.reduce((total, segment) => total + segment.dash, 0)
      const dash = (item.value / 100) * circumference

      return [...accumulator, { item, dash, offset: previousOffset }]
    },
    []
  )

  return (
    <Card className='border-slate-200/80 bg-white/90 py-0 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/8 dark:bg-[#121423]/88 dark:shadow-[0_24px_90px_rgba(0,0,0,0.22)]'>
      <CardContent className='p-5 sm:p-6'>
        <h3 className='text-lg font-bold text-slate-950 dark:text-white'>User Distribution</h3>

        <div className='mt-5 grid gap-5 sm:grid-cols-[180px_1fr] sm:items-center'>
          <div className='relative mx-auto size-40'>
            <svg
              className='size-40 -rotate-90'
              viewBox='0 0 120 120'
              role='img'
              aria-label='User distribution donut chart'
            >
              <circle
                cx='60'
                cy='60'
                r={radius}
                fill='none'
                stroke='currentColor'
                strokeWidth='12'
                className='text-slate-100 dark:text-white/8'
              />
              {segments.map(({ item, dash, offset }) => (
                <circle
                  key={item.label}
                  cx='60'
                  cy='60'
                  r={radius}
                  fill='none'
                  stroke={item.color}
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offset}
                  strokeLinecap='round'
                  strokeWidth='12'
                />
              ))}
            </svg>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
              <strong className='text-xl font-bold text-slate-950 dark:text-white'>12.8k</strong>
              <span className='text-xs font-semibold text-slate-500 dark:text-slate-400'>Total Users</span>
            </div>
          </div>

          <div className='space-y-4'>
            {items.map((item) => (
              <div key={item.label} className='grid grid-cols-[1fr_auto_auto] items-center gap-3 text-sm'>
                <span className='flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200'>
                  <i className='size-3 rounded-full' style={{ backgroundColor: item.color }} />
                  {item.label}
                </span>
                <span className='font-bold text-slate-950 dark:text-white'>{item.value}%</span>
                <span className='min-w-12 text-right font-medium text-slate-500 dark:text-slate-400'>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
