"use client";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";

const FuturisticBanner = () => {
  // Adjust volume as needed; this ensures the sound is less intrusive.
  const [playTypingSound] = useSound("/typing-sound.mp3", { volume: 0.3 });
  const [text, setText] = useState("");
  const fullText = "Welcome to Radiant Senior Secondary School...";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        // Optionally play a sound per character or on specific events:
        // playTypingSound();
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120); // Adjust typing speed as desired

    return () => clearInterval(interval);
  }, [playTypingSound]);

  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Parallax Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{text}</h1>
        <p className="text-lg md:text-xl mb-8">
          A place where learning meets innovation
        </p>
      </div>


      {/* Fixed Anchor & Swinging Button Assembly */}
      <motion.div
        // Entrance: slide in from the top
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.8 }}
        className="flex flex-col items-center"
        style={{ transform: "translateX(-50%)" }}
      >
      <div className="w-1/6 h-1 bg-white text-red-400 z-50" > </div>
      {/* Fixed top anchor (like a ceiling hook) */}
        {/* <div className="w-2 h-2 bg-white rounded-full" /> */}

        {/* Swinging container that starts from the fixed point */}
        <motion.div
          className="flex flex-col justify-center items-center"
          style={{ transformOrigin: "top center" }}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Animated "string" that stretches downward */}
          <motion.div
            className="w-px bg-white"
            initial={{ height: 0 }}
            animate={{ height: "25vh" }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          {/* Animated button that appears at the bottom of the string */}
          <motion.button
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturisticBanner;
