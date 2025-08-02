"use client";
import React from "react";
import { Frame  , Image , TabletSmartphone ,LayoutPanelTop  } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
 
  {
    icon: <LayoutPanelTop   size={72} strokeWidth={0.8} />,
    title: "Web Design",
    subtitle: "112 PROJECTS",
    description:
      "We create responsive, eye-catching websites that work on every device. From layout and navigation to interactivity and visuals, our web design services give your business an unforgettable online presence.",
  },
  {
    icon: <TabletSmartphone  size={72} strokeWidth={0.8} />,
    title: "Mobile app",
    subtitle: "50 PROJECTS",
    description:
      "Mobile app development involves creating software  From layout and navigation to interactivity and visuals, our web design services give your business an unforgettable online presence.",
  },
   {
    icon: <Frame   size={72} />,
    title: "UI & UX Design",
    subtitle: "198 PROJECTS",
    description:
      "Design intuitive, engaging user interfaces and experiences that capture the attention of the user and increase the usability of a digital product. Let our UI & UX be driven by user-centered design so that your products are not just good-looking but also work well and are easy to use.",
  },
  {
    icon: <Image  size={72} strokeWidth={0.8} />,
    title: "Graphic Design",
    subtitle: "35 PROJECTS",
    description:
      "Bringing your brilliant ideas into spectacular visuals that convey your brand’s message. Our graphic design services include branding, logo design, marketing materials, and digital content so your visuals stand out.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 xl:py-16 scroll-mt-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center xl:items-center">
          <div className="text-center xl:text-left">
            <div className="text-[10px] uppercase font-semibold text-black dark:text-white tracking-[1px]">
              WHAT I WILL DO FOR YOU
            </div>
            <h2 className="text-5xl font-bold text-primary mb-8 xl:mb-16">
              Services
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid xl:grid-cols-4 justify-center gap-y-10 xl:gap-y-12 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[500px] h-auto flex flex-col pt-16 pb-0 justify-center items-center relative hover:bg-primary hover:text-white group group-hover:transform group-hover:-translate-y-2  transition-all duration-500"
            >
              <CardHeader className="absolute -top-[3px]">
                <div className="w-[140px] h-[80px] flex justify-center items-center">
                  {React.cloneElement(item.icon, {
                    className:
                      "text-primary group-hover:text-white transition-colors duration-300",
                  })}
                </div>
              </CardHeader>

              <CardContent className="text-left xl:text-left mt-10">
                <CardTitle className="mb-1 text-[10px] text-black dark:text-white group-hover:text-white">
                  {item.subtitle}
                </CardTitle>
                <CardTitle className="mb-2 text-black dark:text-white group-hover:text-white">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-[15px] text-black/80 dark:text-white/80 group-hover:text-white">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
