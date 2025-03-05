"use client"
import React from 'react';
import { motion } from 'framer-motion';
// import OrbitingBalls from './OrbitingBalls';

const FeatureSection = () => {

  const features = [
    { icon: "🏠", title: "Separate Hostels", description: "Separate hostels for boys and girls." },
    { icon: "📚", title: "NEP 2020 Aligned", description: "Curriculum designed as per NEP 2020 guidelines." },
    { icon: "📖", title: "Advanced Study Materials", description: "Comprehensive and up-to-date resources." },
    { icon: "📝", title: "Test Series", description: "NEET/JEE test series from class VIII onwards." },
    { icon: "🖥️", title: "Digital Classrooms", description: "State-of-the-art digital learning environment." },
    { icon: "❓", title: "Doubt Clearing Sessions", description: "Daily sessions to clarify doubts and concepts." },
    { icon: "💰", title: "Affordable Fees", description: "Complete the course with minimum and affordable fees." },
    { icon: "🎓", title: "Integrated Schooling", description: "NEET, IIT-JEE preparation integrated with schooling." },
    { icon: "🏅", title: "Scholarships", description: "For meritorious and underprivileged students." },
    { icon: "👨‍🏫", title: "Expert Faculty", description: "From Kota, IITs, and NITs." },
    { icon: "📊", title: "Regular Tests", description: "Weekly and monthly assessments." },
    { icon: "🧭", title: "Career Counselling", description: "Guidance to help students choose the right path." },
    { icon: "🔍", title: "360° Evaluation", description: "Comprehensive performance assessment." },
    { icon: "🤝", title: "Mentor-Mentee Concept", description: "Personalized mentorship for students." },
    { icon: "⏳", title: "Daily 6-Hour Classes", description: "Structured classes from Monday to Friday." },
    { icon: "📈", title: "Monitoring Sessions", description: "Regular tracking of student progress." },
    { icon: "🏥", title: "AICU", description: "Academic Intensive Care Unit for slow learners." },
    { icon: "🎓", title: "Tuition-Free Teaching", description: "Quality education without extra tuition fees." },
    { icon: "📹", title: "CCTV Supervision", description: "Ensuring safety and discipline." },
    { icon: "⚽", title: "Indoor & Outdoor Games", description: "Holistic development through sports." },
  ];

  return (
<div className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group "
            >
              <div className="h-full bg-gray-50 p-8 rounded-xl shadow-lg 
                         hover:shadow-2xl transition-all duration-300 hover:rotate-2  hover:-translate-y-4">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );


}

export default FeatureSection