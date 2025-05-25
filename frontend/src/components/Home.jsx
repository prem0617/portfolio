"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    y: 40,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  const skills = [
    { icon: "🎓", text: "IT Engineering Student at BVM, Gujarat" },
    { icon: "💻", text: "Passionate Full-Stack Developer (MERN, Next.js)" },
    {
      icon: "🚀",
      text: "Finalist at hackathons like Supermind, Dot Slash, CVMU",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center lg:justify-start order-1 lg:order-2"
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 bg-slate-200 dark:bg-gray-700 rounded-full opacity-20"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.img
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              src="./PROFILE IMAGE.jpg"
              alt="Prem Patel - Full Stack Developer"
              className="relative rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={textVariants}
          className="space-y-8 order-2 lg:order-1"
        >
          <div className="space-y-4">
            <motion.p
              className="text-lg font-medium text-slate-600 dark:text-gray-400 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Prem Patel
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-slate-600 dark:text-gray-400 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Full-Stack Developer & Problem Solver
            </motion.p>
          </div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl flex-shrink-0 mt-1">
                  {skill.icon}
                </span>
                <p className="text-slate-700 dark:text-gray-300 text-lg leading-relaxed">
                  {skill.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
