import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GallerySection = ({ activities, facilities, galleryImages }) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.08,
      rotate: 3,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-8 bg-gradient-to-b from-slate-900 to-blue-900 space-y-20">
      {/* Activities Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Activities
        </h2>
        <div className="flex gap-8 overflow-x-auto pb-4">
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              className="min-w-[300px] h-[400px] relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 shadow-xl"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={imageHoverVariants}
                className="h-full w-full"
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-cyan-400">{activity.title}</h3>
                <p className="text-white/80 mt-2">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Facilities Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
          Facilities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <motion.div
              key={facility.title}
              variants={cardVariants}
              className="relative h-[500px] rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full w-full"
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <div className="text-center w-full">
                  <h3 className="text-2xl font-bold text-emerald-400">{facility.title}</h3>
                  <p className="text-white/80 mt-2">{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">
          Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative h-[300px] rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full w-full"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default GallerySection;