import React from "react";
import {
  School,
  Trophy,
  Users,
  BookOpen,
  Award,
  User,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Client-side only component for animated background
const AnimatedBackground = dynamic(
  () =>
    Promise.resolve(() => {
      return (
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => {
            const width = Math.random() * 4 + 2;
            const height = Math.random() * 4 + 2;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;

            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              />
            );
          })}
        </div>
      );
    }),
  { ssr: false },
);

const AboutUsBrief = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    {
      icon: Trophy,
      value: "25+",
      label: "Years of Excellence",
      color: "bg-blue-500",
    },
    {
      icon: BookOpen,
      value: "95%+",
      label: "Board Exam Success",
      color: "bg-purple-500",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Successful Alumni",
      color: "bg-pink-500",
    },
  ];

  const leaders = [
    {
      name: "Tajuddin Ahmed",
      role: "Founder & Director",
      description: `It is with great pride that I extend a warm welcome to you all to this distinguished center of learning. Wisdom Senior Secondary School, established in 2025 under the aegis of the Radiant Education Trust, is committed to delivering top-quality education to the students of North East India, enabling them to excel on a national platform.  We strive to provide students with exceptional opportunities for both academic excellence and professional development.`,
      color: "from-blue-400 to-purple-400",
    },
    {
      name: "XYZ",
      role: "Principal",
      description: `Our goal is to make learning an enriching, fulfilling, and enjoyable journey through a multi-disciplinary approach. As the principal, I am committed to fostering an environment where students, parents, and faculty work together to achieve excellence.
With a focus on holistic development, I will extend my guidance to ensure positive growth in all aspects of our institute. Together, we aim to create a culture of innovation, collaboration, and success.`,
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section className="min-h-screen py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block relative mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Us
            </h2>
            <motion.div
              className="absolute -right-8 -top-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-yellow-400 w-8 h-8" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p
              className="text-xl md:text-2xl text-blue-100"
              variants={fadeInUpVariants}
            >
              Welcome to{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Radiant Senior Secondary School
              </span>
            </motion.p>
            <motion.p
              className="text-lg text-blue-200"
              variants={fadeInUpVariants}
            >
              Where excellence meets innovation in education since 1995
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-700">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Our Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${leader.color} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`}
                />
                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${leader.color} rounded-full blur-md`}
                      />
                      <img
                        src="/fardin.png"
                        alt={leader.name}
                        className="w-24 h-24 rounded-full relative object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {leader.name}
                      </h4>
                      <p className="text-blue-300">{leader.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-blue-200">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsBrief;
