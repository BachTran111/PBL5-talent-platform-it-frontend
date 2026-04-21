import { useMemo, useState } from 'react'
import { CalendarPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { useEmployerWorkspace } from './EmployerWorkspaceContext'

const ScheduleInterviewForm = () => {
  const { t } = useTranslation()
  const { mockJobs, scheduleMockInterview } = useEmployerWorkspace()

  const defaultJobTitle = useMemo(() => mockJobs[0]?.title || '', [mockJobs])
  const [form, setForm] = useState({
    candidateName: '',
    candidateEmail: '',
    interviewerName: '',
    jobTitle: defaultJobTitle,
    interviewDate: '',
    interviewType: 'Online',
    location: ''
  })

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.candidateName || !form.candidateEmail || !form.jobTitle || !form.interviewDate) return

    scheduleMockInterview(form)
    setForm({
      candidateName: '',
      candidateEmail: '',
      interviewerName: '',
      jobTitle: mockJobs[0]?.title || '',
      interviewDate: '',
      interviewType: 'Online',
      location: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className='rounded-[26px] border border-slate-100 bg-slate-50/80 p-5'>
      <div className='mb-4'>
        <p className='text-lg font-semibold text-slate-950'>{t('employer.interviews.scheduleForm.title')}</p>
        <p className='mt-1 text-sm text-slate-500'>
          {t('employer.interviews.scheduleForm.description')}
        </p>
      </div>

      <FieldGroup className='gap-4'>
        <div className='grid gap-4 md:grid-cols-2'>
          <Field>
            <FieldLabel>{t('employer.interviews.scheduleForm.candidateName')}</FieldLabel>
            <Input
              value={form.candidateName}
              onChange={(event) => handleChange('candidateName', event.target.value)}
              placeholder={t('employer.interviews.scheduleForm.candidateNamePlaceholder')}
            />
          </Field>
          <Field>
            <FieldLabel>{t('employer.interviews.scheduleForm.email')}</FieldLabel>
            <Input
              value={form.candidateEmail}
              onChange={(event) => handleChange('candidateEmail', event.target.value)}
              placeholder={t('employer.interviews.scheduleForm.emailPlaceholder')}
            />
          </Field>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <Field>
            <FieldLabel>{t('employer.interviews.scheduleForm.interviewer')}</FieldLabel>
            <Input
              value={form.interviewerName}
              onChange={(event) => handleChange('interviewerName', event.target.value)}
              placeholder={t('employer.interviews.scheduleForm.interviewerPlaceholder')}
            />
          </Field>
          <Field>
            <FieldLabel>{t('employer.interviews.scheduleForm.position')}</FieldLabel>
            <select
              value={form.jobTitle}
              onChange={(event) => handleChange('jobTitle', event.target.value)}
              className='border-input h-10 w-full rounded-md border bg-white px-3 text-sm outline-none'
            >
              {mockJobs.map((job) => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          <Field>
            <FieldLabel>{t('employer.interviews.scheduleForm.dateTime')}</FieldLabel>
            <Input
              type='datetime-local'
              value={form.interviewDate}
              onChange={(event) => handleChange('interviewDate', event.target.value)}
            />
          </Field>
          <Field>
            <FieldLabel>{t('employer.interviews.scheduleForm.interviewType')}</FieldLabel>
            <select
              value={form.interviewType}
              onChange={(event) => handleChange('interviewType', event.target.value)}
              className='border-input h-10 w-full rounded-md border bg-white px-3 text-sm outline-none'
            >
              <option value='Online'>{t('employer.interviews.create.types.Online')}</option>
              <option value='Offline'>{t('employer.interviews.create.types.Offline')}</option>
              <option value='Technical'>{t('employer.interviews.scheduleForm.technical')}</option>
              <option value='HR Screen'>{t('employer.interviews.scheduleForm.hrScreen')}</option>
            </select>
          </Field>
        </div>
        <Field>
          <FieldLabel>{t('employer.interviews.scheduleForm.locationLink')}</FieldLabel>
          <Input
            value={form.location}
            onChange={(event) => handleChange('location', event.target.value)}
            placeholder={t('employer.interviews.scheduleForm.locationLinkPlaceholder')}
          />
        </Field>
        <Button type='submit' className='w-full rounded-2xl sm:w-auto'>
          <CalendarPlus className='h-4 w-4' />
          {t('employer.interviews.scheduleForm.addToSchedule')}
        </Button>
      </FieldGroup>
    </form>
  )
}

export default ScheduleInterviewForm
