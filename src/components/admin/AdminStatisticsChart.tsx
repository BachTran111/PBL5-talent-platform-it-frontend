import { CalendarDays, ChevronDown } from 'lucide-react'
import { useId } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { AdminChartPoint } from '@/types/admin'

type AdminStatisticsChartProps = {
  data: AdminChartPoint[]
}

const chartWidth = 760
const chartHeight = 260
const margin = { top: 24, right: 18, bottom: 48, left: 46 }
const innerWidth = chartWidth - margin.left - margin.right
const innerHeight = chartHeight - margin.top - margin.bottom
const maxValue = 11000
const yTicks = [0, 2500, 5000, 7500, 10000]

const formatTick = (value: number) => {
  if (value === 0) return '0'
  return `${value / 1000}k`
}

const smoothPath = (points: { x: number; y: number }[]) => {
  if (points.length < 2) return ''

  return points.reduce((path, point, index, allPoints) => {
    if (index === 0) return `M ${point.x} ${point.y}`

    const previous = allPoints[index - 1]
    const next = allPoints[index + 1] || point
    const beforePrevious = allPoints[index - 2] || previous
    const controlPointStart = {
      x: previous.x + (point.x - beforePrevious.x) / 6,
      y: previous.y + (point.y - beforePrevious.y) / 6
    }
    const controlPointEnd = {
      x: point.x - (next.x - previous.x) / 6,
      y: point.y - (next.y - previous.y) / 6
    }

    return `${path} C ${controlPointStart.x} ${controlPointStart.y}, ${controlPointEnd.x} ${controlPointEnd.y}, ${point.x} ${point.y}`
  }, '')
}

export function AdminStatisticsChart({ data }: AdminStatisticsChartProps) {
  const gradientId = useId()
  const xForIndex = (index: number) => margin.left + (index / (data.length - 1)) * innerWidth
  const yForValue = (value: number) => margin.top + innerHeight - (value / maxValue) * innerHeight
  const userPoints = data.map((item, index) => ({ x: xForIndex(index), y: yForValue(item.users) }))
  const userPath = smoothPath(userPoints)
  const areaPath = `${userPath} L ${userPoints[userPoints.length - 1].x} ${margin.top + innerHeight} L ${userPoints[0].x} ${
    margin.top + innerHeight
  } Z`

  return (
    <Card className='border-slate-200/80 bg-white/90 py-0 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/8 dark:bg-[#121423]/88 dark:shadow-[0_24px_90px_rgba(0,0,0,0.24)]'>
      <CardContent className='p-5 sm:p-6'>
        <div className='flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between'>
          <div>
            <h3 className='text-lg font-bold text-slate-950 dark:text-white'>System Statistics Overview</h3>
            <p className='mt-1 text-sm font-medium text-slate-500 dark:text-slate-400'>Activity across the platform</p>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <div className='flex items-center gap-5 text-sm font-semibold'>
              {['Daily', 'Weekly', 'Monthly'].map((tab) => (
                <button
                  key={tab}
                  type='button'
                  className={cn(
                    'border-b-2 pb-2 transition',
                    tab === 'Daily'
                      ? 'border-violet-500 text-violet-600 dark:text-violet-300'
                      : 'border-transparent text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              type='button'
              className='flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-600 transition hover:bg-white dark:border-white/8 dark:bg-white/6 dark:text-slate-300 dark:hover:bg-white/10'
            >
              <CalendarDays className='size-4' />
              Last 7 days
              <ChevronDown className='size-4 text-slate-400' />
            </button>
          </div>
        </div>

        <div className='mt-6 w-full overflow-x-auto overflow-y-hidden'>
          <svg className='h-[280px] w-full min-w-[760px]' viewBox={`0 0 ${chartWidth} ${chartHeight}`} role='img'>
            <defs>
              <linearGradient id={gradientId} x1='0' x2='0' y1='0' y2='1'>
                <stop offset='0%' stopColor='#8b5cf6' stopOpacity='0.32' />
                <stop offset='100%' stopColor='#8b5cf6' stopOpacity='0' />
              </linearGradient>
            </defs>

            {yTicks.map((tick) => {
              const y = yForValue(tick)
              return (
                <g key={tick}>
                  <text x='4' y={y + 4} className='fill-slate-500 text-[11px] font-semibold dark:fill-slate-400'>
                    {formatTick(tick)}
                  </text>
                  <line
                    x1={margin.left}
                    x2={chartWidth - margin.right}
                    y1={y}
                    y2={y}
                    stroke='currentColor'
                    strokeDasharray='4 4'
                    className='text-slate-200 dark:text-white/10'
                  />
                </g>
              )
            })}

            <line
              x1={margin.left}
              x2={chartWidth - margin.right}
              y1={margin.top + innerHeight}
              y2={margin.top + innerHeight}
              stroke='currentColor'
              className='text-slate-300 dark:text-white/12'
            />

            {data.map((item, index) => {
              const x = xForIndex(index)
              const baseY = margin.top + innerHeight
              const jobsHeight = baseY - yForValue(item.jobs)
              const applicationsHeight = baseY - yForValue(item.applications)

              return (
                <g key={item.label}>
                  <rect x={x - 8} y={baseY - jobsHeight} width='3' height={jobsHeight} rx='2' fill='#f59e0b' />
                  <rect
                    x={x + 5}
                    y={baseY - applicationsHeight}
                    width='3'
                    height={applicationsHeight}
                    rx='2'
                    fill='#2f80ed'
                  />
                  <text
                    x={x}
                    y={chartHeight - 16}
                    textAnchor='middle'
                    className='fill-slate-500 text-[11px] font-semibold dark:fill-slate-400'
                  >
                    {item.label}
                  </text>
                </g>
              )
            })}

            <path d={areaPath} fill={`url(#${gradientId})`} />
            <path d={userPath} fill='none' stroke='#8b5cf6' strokeLinecap='round' strokeWidth='3' />
            {userPoints.map((point) => (
              <circle key={`${point.x}-${point.y}`} cx={point.x} cy={point.y} r='3.2' fill='#8b5cf6' />
            ))}
          </svg>
        </div>

        <div className='mt-2 flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300'>
          <span className='inline-flex items-center gap-2'>
            <i className='size-2.5 rounded-full bg-violet-500' />
            Users
          </span>
          <span className='inline-flex items-center gap-2'>
            <i className='size-2.5 rounded-full bg-amber-500' />
            Jobs
          </span>
          <span className='inline-flex items-center gap-2'>
            <i className='size-2.5 rounded-full bg-blue-500' />
            Applications
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
