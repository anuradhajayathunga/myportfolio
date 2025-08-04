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
import BlurBlob from "./ui/BlurBlob";
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const badgesData = [
  {
    id: 1,
    containerStyles: "absolute top-[24%] -left-[2rem] animate-float1",
    icon: <RiBriefcase4Fill className="text-black dark:text-white " />,
    endCountNum: 5,
    endCountText: "+",
    badgeText: "Years of Experience",
  },
  {
    id: 2,
    containerStyles: "absolute top-[80%] -left-[1rem] animate-float2",
    icon: <RiTodoFill className="text-green-500" />,
    endCountNum: 25,
    endCountText: "+",
    badgeText: "Project Completed",
  },
  {
    id: 3,
    containerStyles: "absolute top-[55%] -right-[1rem] animate-float3",
    icon: <RiTeamFill className="text-blue-600" />,
    endCountNum: 100,
    endCountText: "+",
    badgeText: "Happy Clients",
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative xl:min-h-screen py-6  lg:py-12   xl:py-24  scroll-mt-20 ">
      {/* bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none" */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-x-12 mb-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col  justify-center xl:mx-auto  lg:text-left  ">
            <div className="text-sm  font-semibold mb-0 text-black tracking-[0px] dark:text-white ">
              Hello, I'm a
            </div>
            <h1 className="mb-4 text-6xl font-black capitalize sm:text-8xl lg:text-7xl">
              frontend web{" "}
              <span className="font-black underline text-light-primary dark:text-dark-primary">
                developer
              </span>
            </h1>
            <p className="subtitle max-w-xl mx-auto xl:mx-0">
              I'm Anuradha Jayathunga, a frontend web developer from Colombo,
              Sri Lanka, with 4 years of experience as a freelancer.
            </p>
            {/* button */}
            <div className="flex flex-col mx-auto mb-6 gap-y-3 md:flex-row gap-x-3 xl:mx-0">
              <Link href="/contact">
                <Button className="gap-2 ">
                  CONTACT ME
                  <Send size={18} className="ml-1" />
                </Button>
              </Link>
            </div>
            {/* social */}
            <Socials
              containerStyles="flex justify-start items-center gap-x-4 mx-auto xl:mx-0"
              iconsStyles=" text-foreground text-[30px] hover:scale-110 transition-all "
            />
            {/* image */}
            <div className="mt-10 lg:hidden">
              {/* {badgesData.map((badge) => (
                <Badge
                  key={badge.id}
                  containerStyles={badge.containerStyles}
                  icon={badge.icon}
                  endCountNum={badge.endCountNum}
                  badgeText={badge.badgeText}
                />
              ))}
              <div className="absolute -z-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] blur-[100px] opacity-60 bg-gradient-to-br from-primary via-accent2 to-accent3 dark:from-secondary dark:via-accent2 dark:to-accent3 rounded-full -top-10 -right-10 animate-pulse" />

              <DevImg
                containerStyles=" w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-no-repeat relative bg-bottom"
                lightbg={`${prefix}/hero/shape-1.svg`}
                bg={`${prefix}/hero/shape-1-dark.svg`}
                imgSrc={`${prefix}/hero/developer.png`}
              /> */}
              {/* Responsive Dev Section */}
              
            </div>
          </div>
          {/* image */}
          <div className="relative hidden lg:flex xl:mx-auto ">
            {/* Blurred Gradient Background */}
            {/* <div className="absolute -z-10 w-[320px] h-[320px] md:w-[420px] md:h-[420px] blur-[100px] opacity-60 bg-gradient-to-br from-primary via-accent2 to-accent3 dark:from-secondary dark:via-accent2 dark:to-accent3 rounded-full -top-10 -right-10 animate-pulse" /> */}
            <BlurBlob
              variant="primary"
              position="top-left"
              size={600}
              animated={false}
            />
            {/* Dev Image */}
            <DevImg
              containerStyles="w-[260px] h-[260px] md:w-[510px] md:h-[462px] xl:w-[600px] xl:h-[500px] drop-shadow-2xl"
              lightbg={`${prefix}/hero/shape-1.svg`}
              bg={`${prefix}/hero/shape-1-dark.svg`}
              imgSrc={`${prefix}/hero/developer.png`}
            />

            {/* Floating Badges */}
            {badgesData.map((badge) => (
              <Badge
                key={badge.id}
                containerStyles={badge.containerStyles}
                icon={badge.icon}
                endCountNum={badge.endCountNum}
                badgeText={badge.badgeText}
              />
            ))}
          </div>
        </div>
        {/* icons */}
        <a
          href="/#about" 
          className="absolute  duration-1000 ease-in-out  cursor-pointer md:flex left-1/2 bottom-24 animate-bounce"
        >
          <RiArrowDownSLine className="hidden p-2 text-6xl rounded-full xl:block text-zinc-50 dark:text-zinc-950 bg-zinc-950 dark:bg-zinc-100 backdrop-blur-lg" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
