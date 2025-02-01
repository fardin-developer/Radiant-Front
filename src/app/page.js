import React from 'react'
import Navbar from '@/component/global/Navbar'
import HeroSection from '@/component/HeroSection'
import BannerSection from '@/component/BannerSection'
import FeaturesSection from '@/component/FeatureSection'
import TestimonialsSection from '@/component/TestimonialsSection'
import Footer from '@/component/global/Footer'
import OrbitingBalls from '@/component/OrbitingBalls'
const Home = () => {
  return (
    <>
      <Navbar />
      <BannerSection/>
      <OrbitingBalls/>
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </>
  )
}

export default Home
