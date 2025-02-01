"use client";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import { motion } from "framer-motion";
import OrbitingBalls from "./OrbitingBalls";

const FuturisticBanner = () => {
  const [playTypingSound] = useSound("/typing-sound.mp3"); // Ensure the typing sound file is in the public folder
  const [text, setText] = useState("");
  const fullText = "Welcome to Radiant Senior Secondary School...";

  useEffect(() => {

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        // playTypingSound(); // Play typing sound for each character
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120); // Adjust typing speed (100ms per character)

    return () => clearInterval(interval);
  }, [playTypingSound]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 via-transparent to-transparent animate-pulse"></div>

      {/* Main Content */}
      <div className="relative text-center space-y-8 z-10">
        <h1 className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-wide">
          {text}
          <span className="typing-cursor">|</span> {/* Typing cursor */}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto tracking-wider leading-relaxed">
          Empowering the future with innovation, creativity, and excellence. Join us on this journey to shape tomorrow.
        </p>
        <button className="px-10 py-4 text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-110 transition-transform shadow-xl">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FuturisticBanner;
