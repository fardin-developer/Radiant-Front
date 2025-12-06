import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const StudentLife1 = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [visibleSection, setVisibleSection] = useState(null);
useEffect(() => {
    scrollYProgress.onChange((latest) => {
        if (latest < 0.3) setVisibleSection("title");
        else if (latest < 0.6) setVisibleSection("activities");
        else if (latest < 0.9) setVisibleSection("facilities");
        else setVisibleSection("gallery");
    });
}, [scrollYProgress]);


    const activities = [
        {
            title: "Sports",
            image: "/fardin.png",
            description: "Competitive teams & fitness programs"
        },
        {
            title: "Clubs",
            image: "/fardin.png",
            description: "Join diverse interest groups"
        },
        {
            title: "Arts & Culture",
            image: "/fardin.png",
            description: "Express your creativity"
        },
        {
            title: "Sports",
            image: "/fardin.png",
            description: "Competitive teams & fitness programs"
        },
        {
            title: "Clubs",
            image: "/fardin.png",
            description: "Join diverse interest groups"
        },
        {
            title: "Arts & Culture",
            image: "/fardin.png",
            description: "Express your creativity"
        },     {
            title: "Sports",
            image: "/fardin.png",
            description: "Competitive teams & fitness programs"
        },
        {
            title: "Clubs",
            image: "/fardin.png",
            description: "Join diverse interest groups"
        },
        {
            title: "Arts & Culture",
            image: "/fardin.png",
            description: "Express your creativity"
        },
        {
            title: "Sports",
            image: "/fardin.png",
            description: "Competitive teams & fitness programs"
        },
        {
            title: "Clubs",
            image: "/fardin.png",
            description: "Join diverse interest groups"
        },
        {
            title: "Arts & Culture",
            image: "/fardin.png",
            description: "Express your creativity"
        }
    ];

    const facilities = [
        {
            title: "Library",
            image: "/fardin.png",
            description: "Modern learning spaces"
        },
        {
            title: "Science Lab",
            image: "/fardin.png",
            description: "State-of-the-art equipment"
        },
        {
            title: "Sports Ground",
            image: "/fardin.png",
            description: "Professional facilities"
        }
    ];

    const galleryImages = [
        "/fardin.png",
        "/fardin.png",
        "/fardin.png"
    ];

    // Adjusted timing for horizontal scroll
    const xPos = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-200%"]);

    // Adjusted zoom timing and effect
    const scale = useTransform(
        scrollYProgress,
        [0.4, 0.6, 0.8],
        [1, 1.5, 2.5]
    );

    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const springScale = useSpring(scale, springConfig);
    const springXPos = useSpring(xPos, springConfig);

    return (
        <div ref={containerRef} className="  bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Title Section */}
            <motion.div
                className="sticky top-0 left-0 w-full h-screen flex items-center justify-center"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
            >
                <div className="text-center z-10">
                    <motion.h1
                        className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        Student Life
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Experience a vibrant community where learning meets lifestyle
                    </motion.p>
                </div>
            </motion.div>

            {/* Horizontal Scrolling Activities */}
            <motion.div
                className="sticky top-0 left-0 h-screen flex items-center"
                style={{
                    x: springXPos,
                    opacity: useTransform(scrollYProgress, [0.2, 0.5], [1, 0])
                }}
            >
                <div className="flex gap-8 px-24">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            className="w-96 h-96 relative group"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 p-6">
                                        <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                                        <p className="text-gray-200">{activity.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Zooming Facilities Section */}
            <motion.div
                className="sticky top-0 left-0 w-full  flex items-center justify-center"
                style={{
                    scale: useSpring(springScale, { stiffness: 100, damping: 20 }),
                    opacity: useTransform(scrollYProgress, [0.3, 0.6, 0.9], [0, 1, 0]),
                }}
            >
                <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <Image
                                src={facility.image}
                                alt={`Image of ${facility.title}`}
                                width={400}
                                height={250}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                <div className="text-center">
                                    <h4 className="text-2xl font-bold text-white mb-2">{facility.title}</h4>
                                    <p className="text-gray-200">{facility.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Final Gallery Section */}
            <motion.div
                className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 overflow-hidden"
                style={{
                    opacity: useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 0.7, 1]),
                }}
            >
                {/* Left to Center Animation */}
                <motion.div
                    className="grid grid-cols-3 gap-6 max-w-6xl mx-auto"
                    style={{
                        x: useTransform(scrollYProgress, [0.6, 0.9], ['-100%', '0%'], {
                            clamp: true,
                        }),
                        scale: useTransform(scrollYProgress, [0.6, 0.9], [0.8, 1], {
                            clamp: true,
                        }),
                        filter: useTransform(scrollYProgress, [0.6, 0.9], ['blur(30px)', 'blur(0px)']),
                    }}
                >
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 1.2,
                                type: "spring",
                                stiffness: 60,
                                damping: 20,
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Image
                                src={img}
                                alt="Gallery"
                                width={400}
                                height={250}
                                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-blue-600/80"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Right to Center Animation */}
                <motion.div
                    className="grid grid-cols-3 gap-6 max-w-6xl mx-auto"
                    style={{
                        x: useTransform(scrollYProgress, [0.6, 0.9], ['100%', '0%'], {
                            clamp: true,
                        }),
                        scale: useTransform(scrollYProgress, [0.6, 0.9], [0.8, 1], {
                            clamp: true,
                        }),
                        filter: useTransform(scrollYProgress, [0.6, 0.9], ['blur(30px)', 'blur(0px)']),
                    }}
                >
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 1.2,
                                type: "spring",
                                stiffness: 60,
                                damping: 20,
                            }}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Image
                                src={img}
                                alt="Gallery"
                                width={400}
                                height={250}
                                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-blue-600/80"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.8 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Progress Indicator */}
                <motion.div
                    className="fixed bottom-8 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-64"
                    style={{
                        scaleX: useTransform(scrollYProgress, [0.6, 0.9], [0, 1]),
                        originX: 0,
                    }}
                />
            </motion.div>

        </div>
    );
};

export default StudentLife1;