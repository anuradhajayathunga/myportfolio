"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "A sleek and modern web solution built with React.js, designed for high performance and seamless user interaction across all devices.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Solstice Website",
    description:
      "A visually immersive React.js interface tailored for creative professionals, blending bold design with smooth functionality.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Lumina Website",
    description:
      "A blazing-fast static site powered by Next.js, crafted to showcase portfolios with elegance, responsiveness, and SEO in mind.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Evolve Website",
    description:
      "A progressive web platform developed with Next.js, emphasizing clean architecture and dynamic content rendering.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "An engaging and conversion-optimized landing page built with Next.js, ideal for startups and digital campaigns.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Envision Website",
    description:
      "A beautifully crafted business site using Next.js, combining modern UI components with blazing performance and accessibility.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Serenity Website",
    description:
      "A full-stack wellness platform with secure backend logic and intuitive frontend design for booking and content browsing.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "fullstack",
    name: "Nova Website",
    description:
      "A comprehensive full-stack solution with user authentication, content management, and real-time interactions.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "An enterprise-grade web application integrating powerful APIs, responsive UI, and scalable architecture.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section id="mywork" className=" py-6 md:py-12 xl:py-12 scroll-mt-20 ">
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-8">
        {/* text */}
        <div className="w-full max-w-[400px] text-center xl:text-left mb-8 xl:mb-0">
          <div className="text-[10px] uppercase font-semibold text-black tracking-[1px] dark:text-white mb-2">
            Projects I’ve Designed & Built
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Portfolio
          </h2>
          {/* <p className="text-sm md:text-base text-muted mb-4">
            A showcase of ideas turned into impactful digital products.
          </p> */}
          <Link href="/work">
            <Button className="gap-2">View Project</Button>
          </Link>
        </div>

        {/* swiper */}
        <div className="w-full xl:max-w-[1100px]">
          <Swiper
            className="min-h-[460px]"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
          >
            {projectData.slice(0, 4).map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  project={{ ...project, image: `${prefix}${project.image}` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
