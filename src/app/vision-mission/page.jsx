"use client";

import React from 'react';
import {
  Lightbulb,
  Target,
  Award,
  Heart,
  BookOpen,
  Users,
  Sparkles,
  Compass,
  Star,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";

// Background circles as a separate client component
const BackgroundCircles = () => {
  // Pre-computed positions to avoid hydration mismatch
  const circles = [
    { size: 250, left: "10%", top: "20%", scale: 0.9 },
    { size: 300, left: "80%", top: "15%", scale: 0.7 },
    { size: 200, left: "25%", top: "60%", scale: 0.8 },
    { size: 350, left: "75%", top: "70%", scale: 0.6 },
    { size: 180, left: "50%", top: "30%", scale: 1 },
    { size: 220, left: "15%", top: "85%", scale: 0.7 },
    { size: 280, left: "85%", top: "40%", scale: 0.8 },
    { size: 200, left: "40%", top: "10%", scale: 0.9 },
    { size: 320, left: "60%", top: "90%", scale: 0.7 },
    { size: 270, left: "30%", top: "40%", scale: 0.6 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {circles.map((circle, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-blue-500 opacity-10"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: circle.left,
            top: circle.top,
            transform: `scale(${circle.scale})`,
          }}
        />
      ))}
    </div>
  );
};

const VisionMissionPage = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const coreValues = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Rigorous academic standards that challenge students to reach their highest potential.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Character Development",
      description: "Building integrity, empathy, and ethical judgment in every student.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Creating a diverse environment where all backgrounds and perspectives are valued.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Compass,
      title: "Innovation",
      description: "Embracing new ideas and approaches to learning and problem-solving.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "Developing socially conscious citizens who contribute positively to society.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Star,
      title: "Holistic Growth",
      description: "Nurturing intellectual, physical, emotional, and social development.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundCircles />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 inline-block">
            Vision & Mission
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Guiding principles that shape our approach to education at Radiant Senior Secondary School
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUpVariants}
          className="relative mb-24 max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-lg"></div>
          <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-5 rounded-2xl">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-100">Our Vision</h2>
            </div>
            
            <p className="text-xl leading-relaxed text-blue-100 mb-6">
              To be the leading educational institution in North East India, recognized for academic excellence, holistic development, and innovation.
            </p>
            
            <div className="bg-blue-900/30 border border-blue-400/20 rounded-xl p-6 mt-8">
              <p className="text-lg italic text-blue-200">
                "We envision Radiant Senior Secondary School as a beacon of educational excellence where students are empowered to become thoughtful leaders, creative innovators, and compassionate global citizens who shape a better tomorrow."
              </p>
              <p className="text-right text-blue-300 mt-4">— Tajuddin Ahmed, Founder & Director</p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUpVariants}
          className="relative mb-24 max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg"></div>
          <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-5 rounded-2xl">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-100">Our Mission</h2>
            </div>
            
            <ul className="space-y-6">
              {[
                "To provide a stimulating and supportive learning environment that encourages intellectual curiosity and academic excellence.",
                "To foster critical thinking, creativity, and problem-solving skills that prepare students for the challenges of a rapidly changing world.",
                "To nurture well-rounded individuals through a balanced curriculum that encompasses academics, arts, sports, and community service.",
                "To instill strong ethical values, cultural awareness, and social responsibility in our students.",
                "To employ innovative teaching methodologies and educational technologies that enhance the learning experience.",
                "To build meaningful partnerships with parents, alumni, and the community to support student success."
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index + 3}
                  variants={fadeInUpVariants}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full mt-1 shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-blue-100">{item}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={9}
          variants={fadeInUpVariants}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                custom={index + 10}
                variants={fadeInUpVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-xl blur opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                <div className="relative bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 h-full flex flex-col">
                  <div className={`bg-gradient-to-br ${value.color} p-3 rounded-lg w-fit mb-4`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-blue-200">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Goals */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={16}
          variants={fadeInUpVariants}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-lg"></div>
          <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-green-500/30">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-5 rounded-2xl">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-100">Strategic Goals 2025-2030</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Academic Excellence",
                  description: "Achieve and maintain a 100% graduation rate with 90% of students pursuing higher education."
                },
                {
                  title: "Infrastructure Development",
                  description: "Complete our state-of-the-art STEM innovation lab and multimedia library by 2027."
                },
                {
                  title: "Student Success",
                  description: "Ensure every student participates in at least one leadership development program annually."
                },
                {
                  title: "Community Engagement",
                  description: "Establish five key partnerships with local industries and educational institutions by 2028."
                }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  custom={index + 17}
                  variants={fadeInUpVariants}
                  className="bg-gray-800/50 p-5 rounded-xl border border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-green-300 mb-2">{goal.title}</h3>
                  <p className="text-blue-100">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={21}
          variants={fadeInUpVariants}
          className="text-center mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-6">
            Join Us in Shaping the Future of Education
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-8">
            At Radiant Senior Secondary School, we're committed to providing an exceptional educational experience that prepares students for success in a global society.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white cursor-pointer">
              Schedule a Visit
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionPage;