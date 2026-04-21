import { create } from 'zustand'

type CompanyFilterState = {
  keyword: string
  industry: string
  city: string
  size: string
  page: number
  limit: number

  setFilter: (data: Partial<CompanyFilterState>) => void
}

export const useCompanyFilterStore = create<CompanyFilterState>((set) => ({
  keyword: '',
  industry: '',
  city: '',
  size: '',
  page: 1,
  limit: 10,

  setFilter: (data) =>
    set((state) => ({
      ...state,
      ...data
    }))
}))
