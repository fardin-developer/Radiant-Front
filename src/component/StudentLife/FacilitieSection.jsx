import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


const FacilitiesSection = ({ scrollYProgress, facilities }) => {
  // Adjust zoom timing and effect
  const scale = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [1, 1.5, 2.5]);
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springScale = useSpring(scale, springConfig);

  return (
    <motion.div
      className="sticky top-0 left-0 w-full h-screen flex items-center justify-center"
      style={{
        scale: useSpring(springScale, { stiffness: 100, damping: 20 }),
        opacity: useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0]),
      }}
    >
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: 'easeOut',
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={facility.image}
              alt={`Image of ${facility.title}`}
              width={400}
              height={250}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-white mb-2">{facility.title}</h4>
                <p className="text-gray-200">{facility.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default FacilitiesSection

