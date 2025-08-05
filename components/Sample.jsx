"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Folder,
  Calendar,
  Star,
  Eye,
  Code,
  Palette,
  Zap,
  Sparkles
} from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import { 
  staggerContainer, 
  fadeInUp, 
  textReveal, 
  slideInLeft,
  scaleIn,
  floatIn
} from "@/lib/motionVariants";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const projectData = [
  {
    image: "/work/1.png",
    category: "React.js",
    name: "Nexa Website",
    description: "A sleek and modern web solution built with React.js, designed for high performance and seamless user interaction across all devices.",
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
    description: "A visually immersive React.js interface tailored for creative professionals, blending bold design with smooth functionality.",
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
    description: "A blazing-fast static site powered by Next.js, crafted to showcase portfolios with elegance, responsiveness, and SEO in mind.",
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
    description: "A progressive web platform developed with Next.js, emphasizing clean architecture and dynamic content rendering.",
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
    description: "An engaging and conversion-optimized landing page built with Next.js, ideal for startups and digital campaigns.",
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
    description: "A beautifully crafted business site using Next.js, combining modern UI components with blazing performance and accessibility.",
    link: "/",
    github: "/",
    year: "2023",
    tech: ["Next.js", "MongoDB", "Auth0"],
    status: "Complex",
  },
];

// Enhanced Project Card Component
const ModernProjectCard = ({ project, index }) => {
  const statusColors = {
    Featured: "from-yellow-500 to-orange-500",
    Popular: "from-pink-500 to-purple-500",
    Latest: "from-green-500 to-emerald-500",
    Enterprise: "from-blue-500 to-cyan-500",
    Commercial: "from-red-500 to-pink-500",
    Complex: "from-purple-500 to-indigo-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex-shrink-0 mx-4 h-300 group w-80"
    >
      <div className="relative h-auto overflow-hidden transition-all duration-500 border bg-background/30 backdrop-blur-xl rounded-2xl border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
        {/* Status Badge */}
        <div className="absolute z-20 top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${statusColors[project.status]} shadow-lg`}>
            {project.status}
          </span>
        </div>

        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <img
            src={`${prefix}${project.image}`}
            alt={project.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
            <button className="p-3 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Eye size={20} className="text-white" />
            </button>
            <button className="p-3 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <Github size={20} className="text-white" />
            </button>
            <button className="p-3 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
              <ExternalLink size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-2 py-1 text-sm font-medium rounded-lg text-primary bg-primary/10">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar size={14} />
              {project.year}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 transition-all duration-500 pointer-events-none rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-secondary/10" />
      </div>
    </motion.div>
  );
};

const Sample = () => {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // CSS-based animation is more reliable
    const style = document.createElement('style');
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
    <section
      id="mywork"
      className="relative py-16 overflow-hidden lg:py-24 xl:py-32 scroll-mt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute delay-1000 rounded-full bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 blur-3xl animate-pulse" />

      <div className="container relative z-10 mx-auto">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-start gap-12 mb-16 lg:flex-row"
        >
          {/* Left Content */}
          <motion.div 
            variants={slideInLeft(0.2)}
            className="space-y-6 lg:w-1/3"
          >
            <div>
              <motion.div
                variants={fadeInUp(0.1)}
                className="inline-flex items-center gap-2 px-4 py-2 mb-4 border rounded-full bg-primary/10 dark:bg-primary/20 border-primary/20"
              >
                <Folder size={16} className="text-primary" />
                <span className="text-sm font-medium tracking-wider uppercase text-primary">
                  My Portfolio
                </span>
              </motion.div>
              
              <motion.h2
                variants={textReveal(0.2)}
                className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl"
              >
                Featured{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  Work
                </span>
              </motion.h2>
              
              <motion.p
                variants={fadeInUp(0.3)}
                className="mb-8 text-lg text-muted-foreground"
              >
                A curated collection of projects showcasing modern web development, 
                creative design, and technical excellence.
              </motion.p>

              {/* Stats */}
              <motion.div
                variants={fadeInUp(0.4)}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="p-4 text-center border rounded-xl bg-background/50 backdrop-blur-sm border-border/50">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="p-4 text-center border rounded-xl bg-background/50 backdrop-blur-sm border-border/50">
                  <div className="text-2xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-muted-foreground">Clients</div>
                </div>
                <div className="p-4 text-center border rounded-xl bg-background/50 backdrop-blur-sm border-border/50">
                  <div className="text-2xl font-bold text-green-500">4.9</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </motion.div>

              <motion.div variants={floatIn(0.5)}>
                <Link href="/work">
                  <Button 
                    size="lg" 
                    className="text-white transition-all duration-300 shadow-xl group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl"
                  >
                    <Sparkles size={18} className="mr-2" />
                    View All Projects
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Tech Icons */}
          <motion.div 
            variants={slideInLeft(0.4)}
            className="items-center justify-end hidden gap-6 lg:w-2/3 lg:flex"
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="p-4 border rounded-2xl bg-blue-500/10 border-blue-500/20">
                  <Code size={24} className="text-blue-500" />
                </div>
                <div className="p-4 border rounded-2xl bg-purple-500/10 border-purple-500/20">
                  <Palette size={24} className="text-purple-500" />
                </div>
              </div>
              <div className="flex gap-4 ml-8">
                <div className="p-4 border rounded-2xl bg-green-500/10 border-green-500/20">
                  <Zap size={24} className="text-green-500" />
                </div>
                <div className="p-4 border rounded-2xl bg-orange-500/10 border-orange-500/20">
                  <Star size={24} className="text-orange-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* River Scroll Projects */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex gap-0 river-scroll ${isPaused ? 'paused' : ''}`}
              style={{ width: "200%" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Double the projects for seamless loop */}
              {[...projectData, ...projectData].map((project, index) => (
                <ModernProjectCard 
                  key={`${project.name}-${index}`} 
                  project={project} 
                  index={index} 
                />
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 bottom-0 left-0 z-10 w-32 pointer-events-none bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 z-10 w-32 pointer-events-none bg-gradient-to-l from-background via-background/80 to-transparent" />
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          variants={fadeInUp(0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 border rounded-2xl bg-background/60 backdrop-blur-xl border-border/50">
            <div className="text-left">
              <div className="font-semibold">Like what you see?</div>
              <div className="text-sm text-muted-foreground">Let's discuss your next project</div>
            </div>
            <Link href="/contact">
              <Button className="text-white group bg-gradient-to-r from-primary to-secondary">
                <span>Start a Project</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sample;