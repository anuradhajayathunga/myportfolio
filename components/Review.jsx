"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Card,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import DevImg from "./DevImg";
import Image from "next/image";
import { useState } from "react";
import BlurBlob from "./ui/BlurBlob";
import { useTheme } from "next-themes";
import { staggerContainer } from "@/lib/motionVariants";
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const reviewData = [
  {
    avatar: `${prefix}/reviews/avatar-1.png`,
    name: "Sarah M. ",
    title: " Startup Founder",
    comment:
      "Exceptional work! Anuradha completely transformed our mobile app interface. The user flow is now seamless and our beta testers are giving amazing feedback. They understood our vision perfectly and delivered beyond expectations. Communication was excellent throughout the project. Highly recommend!",
    date: "date",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-2.png`,
    name: "Michael T",
    title: "Business Owner",
    comment:
      "Outstanding designer! Anuradha created a beautiful and functional e-commerce site that increased our conversion rate by 35% within the first month. Their attention to detail and understanding of user psychology is impressive. Professional, timely, and easy to work with. Will definitely hire again!",
    date: "date",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-3.png`,
    name: "Jennifer L.",
    title: "Product Manager",
    comment:
      "Incredible UX work! Anuradha took our complex data dashboard and made it intuitive and user-friendly. The wireframes were thorough, the design system is perfect, and the final product exceeded our expectations. Our users love the new interface. Top-notch professional!",
    date: "date",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-4.png`,
    name: "Lisa K. ",
    title: " Tech Entrepreneur",
    comment:
      "Fantastic experience! Jayathunga created detailed wireframes and an interactive prototype for our mobile app. Their user research insights were valuable and helped us avoid potential usability issues. Fast delivery, great communication, and professional quality work. Thank you!",
    date: "date",
    rating: 5,
  },
  {
    avatar: `${prefix}/reviews/avatar-5.png`,
    name: "Amanda S.",
    title: " Marketing Manager",
    comment:
      "Solid work! Jayathunga created multiple landing page designs that captured our brand well. The conversion-focused approach was exactly what we needed. Delivered on time and within budget. Professional and reliable freelancer.",
    date: "date",
    rating: 4,
  },

  {
    avatar: "reviews/avatar-6.png",
    name: "Jennifer L.",
    title: "Product Manager",
    comment:
      "Incredible UX work! Jayathunga took our complex data dashboard and made it intuitive and user-friendly. The wireframes were thorough, the design system is perfect, and the final product exceeded our expectations. Our users love the new interface. Top-notch professional!",
    date: "date",
    rating: 5,
  },
];
{
  /* Floating avatars around the image */
}
const positions = [
  "top-0 left-1/2 -translate-x-1/2", // Top center
  "top-1/4 right-20 -translate-y-1/2", // Right mid-top
  "bottom-1/4 right-20 translate-y-1/2", // Right mid-bottom
  "bottom-0 left-1/2 translate-x-[-50%]", // Bottom center
  "bottom-1/4 left-0 translate-y-1/2", // Left mid-bottom
  "top-1/4 left-0 -translate-y-1/2", // Left mid-top
];
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
      className="relative  xl:py-24 scroll-mt-20 "
    >
      <div className="container max-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* image */}
          <div className="hidden lg:flex flex-1 relative">
            <BlurBlob
              variant="primary"
              position="top-left"
              size={600}
              animated={true}
            />
            <DevImg
              containerStyles=" w-[505px] h-[505px] bg-no-repeat relative"
              lightbg={`${prefix}/about/shape-light.svg`}
              bg={`${prefix}/about/shape-dark.svg`}
              imgSrc={`${prefix}/reviews/developer.png`}
            />
            {/* Floating avatars around image */}
            {reviewData.slice(0, positions.length).map((person, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={index}
                  className={`absolute ${
                    positions[index]
                  } w-14 h-14 rounded-full overflow-hidden border-2 shadow-lg
        ${isActive ? "ring-2 ring-light-primary dark:bg-dark-primary" : ""}
        border-white dark:border-dark-muted`}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }} //scale: 1, opacity: 1,
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.2, // stagger animation
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              );
            })}
          </div>
          {/* swiper */}
          <div className="flex-2">
            {/* text */}
            <div className="text-[10px] uppercase font-semibold text-light-text tracking-[1px]  dark:text-white text-left">
              WHAT PEOPLE SAY ABOUT ME
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6 xl:mb-24  text-left">
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
                      <Card className="bg-tertiary/40 dark:secondary/40 p-6 xl:p-10 mx-auto min-h-[100px]  ">
                        <CardDescription className="text-muted-foreground  text-xl mb-2 font-light">
                          <span className="font-bold text-4xl font-mono">
                            "
                          </span>
                          {person.comment}
                          <span className="font-bold text-3xl font-mono">
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
