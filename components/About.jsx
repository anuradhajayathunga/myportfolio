"use client";
import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailOpen,
  HomeIcon,
  PhoneCall,
  GraduationCapIcon,
  Calendar,
  Briefcase,
  University,
  Send,
  Download,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import BlurBlob from "./ui/BlurBlob";
import { useTheme } from "next-themes";
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const infoData = [
  // {
  //   icon: <User2 className="text-primary" size={20} />, // Tomato color
  //   text: "Anuradha Jayathunga",
  // },
  // {
  //   icon: <PhoneCall className="text-primary" size={20} />, // Lime Green color
  //   text: "+94 759 089 188",
  // },
  {
    icon: (
      <MailOpen
        className="text-light-secondary dark:text-dark-secondary"
        size={16}
      />
    ), // Steel Blue color
    text: "ishiwaraanuradha@gmail.com",
  },

  // {
  //   icon: <Calendar className="text-primary" size={20} />, // Orange color
  //   text: "Born Dec, 2000",
  // },
  // {
  //   icon: <GraduationCapIcon className="text-primary" size={20} />, // Purple color
  //   text: "Software Engineer",
  // },
  // {
  //   icon: <HomeIcon className="text-primary" size={20} />, // Saddle Brown color
  //   text: "No:32 Malwattagame, Kurunduwatta",
  // },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        Uni: "SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY (SLIIT)",
        Degree: "BSc (Hons) in Information Technology",
        Year: "2022-To Date",
      },
      {
        Uni: "Coursera",
        Degree: "Meta Front-End Developer Professional Certificate",
        Year: "2024",
      },
      // {
      //   Uni: "SLIIT",
      //   Degree: "Bachelor of Computer Science",
      //   Year: "2022-2026",
      // },
    ],
  },
  {
    title: "experience",
    data: [
      {
        Company: "Upwork.com",
        role: "Frontend Developer",
        Year: "2023 - Present",
      },
      {
        Company: "Freelancer.com",
        role: "Graphic Designer",
        Year: "2021 - Present",
      },
      {
        Company: "Fiverr.com",
        role: "Graphic Designer",
        Year: "2021 - Present",
      },
    ],
  },
];

const SkillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML/CSS",
        Percentage: "90%",
      },
      {
        name: "React.js",
        // Percentage: '90%',
      },
      {
        name: "Node.js",
        // Percentage: '90%',
      },
      {
        name: "Figma",
        // Percentage: '90%',
      },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: `${prefix}/about/vscode.svg` },
      { imgPath: `${prefix}/about/notion.svg` },
      { imgPath: `${prefix}/about/figma.svg` },
      { imgPath: `${prefix}/about/adobephotoshop.svg` },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  const { theme } = useTheme();
  return (
    <section id="about" className=" py-6 lg:py-12   xl:py-16 scroll-mt-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center xl:text-left">
            <div className="text-[10px] uppercase font-semibold text-black tracking-[1px] dark:text-white">
              LET ME INTRODUCE MYSELF
            </div>
            <h2 className="mb-8 text-5xl font-bold text-primary xl:mb-16">
              About me
            </h2>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative flex-1 hidden xl:flex">
            {/* Blurred SVG shape */}
            <BlurBlob
              variant="primary"
              position="top-right"
              size={600}
              animated={false}
            />

            {/* Developer image */}
            <DevImg
              containerStyles=" w-[505px] h-[505px] bg-no-repeat relative"
              lightbg={`${prefix}/about/shape-light.svg`}
              bg={`${prefix}/about/shape-dark.svg`}
              imgSrc={`${prefix}/about/developer.png`}
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[600px] xl:border dark:border-none dark:bg-none">
                <TabsTrigger
                  className="text-center xl:text-left "
                  value="personal"
                >
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="text-center xl:text-left "
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  className="text-center xl:text-left "
                  value="skills"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              <div className="mt-12 text-lg xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-left xl:text-left xl:max-w-[600px]">
                    {/* <h3 className="mb-2 h3 ">
                      A story of hardcore and perseverance
                    </h3> */}
                    {/* <p className="mb-2 text-lg font-light text-light-text dark:text-dark-muted ">
                      Hi I'm Anuradha Jayathunga, a passionate UI/UX designer
                      based in the Sri Lanka.Welcome to portfolio world.Brief
                      description with insights into myself, my vocational
                      journey, and what I engage in professionally.
                    </p> */}
                    <p className="mb-2 font-light text-md text-light-text dark:text-dark-muted ">
                      Hello!
                      <span className="font-semibold text-md dark:text-zinc-300">
                        {" "}
                        I'm Anuradha
                      </span>{" "}
                      a passionate web developer with a keen eye for detail and
                      a love for creating beautiful, functional websites. With a
                      background in both design and development, I strive to{" "}
                      <span className="font-semibold text-md dark:text-zinc-300">
                        build user-friendly interfaces
                      </span>{" "}
                      that not only look great but also provide an exceptional
                      user experience.
                    </p>
                    <p className="mt-4 mb-6 font-light text-md text-light-text dark:text-dark-muted">
                      My journey in web development has equipped me with a
                      diverse set of skills, including{" "}
                      <span className="font-semibold text-md dark:text-zinc-300">
                        HTML, CSS, JavaScript, and various frameworks
                      </span>
                      . I enjoy tackling challenges and continuously learning
                      new technologies to stay ahead in this ever-evolving
                      field.
                    </p>
                    <h3 className="mb-1 h4 ">Contact</h3>
                    <p className="mb-3 font-light text-light-text dark:text-dark-muted text-md ">
                      Do you fancy saying hi to me or you want to get started
                      with your project and you need my help?{" "}
                      <span className="font-semibold ">
                        Feel free to contact me.
                      </span>
                    </p>
                    {/* icons */}
                    <div className="mb-4">
                      {infoData.map((item, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <div className="flex-shrink-0">{item.icon}</div>
                          <div className="ml-2">
                            <div className="text-[16px] tracking-wide font-normal text-light-secondary dark:text-dark-secondary">
                              {item.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-y-5 md:flex-row gap-x-6 xl:mx-0 ">
                      <Link
                        className="text-center xl:text-left"
                        href="/contact"
                      >
                        <Button variant="" className="w-full gap-2">
                          HIRE ME
                          <Send size={16} className="ml-1" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="gap-2">
                        <a href={`${prefix}/about/Anuradha's  cv.pdf`} download>
                          DOWNLOAD CV
                        </a>
                        <Download size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div className="">
                    <h3 className="mb-8 text-center h3 xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* ex & ed */}
                    <div className="grid mb-8 md:grid-cols-2 gap-y-8">
                      {/* ex */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item, index) => {
                              const { Company, role, Year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-sm bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-1000"></div>
                                  </div>
                                  <div>
                                    <div className="mb-1 text-base font-medium">
                                      {Year}
                                    </div>
                                    <div className="mb-2 text-lg font-semibold leading-none">
                                      {Company}
                                    </div>
                                    <div className="mb-4 text-sm leading-none text-mute-foreground">
                                      {role}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* ed */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCapIcon size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => {
                              const { Uni, Degree, Year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-sm bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-1000"></div>
                                  </div>
                                  <div>
                                    <div className="mb-1 text-base font-medium">
                                      {Year}
                                    </div>
                                    <div className="mb-2 text-lg font-semibold leading-none">
                                      {Uni}
                                    </div>
                                    <div className="mb-4 text-sm leading-none text-mute-foreground">
                                      {Degree}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="font-medium text-center h4 text-primary ">
                        Languages
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="text-center text-sm tracking-[1px] text-muted-foreground">
                        English,Sinhala,Tamil
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8 h3 ">Tools I use everyday</h3>
                    <div>
                      <h4 className="mb-2 font-bold h4">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skills list */}
                      <div className="flex flex-col gap-2 mb-8 md:flex-row md:gap-8">
                        {getData(SkillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="mx-auto mb-2 text-center xl:mx-2"
                                key={index}
                              >
                                {/* <div className="flex-shrink-0">{icon}</div> */}
                                <div className="font-semibold text-zinc-500">
                                  <div className="">{name}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      {/* languages */}
                      {/* <div className="flex flex-col gap-y-2">
                      <div className="text-primary text-[22px]capitalize font-medium text-center">Languages</div>
                      <div className="border-b border-border"></div>
                      <div className="text-center text-sm tracking-[1px] text-muted-foreground">English,Sinhala,Tamil</div>
                    </div> */}
                      {/* tools */}
                      <div>
                        <h4 className="mb-2 font-bold h4">Tools</h4>
                        <div className="mb-4 border-b border-border"></div>
                        {/* tools list */}
                        <div className="flex justify-center gap-x-8 xl:justify-start">
                          {getData(SkillData, "tools").data.map(
                            (item, index) => {
                              const { imgPath } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex items-center justify-center p-2 rounded-full dark:bg-white/90 dark:backdrop-blur-lg"
                                >
                                  <Image
                                    src={imgPath}
                                    alt=""
                                    width={48}
                                    height={48}
                                    className="w-12"
                                  />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
