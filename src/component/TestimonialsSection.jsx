"use client"
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'Parent',
    quote: 'This school has transformed my childs learning experience. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    role: 'Student',
    quote: 'The teachers are amazing, and the facilities are top-notch.',
  },
  {
    name: 'Alice Johnson',
    role: 'Parent',
    quote: 'A perfect blend of academics and extracurricular activities.',
  },
];

const TestimonialsSection = () => {

  return (
    <div className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          What People Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-xl shadow-lg
                           hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-2 text-4xl text-blue-200">"</div>
                  <p className="text-gray-700 italic relative z-10">{testimonial.quote}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-lg font-semibold text-blue-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;




