import React from 'react'
import Navbar from '@/component/global/Navbar'
import HeroSection from '@/component/HeroSection'
import BannerSection from '@/component/BannerSection'
import FeaturesSection from '@/component/FeatureSection'
import TestimonialsSection from '@/component/TestimonialsSection'
import Footer from '@/component/global/Footer'
import OrbitingBalls from '@/component/OrbitingBalls'
import NewsUpdates from '@/component/NewsUpdates'
import ClearScreen from '@/component/ClearScreen'
const Home = () => {
  return (
    <div className='h-screen'>
      <Navbar />
      <BannerSection/>
      <ClearScreen className='h-1/2' />
      <OrbitingBalls/>
      <NewsUpdates/>
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default Home
