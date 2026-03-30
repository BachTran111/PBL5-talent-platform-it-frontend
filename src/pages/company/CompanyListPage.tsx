import { CompanyList } from '@/components/company/CompanyList'
import { CompanyFilters } from '@/components/company/CompanyFilters'
import { CompanyPagination } from '@/components/company/CompanyPagination'

export default function CompanyListPage() {
  return (
    <div className='bg-background-light min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 py-8 flex gap-8 overflow-hidden'>
        {/* Sidebar */}
        <aside className='w-72 shrink-0 hidden lg:block'>
          <CompanyFilters />
        </aside>

        {/* Main */}
        <section className='flex-1 flex flex-col min-w-0 space-y-6'>
          <HeaderSection />

          {/* Fix layout jump */}
          <div className='flex-1'>
            <CompanyList />
          </div>

          <CompanyPagination />
        </section>
      </div>
    </div>
  )
}

const HeaderSection = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h2 className='text-2xl font-bold'>Danh sách công ty</h2>
        <p className='text-sm text-gray-500'>Khám phá các công ty IT hàng đầu</p>
      </div>

      <select className='text-sm border rounded-lg px-3 py-2'>
        <option>Mới nhất</option>
        <option>Tên A-Z</option>
      </select>
    </div>
  )
}
