"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import Form from "@/components/Form";
import DevImg from "@/components/DevImg";
import BlurBlob from "@/components/ui/BlurBlob";
import {
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
  scaleIn,
  textReveal,
  cardHover,
} from "@/lib/motionVariants";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramFill,
  RiPinterestFill,
  RiFacebookFill,
  RiTwitterFill,
} from "react-icons/ri";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

// Contact methods
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "ishiwaraanuradha@gmail.com",
    href: "mailto:ishiwaraanuradha@gmail.com",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient:
      "from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 743-119-199",
    href: "tel:+94743119199",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient:
      "from-emerald-100 to-emerald-200 dark:from-emerald-900/30 dark:to-emerald-800/30",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "#",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    bgGradient:
      "from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30",
  },
];

// Social links
const socialLinks = [
  {
    icon: RiPinterestFill,
    label: "Pinterest",
    href: "#",
    color: "text-[#E60023] hover:text-[#b0001b] dark:text-[#E60023]",
  },
   {
    icon: RiLinkedinFill,
    label: "LinkedIn",
    href: "#",
    color: "text-[#0077B5] hover:text-[#005582]", // LinkedIn blue
  },
  {
    icon: RiTwitterFill,
    label: "Twitter",
    href: "#",
    color: "text-[#1DA1F2] hover:text-[#0d8ddb]", // Twitter blue
  },
  {
    icon: RiFacebookFill,
    label: "Facebook",
    href: "#",
    color: "text-[#1877F2] hover:text-[#0e63d3] dark:text-[#1877F2]",
  },
];

// Floating decoration
const FloatingElement = ({ delay = 0, children, className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      rotate: 360,
    }}
    transition={{
      delay,
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);

// Contact method card
const ContactCard = ({ method, index }) => (
  <motion.a
    href={method.href}
    variants={scaleIn(index * 0.1)}
    whileHover="hover"
    className="block group"
  >
    <motion.div
      variants={cardHover}
      className="flex items-center gap-4 p-4 sm:p-6 bg-background backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <motion.div
        className={`p-3 sm:p-4 bg-gradient-to-br ${method.bgGradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
      >
        <method.icon
          className={`w-6 h-6 text-${method.color}-600 dark:text-${method.color}-400`}
        />
      </motion.div>

      <div className="flex-1">
        <p className="text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1">
          {method.label}
        </p>
        <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
          {method.value}
        </p>
      </div>

      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
    </motion.div>
  </motion.a>
);

// Contact Component
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      id="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative min-h-screen py-12 sm:py-16 xl:py-10 scroll-mt-20 overflow-hidden mx-auto"
    >
      {/* Floating Elements */}
      <FloatingElement delay={0} className="top-20 left-10 w-4 h-4">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-sm" />
      </FloatingElement>
      <FloatingElement delay={2} className="top-40 right-20 w-6 h-6">
        <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-sm" />
      </FloatingElement>
      <FloatingElement delay={4} className="bottom-40 left-20 w-5 h-5">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-orange-400 rounded-full blur-sm" />
      </FloatingElement>
      <FloatingElement delay={6} className="bottom-20 right-10 w-3 h-3">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-red-400 rounded-full blur-sm" />
      </FloatingElement>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start justify-between">
          {/* Left Section */}
          <motion.div variants={slideInLeft()} className="relative">
            <div className="mb-6 sm:mb-8 m-4 sm:m-10">
              <motion.div
                variants={textReveal()}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary">
                  Let's Connect
                </span>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              </motion.div>

              <motion.h1
                variants={textReveal(0.1)}
                className="text-3xl sm:text-4xl xl:text-6xl font-bold leading-tight mb-4"
              >
                Let's Work <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
                  Together.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp(0.2)}
                className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Have a project in mind or want to discuss potential
                opportunities?
                <br />
                <span className="font-semibold text-gray-900 dark:text-white">
                  Feel free to reach out and let's explore how we can
                  collaborate.
                </span>
              </motion.p>
            </div>

            {/* Form Container */}
            <motion.div
              variants={scaleIn(0.2)}
              className="relative p-6 sm:p-8 backdrop-blur-xl rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
            >
              <div className="absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-full opacity-60 blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-secondary to-primary rounded-full opacity-40 blur-sm" />
              <Form />
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div variants={slideInRight()} className="relative">
            <motion.div variants={scaleIn(0.3)} className="relative mb-12">
              <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/10 to-secondary/20 rounded-full blur-3xl animate-pulse" />
                <BlurBlob
                  variant="primary"
                  position="top-right"
                  size={200}
                  animated={false}
                />
                <div className="relative">
                  <BlurBlob
                    variant="cool"
                    position="bottom-left"
                    size={300}
                    animated={true}
                  />
                  <DevImg
                    containerStyles="w-[300px]  sm:w-[400px] xl:w-[500px] h-[300px]  sm:h-[400px] xl:h-[500px] bg-no-repeat absolute"
                    imgSrc={`${prefix}/contact/developer.png`}
                  />
                </div>
                {/* Floating icons */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 bg-blue-500/10 dark:bg-gray-800 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail className="w-6 h-6 text-blue-500" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 bg-green-500/10 dark:bg-gray-800 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <Phone className="w-6 h-6 text-green-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={staggerContainer} className="space-y-4">
              {contactMethods.map((method, index) => (
                <ContactCard key={method.label} method={method} index={index} />
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp(0.4)}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-background backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:scale-110 transition-transform duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
