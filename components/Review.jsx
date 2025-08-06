"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import DevImg from "./DevImg";
import Image from "next/image";
import { useState } from "react";
import BlurBlob from "./ui/BlurBlob";
import { useTheme } from "next-themes";
import {
  staggerContainer,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  revealUp,
  textReveal,
  floatIn,
  cardHover,
} from "@/lib/motionVariants";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const reviewData = [
  {
    avatar: `${prefix}/reviews/avatar-1.png`,
    name: "Sarah M.",
    title: "Startup Founder",
    company: "TechFlow Solutions",
    comment:
      "Exceptional work! Anuradha completely transformed our mobile app interface. The user flow is now seamless and our beta testers are giving amazing feedback. They understood our vision perfectly and delivered beyond expectations.",
    date: "March 2024",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-2.png`,
    name: "Michael T.",
    title: "Business Owner",
    company: "Digital Commerce Co.",
    comment:
      "Outstanding designer! Anuradha created a beautiful and functional e-commerce site that increased our conversion rate by 35% within the first month. Their attention to detail and understanding of user psychology is impressive.",
    date: "February 2024",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-3.png`,
    name: "Jennifer L.",
    title: "Product Manager",
    company: "DataVision Analytics",
    comment:
      "Incredible UX work! Anuradha took our complex data dashboard and made it intuitive and user-friendly. The wireframes were thorough, the design system is perfect, and the final product exceeded our expectations.",
    date: "January 2024",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-4.png`,
    name: "Lisa K.",
    title: "Tech Entrepreneur",
    company: "InnovateHub",
    comment:
      "Fantastic experience! Jayathunga created detailed wireframes and an interactive prototype for our mobile app. Their user research insights were valuable and helped us avoid potential usability issues.",
    date: "December 2023",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-5.png`,
    name: "Amanda S.",
    title: "Marketing Manager",
    company: "GrowthMetrics",
    comment:
      "Solid work! Jayathunga created multiple landing page designs that captured our brand well. The conversion-focused approach was exactly what we needed. Delivered on time and within budget.",
    date: "November 2023",
    rating: 4,
  },
  {
    avatar: `${prefix}/reviews/avatar-6.png`,
    name: "Robert K.",
    title: "CTO",
    company: "TechInnovate",
    comment:
      "Professional and reliable! The design system they created has become the foundation of our entire product suite. Clean, scalable, and perfectly documented. Highly recommended for any serious project.",
    date: "October 2023",
    rating: 5,
  },
];

// const positions = [
//   {
//     position: "top-8 left-1/2 -translate-x-1/2",
//     delay: 0,
//     scale: 1.0,
//     size: 48, // More consistent, professional sizing
//   },
//   {
//     position: "top-1/3 right-8",
//     delay: 0.15,
//     scale: 0.95,
//     //size: 52,
//     size: 48
//   },
//   {
//     position: "top-2/3 right-12",
//     delay: 0.3,
//     scale: 1.05,
//     //size: 44,
//     size: 48
//   },
//   {
//     position: "bottom-8 right-1/3",
//     delay: 0.45,
//     scale: 1.0,
//     //size: 56,
//     size: 48
//   },
//   {
//     position: "bottom-8 left-1/3",
//     delay: 0.6,
//     scale: 0.9,
//     //size: 48,
//     size: 48
//   },
//   {
//     position: "top-2/3 left-12",
//     delay: 0.75,
//     scale: 1.1,
//     //size: 40,
//     size: 48
//   },
//   {
//     position: "top-1/3 left-8",
//     delay: 0.9,
//     scale: 0.95,
//     //size: 52,
//     size: 48
//   },
//   {
//     position: "bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2",
//     delay: 1.05,
//     scale: 0.85,
//     //size: 36,
//     size: 48
//   },
// ];
const positions = [
  {
    position: "top-8 left-1/2 -translate-x-1/2",
    delay: 0,
    scale: 1.1,
    size: 48, // More consistent, professional sizing
  },
  {
    position: "top-1/4 -right-4 -translate-y-1/2",
    delay: 0.2,
    scale: 0.9,
    size: 32, // More consistent, professional sizing
  },
  {
    position: "bottom-1/3 -right-6 translate-y-1/2",
    delay: 0.4,
    scale: 1.0,
    size: 32, // More consistent, professional sizing
  },
  {
    position: "bottom-0 left-1/2 -translate-x-1/2",
    delay: 0.6,
    scale: 1.1,
    size: 40, // More consistent, professional sizing
  },
  {
    position: "bottom-1/3 -left-4 translate-y-1/2",
    delay: 0.8,
    scale: 0.9,
    size: 32, // More consistent, professional sizing
  },
  {
    position: "top-1/4 -left-6 -translate-y-1/2",
    delay: 1.0,
    scale: 1.0,
    size: 32, // More consistent, professional sizing
  },
];
const blobShapes = [
  // {
  //   viewBox: "0 0 200 200",
  //   path: "M25.7,15.7C16.9,30.1,-18,30.3,-26.6,16C-35.3,1.6,-17.6,-27.3,-0.2,-27.4C17.3,-27.5,34.6,1.2,25.7,15.7Z",
  // },
  {
    viewBox: "100 100 213 197",
    path: "M187.72 169.75C158.2 200.02 116.58 196.61 111.02 196.07C68.96 191.95 44.61 160.48 27.89 138.87C13.1 119.75 -2.50001 99.5999 0.539988 73.1499C3.70999 45.4899 25.25 28.3499 33.22 21.9899C77.84 -13.5501 136.06 4.75992 139.8 5.99992C149.8 9.31992 176.36 18.1399 194.51 44.3699C218.83 79.5099 220.94 135.69 187.72 169.75Z",
  },
  // {
  //   viewBox: "100 100 220 204",
  //   path: "M151.63 138.47C108.78 167.13 112.13 198.85 88.13 203.43C55.14 209.71 -0.829999 159.27 0.960001 102.59C2.74 46.09 61 13.12 99.95 4.33997C106.96 2.75997 175.79 -11.7501 205.96 30.9299C220.35 51.2899 224.69 82.8999 211.5 104.06C199.26 123.7 182.03 118.13 151.64 138.46L151.63 138.47Z",
  // },
  // {
  //   viewBox: "100 100 441 373",
  //   path: "M387.6 333.108C335.518 376.871 260.164 376.061 192.484 369.274C160.51 366.067 128.306 361.962 98.128 350.961C67.949 339.96 39.61 321.417 22.118 294.479C5.79701 269.335 -0.0479985 238.5 0.751001 208.529C3.269 114.118 75.415 25.935 167.462 4.765C206.202 -4.141 251.325 1.07993 293.837 16.3669C347.249 35.5719 392.215 73.439 418.142 123.931C425.258 137.79 430.904 152.371 434.757 167.579C449.621 226.218 433.924 294.205 387.6 333.108Z",
  // },
];

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <svg
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 dark:text-gray-600"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  return (
    <motion.section
      id="review"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
      className="relative xl:py-24 scroll-mt-20 "
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" /> */}

      <div className="container max-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center justify-between">
          {/* image */}
          <div className="relative hidden  flex-2 lg:flex-1 items-center justify-center lg:justify-start max-w-[250px] lg:max-w-lg">
            <BlurBlob
              variant="primary"
              position="top-left"
              size={600}
              animated={true}
            />
            <div className="hidden">
              <BlurBlob
                variant="primary"
                position="top-left"
                size={600}
                animated={true}
              />
            </div>

            <DevImg
              containerStyles="w-[250px]  h-[250px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] bg-no-repeat"
              lightbg={`${prefix}/about/shape-light.svg`}
              bg={`${prefix}/about/shape-dark.svg`}
              imgSrc={`${prefix}/reviews/developer.png`}
            />
            <AnimatePresence>
              {reviewData.slice(0, positions.length).map((person, index) => {
                const isActive = index === activeIndex;
                const positionData = positions[index];
                // const blobPath =
                //   blobPaths[Math.floor(Math.random() * blobPaths.length)];
                const blobPath = blobShapes[index % blobShapes.length];

                return (
                  <motion.div
                    key={`${person.name}-${index}`}
                    className={`absolute ${positionData.position} z-5`}
                    variants={floatIn(positionData.delay)}
                    initial="hidden"
                    animate="show"
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -3, 3, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <motion.div
                      className="relative"
                      style={{
                        width: `${positionData.size}px`,
                        height: `${positionData.size}px`,
                      }}
                      animate={{
                        y: [0, -8, 0],
                        scale: isActive
                          ? positionData.scale * 1.1
                          : positionData.scale,
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: index * 0.5,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.4,
                          ease: "easeOut",
                        },
                      }}
                    >
                      {/* Blob Shape Container */}
                      <div className="relative w-8 h-8  md:w-14  md:h-14">
                        <svg
                          viewBox={blobPath.viewBox}
                          className="absolute inset-0 w-full h-full drop-shadow-xl"
                        >
                          <defs>
                            <pattern
                              id={`avatar-pattern-${index}`}
                              patternUnits="objectBoundingBox"
                              width="100%"
                              height="100%"
                            >
                              <image
                                href={person.avatar}
                                x="0"
                                y="0"
                                width=""
                                height=""
                                preserveAspectRatio="xMidYMid slice"
                                className="object-cover w-full h-full"
                              />
                            </pattern>

                            <linearGradient
                              id={`blob-border-${index}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor={
                                  isActive
                                    ? "rgb(99, 102, 241)"
                                    : "rgba(147, 197, 253, 0.5)"
                                }
                              />
                              <stop
                                offset="100%"
                                stopColor={
                                  isActive
                                    ? "rgb(168, 85, 247)"
                                    : "rgba(196, 181, 253, 0.5)"
                                }
                              />
                            </linearGradient>
                          </defs>
                          <g transform="translate(100 100)">
                            {/* Avatar Image as Blob Shape */}
                            <path
                              d={blobPath.path}
                              fill={`url(#avatar-pattern-${index})`}
                              className="transition-all duration-300"
                            />

                            {/* Border/Stroke */}
                            <path
                              d={blobPath.path}
                              fill="none"
                              stroke={`url(#blob-border-${index})`}
                              strokeWidth={isActive ? "6" : "3"}
                              className="transition-all duration-300"
                            />

                            {/* Active State Pulse Ring */}
                            {isActive && (
                              <motion.path
                                d={blobPath.path}
                                fill="none"
                                stroke="rgb(99, 102, 241)"
                                strokeWidth="2"
                                opacity="0.6"
                                initial={{ scale: 1, opacity: 0.6 }}
                                animate={{
                                  scale: [1, 1.1, 1],
                                  opacity: [0.6, 0.2, 0.6],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                style={{ transformOrigin: "center" }}
                              />
                            )}

                            {/* Overlay for Active State */}
                            {isActive && (
                              <motion.path
                                d={blobPath.path}
                                fill="rgba(99, 102, 241, 0.2)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                          </g>
                        </svg>

                        {/* Name Tooltip on Hover */}
                        <motion.div
                          className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none shadow-lg"
                          whileHover={{ opacity: 1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {person.name}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 -mt-1"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            {/* Decorative Elements */}
            {/* <motion.div
              variants={fadeInUp(1)}
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"
            /> */}
            {/* <motion.div
              variants={fadeInUp(1.2)}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-2xl"
            /> */}
          </div>
          {/* swiper */}
          <div className="flex-1 lg:flex-2 ">
            {/* text */}
            <div className="text-[10px] uppercase font-semibold text-light-text tracking-[1px]  dark:text-white text-left">
              WHAT PEOPLE SAY ABOUT ME
            </div>
            <h2 className="mb-6 text-5xl font-bold text-left text-primary xl:mb-24">
              Testimonial
            </h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              className="xl:max-w-3xl md:max-w-md"
              onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {reviewData.map((person, index) => {
                const initial = person.name.split(" ")[0][0];
                return (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-tertiary/40 dark:secondary/40 p-6 xl:p-10 mx-auto min-h-[500px]  ">
                        <CardDescription className="mb-2 text-xl font-light text-muted-foreground">
                          <span className="font-mono text-4xl font-bold">
                            "
                          </span>
                          {person.comment}
                          <span className="font-mono text-3xl font-bold">
                            "
                          </span>
                        </CardDescription>
                        <CardFooter className="w-[100px] h-[2px] bg-primary p-[2px] rounded-full"></CardFooter>
                        <CardHeader className="mt-4 -ml-4">
                          <div className="flex items-center gap-x-2">
                            <div className="flex-2">
                              <div className="text-lg font-semibold text-light-muted dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-[12px] capitalize font-semibold text-light-secondary tracking-[1px]  dark:text-white">
                                {person.title}
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Review;
