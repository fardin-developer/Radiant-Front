"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function OrbitingBalls() {
  const [angle, setAngle] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark that the component is running on the client
    const interval = setInterval(() => {
      setAngle((prev) => prev + 5); // Increase angle smoothly
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null; // Skip rendering on the server
  }

  return (
    <div className="absolute ml-20 w-[300px] h-[300px] flex items-center justify-center perspective-container">
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
            }px`,
            top: `${
              100 + Math.sin(((angle + offset) * Math.PI) / 180) * 20
            }px`,
          }}
        />
      ))}
    </div>
  );
}