// Thông tin user trả về từ API
export interface User {
  company_name?: string
  id: number
  email: string
  full_name: string
  role: 'SEEKER' | 'EMPLOYEE' | 'ADMIN'
  user_image?: string
  phone?: string
  registration_date: string
  gender?: string
  employee?: {
    employee_id: number
    role: string
    joined_date: string | null
    company: {
      company_id: number
      company_name: string
      company_email?: string | null
      company_image?: string | null
      city?: string | null
      company_website_url?: string | null
      company_industry?: string | null
      company_size?: string | null
    }
  } | null
}
