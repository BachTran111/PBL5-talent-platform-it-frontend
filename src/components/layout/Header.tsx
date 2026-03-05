import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@radix-ui/react-navigation-menu'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/authStore'

const Header = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  return (
    <header className='sticky top-0 z-50 w-full border-b-2 bg-white'>
      <div className='container mx-auto flex h-16 items-center justify-between px-6 flex-row'>
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
        {/* Navigate */}
        <NavigationMenu>
          <NavigationMenuList className='flex flex-row items-center gap-1'>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/jobs'
                  className='px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-purple-600'
                >
                  Find Jobs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/companies'
                  className='px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-purple-600'
                >
                  Companies
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/career-advice'
                  className='px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-purple-600'
                >
                  Career Advice
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to='/for-employers'
                  className='px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-purple-600'
                >
                  For Employers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action */}

        {/* Auth Actions */}
        <div className='flex items-center gap-3'>
          {isAuthenticated ? (
            <Button variant='outline' onClick={() => navigate('/dashboard')}>
              Dashboard
            </Button>
          ) : (
            <>
              <Button variant='ghost' className='text-sm font-medium text-slate-600' onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button
                className='rounded-full bg-purple-600 px-6 text-sm font-medium text-white hover:bg-purple-700'
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
