import type { Company } from '@/@types/company'

export const CompanyGallery = ({ company }: { company: Company }) => {
  if (!company.cover_image) return null

  return (
    <div className='bg-white p-5 rounded-xl border'>
      <h2 className='font-semibold mb-3'>Hình ảnh</h2>

      <img src={company.cover_image} className='w-full h-64 object-cover rounded-lg' />
    </div>
  )
}
