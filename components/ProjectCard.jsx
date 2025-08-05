"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Eye, Calendar } from "lucide-react";

const statusColors = {
  Featured: "from-yellow-500 to-orange-500",
  Popular: "from-pink-500 to-purple-500",
  Latest: "from-green-500 to-emerald-500",
  Enterprise: "from-blue-500 to-cyan-500",
  Commercial: "from-red-500 to-pink-500",
  Complex: "from-purple-500 to-indigo-500",
};

const ProjectCard = ({ project }) => {
  return (
    <div className="relative h-auto overflow-hidden transition-all duration-500 border group bg-background/30 backdrop-blur-xl rounded-2xl border-border/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
      {/* Status Badge */}
      <div className="absolute z-20 top-4 left-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold text-foreground bg-gradient-to-r ${
            statusColors[project.status]
          } shadow-lg`}
        >
          {project.status}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <div className="relative w-full h-[250px] flex items-center justify-center bg-tertiary  xl:bg-work_project_bg_light dark:xl:bg-work_project_bg_light xl:bg-[110%]xl:bg-no-repeat overflow-hidden" />
        <Image
          src={project.image}
          alt={project.name}
          
          fill
          className="absolute top-0 object-contain transition-transform duration-700 shadow-2xl group-hover:scale-110"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0 bg-black/30 group-hover:opacity-100">
          {project.preview && (
            <Link
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <Eye size={20} className="text-white" />
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <Github size={20} className="text-white" />
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <ExternalLink size={20} className="text-white" />
            </Link>
          )}
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
          <p className="text-sm text-muted-foreground line-clamp-4">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((tech, techIndex) => (
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
  );
};

export default ProjectCard;
