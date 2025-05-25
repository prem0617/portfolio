"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About Me", icon: "👨‍💻" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "skills", label: "Skills", icon: "⚡" },
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "C++", "Java"],
    frontend: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    tools: ["Git", "GitHub", "Postman", "Vercel"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-gray-900 py-24 px-6 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, education, and technical
            expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                Navigation
              </h3>
              <div className="space-y-2">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === section.id
                        ? "bg-slate-900 dark:bg-white text-white dark:text-gray-900 shadow-lg"
                        : "text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xl">{section.icon}</span>
                    <span>{section.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-h-[500px] transition-colors duration-300">
              <AnimatePresence mode="wait">
                {activeSection === "about" && (
                  <motion.div
                    key="about"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-3xl">👨‍💻</span>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        About Me
                      </h2>
                    </div>

                    <div className="prose prose-lg text-slate-700 dark:text-gray-300 leading-relaxed space-y-4">
                      <p>
                        Hello! I'm{" "}
                        <strong className="text-slate-900 dark:text-white">
                          Prem Patel
                        </strong>
                        , an enthusiastic IT Engineering student at Birla
                        Vishvakarma Mahavidyalaya (BVM), Gujarat. I'm passionate
                        about creating digital experiences that make a
                        difference.
                      </p>

                      <p>
                        I specialize in{" "}
                        <strong className="text-slate-900 dark:text-white">
                          full-stack web development
                        </strong>
                        , with expertise in the MERN stack, Next.js, and modern
                        CSS frameworks like Tailwind CSS. I love the challenge
                        of building applications that seamlessly blend
                        beautiful, responsive user interfaces with robust,
                        scalable backend systems.
                      </p>

                      <p>
                        What drives me is the opportunity to solve real-world
                        problems through code. Whether it's optimizing user
                        experience, implementing complex features, or
                        architecting scalable solutions, I approach every
                        project with curiosity and dedication.
                      </p>

                      <p>
                        I'm always eager to learn new technologies, collaborate
                        on exciting projects, and contribute to meaningful
                        initiatives that have a positive impact.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-4 text-center transition-colors duration-300">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          2.5+
                        </div>
                        <div className="text-slate-600 dark:text-gray-400">
                          Years Coding
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-4 text-center transition-colors duration-300">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          7+
                        </div>
                        <div className="text-slate-600 dark:text-gray-400">
                          Projects Built
                        </div>
                      </div>
                      <div className="bg-slate-50 dark:bg-gray-700 rounded-xl p-4 text-center transition-colors duration-300">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          5+
                        </div>
                        <div className="text-slate-600 dark:text-gray-400">
                          Hackathons
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === "education" && (
                  <motion.div
                    key="education"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-3xl">🎓</span>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Education
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <motion.div
                        className="bg-slate-50 dark:bg-gray-700 rounded-xl p-6 border-l-4 border-slate-900 dark:border-white transition-colors duration-300"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Bachelor of Engineering
                          </h3>
                          <span className="text-slate-600 dark:text-gray-400 font-medium">
                            2022 - 2026
                          </span>
                        </div>
                        <p className="text-lg text-slate-800 dark:text-gray-200 font-medium mb-2">
                          Information Technology Engineering
                        </p>
                        <p className="text-slate-700 dark:text-gray-300 mb-3">
                          Birla Vishvakarma Mahavidyalaya, Anand, Gujarat
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="bg-white dark:bg-gray-600 rounded-lg px-3 py-1 transition-colors duration-300">
                            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                              CPI:{" "}
                            </span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              8.78
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-600 rounded-lg px-3 py-1 transition-colors duration-300">
                            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                              Status:{" "}
                            </span>
                            <span className="text-sm font-bold text-green-600 dark:text-green-400">
                              Ongoing
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-slate-50 dark:bg-gray-700 rounded-xl p-6 border-l-4 border-slate-700 dark:border-gray-400 transition-colors duration-300"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            Higher Secondary Certificate
                          </h3>
                          <span className="text-slate-600 dark:text-gray-400 font-medium">
                            2020 - 2022
                          </span>
                        </div>
                        <p className="text-lg text-slate-800 dark:text-gray-200 font-medium mb-2">
                          Physics, Chemistry, Mathematics (PCM)
                        </p>
                        <p className="text-slate-700 dark:text-gray-300 mb-3">
                          Sarva Vidhyalaya, Kadi, Gujarat
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="bg-white dark:bg-gray-600 rounded-lg px-3 py-1 transition-colors duration-300">
                            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                              Percentage:{" "}
                            </span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              94.33%
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-600 rounded-lg px-3 py-1 transition-colors duration-300">
                            <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                              Status:{" "}
                            </span>
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                              Completed
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {activeSection === "skills" && (
                  <motion.div
                    key="skills"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-8"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-3xl">⚡</span>
                      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Technical Skills
                      </h2>
                    </div>

                    <div className="space-y-8">
                      {Object.entries(skills).map(
                        ([category, skillList], categoryIndex) => (
                          <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: categoryIndex * 0.1,
                            }}
                          >
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 capitalize">
                              {category.replace(/([A-Z])/g, " $1").trim()}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {skillList.map((skill, index) => (
                                <motion.span
                                  key={skill}
                                  custom={index}
                                  variants={skillVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="px-4 py-2 bg-slate-100 dark:bg-gray-700 text-slate-800 dark:text-gray-200 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors duration-300 cursor-default"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>

                    <motion.div
                      className="bg-slate-50 dark:bg-gray-700 rounded-xl p-6 mt-8 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                        Currently Learning
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["React Native", "AWS", "Docker", "Kubernetes"].map(
                          (skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm font-medium transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
