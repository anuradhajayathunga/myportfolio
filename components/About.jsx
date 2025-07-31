import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
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
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const infoData = [
  // {
  //   icon: <User2 className="text-primary" size={20} />, // Tomato color
  //   text: "Anuradha Jayathunga",
  // },
  {
    icon: <PhoneCall className="text-primary" size={20} />, // Lime Green color
    text: "+94 759 089 188",
  },
  {
    icon: <MailIcon className="text-primary" size={20} />, // Steel Blue color
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
        Uni: "SLIIT",
        Degree: "Bachelor of Computer Science",
        Year: "2022-2026",
      },
      {
        Uni: "SLIIT",
        Degree: "Bachelor of Computer Science",
        Year: "2022-2026",
      },
      {
        Uni: "SLIIT",
        Degree: "Bachelor of Computer Science",
        Year: "2022-2026",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        Company: "xyz Inc.",
        role: "Software Engineer",
        Year: "2020-2022",
      },
      {
        Company: "xyz Inc.",
        role: "Software Engineer",
        Year: "2020-2022",
      },
      {
        Company: "xyz Inc.",
        role: "Software Engineer",
        Year: "2020-2022",
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
        // Percentage: '90%',
      },
      {
        name: "Front-end Development",
        // Percentage: '90%',
      },
      {
        name: "Javascript/PHP",
        // Percentage: '90%',
      },
      {
        name: "Back-end Development",
        // Percentage: '90%',
      },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: `${prefix}/about/vscode.svg` },
      { imgPath: `${prefix}/about/wordpress.svg` },
      { imgPath: `${prefix}/about/notion.svg` },
      { imgPath: `${prefix}/about/figma.svg` },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section id="about" className="xl:h-[860px] pt-72  xl:py-24 scroll-mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className="text-center xl:text-left">
            <div className="text-[10px] uppercase font-semibold text-black tracking-[1px] dark:text-white">
              LET ME INTRODUCE MYSELF
            </div>
            <h2 className="text-5xl font-bold text-primary mb-8 xl:mb-16">
              About me
            </h2>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
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

              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-left xl:text-left xl:max-w-[600px]">
                    <h3 className="h3 mb-2 ">
                      A story of hardcore and perseverance.
                    </h3>
                    <p className="text-light-muted dark:text-dark-muted text-lg mb-2 font-light ">
                      Hi I'm Anuradha Jayathunga, a passionate UI/UX designer
                      based in the Sri Lanka.Welcome to portfolio world.Brief
                      description with insights into myself, my vocational
                      journey, and what I engage in professionally.
                    </p>
                    <h3 className="h4 mb-2 ">Contact</h3>
                    <p className="text-light-text dark:text-dark-muted  text-lg mb-3 font-light ">
                      Do you fancy saying hi to me or you want to get started
                      with your project and you need my help? Feel free to
                      contact me.
                    </p>
                    {/* icons */}
                    <div className="mb-4">
                      {infoData.map((item, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <div className="flex-shrink-0">{item.icon}</div>
                          <div className="ml-2">
                            <div className="text-md font-medium text-light-secondary dark:text-dark-secondary">
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
                        <Button className="text-left xl:text-left  gap-2">
                          HIRE ME
                          <Send size={16} className="ml-1" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="gap-2">
                        <a href="/sample-resume.pdf" download>
                          DOWNLOAD CV
                        </a>
                        <Download size={16} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <div className="">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* ex & ed */}
                    <div className="grid md:grid-cols-2 gap-y-8 mb-8">
                      {/* ex */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4 className="capitalize font-medium">
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
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {Company}
                                    </div>
                                    <div className="text-lg leading-none text-mute-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {Year}
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
                          <h4 className="capitalize font-medium">
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
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {Uni}
                                    </div>
                                    <div className="text-lg leading-none text-mute-foreground mb-4">
                                      {Degree}
                                    </div>
                                    <div className="text-base font-medium">
                                      {Year}
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
                      <div className="h4 font-medium text-center text-primary ">
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
                    <h3 className="h3 mb-8 ">Tools I use everyday.</h3>
                    <div>
                      <h4 className="h4 font-bold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skills list */}
                      <div className="mb-8">
                        {getData(SkillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0 mb-2"
                                key={index}
                              >
                                {/* <div className="flex-shrink-0">{icon}</div> */}
                                <div className="text-muted-foreground font-semibold">
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
                        <h4 className="h4 font-bold mb-2">Tools</h4>
                        <div className="border-b border-border mb-4"></div>
                        {/* tools list */}
                        <div className="flex gap-x-8 justify-center xl:justify-start">
                          {getData(SkillData, "tools").data.map(
                            (item, index) => {
                              const { imgPath } = item;
                              return (
                                <div
                                  key={index}
                                  className="bg-white rounded-full p-2"
                                >
                                  <Image
                                    src={imgPath}
                                    alt=""
                                    width={48}
                                    height={48}
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
