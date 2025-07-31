import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const badgesData = [
  {
    id: 1,
    containerStyles: "absolute top-[24%] -left-[5rem]",
    icon: <RiBriefcase4Fill className="text-primary" />,
    endCountNum: 5,
    endCountText: "+",
    badgeText: "Years of Experience",
  },
  {
    id: 2,
    containerStyles: "absolute top-[80%] -left-[1rem]",
    icon: <RiTodoFill className="text-green-500" />,
    endCountNum: 25,
    endCountText: "+",
    badgeText: "Project Completed",
  },
  {
    id: 3,
    containerStyles: "absolute top-[55%] -right-20",
    icon: <RiTeamFill className="text-blue-600" />,
    endCountNum: 100,
    endCountText: "+",
    badgeText: "Happy Clients",
  },
];

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-left xl:text-left">
            <div className="text-sm font-semibold mb-0 text-black tracking-[0px] dark:text-white">
              Hello, I'm a
            </div>
            <h1 className="text-7xl mb-4 font-black capitalize">
              frontend web{" "}
              <span className="text-light-primary dark:text-dark-primary font-black underline">
                developer
              </span>
            </h1>
            <p className="subtitle max-w-[560px] mx-auto xl:mx-0">
              I'm Anuradha Jayathunga, a frontend web developer from Colombo,
              Sri Lanka, with 4 years of experience as a freelancer.
            </p>

            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-6">
              <Link href="/contact">
                <Button className="gap-2">
                  CONTACT ME
                  <Send size={18} className="ml-1" />
                </Button>
              </Link>
            </div>

            {/* social */}
            <Socials
              containerStyles="flex justify-start items-center gap-x-4 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[30px] hover:scale-110 transition-all"
            />

            {/* mobile image */}
            <div className="flex xl:hidden relative w-auto mt-10">
              {badgesData.map((badge) => (
                <Badge
                  key={badge.id}
                  containerStyles={badge.containerStyles}
                  icon={badge.icon}
                  endCountNum={badge.endCountNum}
                  badgeText={badge.badgeText}
                />
              ))}
              <div
                className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"
                style={{ backgroundImage: `url(${prefix}/shapes/shape2_light.png)` }}
              ></div>
              <DevImg
                containerStyles="bg-hero_shape1 w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc={`${prefix}/hero/developer.png`}
              />
            </div>
          </div>

          {/* desktop image */}
          <div className="hidden xl:flex relative">
            {badgesData.map((badge) => (
              <Badge
                key={badge.id}
                containerStyles={badge.containerStyles}
                icon={badge.icon}
                endCountNum={badge.endCountNum}
                badgeText={badge.badgeText}
              />
            ))}
            <div
              className="w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"
              style={{ backgroundImage: `url(${prefix}/shapes/shape2_light.png)` }}
            ></div>
            <DevImg
              containerStyles="bg-hero_shape1 w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc={`${prefix}/hero/developer.png`}
            />
          </div>
        </div>

        {/* scroll icon */}
        <a
          href="/#about"
          className="md:flex absolute left-1/2 bottom-12 xl:bottom-12 transform -translate-x-1/2 animate-bounce ease-in-out cursor-pointer"
        >
          <RiArrowDownSLine className="hidden xl:block text-6xl text-light-base bg-light-primary backdrop-blur-lg rounded-full p-2" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
