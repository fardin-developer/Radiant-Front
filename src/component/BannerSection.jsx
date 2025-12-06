"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const FuturisticBanner = () => {
  const [text, setText] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const fullText = "Welcome to Radiant Senior Secondary School...";
  const isInitialRender = useRef(true);
  const videoRef = useRef(null);
  const router = useRouter();

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

  useEffect(() => {
    // Delay video loading to allow page to render first
    // This ensures the site loads quickly even on slow connections
    const loadTimer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 100); // Small delay to let page render first

    // Use Intersection Observer to start loading when component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentVideoRef = videoRef.current;
    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      clearTimeout(loadTimer);
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, [shouldLoadVideo]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Parallax Background Video */}
      <div className="absolute inset-0 w-full h-full" data-video-container>
        {/* Fallback background while video loads */}
        {!videoLoaded && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 animate-pulse"></div>
        )}
        
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            suppressHydrationWarning
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
            onError={(e) => {
              console.error('Video loading error:', e);
              // Fallback to gradient if video fails to load
              setVideoLoaded(false);
            }}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
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
        <button onClick={()=>{router.push('/about')}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default FuturisticBanner;
