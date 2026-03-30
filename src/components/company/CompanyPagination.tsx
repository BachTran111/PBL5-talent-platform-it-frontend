import { useCompany } from '@/hooks/useCompany'
import { useCompanyFilterStore } from '@/store/companyFilterStore'

export const CompanyPagination = () => {
  const { page, setFilter } = useCompanyFilterStore()
  const { total } = useCompany()

  const totalPages = Math.ceil(total / 10)

  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center gap-2 pt-6">
      <button
        onClick={() => setFilter({ page: page - 1 })}
        disabled={page === 1}
        className="px-3 py-2 border rounded"
      >
        ←
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setFilter({ page: i + 1 })}
          className={`px-3 py-2 rounded ${
            page === i + 1
              ? 'bg-primary text-white'
              : 'border'
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setFilter({ page: page + 1 })}
        disabled={page === totalPages}
        className="px-3 py-2 border rounded"
      >
        →
      </button>
    </div>
  )
}