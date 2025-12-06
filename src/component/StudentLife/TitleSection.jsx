import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Circle, Triangle, Square } from 'lucide-react';

const TitleSection = ({ scrollYProgress }) => {
  const [activeSection, setActiveSection] = useState(0);

  const values = [
    {
      title: "Learn",
      description: "Discover your potential through innovative education",
      gradient: "from-blue-500 to-purple-600",
      icon: Circle,
      pattern: "radial-gradient(circle at 30% 107%, rgb(253, 244, 151) 0%, rgb(253, 244, 151) 5%, rgb(253, 89, 73) 45%,rgb(214, 36, 159) 60%,rgb(40, 90, 235) 90%)"
    },
    {
      title: "Grow",
      description: "Develop skills and character in a nurturing environment",
      gradient: "from-green-500 to-teal-600",
      icon: Triangle,
      pattern: "linear-gradient(45deg, #00ff87 0%, #60efff 100%)"
    },
    {
      title: "Excel",
      description: "Achieve excellence in academics and beyond",
      gradient: "from-pink-500 to-red-600",
      icon: Square,
      pattern: "linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate which section should be active based on scrollYProgress
      const section = Math.floor(scrollYProgress.get() * 3);
      setActiveSection(Math.min(Math.max(0, section), 2));
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Animated connection line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden">
        <motion.div 
          className="h-full w-full bg-gradient-to-b from-transparent via-white to-transparent"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {values.map((value, index) => (
        <motion.section 
          key={index}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: activeSection === index ? 1 : 0,
            transition: { duration: 0.5 }
          }}
          style={{
            pointerEvents: activeSection === index ? 'auto' : 'none'
          }}
        >
          <motion.div 
            className="text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: activeSection === index ? 1 : 0.8,
              opacity: activeSection === index ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 -z-10 opacity-10">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
                style={{ background: value.pattern }}
              />
            </div>

            {/* Icon */}
            <motion.div
              className="mb-8 inline-block"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <value.icon size={48} className={`bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`} />
            </motion.div>

            {/* Title with sparkle effect */}
            <div className="relative inline-block">
              <h1 className={`text-8xl font-bold mb-6 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                {value.title}
              </h1>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-yellow-400" size={24} />
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mx-auto p-6 rounded-lg border border-white/10 backdrop-blur-sm"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {value.description}
            </motion.p>
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
};

export default TitleSection;