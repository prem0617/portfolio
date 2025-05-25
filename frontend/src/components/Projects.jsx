"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router";
import { BsGithub } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Dhanchakra – Smart Expense Tracker",
    description:
      "A smart expense tracker with OTP-based login, multi-account support, default account for transactions, manual and AI-powered receipt scanning, budget setting, and visual expense insights using bar and pie charts.",
    image:
      "https://i.postimg.cc/mDxdxTW6/Screenshot-2025-05-25-at-09-55-35.png",
    githubLink: "https://github.com/prem0617/dhanchakr/",
    techstack: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
      "Nodemailer",
      "Recharts",
      "Gemini API",
    ],
    liveLink: "https://dhanchakr.vercel.app/",
    category: "Full-Stack",
    status: "Live",
  },
  {
    title: "Sahayak – Home Services Platform",
    description:
      "A platform connecting users with service providers for household tasks like cleaning and plumbing. Users can book services, rate providers, and get smart recommendations via a chatbot powered by Gemini API. Admins manage service categories and listings.",
    image:
      "https://i.postimg.cc/hPqfX6KW/Screenshot-2025-05-25-at-09-55-50.png",
    githubLink: "https://github.com/prem0617/Sahayak",
    techstack: ["Next.js", "Tailwind CSS", "MongoDB", "Prisma", "Gemini API"],
    liveLink: "https://sahayak0.vercel.app/",
    category: "Full-Stack",
    status: "Live",
  },
  {
    title: "FlockTalk – Real-Time Social Media App",
    description:
      "A social media platform where users can post messages or photos, comment, like, and bookmark in real-time. Built with Socket.io to ensure instant updates across all users without page refresh. All interactions—posts, comments, likes, bookmarks—are real-time.",
    image:
      "https://i.postimg.cc/t4vqNMGg/Screenshot-2025-05-25-at-10-00-34.png",
    githubLink: "#",
    techstack: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    liveLink: "https://flocktalk.vercel.app/",
    category: "Full-Stack",
    status: "Live",
  },
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 1.2,
          spacing: 30,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 1,
          spacing: 40,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const techStackVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
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
            Featured Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work and side projects that showcase my
            skills and passion for development
          </p>
        </motion.div>

        {/* Project Counter */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg transition-colors duration-300">
            <span className="text-slate-600 dark:text-gray-400">Project</span>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {currentSlide + 1}
            </span>
            <span className="text-slate-400 dark:text-gray-500">/</span>
            <span className="text-slate-600 dark:text-gray-400">
              {projects.length}
            </span>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div variants={itemVariants} className="relative">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="keen-slider__slide"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                        {/* Project Number */}
                        <motion.div
                          className="text-6xl lg:text-7xl font-bold text-slate-100 dark:text-gray-700 mb-4 group-hover:text-slate-200 dark:group-hover:text-gray-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          0{index + 1}
                        </motion.div>

                        <div className="space-y-6">
                          {/* Category & Status */}
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors duration-300">
                              {project.category}
                            </span>
                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium transition-colors duration-300">
                              {project.status}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
                            {project.description}
                          </p>

                          {/* Tech Stack */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techstack.map((tech, techIndex) => (
                                <motion.span
                                  key={tech}
                                  custom={techIndex}
                                  variants={techStackVariants}
                                  initial="hidden"
                                  animate="visible"
                                  className="px-3 py-1 bg-slate-50 dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-gray-600 hover:bg-slate-100 dark:hover:bg-gray-600 transition-colors duration-200"
                                  whileHover={{ scale: 1.05, y: -2 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex items-center space-x-4 pt-4">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                to={project.liveLink}
                                target="_blank"
                                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                              >
                                <BiLink size={20} />
                                <span>Live Demo</span>
                              </Link>
                            </motion.div>

                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                to={project.githubLink}
                                target="_blank"
                                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300"
                              >
                                <BsGithub size={20} />
                                <span>Code</span>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="relative overflow-hidden order-1 lg:order-2">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          whileHover={{ scale: 1.05 }}
                        />
                        <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 group-hover:bg-slate-900/5 dark:group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {loaded && instanceRef.current && (
            <>
              <motion.button
                onClick={() => instanceRef.current?.prev()}
                className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 z-10"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                onClick={() => instanceRef.current?.next()}
                className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 z-10"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </>
          )}
        </motion.div>

        {/* Dots Indicator */}
        {loaded && instanceRef.current && (
          <motion.div
            className="flex justify-center space-x-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {projects.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-slate-900 dark:bg-white w-8"
                    : "bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
