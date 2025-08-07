"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  textReveal,
  slideInLeft,
  scaleIn,
  floatIn,
} from "@/lib/motionVariants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const projectData = [
  {
    image: "/work/1.png",
    category: "React.js",
    name: "Nexa Website",
    description:
      "A sleek and modern web solution built with React.js, designed for high performance and seamless user interaction across all devices.",
    link: "/",
    github: "/",
    year: "2024",
    tech: ["React", "Tailwind", "Framer Motion"],
    status: "Featured",
  },
  {
    image: "/work/2.png",
    category: "React.js",
    name: "Solstice Website",
    description:
      "A visually immersive React.js interface tailored for creative professionals, blending bold design with smooth functionality.",
    link: "/",
    github: "/",
    year: "2024",
    tech: ["React", "SCSS", "GSAP"],
    status: "Popular",
  },
  {
    image: "/work/3.png",
    category: "Next.js",
    name: "Lumina Website",
    description:
      "A blazing-fast static site powered by Next.js, crafted to showcase portfolios with elegance, responsiveness, and SEO in mind.",
    link: "/",
    github: "/",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    status: "Latest",
  },
  {
    image: "/work/4.png",
    category: "Next.js",
    name: "Evolve Website",
    description:
      "A progressive web platform developed with Next.js, emphasizing clean architecture and dynamic content rendering.",
    link: "/",
    github: "/",
    year: "2023",
    tech: ["Next.js", "Prisma", "tRPC"],
    status: "Enterprise",
  },
  {
    image: "/work/1.png",
    category: "Next.js",
    name: "Ignite Website",
    description:
      "An engaging and conversion-optimized landing page built with Next.js, ideal for startups and digital campaigns.",
    link: "/",
    github: "/",
    year: "2023",
    tech: ["Next.js", "Sanity", "Stripe"],
    status: "Commercial",
  },
  {
    image: "/work/2.png",
    category: "Full Stack",
    name: "Envision Website",
    description:
      "A beautifully crafted business site using Next.js, combining modern UI components with blazing performance and accessibility.",
    link: "/",
    github: "/",
    year: "2023",
    tech: ["Next.js", "MongoDB", "Auth0"],
    status: "Complex",
  },
];

const Work = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // CSS-based animation is more reliable
    const style = document.createElement("style");
    style.textContent = `
        @keyframes scroll-river {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .river-scroll {
          animation: scroll-river 40s linear infinite;
        }
        
        .river-scroll.paused {
          animation-play-state: paused;
        }
      `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <section id="mywork" className="py-6 md:py-12 xl:py-12 scroll-mt-20">
      <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-start">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full max-w-[400px] text-center xl:text-left mb-8 xl:mb-0"
        >
          <motion.div variants={slideInLeft(0.2)} className="">
            <motion.div
              variants={fadeInUp(0.2)}
              className="text-[12px]  lg:text-sm font-semibold tracking-wider  uppercase"
            >
              Projects I’ve Designed & Built
            </motion.div>
            <motion.h2
              variants={textReveal(0.1)}
              className="mb-4 text-4xl font-bold md:text-5xl "
            >
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio{" "}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInUp(0.4)}
              className="mb-6 text-lg text-muted"
            >
              A curated collection of projects showcasing modern web
              development, creative design, and technical excellence.
            </motion.p>
            <motion.div variants={floatIn(0.5)}>
              <Link href="/work">
                <Button className="text-white transition-all duration-300 shadow-xl group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl">
                  {/* <Sparkles size={18} className="mr-2" /> */}
                  View All Projects
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* swiper */}
        <div className="w-full xl:max-w-[1100px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,blue_10%,blue_90%,transparent)]">
          <Swiper
            className="min-h-[520px]"
            slidesPerView="auto"
            spaceBetween={24}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            modules={[Autoplay]}
            allowTouchMove={false}
          >
            {projectData.slice(0, 8).map((project, index) => (
              <SwiperSlide
                key={index}
                className="!w-72 md:!w-80 flex-shrink-0 " // force fixed width slides
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group h-auto"
                >
                  <ProjectCard
                    project={{
                      ...project,
                      image: `${prefix}${project.image}`,
                    }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
