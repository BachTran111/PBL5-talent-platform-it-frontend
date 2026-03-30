export interface Company {
  company_id: number
  company_name: string
  company_image?: string
  cover_image?: string

  company_industry?: string
  company_size?: string
  country?: string
  city?: string

  key_skills?: string
  company_type?: string

  company_website_url?: string
  is_active: boolean
  created_date: string
}

export interface GetCompaniesRequest {
  page?: number
  limit?: number
  keyword?: string
  industry?: string
  city?: string
  size?: string
}

export interface GetCompaniesResponse {
  data: Company[]
  total: number
  page: number
  limit: number
}
