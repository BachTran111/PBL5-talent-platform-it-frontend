import { Bot, BriefcaseBusiness, Code2, GraduationCap, Landmark, Palette } from 'lucide-react'
import type {
  AdminChartPoint,
  AdminDistributionItem,
  AdminIndustryItem,
  AdminRecentUser,
  AdminStatCardData
} from '@/types/admin'

export const adminStatCards: AdminStatCardData[] = [
  {
    id: 'total-users',
    label: 'Total Users',
    value: '12,840',
    trend: '2.5%',
    trendDirection: 'up',
    comparison: 'vs last month',
    tone: 'users',
    sparkline: [18, 22, 21, 16, 20, 21, 27, 26, 14, 12, 12, 15]
  },
  {
    id: 'total-jobs',
    label: 'Total Jobs',
    value: '3,150',
    trend: '8.2%',
    trendDirection: 'up',
    comparison: 'vs last month',
    tone: 'jobs',
    sparkline: [14, 13, 15, 18, 26, 31, 33, 28, 20, 16, 14, 17]
  },
  {
    id: 'total-applications',
    label: 'Total Applications',
    value: '24,560',
    trend: '3.1%',
    trendDirection: 'down',
    comparison: 'vs last month',
    tone: 'applications',
    sparkline: [24, 17, 23, 20, 31, 35, 34, 23, 25, 20, 17, 22]
  },
  {
    id: 'avg-rating',
    label: 'Avg Rating',
    value: '4.8 / 5',
    trend: '0.2',
    trendDirection: 'up',
    comparison: 'vs last month',
    tone: 'rating',
    sparkline: [18, 17, 20, 19, 23, 28, 29, 18, 25, 23, 17, 17]
  }
]

export const adminChartData: AdminChartPoint[] = [
  { label: 'May 14', users: 2500, jobs: 1450, applications: 2200 },
  { label: 'May 15', users: 4900, jobs: 2400, applications: 3450 },
  { label: 'May 16', users: 4700, jobs: 2250, applications: 3000 },
  { label: 'May 17', users: 5900, jobs: 2500, applications: 3650 },
  { label: 'May 18', users: 8900, jobs: 2600, applications: 4100 },
  { label: 'May 19', users: 10100, jobs: 3400, applications: 3000 },
  { label: 'May 20', users: 4200, jobs: 1800, applications: 2200 }
]

export const adminRecentUsers: AdminRecentUser[] = [
  {
    id: 'u-1',
    name: 'Alex Lindon',
    email: 'alex@example.com',
    initials: 'AL',
    role: 'Developer',
    status: 'Active',
    joined: 'Oct 24, 2023'
  },
  {
    id: 'u-2',
    name: 'Sarah Jenkins',
    email: 'sarah@example.com',
    initials: 'SJ',
    role: 'Designer',
    status: 'Active',
    joined: 'Oct 22, 2023'
  },
  {
    id: 'u-3',
    name: 'Marcus Cole',
    email: 'marcus@example.com',
    initials: 'MC',
    role: 'Manager',
    status: 'Offline',
    joined: 'Oct 20, 2023'
  },
  {
    id: 'u-4',
    name: 'Emma Watson',
    email: 'emma@example.com',
    initials: 'EM',
    role: 'HR',
    status: 'Active',
    joined: 'Oct 19, 2023'
  },
  {
    id: 'u-5',
    name: 'David Torres',
    email: 'david@example.com',
    initials: 'DT',
    role: 'Developer',
    status: 'Active',
    joined: 'Oct 18, 2023'
  }
]

export const adminUserDistribution: AdminDistributionItem[] = [
  { label: 'Job Seekers', value: 65, amount: '8,320', color: '#8b5cf6' },
  { label: 'Employers', value: 20, amount: '2,560', color: '#2f80ed' },
  { label: 'Admins', value: 15, amount: '1,960', color: '#44c37d' }
]

export const adminTopIndustries: AdminIndustryItem[] = [
  { id: 'software', name: 'Software Development', value: 42, icon: Code2 },
  { id: 'ai-data', name: 'AI & Data Science', value: 28, icon: Bot },
  { id: 'fintech', name: 'Fintech', value: 18, icon: Landmark },
  { id: 'education', name: 'Education', value: 12, icon: GraduationCap },
  { id: 'creative', name: 'Creative Design', value: 9, icon: Palette },
  { id: 'business', name: 'Business Operations', value: 7, icon: BriefcaseBusiness }
]
