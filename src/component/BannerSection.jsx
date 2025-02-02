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
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120); // Adjust typing speed (100ms per character)

    return () => clearInterval(interval);
  }, [playTypingSound]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="parallax-video"
        >
          <source src="2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute z-10 bg-black bg-opacity-50 w-full h-full"></div>

      {/* Content */}
      <div className="z-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">{text}</h1>
        <p className="text-xl mb-8">A place where learning meets innovation</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FuturisticBanner;
