import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, FileText, Star, UsersRound } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { AdminStatCardData, AdminStatTone } from '@/types/admin'

type AdminStatCardProps = {
  stat: AdminStatCardData
}

const toneClasses: Record<AdminStatTone, { accent: string; icon: string; line: string }> = {
  users: {
    accent: 'text-violet-500 dark:text-violet-400',
    icon: 'bg-violet-500/12 text-violet-500 dark:bg-violet-500/15 dark:text-violet-300',
    line: '#8b5cf6'
  },
  jobs: {
    accent: 'text-amber-500 dark:text-amber-400',
    icon: 'bg-amber-500/12 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300',
    line: '#f59e0b'
  },
  applications: {
    accent: 'text-blue-500 dark:text-blue-400',
    icon: 'bg-blue-500/12 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300',
    line: '#2f80ed'
  },
  rating: {
    accent: 'text-fuchsia-500 dark:text-fuchsia-400',
    icon: 'bg-fuchsia-500/12 text-fuchsia-600 dark:bg-fuchsia-500/15 dark:text-fuchsia-300',
    line: '#a855f7'
  }
}

const iconMap = {
  users: UsersRound,
  jobs: BriefcaseBusiness,
  applications: FileText,
  rating: Star
}

const buildSparklinePath = (values: number[]) => {
  const width = 168
  const height = 42
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width
      const y = height - ((value - min) / range) * (height - 8) - 4
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
}

export function AdminStatCard({ stat }: AdminStatCardProps) {
  const tone = toneClasses[stat.tone]
  const Icon = iconMap[stat.tone]
  const TrendIcon = stat.trendDirection === 'up' ? ArrowUpRight : ArrowDownRight

  return (
    <Card className='overflow-hidden border-slate-200/80 bg-white/90 py-0 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/8 dark:bg-[#121423]/88 dark:shadow-[0_22px_80px_rgba(0,0,0,0.24)]'>
      <CardContent className='p-5'>
        <div className='flex items-start justify-between gap-4'>
          <span className={cn('inline-flex size-12 items-center justify-center rounded-2xl', tone.icon)}>
            <Icon className='size-5' />
          </span>
          <div
            className={cn(
              'flex items-center gap-1 text-xs font-semibold',
              stat.trendDirection === 'up' ? 'text-emerald-500' : 'text-rose-500'
            )}
          >
            <TrendIcon className='size-3.5' />
            {stat.trend}
          </div>
        </div>

        <div className='mt-5'>
          <p className='text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400'>
            {stat.label}
          </p>
          <div className='mt-2 flex items-end justify-between gap-3'>
            <h3 className='text-3xl font-bold tracking-wide text-slate-950 dark:text-white'>{stat.value}</h3>
            <span className='pb-1 text-[11px] font-medium text-slate-500 dark:text-slate-400'>{stat.comparison}</span>
          </div>
        </div>

        <svg className='mt-5 h-11 w-full' viewBox='0 0 168 42' role='img' aria-label={`${stat.label} sparkline`}>
          <path
            d={buildSparklinePath(stat.sparkline)}
            fill='none'
            stroke={tone.line}
            strokeLinecap='round'
            strokeWidth='2.1'
          />
        </svg>
      </CardContent>
    </Card>
  )
}
