import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";
const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative ">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[250px] flex items-center justify-center bg-tertiary dark:bg-dark-surface/30 xl:bg-work_project_bg_light dark:xl:bg-work_project_bg_light xl:bg-[110%]xl:bg-no-repeat overflow-hidden ">
          <Image
            className="absolute bottom-0 shadow-2xl "
            src={project.image}
            width={247}
            height={250}
            alt=""
            priority
          />
          <div className="hover:bg-black">
            {/* button */}
            <div className="flex gap-x-4 ">
              <Link
                href={project.link}
                className="bg-primary w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-90 transition-all duration-600"
              >
                <Link2Icon className="text-background" />
              </Link>
              <Link
                href={project.github}
                className="bg-primary w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-90 transition-all duration-600"
              >
                <Github className="text-background" />
              </Link>
            </div>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h3 className="h4 mb-1">{project.name}</h3>
        <p className="text-muted-foreground text-md ">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
