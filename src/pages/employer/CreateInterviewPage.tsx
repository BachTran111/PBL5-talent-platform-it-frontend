import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import EmployerPageHeader from '@/components/employer/EmployerPageHeader'
import EmployerSectionCard from '@/components/employer/EmployerSectionCard'
import CreateInterviewScheduleForm from '@/components/employer/CreateInterviewScheduleForm'

const CreateInterviewPage = () => {
  const { t } = useTranslation()

  return (
    <div className='min-w-0 space-y-6'>
      <div className='flex items-center gap-2'>
        <Link to='/employer/interviews' className='w-full sm:w-auto'>
          <Button variant='outline' size='sm' className='w-full rounded-lg sm:w-auto'>
            <ArrowLeft className='h-4 w-4' />
            {t('employer.interviews.create.back')}
          </Button>
        </Link>
      </div>

      <EmployerPageHeader
        eyebrow={t('employer.interviews.create.eyebrow')}
        title={t('employer.interviews.create.title')}
        description={t('employer.interviews.create.description')}
      />

      <EmployerSectionCard
        title={t('employer.interviews.create.sectionTitle')}
        description={t('employer.interviews.create.sectionDescription')}
        contentClassName='space-y-6'
      >
        <CreateInterviewScheduleForm
          onClose={() => {
            window.location.href = '/employer/interviews'
          }}
        />
      </EmployerSectionCard>
    </div>
  )
}

export default CreateInterviewPage
