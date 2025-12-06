"use client";
import React from "react";
import Navbar from "@/component/global/Navbar";
import HeroSection from "@/component/HeroSection";
import BannerSection from "@/component/BannerSection";
import FeaturesSection from "@/component/FeatureSection";
import TestimonialsSection from "@/component/TestimonialsSection";
import Footer from "@/component/global/Footer";
import NewsUpdates from "@/component/NewsUpdates";
import ClearScreen from "@/component/ClearScreen";
import AboutUsBrief from "@/component/AboutUsBreif";
import StudentLife from "@/component/StudentLife";
import ValuesSection from "@/component/ValueSection";
import CreativeStudentLife from "@/component/StudentLife";
import StudentLife1 from "@/component/StudentLife1";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <BannerSection />
      <ClearScreen className="h-screen" />
      <AboutUsBrief />
      {/* <StudentLife className="mt-24" /> */}
      <ValuesSection />

      <NewsUpdates />
      <FeaturesSection />
      <TestimonialsSection />

      <Footer />
    </div>
  );
};

export default Home;
