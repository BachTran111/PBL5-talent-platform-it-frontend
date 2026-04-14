import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import CategoriesSection from '@/components/sections/CategoriesSection'
import EmployersSection from '@/components/sections/EmployersSection'
import FeaturedJobsSection from '@/components/sections/FeaturedJobsSection'
import HeroSection from '@/components/sections/HeroSection'
import NewsletterSection from '@/components/sections/NewsletterSection'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-white text-slate-950'>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedJobsSection />
      <EmployersSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default HomePage
