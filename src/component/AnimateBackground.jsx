"use client"
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => {
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = Math.random() * 300 + 50;
        const duration = Math.random() * 10 + 5;
        const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              background: color,
            }}
            animate={{
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;