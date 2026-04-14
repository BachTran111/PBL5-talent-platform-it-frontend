import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ActiveFiltersBar from '@/components/browse-jobs/ActiveFiltersBar'
import CareerTipsCard from '@/components/browse-jobs/CareerTipsCard'
import EmptyState from '@/components/browse-jobs/EmptyState'
import FiltersSidebar from '@/components/browse-jobs/FiltersSidebar'
import JobAlertsCard from '@/components/browse-jobs/JobAlertsCard'
import JobCard from '@/components/browse-jobs/JobCard'
import JobsListHeader from '@/components/browse-jobs/JobsListHeader'
import JobsSearchBar from '@/components/browse-jobs/JobsSearchBar'
import Pagination from '@/components/browse-jobs/Pagination'
import SkeletonJobCard from '@/components/browse-jobs/SkeletonJobCard'
import TopCompaniesCard from '@/components/browse-jobs/TopCompaniesCard'
import Navbar from '@/components/layout/Navbar'
import Container from '@/components/ui/Container'
import { topCompanies } from '@/data/browse-jobs/companies'
import {
  experienceLevelOptions,
  jobTypeOptions,
  postedWithinOptions,
  programmingLanguageOptions,
  workTypeOptions
} from '@/data/browse-jobs/filters'
import { browseJobs } from '@/data/browse-jobs/jobs'

const BrowseJobsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>(['Senior'])
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedPostedWithin, setSelectedPostedWithin] = useState<string[]>(['7d'])
  const [salaryValue, setSalaryValue] = useState(5500)
  const [currentPage, setCurrentPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isLoading] = useState(false)

  const toggleSelection = (value: string, current: string[], setter: (value: string[]) => void) => {
    setter(current.includes(value) ? current.filter((item) => item !== value) : [...current, value])
  }

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedLanguages([])
    setSelectedExperience([])
    setSelectedWorkTypes([])
    setSelectedJobTypes([])
    setSelectedPostedWithin([])
    setSalaryValue(5500)
  }

  const activeFilters = useMemo(
    () =>
      [...selectedWorkTypes, ...selectedExperience, ...selectedLanguages, ...selectedJobTypes].filter(
        (value, index, values) => values.indexOf(value) === index
      ),
    [selectedWorkTypes, selectedExperience, selectedLanguages, selectedJobTypes]
  )

  const filteredJobs = useMemo(() => {
    return browseJobs.filter((job) => {
      const normalizedQuery = searchQuery.trim().toLowerCase()
      const matchesQuery =
        !normalizedQuery ||
        job.title.toLowerCase().includes(normalizedQuery) ||
        job.company.toLowerCase().includes(normalizedQuery) ||
        job.skills.some((skill) => skill.toLowerCase().includes(normalizedQuery))

      const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.includes(job.language)
      const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(job.experience)
      const matchesWorkType = selectedWorkTypes.length === 0 || selectedWorkTypes.includes(job.workType)
      const matchesJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.employmentType)
      const matchesSalary = Number(job.salary.replace(/[^\d]/g, '').slice(0, 4) || '0') <= salaryValue + 2500

      return matchesQuery && matchesLanguage && matchesExperience && matchesWorkType && matchesJobType && matchesSalary
    })
  }, [searchQuery, selectedLanguages, selectedExperience, selectedWorkTypes, selectedJobTypes, salaryValue])

  const removeActiveFilter = (filter: string) => {
    setSelectedLanguages((current) => current.filter((item) => item !== filter))
    setSelectedExperience((current) => current.filter((item) => item !== filter))
    setSelectedWorkTypes((current) => current.filter((item) => item !== filter))
    setSelectedJobTypes((current) => current.filter((item) => item !== filter))
  }

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.10),_transparent_26%),linear-gradient(180deg,#f7f4ff_0%,#fafafc_100%)]'>
      <Navbar />

      <Container className='max-w-[1460px] py-6 sm:py-8'>
        <div className='mb-6 flex justify-center'>
          <JobsSearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            compact
            className='w-full max-w-3xl bg-white/90'
          />
        </div>

        <div className='mb-5 flex lg:hidden'>
          <button
            type='button'
            onClick={() => setIsFilterOpen(true)}
            className='inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition hover:border-violet-200 hover:text-violet-700'
          >
            <SlidersHorizontal className='h-4 w-4' />
            Open Filters
          </button>
        </div>

        <div className='grid gap-6 xl:grid-cols-[280px_minmax(0,1.35fr)_290px] 2xl:grid-cols-[290px_minmax(0,1.45fr)_300px]'>
          <FiltersSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            selectedLanguages={selectedLanguages}
            selectedExperience={selectedExperience}
            selectedWorkTypes={selectedWorkTypes}
            selectedJobTypes={selectedJobTypes}
            selectedPostedWithin={selectedPostedWithin}
            salaryValue={salaryValue}
            programmingLanguages={programmingLanguageOptions}
            experienceLevels={experienceLevelOptions}
            workTypes={workTypeOptions}
            jobTypes={jobTypeOptions}
            postedWithin={postedWithinOptions}
            onToggleLanguage={(value) => toggleSelection(value, selectedLanguages, setSelectedLanguages)}
            onToggleExperience={(value) => toggleSelection(value, selectedExperience, setSelectedExperience)}
            onToggleWorkType={(value) => toggleSelection(value, selectedWorkTypes, setSelectedWorkTypes)}
            onToggleJobType={(value) => toggleSelection(value, selectedJobTypes, setSelectedJobTypes)}
            onTogglePostedWithin={(value) => toggleSelection(value, selectedPostedWithin, setSelectedPostedWithin)}
            onSalaryChange={setSalaryValue}
          />

          <main className='space-y-6'>
            <JobsListHeader totalJobs={1248} />
            <ActiveFiltersBar
              filters={activeFilters}
              resultCount={1248}
              onRemove={removeActiveFilter}
              onClearAll={resetFilters}
            />

            <div className='space-y-5'>
              {isLoading ? Array.from({ length: 4 }).map((_, index) => <SkeletonJobCard key={index} />) : null}
              {!isLoading && filteredJobs.length > 0 ? filteredJobs.map((job) => <JobCard key={job.id} job={job} />) : null}
              {!isLoading && filteredJobs.length === 0 ? <EmptyState onReset={resetFilters} /> : null}
            </div>

            {!isLoading && filteredJobs.length > 0 ? (
              <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
            ) : null}
          </main>

          <aside className='space-y-5 xl:sticky xl:top-28 xl:self-start'>
            <JobAlertsCard />
            <TopCompaniesCard companies={topCompanies} />
            <CareerTipsCard />
          </aside>
        </div>
      </Container>
    </div>
  )
}

export default BrowseJobsPage
