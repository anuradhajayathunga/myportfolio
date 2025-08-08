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
  fadeIn,
} from "@/lib/motionVariants";
import { BsChatQuoteFill } from "react-icons/bs";
import { useIsMobile } from "../hooks/useIsMobile";
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const positions = [
  {
    position: { base: "top-24 left-2 ", md: "top-32 left-8" },
    size: { base: 72, md: 80 },
    scale: 1.1,
    delay: 0.1,
  },
  {
    position: { base: "top-8 right-12", md: "top-12 right-12" },
    size: { base: 48, md: 60 },
    scale: 0.9,
    delay: 0.2,
  },
  {
    position: { base: "top-4 left-8", md: "top-4 left-16 -z-20" },
    size: { base: 40, md: 56 },
    scale: 1.0,
    delay: 0.4,
  },
  {
    position: { base: "top-36 right-4", md: "top-48 right-8" },
    size: { base: 56, md: 72 },
    scale: 1.1,
    delay: 0.6,
  },
  {
    position: {
      base: "-top-10 right-1/2 -z-20",
      md: "-top-10 left-1/2 -translate-x-1/2 -z-20",
    },
    size: { base: 56, md: 72 },
    scale: 0.9,
    delay: 0.8,
  },
  {
    position: { base: "top-64 right-13", md: "top-72 right-24 -z-20" },
    size: { base: 36, md: 48 },
    scale: 1.0,
    delay: 1.0,
  },
];

const reviewData = [
  {
    avatar: `${prefix}/reviews/avatar-5.png`,
    name: "Sarah M.",
    title: "Startup Founder",
    company: "TechFlow Solutions",
    comment:
      "Exceptional work! Anuradha completely transformed our mobile app interface. The user flow is now seamless and our beta testers are giving amazing feedback. They understood our vision perfectly and delivered beyond expectations.",
    date: "March 2024",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-6.png`,
    name: "Michael T.",
    title: "Business Owner",
    company: "Digital Commerce Co.",
    comment:
      "Outstanding designer! Anuradha created a beautiful and functional e-commerce site that increased our conversion rate by 35% within the first month. Their attention to detail and understanding of user psychology is impressive.",
    date: "February 2024",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-4.png`,
    name: "Jennifer L.",
    title: "Product Manager",
    company: "DataVision Analytics",
    comment:
      "Incredible UX work! Anuradha took our complex data dashboard and made it intuitive and user-friendly. The wireframes were thorough, the design system is perfect, and the final product exceeded our expectations.",
    date: "January 2024",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-3.png`,
    name: "Lisa K.",
    title: "Tech Entrepreneur",
    company: "InnovateHub",
    comment:
      "Fantastic experience! Jayathunga created detailed wireframes and an interactive prototype for our mobile app. Their user research insights were valuable and helped us avoid potential usability issues.",
    date: "December 2023",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-1.png`,
    name: "Amanda S.",
    title: "Marketing Manager",
    company: "GrowthMetrics",
    comment:
      "Solid work! Jayathunga created multiple landing page designs that captured our brand well. The conversion-focused approach was exactly what we needed. Delivered on time and within budget.",
    date: "November 2023",
    rating: 4,
  },
  {
    avatar: `${prefix}/reviews/avatar-2.png`,
    name: "Robert K.",
    title: "CTO",
    company: "TechInnovate",
    comment:
      "Professional and reliable! The design system they created has become the foundation of our entire product suite. Clean, scalable, and perfectly documented. Highly recommended for any serious project.",
    date: "October 2023",
    rating: 5,
  },
];

const blobShapes = [
  // {
  //   viewBox: "0 0 505 505",
  //   path: "M414.573 43.0779C455.283 71.8338 484.948 116.39 497.571 164.106C509.879 212.137 505.461 263.329 494.731 317.365C483.686 371.401 466.013 427.965 427.827 462.093C389.642 496.537 330.312 508.545 274.454 504.121C218.595 499.697 165.893 478.525 125.814 445.029C85.4189 411.217 57.6476 364.765 33.9788 312.309C10.31 259.853 -9.25622 201.077 4.62947 151.466C18.1996 101.538 64.906 60.7738 114.768 34.8619C164.946 9.26592 217.964 -1.16205 270.351 0.101943C322.738 1.36594 374.178 14.3219 414.573 43.0779Z",
  // },
  // {
  //   viewBox: "0 0 505 505",
  //   path: "M304.32 452.526C235.082 490.701 145.401 505.671 89.759 470.553C34.2055 435.103 13.0224 349.654 4.57418 269.744C-3.96273 190.165 0.235096 116.126 38.4741 68.9353C76.8018 21.4138 149.679 0.168287 225.796 0C301.493 0.073637 380.607 20.5629 422.153 72.4682C463.611 124.704 467.59 208.026 445.016 280.332C422.685 353.059 373.559 414.35 304.32 452.526Z",
  // },

  {
    viewBox: "0 0 213 197",
    path: "  M187.72 169.75C158.2 200.02 116.58 196.61 111.02 196.07C68.96 191.95 44.61 160.48 27.89 138.87C13.1 119.75 -2.50001 99.5999 0.539988 73.1499C3.70999 45.4899 25.25 28.3499 33.22 21.9899C77.84 -13.5501 136.06 4.75992 139.8 5.99992C149.8 9.31992 176.36 18.1399 194.51 44.3699C218.83 79.5099 220.94 135.69 187.72 169.75Z",
  },
  {
    viewBox: "0 0 509 462",
    path: "M430.684 91.8476C485.587 148.958 523.332 231.872 503.773 294.831C483.871 357.79 406.664 400.451 331.516 429.351C256.711 458.25 183.965 473.388 128.376 448.617C72.4443 423.846 32.983 358.822 13.0808 285.198C-6.47826 211.917 -7.16455 130.036 32.2967 76.3658C72.1011 22.6955 151.71 -2.76337 227.544 0.332983C303.722 3.08531 375.781 34.7369 430.684 91.8476Z",
  },
  // {
  //   viewBox: "0 0 480 480",
  //   path: "M381,322.5Q294,405,193,376.5Q92,348,76.5,229Q61,110,186,65.5Q311,21,389.5,130.5Q468,240,381,322.5Z",
  // },
];
// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 ">
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
  const isMobile = useIsMobile();
  return (
    <motion.section
      id="review"
      variants={staggerContainer}
      className="relative py-20 xl:py-32 scroll-mt-20 "
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10" /> */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 xl:gap-20 items-center ">
          {/* Left Side - Image with Floating Avatars */}
          <motion.div
            variants={slideInLeft()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="relative flex-1 flex justify-center lg:justify-start max-w-lg "
          >
            <motion.div className=""></motion.div>
            {/* Enhanced Background Blur */}
            <div className="relative hidden md:block">
              <BlurBlob
                variant="primary"
                position="top-left"
                size={500}
                animated
              />
            </div>

            {/* Main Developer Image */}
            <motion.div variants={scaleIn(0.1)} className="relative  ">
              <DevImg
                containerStyles="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]"
                lightbg={`${prefix}/about/shape-light.svg`}
                bg={`${prefix}/about/shape-dark.svg`}
                imgSrc={`${prefix}/reviews/developer.png`}
              />
            </motion.div>

            {/* Enhanced Floating Avatars in Blob Shapes */}
            <AnimatePresence>
              {reviewData.slice(0, positions.length).map((person, index) => {
                const isActive = index === activeIndex;
                const pos = positions[index];
                const positionClass = isMobile
                  ? pos.position.base
                  : pos.position.md;
                const size = isMobile ? pos.size.base : pos.size.md;
                const blobShape = blobShapes[index % blobShapes.length];

                return (
                  <motion.div
                    key={`${person.name}-${index}`}
                    className={`absolute ${positionClass} ${
                      index > 6 ? "hidden md:block " : ""
                    }`}
                    variants={floatIn(pos.delay)}
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
                      style={{ width: size, height: size }}
                      animate={{
                        y: [0, -8, 0],
                        scale: isActive ? pos.scale * 1.1 : pos.scale,
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: index * 0.5,
                          ease: "easeInOut",
                        },
                        scale: { duration: 0.4, ease: "easeOut" },
                      }}
                    >
                      <div className="relative w-full h-full">
                        <svg
                          viewBox={blobShape.viewBox}
                          className="absolute inset-0 w-full h-full drop-shadow-2xl"
                        >
                          <defs>
                            <clipPath id={`blob-clip-${index}`}>
                              <path d={blobShape.path} />
                            </clipPath>
                            <linearGradient
                              id={`blob-gradient-${index}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor={
                                  isActive
                                    ? "rgba(99, 102, 241, 0.3)"
                                    : "rgba(147, 197, 253, 0.2)"
                                }
                              />
                              <stop
                                offset="100%"
                                stopColor={
                                  isActive
                                    ? "rgba(168, 85, 247, 0.3)"
                                    : "rgba(196, 181, 253, 0.2)"
                                }
                              />
                            </linearGradient>
                          </defs>

                          <path
                            d={blobShape.path}
                            fill={`url(#blob-gradient-${index})`}
                            className="transition-all duration-300"
                          />

                          <image
                            href={person.avatar}
                            width="459"
                            height="491"
                            clipPath={`url(#blob-clip-${index})`}
                            preserveAspectRatio="xMidYMid slice"
                            className="object-cover w-full h-full"
                          />

                          {isActive && (
                            <motion.path
                              d={blobShape.path}
                              fill="none"
                              stroke="rgb(99, 102, 241)"
                              strokeWidth="4"
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                          )}
                        </svg>

                        <div
                          className="absolute inset-2 overflow-hidden"
                          style={{ clipPath: `url(#blob-clip-${index})` }}
                        >
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 z-30 bg-gradient-to-br from-primary/30 via-transparent to-secondary/20"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </div>

                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            transition={{ duration: 0.4 }}
                            style={{ clipPath: `url(#blob-clip-${index})` }}
                          />
                        )}

                        <motion.div
                          className={`absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-xs text-center font-medium backdrop-blur-md border transition-all duration-300 ${
                            isActive
                              ? "bg-white/20 border-blue-200 text-foreground shadow-lg"
                              : "bg-white/20 border-slate-200 text-slate-600 opacity-0 group-hover:opacity-100"
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 10,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {person.name}
                          {isActive && (
                            <motion.div
                              className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
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
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
            /> 
             <motion.div
              variants={fadeInUp(1.2)}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-secondary/15 to-primary/15 rounded-full blur-2xl"
            /> */}

            <motion.div
              variants={floatIn(1)}
              className="absolute -top-6 -right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-full opacity-60 blur-sm "
            />
            <motion.div
              variants={floatIn(1.2)}
              className="absolute -bottom-6 -left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-secondary to-primary rounded-full opacity-40 blur-sm"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={slideInRight()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-2 space-y-8 w-full xl:max-w-[1100px]"
          >
            {/* Section Header */}
            <div className="space-y-0 text-center lg:text-left lg:space-y-0">
              <motion.div
                variants={textReveal(0.2)}
                className="text-[12px]  lg:text-sm font-semibold tracking-wider  uppercase"
              >
                WHAT PEOPLE SAY ABOUT ME
              </motion.div>

              <motion.h2
                variants={textReveal(0.1)}
                className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Testimonial
              </motion.h2>

              {/* <motion.p
                variants={fadeInUp(0.2)}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Discover how I've helped businesses transform their digital
                presence and achieve remarkable results.
              </motion.p> */}
            </div>

            {/* Enhanced Swiper */}

            {/* Quote Icon */}
            <motion.div
              variants={fadeIn(0.5)}
              className=" p-4 "
              // whileHover={{ scale: 1.1, rotate:  180 }}
              // transition={{ duration: 0.3 }}
            >
              {/* <svg
                    className="w-20 h-20  text-primary opacity-10 rotate-180 hover:opacity-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg> */}
              <BsChatQuoteFill className="w-40  h-40 lg:w-96 lg:h-96 opacity-10 text-primary blur-sm absolute -left-20 bottom-0" />
            </motion.div>
            <motion.div variants={revealUp(0.4)}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  bulletActiveClass:
                    "swiper-pagination-bullet-active !bg-primary",
                  bulletClass:
                    "swiper-pagination-bullet !bg-gray-300 dark:!bg-gray-600",
                }}
                modules={[Pagination, Autoplay]}
                className="testimonial-swiper max-w-2xl "
                onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {reviewData.map((person, index) => (
                  <SwiperSlide key={`${person.name}-slide-${index}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Card className="group relative bg-transparent backdrop-blur-3xl border-0  transition-all duration-500 p-8 xl:p-10   ">
                        <CardDescription className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-2">
                          {person.comment}
                        </CardDescription>

                        {/* Rating */}

                        <div className="inline-flex items-center gap-2 bg-transparent rounded-full px-4 py-2 mb-2">
                          <StarRating rating={person.rating} />
                          <span className="text-sm font-semibold ">
                            {person.rating.toFixed(1)}
                          </span>
                        </div>

                        {/* Accent Line */}
                        <CardFooter className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6 p-0" />

                        {/* Author Info */}
                        <CardHeader className="p-0 space-y-1">
                          <div className="font-semibold text-lg text-gray-900 dark:text-white">
                            {person.name}
                          </div>
                          <div className="text-primary font-medium">
                            {person.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {person.company} • {person.date}
                          </div>
                        </CardHeader>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-lg pointer-events-none" />
                      </Card>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </motion.section>
  );
};

export default Review;
