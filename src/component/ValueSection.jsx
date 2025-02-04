"use client"
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Sparkles, Circle, Triangle, Square } from 'lucide-react';
import dynamic from 'next/dynamic';

// Client-side only background component
import AnimatedBackground from './AnimateBackground';

const ValueSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 }); // Initialize with center position
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const values = [
    {
      title: "Learn",
      description: "Discover your potential through innovative education",
      color: "bg-indigo-500",
      icon: Circle,
      accent: "bg-purple-400"
    },
    {
      title: "Grow",
      description: "Develop skills and character in a nurturing environment",
      color: "bg-emerald-500",
      icon: Triangle,
      accent: "bg-teal-400"
    },
    {
      title: "Excel",
      description: "Achieve excellence in academics and beyond",
      color: "bg-rose-500",
      icon: Square,
      accent: "bg-orange-400"
    }
  ];

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const section = Math.floor(progress * 3);
      setActiveSection(Math.min(Math.max(0, section), 2));
    });

    return () => unsubscribe();
  }, [scrollYProgress, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className={`relative rounded-2xl p-1 ${activeSection === index ? 'z-10' : 'z-0'}`}
            style={{
              background: `linear-gradient(45deg, ${value.color}, ${value.accent})`,
            }}
            animate={{
              scale: activeSection === index ? 1.05 : 0.95,
              opacity: activeSection === index ? 1 : 0.7,
              rotateY: mousePosition.x * 20 - 10,
              rotateX: mousePosition.y * -20 + 10,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <div className="bg-gray-900 rounded-xl p-6 h-full">
              <motion.div
                className="mb-6 flex justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <value.icon size={48} className={value.color} />
              </motion.div>

              <div className="relative mb-4">
                <h2 className="text-4xl font-bold text-white text-center mb-2">
                  {value.title}
                </h2>
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="text-yellow-400" size={20} />
                </motion.div>
              </div>

              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {value.description}
              </motion.p>

              {isMounted && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-10"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ValueSection;