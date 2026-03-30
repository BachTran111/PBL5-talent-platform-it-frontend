import axiosInstance from './axiosInstance'
import type { GetCompaniesRequest, GetCompaniesResponse, Company } from '@/@types/company'

// get list companies
export const getCompaniesApi = async (params: GetCompaniesRequest): Promise<GetCompaniesResponse> => {
  const response = await axiosInstance.get('/companies', {
    params: {
      industry: params.industry || undefined,
      q: params.keyword || undefined,
      page: params.page || 1
    }
  })

  const raw = response.data

  return {
    data: raw.companies,
    total: raw.total,
    page: params.page || 1,
    limit: params.limit || 10
  }
}

// get company detail
export const getCompanyDetailApi = async (id: number): Promise<Company> => {
  const response = await axiosInstance.get<Company>(`/companies/${id}`)
  return response.data
}
