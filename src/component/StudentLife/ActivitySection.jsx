import React from 'react';
import Image from 'next/image';
import { motion, useTransform, useSpring } from 'framer-motion';

const ActivitiesSection = ({ scrollYProgress, activities }) => {
  // Adjust horizontal scroll timing and effect
  const xPos = useTransform(scrollYProgress, [0.1, 0.4], ['0%', '-200%']);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springXPos = useSpring(xPos, springConfig);

  return (
    <motion.div
      className="sticky top-0 left-0 h-screen flex items-center"
      style={{
        x: springXPos,
        opacity: useTransform(scrollYProgress, [0.1, 0.8], [1, 0]),
      }}
    >
      <div className="flex gap-8 px-4 md:px-24">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            // Responsive sizing: full width on small screens; fixed sizes on larger screens
            className="w-full sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={activity.image}
                alt={activity.title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{activity.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-200">{activity.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActivitiesSection;
