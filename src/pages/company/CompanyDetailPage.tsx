import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCompanyByIdApi } from '@/api/company'

import { CompanyHeader } from '@/components/company/detail/CompanyHeader'
import { CompanyOverview } from '@/components/company/detail/CompanyOverview'
import { CompanyInfo } from '@/components/company/detail/CompanyInfo'
import { CompanyGallery } from '@/components/company/detail/CompanyGallery'
import { CompanyJobs } from '@/components/company/detail/CompanyJobs'
import { CompanyContact } from '@/components/company/detail/CompanyContact'

export default function CompanyDetailPage() {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['company', id],
    queryFn: () => getCompanyByIdApi(Number(id)),
    enabled: !!id
  })

  const company = data?.company

  if (isLoading) return <div className='p-10'>Loading...</div>
  if (!company) return <div className='p-10'>Không tìm thấy công ty</div>

  return (
    <div className='bg-background-light min-h-screen'>
      <div className='max-w-7xl mx-auto space-y-6 pb-10'>
        <CompanyHeader company={company} />

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-4'>
          {/* LEFT */}
          <div className='lg:col-span-2 space-y-6'>
            <CompanyOverview company={company} />
            <CompanyGallery company={company} />
            <CompanyJobs companyId={company.company_id} />
          </div>

          {/* RIGHT */}
          <div className='space-y-6'>
            <CompanyInfo company={company} />
            <CompanyContact company={company} />
          </div>
        </div>
      </div>
    </div>
  )
}
