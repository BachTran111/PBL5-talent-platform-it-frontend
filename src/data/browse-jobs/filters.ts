import type { FilterOption } from '@/types/browse-jobs'

export const programmingLanguageOptions: FilterOption[] = [
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Python', value: 'Python' },
  { label: 'Go', value: 'Go' },
  { label: 'Java', value: 'Java' }
]

export const experienceLevelOptions: FilterOption[] = [
  { label: 'Junior', value: 'Junior' },
  { label: 'Senior', value: 'Senior' },
  { label: 'Lead / Architect', value: 'Lead / Architect' }
]

export const workTypeOptions: FilterOption[] = [
  { label: 'Remote', value: 'Remote' },
  { label: 'Hybrid', value: 'Hybrid' },
  { label: 'On-site', value: 'On-site' }
]

export const jobTypeOptions: FilterOption[] = [
  { label: 'Full-time', value: 'Full-time' },
  { label: 'Contract', value: 'Contract' },
  { label: 'Part-time', value: 'Part-time' }
]

export const postedWithinOptions: FilterOption[] = [
  { label: 'Last 24 hours', value: '24h' },
  { label: 'Last 3 days', value: '3d' },
  { label: 'Last 7 days', value: '7d' }
]
