import { useLocation } from 'react-router-dom'

import Navbar from './Navbar'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAuthPage =
    location.pathname.startsWith('/login') ||
    location.pathname.startsWith('/register') ||
    location.pathname.includes('forgot-password') ||
    location.pathname.includes('reset-password')

  return (
    <Navbar
      variant={isAuthPage ? 'compact' : isHomePage ? 'marketing' : 'default'}
      transparentOnTop={isHomePage}
      showSearch={false}
      showAuthButtons={!isAuthPage}
      showPostJobButton={!isAuthPage}
    />
  )
}

export default Header
