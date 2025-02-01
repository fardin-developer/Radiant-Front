"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OrbitingBalls() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) =>( prev + 5)); // Increase angle smoothly
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute ml-20 w-[300px] h-[300px] flex items-center justify-center perspective-container">
      {/* Central Object (Main Subject, e.g., the Sun) */}
      {/* <div className=" w-24 h-24 bg-yellow-400 rounded-full shadow-lg"></div> */}

      {/* Orbiting Balls */}
      {[0, 120, 240].map((offset, index) => (
        <motion.div
          key={index}
          className="absolute w-6 h-6 rounded-full mt-6"
          style={{
            background:
              index === 0
                ? "linear-gradient(to right, blue, purple)"
                : index === 1
                ? "linear-gradient(to right, purple, pink)"
                : "linear-gradient(to right, cyan, lime)",
            left: `${
              100 + Math.cos(((angle + offset) * Math.PI) / 180) * 180
            }px`, // X position (circular motion)
            top: `${
              100 + Math.sin(((angle + offset) * Math.PI) / 180) * 20
            }px`, // Y position (elliptical effect)
          }}
        />
      ))}
    </div>
  );
}
