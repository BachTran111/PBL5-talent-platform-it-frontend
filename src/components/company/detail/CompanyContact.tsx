import type { CompanyDetail } from '@/@types/company'

export const CompanyContact = ({ company }: { company: CompanyDetail }) => {
  return (
    <div className='bg-white p-5 rounded-xl border space-y-3'>
      <h2 className='font-semibold'>Liên hệ</h2>

      <a href={`mailto:${company.company_email}`} className='block text-sm text-blue-600'>
        {company.company_email}
      </a>

      <a href={company.company_website_url} target='_blank' className='block text-sm text-blue-600'>
        Website
      </a>
    </div>
  )
}
