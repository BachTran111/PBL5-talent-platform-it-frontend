import { useQuery } from '@tanstack/react-query'
import { useCompanyFilterStore } from '@/store/companyFilterStore'
import { getCompaniesApi } from '@/api/company'

export const useCompany = () => {
  const filters = useCompanyFilterStore()

  const query = useQuery({
    queryKey: ['companies', filters],
    queryFn: () => getCompaniesApi(filters)
  })

  return {
    companies: query.data?.data || [],
    total: query.data?.total || 0,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,

    // expose filters luôn (giống auth hook expose state)
    filters
  }
}
