"use client";
import React from "react";
import {
  Frame,
  Image,
  TabletSmartphone,
  LayoutPanelTop,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  textReveal,
  cardHover,
  floatIn,
} from "@/lib/motionVariants";
import { ArrowRightIcon } from "@radix-ui/react-icons";
const servicesData = [
  {
    icon: <LayoutPanelTop size={48} strokeWidth={1.2} />,
    title: "Web Design",
    subtitle: "112 PROJECTS",
    description:
      "Creating responsive, stunning websites that work flawlessly across all devices. From modern layouts to seamless user experiences, I craft digital experiences that elevate your brand.",
    features: ["Responsive Design", "Modern UI/UX", "Performance Optimized"],
    color: "from-blue-500/20 to-cyan-500/20",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    delay: 0.1,
  },
  {
    icon: <TabletSmartphone size={48} strokeWidth={1.2} />,
    title: "Mobile Apps",
    subtitle: "50 PROJECTS",
    description:
      "Developing intuitive mobile applications that engage users and drive results. From concept to deployment, I create apps that stand out in the competitive mobile landscape.",
    features: ["Cross-Platform", "Native Performance", "User-Centered"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    delay: 0.2,
  },
  {
    icon: <Frame size={48} strokeWidth={1.2} />,
    title: "UI/UX Design",
    subtitle: "198 PROJECTS",
    description:
      "Designing intuitive interfaces and experiences that captivate users and boost engagement. Every pixel is crafted with purpose to create memorable digital journeys.",
    features: ["User Research", "Prototyping", "Design Systems"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    delay: 0.3,
  },
  {
    icon: <Image size={48} strokeWidth={1.2} />,
    title: "Graphic Design",
    subtitle: "35 PROJECTS",
    description:
      "Transforming ideas into compelling visuals that communicate your brand's story. From logos to marketing materials, I create designs that leave lasting impressions.",
    features: ["Brand Identity", "Print Design", "Digital Assets"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    delay: 0.4,
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of section is visible
      className="relative py-12 xl:py-16 scroll-mt-20 "
    >
      <div className="container mx-auto">
        {/* Background Elements */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" /> */}
        {/* <div className="absolute rounded-full top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-3xl" />
        <div className="absolute rounded-ful bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-3xl" /> */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="z-10 flex flex-col items-center xl:items-center"
        >
          <div className="text-center xl:text-left">
            <motion.div
              variants={fadeInUp(0.2)}
              className="text-[12px]  lg:text-sm font-semibold tracking-wider  uppercase"
            >
              WHAT I WILL DO FOR YOU
            </motion.div>
            <motion.h2
              variants={textReveal(0.1)}
              className="mb-8 text-5xl font-bold text-primary xl:mb-16"
            >
              Services
            </motion.h2>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid justify-center xl:grid-cols-4 gap-y-10 xl:gap-y-12 xl:gap-x-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={scaleIn(service.delay)}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="h-full group"
            >
              <Card className="relative h-full overflow-hidden transition-all duration-500 bg-transparent border-0 backdrop-blur-2xl hover:backdrop-blur-2xl hover:shadow-2xl hover:shadow-primary/20">
                {/* Gradient Background on Hover */}
                {/* <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                /> */}

                {/* Animated Border */}
                <div
                  className={`absolute inset-0 rounded-lg border-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                {/* Glow Effect */}
                {/* <div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                /> */}
                <div className="relative z-10 flex flex-col h-full p-2">
                  <CardHeader className="mb-0 ">
                    <div
                      className={`  flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500`}
                    >
                      {React.cloneElement(service.icon, {
                        className:
                          "w-20 h-20 text-secondary group-hover:text-primary ",
                      })}
                    </div>
                  </CardHeader>

                  <CardContent className="mt-2 ">
                    <CardTitle className="text-sm font-medium tracking-wide text-muted-foreground">
                      {service.subtitle}
                    </CardTitle>
                    <CardTitle className="mb-2 text-muted-foreground group-hover:text-secondary ">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="flex-grow mb-6 font-light leading-relaxed text-md text-muted-foreground line-clamp-5">
                      {service.description}
                    </CardDescription>

                    {/* Features */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 text-md"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500/50 to-cyan-500/50`}
                            />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <button className="flex items-center gap-2 transition-all duration-300 font-lg group/btn text-primary hover:gap-3">
                          <span>See More</span>
                          <ArrowRightIcon
                            size={16}
                            className="transition-transform duration-300 group-hover/btn:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                  {/* Description */}
                  {/* <p className="flex-grow mb-6 leading-relaxed text-muted">
                    {service.description}
                  </p> */}

                  {/* Floating Elements */}
                  {/* <div className="absolute transition-all duration-500 delay-200 opacity-0 top-4 right-4 group-hover:opacity-80">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping`}
                    />
                  </div> */}
                </div>
                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-80 transition-opacity duration-500`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
