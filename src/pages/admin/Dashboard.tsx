import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminRecentUsersTable } from '@/components/admin/AdminRecentUsersTable'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminStatCard } from '@/components/admin/AdminStatCard'
import { AdminStatisticsChart } from '@/components/admin/AdminStatisticsChart'
import { AdminTopbar } from '@/components/admin/AdminTopbar'
import { AdminTopIndustriesCard } from '@/components/admin/AdminTopIndustriesCard'
import { AdminUserDistributionCard } from '@/components/admin/AdminUserDistributionCard'
import { getAdminDashboardApi, type AdminDashboardData } from '@/api/admin'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/store/authStore'
import type { AdminTheme } from '@/types/admin'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const [dashboardData, setDashboardData] = useState<AdminDashboardData | null>(null)
  const [dashboardError, setDashboardError] = useState<string | null>(null)
  const [theme, setTheme] = useState<AdminTheme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('admin-dashboard-theme') as AdminTheme | null) || 'dark'
  })
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('admin-sidebar-collapsed') === 'true'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('admin-dashboard-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('admin-sidebar-collapsed', String(isSidebarCollapsed))
  }, [isSidebarCollapsed])

  useEffect(() => {
    let isMounted = true

    const loadDashboard = async () => {
      try {
        const data = await getAdminDashboardApi()
        if (!isMounted) return
        setDashboardData(data)
        setDashboardError(null)
      } catch {
        if (!isMounted) return
        setDashboardError('Unable to load admin dashboard data from backend.')
      }
    }

    void loadDashboard()

    return () => {
      isMounted = false
    }
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div className='min-h-screen overflow-x-hidden bg-[#f4f6fb] text-slate-950 dark:bg-[#080a16] dark:text-white'>
      <AdminSidebar
        theme={theme}
        isCollapsed={isSidebarCollapsed}
        onThemeChange={setTheme}
        onToggleCollapse={() => setIsSidebarCollapsed((current) => !current)}
        onLogout={handleLogout}
      />

      <main
        className={cn(
          'min-h-screen min-w-0 px-4 py-6 transition-[padding] duration-300 ease-out sm:px-6 lg:px-8',
          isSidebarCollapsed ? 'xl:pl-[8rem]' : 'xl:pl-[20rem]'
        )}
      >
          <div className='mx-auto w-full min-w-0 max-w-[1440px] space-y-6'>
          <AdminTopbar adminName={user?.full_name || 'Super Admin'} />

          {dashboardError ? (
            <div className='rounded-xl border border-rose-100 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-200'>
              {dashboardError}
            </div>
          ) : null}

          <section className='grid gap-5 md:grid-cols-2 2xl:grid-cols-4' aria-label='Admin statistics'>
            {(dashboardData?.statCards ?? []).map((stat) => (
              <AdminStatCard key={stat.id} stat={stat} />
            ))}
          </section>

          {dashboardData ? <AdminStatisticsChart data={dashboardData.chartData} /> : null}

          {dashboardData ? (
            <section className='grid min-w-0 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,440px)]'>
            <div className='min-w-0'>
              <AdminRecentUsersTable users={dashboardData.recentUsers} />
            </div>

            <div className='min-w-0 space-y-5'>
              <AdminUserDistributionCard items={dashboardData.userDistribution} />
              <AdminTopIndustriesCard industries={dashboardData.topIndustries} />
            </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default Dashboard
