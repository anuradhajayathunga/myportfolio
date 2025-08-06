"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import BlurBlob from "./ui/BlurBlob";

// Motion Variants
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import { scaleIn } from "@/lib/motionVariants";
import { textReveal } from "@/lib/motionVariants";
import { floatIn } from "@/lib/motionVariants";
import { fadeIn } from "@/lib/motionVariants";

const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

const badgesData = [
  {
    id: 1,
    containerStyles: "absolute top-[24%] -left-[5rem] ",
    icon: <RiBriefcase4Fill className="text-purple-500 " />,
    endCountNum: 3,
    endCountText: "+",
    badgeText: "Years Experience",
  },
  {
    id: 2,
    containerStyles: "absolute top-[80%] -left-[1rem] ",
    icon: <RiTodoFill className="text-green-500" />,
    endCountNum: 50,
    endCountText: "+",
    badgeText: "Project Completed",
  },
  {
    id: 3,
    containerStyles: "absolute top-[55%] -right-[1rem] ",
    icon: <RiTeamFill className="text-orange-600" />,
    endCountNum: 100,
    endCountText: "%",
    badgeText: "Client Satisfaction",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-6 xl:min-h-screen lg:py-12 xl:py-24 scroll-mt-20"
    >
      {/* bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none" */}

      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-12">
          {/* Enhanced Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 max-w-[600px] "
          >
            {/* Professional Badge */}
            {/* <motion.div
              variants={fadeInDown(0.1)}
              className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-primary/10 dark:bg-primary/20 border-primary/20"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Available for work</span>
            </motion.div> */}

            {/* Main Heading with  Typography */}
            <div className="">
              <motion.div
                variants={textReveal(0.1)}
                className="text-sm font-semibold tracking-wider uppercase "
              >
                Hello, I'm a
              </motion.div>

              <motion.h1
                variants={textReveal(0.2)}
                className="text-5xl font-black leading-tight md:text-7xl"
              >
                Frontend Web{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                    Developer
                  </span>
                  <motion.div
                    className="absolute left-0 right-0 h-2 -bottom-2 bg-gradient-to-r from-light-primary/20 to-light-primary/5 "
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
            </div>

            {/*  Description */}
            <motion.p
              variants={fadeInUp(0.4)}
              className="max-w-xl text-lg leading-relaxed text-muted"
            >
              I'm{" "}
              <span className="font-semibold text-foreground ">
                Anuradha Jayathunga
              </span>
              , a passionate frontend developer from Colombo, Sri Lanka,
              crafting beautiful and functional web experiences with{" "}
              <span className="font-semibold text-foreground ">4+ years</span>{" "}
              of expertise.
            </motion.p>

            <motion.div
              variants={fadeInUp(0.5)}
              className="flex flex-col mx-auto mb-6 gap-y-3 md:flex-row gap-x-3 xl:mx-0"
            >
              <Link href="/contact">
                <motion.div variants={floatIn(0.6)}>
                  <Button
                    size="lg"
                    className="relative overflow-hidden text-white transition-all duration-300 shadow-xl group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      CONTACT ME
                      <Send
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp(0.6)} className="py-8 lg:pt-2">
              <div className="mb-1 text-sm font-medium text-center text-popover">
                Connect with me
              </div>
              <Socials
                containerStyles="flex justify-center text-xl gap-2 lg:gap-6"
                iconsStyles="p-2 rounded-full hover:bg-primary/10 hover:dark:bg-primary/20 border-primary/20 text-muted hover:text-white  flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-sm"
              />
            </motion.div>
          </motion.div>

          {/* Developer Image */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative items-center justify-center hidden lg:flex "
          >
            <BlurBlob
              variant="primary"
              position="top-left"
              size={600}
              animated={false}
            />
            <motion.div
              variants={scaleIn(0.3)} // Added a small delay to make it pop after the text
            >
              <DevImg
                containerStyles="w-[260px] h-[260px] md:w-[510px] md:h-[462px] xl:w-[600px] xl:h-[500px] "
                lightbg={`${prefix}/hero/shape-1.svg`}
                bg={`${prefix}/hero/shape-1-dark.svg`}
                imgSrc={`${prefix}/hero/developer.png`}
              />
            </motion.div>
            {/* Floating Badges */}
            {badgesData.map((badge, index) => (
              <motion.div
                key={badge.id}
                variants={fadeIn(badge.delay)}
                className={`${badge.containerStyles} z-20`}
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 3 + index * 0.5,
                    ease: "easeInOut",
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 4 + index * 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                <Badge
                  containerStyles="backdrop-blur-xl bg-background/80 border border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-300"
                  icon={badge.icon}
                  endCountNum={badge.endCountNum}
                  badgeText={badge.badgeText}
                  endCountText={badge.endCountText}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Arrow Down Icon */}
        <motion.a
          href={`${prefix}/#about`}
          className="absolute hidden transform -translate-x-1/2 cursor-pointer left-1/2 bottom-8 xl:bottom-20 xl:block group"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 transition-all rounded-full bg-primary/20 blur-xl group-hover:blur-2xl" />
              <RiArrowDownSLine className="relative p-3 text-5xl transition-all duration-300 rounded-full shadow-xl text-background bg-gradient-to-r from-primary to-secondary group-hover:shadow-2xl" />
            </div>
            <div className="mt-2 text-xs text-center transition-colors text-popover group-hover:text-muted">
              Scroll to explore
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
