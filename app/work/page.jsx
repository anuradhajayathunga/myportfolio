"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
// console.log(uniqueCategories);
const Project = () => {
  const [activeTabs, setActiveTabs] = useState(uniqueCategories);
  const [activeTab, setActiveTab] = useState("all projects");

  const filterProject = projectData.filter((project) => {
    return activeTab === "all projects"
      ? project
      : project.category === activeTab;
  });
  console.log(filterProject);
  return (
    <section className="mb-12 xl:py-24 min-h-full">
      <div className="container mx-auto">
        {/* text */}
        <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-2">
          <div className="text-[10px] uppercase font-semibold text-black tracking-[1px]  dark:text-white "></div>
          <h2 className="text-5xl font-bold text-primary mb-4 xl:mb-4 ">
            My Projects
          </h2>
        </div>
        {/* tabs */}
        <Tabs defaultValue={activeTab} className="mb-24">
          <TabsList className="w-full h-full grid  xl:grid-cols-4 xl:max-w-[640px] mx-auto xl:border dark:border-none dark:bg-none">
            {activeTabs.map((activeTab, index) => {
              return (
                <TabsTrigger
                  className="capitalize"
                  onClick={() => setActiveTab(activeTab)}
                  value={activeTab}
                  key={index}
                >
                  {activeTab}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterProject.map((project, index) => {
              return (
                <TabsContent value={activeTab} key={index}>
                  <ProjectCard
                    project={{ ...project, image: `${prefix}${project.image}` }}
                  />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};
export default Project;
