"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router";

const followMeOn = [
  {
    icon: <BsGithub />,
    name: "Github",
    link: "https://github.com/prem0617",
  },
  {
    icon: <BsLinkedin />,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/prem-patel-38393725b/",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false); // Reset if submitting again

    try {
      const response = await axios.post(
        "http://localhost:8080/getMessage",
        formData
      );
      console.log(response.data);
      setIsSubmitted(true); // Only set true if request succeeds
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsError(true);
      console.log(error.message);
      setErrorMessage(error.message);
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "poojanpatel2121@gmail.com",
      href: "mailto:poojanpatel2121@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 73837 91285",
      href: "tel:+917383791285",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gujarat, India",
      href: "#",
    },
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() =>
                    contact.href !== "#" && window.open(contact.href, "_blank")
                  }
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-slate-200 dark:group-hover:bg-gray-600 transition-colors duration-300">
                      <contact.icon className="w-6 h-6 text-slate-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {contact.label}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-300"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {followMeOn.map((platform, index) => (
                  <motion.button
                    key={index}
                    className="px-4 py-2 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-gray-300 rounded-lg hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={platform.link} target="_blank">
                      {platform.icon}
                    </Link>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-300 hover:border-slate-300 dark:hover:border-gray-500"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-300 hover:border-slate-300 dark:hover:border-gray-500"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400 dark:text-gray-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-slate-500 dark:focus:ring-gray-400 focus:border-transparent outline-none transition-all duration-300 hover:border-slate-300 dark:hover:border-gray-500 resize-none"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitted
                        ? "bg-green-500 dark:bg-green-600 text-white"
                        : isSubmitting
                        ? "bg-slate-400 dark:bg-gray-600 text-white cursor-not-allowed"
                        : "bg-slate-900 dark:bg-white text-white dark:text-gray-900 hover:bg-slate-800 dark:hover:bg-gray-100 shadow-lg hover:shadow-xl"
                    }`}
                    whileHover={
                      !isSubmitting && !isSubmitted
                        ? { scale: 1.02, y: -2 }
                        : {}
                    }
                    whileTap={
                      !isSubmitting && !isSubmitted ? { scale: 0.98 } : {}
                    }
                  >
                    {isSubmitted ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center"
                        >
                          ✓
                        </motion.div>
                        <span>Message Sent!</span>
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white dark:border-gray-900 border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg transition-colors duration-300"
                >
                  <p className="text-green-700 dark:text-green-300 text-center">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
