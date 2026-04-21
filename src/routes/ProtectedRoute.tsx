import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'

interface ProtectedRouteProps {
  children: React.ReactNode
  allowedRoles?: ('SEEKER' | 'EMPLOYEE' | 'ADMIN')[]
}

export function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const location = useLocation()
  const { isAuthenticated, user } = useAuthStore()

  // Chưa đăng nhập -> redirect về login
  if (!isAuthenticated || !user) {
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
  }
  // Không có quyền truy cập -> redirect về trang chủ
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    const fallbackPath = user.role === 'ADMIN' ? '/admin' : user.role === 'EMPLOYEE' ? '/employer' : '/seeker'
    return <Navigate to={fallbackPath} replace />
  }
  return <>{children}</>
}
