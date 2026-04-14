import Header from './Header'

import { Outlet } from 'react-router-dom'
import AuthFooter from './AuthFooter'


const MainLayout = () => {
  const location = useLocation()
  const isChatPage = location.pathname.startsWith('/chat')

  return (
    <div className='flex min-h-screen flex-col'>
      <Header></Header>
      <main className='flex-1'>
        <Outlet></Outlet>
      </main>
      <AuthFooter></AuthFooter>
      {!isChatPage && <Footer></Footer>}
    </div>
  )
}

export default MainLayout
