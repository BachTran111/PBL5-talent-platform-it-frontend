import type { LucideIcon } from 'lucide-react'

export type AdminTheme = 'dark' | 'light'

export type AdminStatTone = 'users' | 'jobs' | 'applications' | 'rating'

export interface AdminStatCardData {
  id: string
  label: string
  value: string
  trend: string
  trendDirection: 'up' | 'down'
  comparison: string
  tone: AdminStatTone
  sparkline: number[]
}

export interface AdminChartPoint {
  label: string
  users: number
  jobs: number
  applications: number
}

export interface AdminRecentUser {
  id: string
  name: string
  email: string
  initials: string
  role: 'Developer' | 'Designer' | 'Manager' | 'HR'
  status: 'Active' | 'Offline'
  joined: string
}

export interface AdminDistributionItem {
  label: string
  value: number
  amount: string
  color: string
}

export interface AdminIndustryItem {
  id: string
  name: string
  value: number
  icon: LucideIcon
}
