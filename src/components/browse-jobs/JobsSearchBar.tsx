import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, MapPin, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import type { FilterOption } from '@/types/browse-jobs'

type JobsSearchBarProps = {
  searchQuery: string
  selectedLocation?: string
  locationOptions?: FilterOption[]
  onSearchChange: (value: string) => void
  onLocationChange?: (value: string) => void
  compact?: boolean
  className?: string
}

const JobsSearchBar = ({
  searchQuery,
  selectedLocation = '',
  locationOptions = [],
  onSearchChange,
  onLocationChange,
  compact = false,
  className
}: JobsSearchBarProps) => {
  const { t } = useTranslation()
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const locationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!locationRef.current?.contains(event.target as Node)) {
        setIsLocationOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLocationOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const locationLabel = selectedLocation || t('browseJobs.search.location')
  const canChooseLocation = Boolean(onLocationChange)

  return (
    <div
      className={cn(
        'flex items-center rounded-[22px] border border-slate-200/80 bg-white px-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]',
        compact ? 'h-[50px] sm:h-[52px]' : 'h-[60px] sm:h-16',
        className
      )}
    >
      <Search className='h-[18px] w-[18px] text-slate-400' />
      <input
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder={t('browseJobs.search.placeholder')}
        className={cn(
          'w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400',
          compact ? 'px-3 text-sm' : 'px-4 text-[15px]'
        )}
      />
      <div className='hidden h-7 w-px bg-slate-200 lg:block' />
      <div ref={locationRef} className='relative hidden lg:block'>
        <button
          type='button'
          onClick={() => {
            if (canChooseLocation) {
              setIsLocationOpen((current) => !current)
            }
          }}
          className={cn(
            'flex max-w-[190px] items-center text-left text-slate-600 transition hover:text-violet-700',
            compact ? 'gap-2 pl-3 text-sm' : 'gap-3 pl-4 text-[15px]'
          )}
        >
          <MapPin className='h-4 w-4 shrink-0 text-slate-400' />
          <span className='truncate'>{locationLabel}</span>
          <ChevronDown
            className={cn('h-4 w-4 shrink-0 text-slate-400 transition-transform', isLocationOpen ? 'rotate-180' : '')}
          />
        </button>

        {isLocationOpen ? (
          <div className='absolute right-0 top-[calc(100%+14px)] z-30 w-64 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_36px_rgba(15,23,42,0.12)]'>
            <div className='max-h-64 overflow-y-auto p-2'>
              <button
                type='button'
                onClick={() => {
                  onLocationChange?.('')
                  setIsLocationOpen(false)
                }}
                className={cn(
                  'flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition',
                  selectedLocation ? 'text-slate-700 hover:bg-slate-50' : 'bg-violet-50 text-violet-700'
                )}
              >
                <span className='truncate'>{t('browseJobs.search.allLocations')}</span>
                {!selectedLocation ? <Check className='h-4 w-4' /> : null}
              </button>

              {locationOptions.map((option) => {
                const isSelected = selectedLocation === option.value

                return (
                  <button
                    key={option.value}
                    type='button'
                    onClick={() => {
                      onLocationChange?.(option.value)
                      setIsLocationOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition',
                      isSelected ? 'bg-violet-50 text-violet-700' : 'text-slate-700 hover:bg-slate-50'
                    )}
                  >
                    <span className='truncate'>{option.label}</span>
                    {isSelected ? <Check className='h-4 w-4' /> : null}
                  </button>
                )
              })}

              {locationOptions.length === 0 ? (
                <div className='px-3 py-3 text-sm text-slate-400'>{t('browseJobs.filters.noMatches')}</div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default JobsSearchBar
