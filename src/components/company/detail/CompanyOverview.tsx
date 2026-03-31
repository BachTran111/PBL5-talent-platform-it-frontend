import type { CompanyDetail } from '@/@types/company'

export const CompanyOverview = ({ company }: { company: CompanyDetail }) => {
  return (
    <div className='bg-white p-5 rounded-xl border'>
      <h2 className='font-semibold mb-3'>Giới thiệu</h2>

      <p className='text-gray-600 mb-4'>{company.profile_description}</p>

      <h3 className='font-semibold mb-2'>Tại sao nên làm việc ở đây</h3>
      <p className='text-gray-600'>{company.why_love_working_here}</p>
    </div>
  )
}
