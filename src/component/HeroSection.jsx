"use client"
import { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Add any JavaScript for animations here
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="animate-pulse-slow bg-gradient-radial from-purple-500/20 to-transparent w-full h-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-6xl font-bold text-white animate-fade-in-up">
          Welcome to <span className="text-purple-400">SchoolName</span>
        </h1>
        <p className="text-xl text-gray-300 animate-fade-in-up delay-100">
          Empowering the future with innovative education.
        </p>
        <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors animate-fade-in-up delay-200">
          Explore Courses
        </button>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;