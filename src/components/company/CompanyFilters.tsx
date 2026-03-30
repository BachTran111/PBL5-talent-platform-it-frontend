import { useCompanyFilterStore } from '@/store/companyFilterStore'
import { useEffect, useState } from 'react'

const INDUSTRIES = ['Công nghệ thông tin', 'Trí tuệ nhân tạo', 'Fintech', 'Thương mại điện tử', 'Gia công phần mềm']

export const CompanyFilters = () => {
  const { keyword, industry, setFilter } = useCompanyFilterStore()

  // tranh spam API
  const [localKeyword, setLocalKeyword] = useState(keyword)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter({ keyword: localKeyword, page: 1 })
    }, 400)

    return () => clearTimeout(timer)
  }, [localKeyword, setFilter])

  const handleIndustryChange = (value: string) => {
    setFilter({
      industry: industry === value ? '' : value,
      page: 1
    })
  }

  return (
    <div className='space-y-6 sticky top-24'>
      {/* 🔍 Keyword Search */}
      <div>
        <h3 className='text-sm font-semibold mb-2'>Từ khóa</h3>
        <input
          className='w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary'
          placeholder='React, AI, Fintech...'
          value={localKeyword}
          onChange={(e) => setLocalKeyword(e.target.value)}
        />
      </div>

      {/* 🏷 Industry Checkbox */}
      <div>
        <h3 className='text-sm font-semibold mb-3'>Ngành nghề</h3>

        <div className='space-y-2'>
          {INDUSTRIES.map((item) => {

            return (
              <label
                htmlFor={`industry-${item}`}
                className='flex items-center gap-3 cursor-pointer h-8 px-2 rounded-md'
              >
                <input
                  id={`industry-${item}`}
                  type='checkbox'
                  checked={industry === item}
                  onChange={() => handleIndustryChange(item)}
                  className='w-4 h-4 accent-primary'
                />

                <span>{item}</span>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}
