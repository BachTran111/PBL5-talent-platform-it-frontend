import { X } from 'lucide-react'
import CheckboxFilterItem from '@/components/browse-jobs/CheckboxFilterItem'
import FilterSection from '@/components/browse-jobs/FilterSection'
import SalaryRangeSlider from '@/components/browse-jobs/SalaryRangeSlider'
import WorkTypeChips from '@/components/browse-jobs/WorkTypeChips'
import type { FilterOption } from '@/types'

type FiltersSidebarProps = {
  isOpen: boolean
  onClose: () => void
  selectedLanguages: string[]
  selectedExperience: string[]
  selectedWorkTypes: string[]
  selectedJobTypes: string[]
  selectedPostedWithin: string[]
  salaryValue: number
  programmingLanguages: FilterOption[]
  experienceLevels: FilterOption[]
  workTypes: FilterOption[]
  jobTypes: FilterOption[]
  postedWithin: FilterOption[]
  onToggleLanguage: (value: string) => void
  onToggleExperience: (value: string) => void
  onToggleWorkType: (value: string) => void
  onToggleJobType: (value: string) => void
  onTogglePostedWithin: (value: string) => void
  onSalaryChange: (value: number) => void
}

const FiltersSidebar = ({
  isOpen,
  onClose,
  selectedLanguages,
  selectedExperience,
  selectedWorkTypes,
  selectedJobTypes,
  selectedPostedWithin,
  salaryValue,
  programmingLanguages,
  experienceLevels,
  workTypes,
  jobTypes,
  postedWithin,
  onToggleLanguage,
  onToggleExperience,
  onToggleWorkType,
  onToggleJobType,
  onTogglePostedWithin,
  onSalaryChange
}: FiltersSidebarProps) => {
  return (
    <>
      {isOpen ? <button type='button' className='fixed inset-0 z-40 bg-slate-950/20 lg:hidden' onClick={onClose} /> : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm overflow-y-auto border-r border-slate-200 bg-white px-5 py-6 transition-transform duration-300 lg:static lg:z-auto lg:w-auto lg:max-w-none lg:translate-x-0 lg:overflow-visible lg:border-r-0 lg:bg-transparent lg:px-0 lg:py-0 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className='lg:sticky lg:top-28'>
          <div className='mb-8 flex items-center justify-between lg:hidden'>
            <h2 className='text-lg font-semibold text-slate-950'>Refine Results</h2>
            <button
              type='button'
              onClick={onClose}
              className='flex h-10 w-10 items-center justify-center rounded-full border border-slate-200'
            >
              <X className='h-4 w-4' />
            </button>
          </div>

          <div className='rounded-[30px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)]'>
            <div className='space-y-10'>
              <FilterSection title='Programming Languages'>
                <div className='space-y-3'>
                  {programmingLanguages.map((option) => (
                    <CheckboxFilterItem
                      key={option.value}
                      label={option.label}
                      count={option.count}
                      checked={selectedLanguages.includes(option.value)}
                      onToggle={() => onToggleLanguage(option.value)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title='Experience Level'>
                <div className='space-y-3'>
                  {experienceLevels.map((option) => (
                    <CheckboxFilterItem
                      key={option.value}
                      label={option.label}
                      checked={selectedExperience.includes(option.value)}
                      onToggle={() => onToggleExperience(option.value)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title='Work Type'>
                <WorkTypeChips options={workTypes} selected={selectedWorkTypes} onToggle={onToggleWorkType} />
              </FilterSection>

              <FilterSection title='Job Type'>
                <div className='space-y-3'>
                  {jobTypes.map((option) => (
                    <CheckboxFilterItem
                      key={option.value}
                      label={option.label}
                      count={option.count}
                      checked={selectedJobTypes.includes(option.value)}
                      onToggle={() => onToggleJobType(option.value)}
                    />
                  ))}
                </div>
              </FilterSection>

              <FilterSection title='Salary Range (Monthly)'>
                <SalaryRangeSlider value={salaryValue} onChange={onSalaryChange} />
              </FilterSection>

              <FilterSection title='Posted Within'>
                <div className='space-y-3'>
                  {postedWithin.map((option) => (
                    <CheckboxFilterItem
                      key={option.value}
                      label={option.label}
                      checked={selectedPostedWithin.includes(option.value)}
                      onToggle={() => onTogglePostedWithin(option.value)}
                    />
                  ))}
                </div>
              </FilterSection>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default FiltersSidebar
