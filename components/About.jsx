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
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  textReveal,
  revealUp,
  floatIn,
  cardHover,
} from "@/lib/motionVariants";
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const infoData = [
  // {
  //   icon: <User2 className="text-primary" size={20} />, // Tomato color
  //   text: "Anuradha Jayathunga",
  // },
  {
    icon: <PhoneCall className="text-secondary" size={16} />, // Lime Green color
    text: "+94 743-119-199",
  },
  {
    icon: <MailOpen className="text-secondary " size={16} />, // Steel Blue color
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
      { name: "HTML/CSS", level: 95, category: "Frontend" },
      { name: "React.js", level: 90, category: "Frontend" },
      { name: "Node.js", level: 80, category: "Backend" },
      { name: "TailwindCSS", level: 95, category: "Styling" },
      { name: "Figma", level: 85, category: "Design" },
      { name: "JavaScript", level: 90, category: "Programming" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: `${prefix}/about/vscode.svg`, name: "VS Code" },
      { imgPath: `${prefix}/about/notion.svg`, name: "Notion" },
      { imgPath: `${prefix}/about/figma.svg`, name: "Figma" },
      { imgPath: `${prefix}/about/adobephotoshop.svg`, name: "Photoshop" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  const { theme } = useTheme();
  return (
    <motion.section
      id="about"
      className="py-6 lg:py-12 xl:py-16 scroll-mt-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 30% of section is visible
    >
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 bg-primary/10 blur-3xl" />
      <div className="absolute rounded-full bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 blur-3xl" /> */}
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-between">
          <motion.div
            variants={staggerContainer}
            className="text-center xl:text-left"
          >
            <motion.div
              variants={fadeInUp(0.2)}
              className="text-[10px] uppercase font-semibold tracking-[1px] "
            >
              LET ME INTRODUCE MYSELF
            </motion.div>
            <motion.h2
              variants={textReveal(0.1)}
              className="mb-8 text-5xl font-bold text-primary xl:mb-16"
            >
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {" "}
                me
              </span>
            </motion.h2>
          </motion.div>
        </div>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* image */}
          <motion.div
            variants={scaleIn(0.4)}
            className="relative flex-1 hidden lg:flex"
          >
            {/* Blurred SVG shape */}
            <BlurBlob
              variant="primary"
              position="top-right"
              size={600}
              animated={false}
            />

            {/* Developer image */}
            <DevImg
              containerStyles="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]"
              lightbg={`${prefix}/about/shape-light.svg`}
              bg={`${prefix}/about/shape-dark.svg`}
              imgSrc={`${prefix}/about/developer.png`}
            />
          </motion.div>
          {/* tabs */}
          <motion.div variants={slideInLeft(0.2)} className="flex-1">
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
                  <motion.div variants={staggerContainer}>
                    <motion.div
                      variants={fadeInUp(0.1)}
                      className="text-left xl:text-left xl:max-w-[600px]"
                    >
                      {/* <h3 className="mb-2 h3 ">
                      A story of hardcore and perseverance
                    </h3> */}
                      {/* <p className="mb-2 text-lg font-light text-light-text dark:text-dark-muted ">
                      Hi I'm Anuradha Jayathunga, a passionate UI/UX designer
                      based in the Sri Lanka.Welcome to portfolio world.Brief
                      description with insights into myself, my vocational
                      journey, and what I engage in professionally.
                    </p> */}
                      <p className="mb-2 text-lg font-light text-muted ">
                        Hello!
                        <span className="font-semibold text-md text-destructive">
                          {" "}
                          I'm Anuradha
                        </span>{" "}
                        a passionate web developer with a keen eye for detail
                        and a love for creating beautiful, functional websites.
                        With a background in both design and development, I
                        strive to{" "}
                        <span className="font-semibold text-md text-destructive">
                          build user-friendly interfaces
                        </span>{" "}
                        that not only look great but also provide an exceptional
                        user experience.
                      </p>
                      <p className="mt-4 mb-6 text-lg font-light text-muted">
                        My journey in web development has equipped me with a
                        diverse set of skills, including{" "}
                        <span className="font-semibold text-md text-destructive">
                          HTML, CSS, JavaScript, and various frameworks
                        </span>
                        . I enjoy tackling challenges and continuously learning
                        new technologies to stay ahead in this ever-evolving
                        field.
                      </p>
                      <h3 className="mb-1 h4 ">Contact</h3>
                      <p className="mb-3 font-light text-muted ">
                        Do you fancy saying hi to me or you want to get started
                        with your project and you need my help?{" "}
                        <span className="font-semibold ">
                          Feel free to contact me.
                        </span>
                      </p>
                    </motion.div>

                    {/* icons */}
                    <div className="mb-4">
                      {infoData.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp(0.1 * index)}
                          className="flex items-center mb-2"
                        >
                          <div className="flex-shrink-0">{item.icon}</div>
                          <div className="ml-2">
                            <div className="text-[16px] tracking-wide font-normal text-light-secondary dark:text-dark-secondary">
                              {item.text}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                      variants={fadeInUp(0.4)}
                      className="flex flex-col gap-4 pt-4 sm:flex-row"
                    >
                      {" "}
                      <Link
                        className="text-center xl:text-left"
                        href="/contact"
                      >
                        <Button
                          variant=""
                          className="w-full transition-all duration-300 group hover:shadow-2xl"
                        >
                          HIRE ME
                          <Send
                            size={18}
                            className="ml-2 transition-transform group-hover:translate-x-1"
                          />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="transition-all duration-300 group"
                      >
                        <a href={`${prefix}/about/Anuradha's  cv.pdf`} download>
                          DOWNLOAD CV
                        </a>
                        <Download
                          size={18}
                          className="ml-2 group-hover:animate-bounce"
                        />
                      </Button>
                    </motion.div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="qualifications">
                  <motion.div variants={staggerContainer}>
                    <motion.h3
                      variants={textReveal(0.1)}
                      className="mb-8 text-center h3 xl:text-left"
                    >
                      My Awesome Journey
                    </motion.h3>
                    {/* ex & ed */}
                    <div className="grid mb-8 md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <motion.div
                        variants={fadeInUp(0.2)}
                        className="flex flex-col gap-y-6"
                      >
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
                                <motion.div
                                  variants={fadeInUp(0.1 * index)}
                                  className="flex gap-x-8 group"
                                  key={index}
                                >
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
                                </motion.div>
                              );
                            }
                          )}
                        </div>
                      </motion.div>
                      {/* Education */}
                      <motion.div
                        variants={fadeInUp(0.3)}
                        className="flex flex-col gap-y-6"
                      >
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
                                <motion.div
                                  variants={fadeInUp(0.1 * index)}
                                  className="flex gap-x-8 group"
                                  key={index}
                                >
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
                                </motion.div>
                              );
                            }
                          )}
                        </div>
                      </motion.div>
                    </div>
                    {/* Languages */}
                    <motion.div
                      variants={fadeInUp(0.4)}
                      className="flex flex-col gap-y-2"
                    >
                      <div className="font-medium text-center h4 text-primary ">
                        Languages
                      </div>
                      <div className="border-b border-border"></div>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        {["English", "Sinhala", "Tamil"].map((lang, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 "
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="skills">
                  <motion.div
                    variants={staggerContainer}
                    className="text-center xl:text-left"
                  >
                    <motion.h3 variants={textReveal(0.1)} className="mb-8 h3 ">
                      Tools I use everyday
                    </motion.h3>
                    <div>
                      <motion.h4
                        variants={fadeInUp(0.2)}
                        className="mb-2 font-bold h4"
                      >
                        Skills
                      </motion.h4>
                      <motion.div
                        variants={fadeInUp(0.3)}
                        className="mb-4 border-b border-border"
                      ></motion.div>
                      {/* skills list */}
                      <motion.div
                        variants={fadeInUp(0.2)}
                        className="grid gap-4 sm:grid-cols-2"
                      >
                        {getData(SkillData, "skills").data.map(
                          (skill, index) => {
                            return (
                              <motion.div
                                key={index}
                                variants={fadeInUp(0.1 * index)}
                                className="p-3 transition-all duration-300 border rounded-xl bg-light-muted/10 backdrop-blur-sm border-border/10 hover:border-primary/50 group"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-medium">
                                    {skill.name}
                                  </span>
                                  <span className="text-sm font-semibold text-primary">
                                    {skill.level}%
                                  </span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-light-muted">
                                  <motion.div
                                    className="h-2 rounded-full bg-gradient-to-r from-light-primary to-light-secondary"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{
                                      duration: 1,
                                      delay: 0.1 * index,
                                    }}
                                    viewport={{ once: true }}
                                  />
                                </div>
                                <div className="mt-1 text-xs text-light-bg-light-muted-foreground">
                                  {skill.category}
                                </div>
                              </motion.div>
                            );
                          }
                        )}
                      </motion.div>
                      {/* languages */}
                      {/* <div className="flex flex-col gap-y-2">
                      <div className="text-primary text-[22px]capitalize font-medium text-center">Languages</div>
                      <div className="border-b border-border"></div>
                      <div className="text-center text-sm tracking-[1px] text-muted-foreground">English,Sinhala,Tamil</div>
                    </div> */}
                      {/* tools */}
                      <motion.div>
                        <motion.h4
                          variants={fadeInUp(0.2)}
                          className="mt-8 mb-2 font-bold h4"
                        >
                          Tools
                        </motion.h4>
                        <motion.div
                          variants={fadeInUp(0.3)}
                          className="mb-4 border-b border-border"
                        ></motion.div>
                        {/* tools list */}
                        <div className="flex justify-center gap-x-4 xl:justify-start">
                          {getData(SkillData, "tools").data.map(
                            (tool, index) => {
                              return (
                                <motion.div
                                  key={index}
                                  variants={scaleIn(0.1 * index)}
                                  whileHover={{ scale: 1.05, y: -5 }}
                                  className="p-2 text-center transition-all duration-300 border rounded-full shadow-sm bg-background dark:bg-white/90 border-border/50 hover:border-primary/50 hover:shadow-xl group"
                                >
                                  {/* <div className="text-sm font-medium opacity-0 text-primary hover:opacity-100">
                                    {tool.name}
                                  </div> */}
                                  <Image
                                    src={tool.imgPath}
                                    alt={tool.name}
                                    width={48}
                                    height={48}
                                    className="w-8 h-auto"
                                  />
                                </motion.div>
                              );
                            }
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
