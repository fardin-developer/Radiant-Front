import React from 'react'
import { useRef } from 'react'
import TitleSection from './StudentLife/TitleSection';
import ActivitiesSection from './StudentLife/ActivitySection';
import FacilitiesSection from './StudentLife/FacilitieSection';
import GallerySection from './StudentLife/GallerySection';
import { useScroll } from 'framer-motion';

const StudentLife = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end end'],
    });
  
    // Data Arrays
    const activities = [
      {
        title: 'Sports',
        image: '/fardin.png',
        description: 'Competitive teams & fitness programs',
      },
      {
        title: 'Clubs',
        image: '/fardin.png',
        description: 'Join diverse interest groups',
      },
      {
        title: 'Arts & Culture',
        image: '/fardin.png',
        description: 'Express your creativity',
      },
     
    ];
  
    const facilities = [
      {
        title: 'Library',
        image: '/fardin.png',
        description: 'Modern learning spaces',
      },
      {
        title: 'Science Lab',
        image: '/fardin.png',
        description: 'State-of-the-art equipment',
      },
      {
        title: 'Sports Ground',
        image: '/fardin.png',
        description: 'Professional facilities',
      },
    ];
  
    const galleryImages = ['/fardin.png', '/fardin.png', '/fardin.png'];
  
    return (
      <div ref={containerRef} className="bg-gradient-to-b from-gray-600">

        <GallerySection activities={activities} facilities={facilities}  scrollYProgress={scrollYProgress} galleryImages={galleryImages} />
      </div>
    );
  };
  
  export default StudentLife;