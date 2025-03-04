"use client";
import { useEffect, useState, useRef } from "react";

const FuturisticBanner = () => {
  const [text, setText] = useState("");
  const fullText = "Welcome to Radiant Senior Secondary School...";
  const isInitialRender = useRef(true);

  useEffect(() => {
    // Prevent multiple effect runs
    if (!isInitialRender.current) return;

    // Ensure typing only happens on client
    const typingEffect = () => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 120);

      return () => clearInterval(interval);
    };

    const cleanup = typingEffect();
    isInitialRender.current = false;

    return cleanup;
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Parallax Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          suppressHydrationWarning
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
        <h1
          suppressHydrationWarning
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {text || fullText}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          A place where learning meets innovation
        </p>
      </div>

      {/* Button */}
      <div className="relative z-10 mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FuturisticBanner;
