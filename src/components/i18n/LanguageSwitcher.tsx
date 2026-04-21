import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'

type LanguageSwitcherProps = {
  className?: string
  compact?: boolean
}

const LanguageSwitcher = ({ className, compact = false }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.language.startsWith('vi') ? 'vi' : 'en'
  const nextLanguage = currentLanguage === 'vi' ? 'en' : 'vi'

  const handleToggleLanguage = () => {
    void i18n.changeLanguage(nextLanguage)
  }

  return (
    <button
      type='button'
      onClick={handleToggleLanguage}
      aria-label={t('language.switchTo')}
      className={cn(
        'group inline-flex h-10 shrink-0 items-center rounded-full border border-slate-200/80 bg-white p-1 text-[11px] font-bold tracking-[0.08em] text-slate-500 shadow-[0_10px_26px_rgba(15,23,42,0.06)] transition hover:border-violet-200 hover:shadow-[0_14px_32px_rgba(124,58,237,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/45 focus-visible:ring-offset-2',
        compact ? 'w-[5.75rem]' : 'w-[6.25rem]',
        className
      )}
    >
      <span className='sr-only'>{t('language.current')}</span>
      <span className='grid h-full w-full grid-cols-2 rounded-full bg-slate-100/80 p-0.5 leading-none'>
        <span
          className={cn(
            'flex items-center justify-center rounded-full transition',
            currentLanguage === 'en' ? 'bg-violet-600 text-white shadow-sm' : 'text-slate-500'
          )}
        >
          EN
        </span>
        <span
          className={cn(
            'flex items-center justify-center rounded-full transition',
            currentLanguage === 'vi' ? 'bg-violet-600 text-white shadow-sm' : 'text-slate-500'
          )}
        >
          VI
        </span>
      </span>
    </button>
  )
}

export default LanguageSwitcher
