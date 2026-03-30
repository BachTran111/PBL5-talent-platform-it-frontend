import { useCompany } from '@/hooks/useCompany'
import { CompanyCard } from './CompanyCard'

export const CompanyList = () => {
  const { companies, isLoading } = useCompany()

  // Loading state (giữ layout ổn định)
  if (isLoading) {
    return (
      <div className="space-y-4 min-h-[400px]">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4 min-h-[400px] transition-all duration-200">
      
      {/* Không có data */}
      {companies.length === 0 ? (
        <EmptyState />
      ) : (
        companies.map((company) => (
          <CompanyCard key={company.company_id} company={company} />
        ))
      )}
    </div>
  )
}


//  Empty state (fix layout + UX)
const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] text-gray-500 text-center">
      <p className="text-lg font-semibold">Không tìm thấy công ty</p>
      <p className="text-sm mt-1">
        Hãy thử thay đổi từ khóa hoặc bộ lọc
      </p>
    </div>
  )
}


//  Skeleton loading (pro UX)
const SkeletonCard = () => {
  return (
    <div className="p-5 border rounded-xl flex gap-4 animate-pulse">
      
      {/* Logo */}
      <div className="w-14 h-14 bg-gray-200 rounded-xl" />

      {/* Content */}
      <div className="flex-1 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />

        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded" />
          <div className="h-6 w-16 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}