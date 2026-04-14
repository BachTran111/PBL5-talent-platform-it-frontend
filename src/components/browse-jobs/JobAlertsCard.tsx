import { Mail } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/Buttons'

const JobAlertsCard = () => {
  return (
    <section className='overflow-hidden rounded-[30px] border border-violet-200/80 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.20),_transparent_38%),linear-gradient(180deg,#fbf7ff_0%,#f6efff_100%)] p-6 shadow-[0_18px_55px_rgba(124,58,237,0.08)]'>
      <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-[0_14px_36px_rgba(124,58,237,0.22)]'>
        <Mail className='h-6 w-6' />
      </div>
      <div className='space-y-3'>
        <h3 className='text-2xl font-semibold tracking-[-0.03em] text-slate-950'>Job Alerts</h3>
        <p className='text-base leading-7 text-slate-600'>
          Get notified about new jobs matching your current filters.
        </p>
      </div>
      <PrimaryButton className='mt-6 w-full rounded-2xl py-3.5 text-base'>Enable Alerts</PrimaryButton>
    </section>
  )
}

export default JobAlertsCard
