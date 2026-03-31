import type { CompanyDetail } from '@/@types/company'

export const CompanyInfo = ({ company }: { company: CompanyDetail }) => {
  return (
    <div className='bg-white p-5 rounded-xl border space-y-3'>
      <h2 className='font-semibold'>Thông tin công ty</h2>

      <Info label='Loại hình' value={company.company_type} />
      {/* <Info label='Quy mô' value={company.company_size} /> */}
      <Info label='Thành lập' value={company.establishment_date?.slice(0, 10)} />
      <Info label='Làm việc' value={company.working_days} />
      <Info label='Giờ làm' value={company.working_time} />
      <Info label='OT' value={company.overtime_policy} />
    </div>
  )
}

const Info = ({ label, value }: { label: string; value?: string | null }) => (
  <div className='text-sm flex justify-between'>
    <span className='text-gray-500'>{label}</span>
    <span className='font-medium'>{value || '-'}</span>
  </div>
)
