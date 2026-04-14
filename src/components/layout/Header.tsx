import { Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'
import { LogOut, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const { isAuthenticated, logout, user } = useAuthStore()

  const dashboardPath = useMemo(() => {
    switch (user?.role) {
      case 'ADMIN':
        return '/admin'
      case 'EMPLOYER':
        return '/employer'
      case 'SEEKER':
        return '/seeker'
      default:
        return '/login'
    }
  }, [user?.role])

  const closeMenu = () => setIsOpen(false)

  const handleLogout = async () => {
    await logout()
    closeMenu()
    navigate('/login')
  }

  const handleChat = async () => {
    closeMenu()
    navigate('/chat')
  }

  const navigationItems = [
    { label: 'Find Jobs', href: '/jobs' },
    { label: 'Companies', href: '/companies' },
    { label: 'Career Advice', href: '/career-advice' },
    { label: 'For Employers', href: '/for-employers' }
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b-2 bg-white'>
      <div className='container mx-auto flex h-16 items-center justify-between px-6'>
        {/* Logo */}
        <Link to='/' className='flex items-center gap-2'>
          <div className='flex h-9 w-9 items-center justify-center rounded-lg border-b-2 border-purple-600'>
            <svg viewBox='0 0 24 24' className='w-6 h-6 text-violet-600' fill='currentColor'>
              <rect x='3' y='3' width='7' height='7' rx='1' />
              <rect x='14' y='3' width='7' height='7' rx='1' />
              <rect x='3' y='14' width='7' height='7' rx='1' />
              <rect x='14' y='14' width='7' height='7' rx='1' />
            </svg>
          </div>
          <span className='text-xl font-bold text-slate-800'>TalentPlatformIT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden items-center gap-8 md:flex'>
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className='text-sm font-medium text-slate-600 transition-colors hover:text-purple-600'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Actions */}
        <div className='hidden items-center gap-3 md:flex'>
          {isAuthenticated ? (
            <div className='flex items-center gap-2'>
              <Button size='sm' variant='ghost' onClick={handleChat}>
                <MessageCircle className='h-5 w-5' />
              </Button>
              <Button size='sm' variant='outline' onClick={handleLogout}>
                <LogOut className='mr-2 h-4 w-4' />
                Logout
              </Button>
              <Button size='sm' className='bg-purple-600 hover:bg-purple-700' onClick={() => navigate(dashboardPath)}>
                Dashboard
              </Button>
            </div>
          ) : (
            <>
              <Button variant='ghost' size='sm' onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button size='sm' className='rounded-full bg-purple-600 px-6 hover:bg-purple-700' onClick={() => navigate('/register')}>
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type='button'
          aria-label='Toggle menu'
          onClick={() => setIsOpen(!isOpen)}
          className='inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden'
        >
          {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-300 md:hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className='space-y-2 border-t border-slate-200 bg-slate-50 p-4'>
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={closeMenu}
              className='block rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-purple-50 hover:text-purple-600'
            >
              {item.label}
            </Link>
          ))}

          <div className='flex flex-col gap-2 border-t border-slate-200 pt-2'>
            {isAuthenticated ? (
              <>
                <Button size='sm' variant='ghost' className='w-full justify-start' onClick={handleChat}>
                  <MessageCircle className='mr-2 h-4 w-4' />
                  Chat
                </Button>
                <Button size='sm' className='w-full bg-purple-600 hover:bg-purple-700' onClick={() => navigate(dashboardPath)}>
                  Dashboard
                </Button>
                <Button size='sm' variant='outline' className='w-full' onClick={handleLogout}>
                  <LogOut className='mr-2 h-4 w-4' />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button size='sm' variant='ghost' className='w-full' onClick={() => {
                  navigate('/login')
                  closeMenu()
                }}>
                  Login
                </Button>
                <Button size='sm' className='w-full rounded-full bg-purple-600 hover:bg-purple-700' onClick={() => {
                  navigate('/register')
                  closeMenu()
                }}>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header