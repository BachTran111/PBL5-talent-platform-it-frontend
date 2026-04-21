// ==============================
// BASE COMPANY (dùng chung)
// ==============================
export interface CompanyBase {
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

// ==============================
// COMPANY (dùng cho LIST)
// ==============================
export type Company = CompanyBase

// ==============================
// COMPANY DETAIL (FULL DATA)
// ==============================
export interface CompanyDetail extends CompanyBase {
  profile_description?: string
  why_love_working_here?: string

  establishment_date?: string

  working_days?: string
  working_time?: string
  overtime_policy?: string

  company_email?: string
}

// ==============================
// REQUEST
// ==============================
export interface GetCompaniesRequest {
  page?: number
  limit?: number
  keyword?: string
  industry?: string
  city?: string
  size?: string
}

// ==============================
// RESPONSE LIST
// ==============================
export interface GetCompaniesResponse {
  data: Company[]
  total: number
  page: number
  limit: number
}

// ==============================
// RESPONSE DETAIL
// ==============================
export interface GetCompanyDetailResponse {
  company: CompanyDetail
  employees: unknown[] // có thể define sau
  jobs: unknown[] // có thể define Job type sau
}
