import Header from './Header'
import { Outlet } from 'react-router-dom'
import AuthFooter from './AuthFooter'

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header></Header>
      <main className='flex-1'>
        <Outlet></Outlet>
      </main>
      <AuthFooter></AuthFooter>
    </div>
  )
}

export default MainLayout
