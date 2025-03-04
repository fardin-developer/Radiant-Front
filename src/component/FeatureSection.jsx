"use client";
import React from "react";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      icon: "🏫",
      title: "Modern Facilities",
      description: "State-of-the-art classrooms, labs, and sports facilities.",
    },
    {
      icon: "👩‍🏫",
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers.",
    },
    {
      icon: "🚀",
      title: "Future-Ready Curriculum",
      description: "Focus on STEM, arts, and holistic development.",
    },
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div
                className="h-full bg-gray-50 p-8 rounded-xl shadow-lg 
                         hover:shadow-2xl transition-all duration-300"
              >
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
};

export default FeatureSection;

