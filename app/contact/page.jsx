"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  User,
  ArrowRight,
  Send,
} from "lucide-react";
import Form from "@/components/Form";
import DevImg from "@/components/DevImg";
import BlurBlob from "@/components/ui/BlurBlob";
import Image from "next/image";
const prefix = process.env.NODE_ENV === "production" ? "/myportfolio" : "";

// Main Contact Component
const Contact = () => {
  return (
    <section className="min-h-screen py-24 transition-colors duration-300 bg-white dark:bg-zinc-900">
      <div className="container px-4 xl:mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="grid gap-12 mb-2 xl:grid-cols-2 xl:gap-20 ">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 ">
            {/* Decorative Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-500"></div>
              <span className="text-sm font-semibold tracking-widest uppercase text-zinc-800 dark:text-white">
                Say Hello
              </span>
              <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-500"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-tight xl:text-6xl text-zinc-900 dark:text-white ">
              Let's Work
              <span className="block text-blue-600 dark:text-blue-500">
                Together.
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-lg leading-relaxed text-md text-zinc-600 dark:text-zinc-400">
              Have a project in mind or want to discuss potential opportunities?
              <br />
              Feel free to reach out and let's explore how we can collaborate.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative ">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 dark:from-blue-400/10 dark:to-blue-400/10 rounded-3xl blur-3xl"></div> */}
            {/* content */}
            <div className="flex items-start justify-center space-y-4 text-center">
              {/* <div className=" w-[320px] h-[320px] opacity-10 blur-sm">
                <img src={`${prefix}/contact/message.png`} alt="message"/>
              </div> */}
              {/* <p className="font-medium text-zinc-600 dark:text-zinc-300">
                  Ready to start a conversation?
                </p>  */}
            </div>

            {/* Floating elements */}
            {/* <div className="absolute w-20 h-20 rounded-full top-14 left-8 bg-blue-400/20 dark:bg-blue-400/10 blur-3xl"></div>
            <div className="absolute w-16 h-16 rounded-full top-40 left-20 bg-cyan-400/20 dark:bg-cyan-400/10 blur-3xl"></div> */}
            
          </div>
        </div>

        {/* Content Section */}
        <div className="grid gap-12 xl:grid-cols-2 xl:items-start xl:gap-20 ">
          {/* Form */}
          <div className="order-2 pt-8 xl:order-1 ">
            <Form />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center order-1 space-y-0 xl:order-2 ">
            <div className="top-0 flex flex-row items-end justify-start ">
              <div className="z-20 flex flex-col">
                <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
                  Get In Touch
                </h2>
                <p className="max-w-sm mb-8 text-zinc-600 dark:text-zinc-400">
                  I'm always interested in hearing about new opportunities and
                  exciting projects.
                </p>
              </div>
              <div className="absolute hidden  md:flex md:right-[5px] lg:right-[10px] xl:right-[280px]  z-10 ">
                {/* Developer image */}
                {/* <DevImg
                  containerStyles=" w-[500px] h-[500px] bg-no-repeat absolute"
                  // lightbg={`${prefix}/about/shape-light.svg`}
                  // bg={`${prefix}/about/shape-dark.svg`}
                  imgSrc={`${prefix}/contact/developer.png`}
                /> */}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="z-20 space-y-6 ">
              {/* Email */}
              <div className="flex items-center gap-6 p-6 mx-auto transition-all duration-300 bg-transparent border group dark:bg-zinc-800 rounded-2xl hover:shadow-lg hover:-translate-y-1 border-zinc-200 dark:border-zinc-700">
                <div className="p-4 transition-transform duration-300 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl group-hover:scale-110">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase lg:text-sm text-zinc-500 dark:text-zinc-400">
                    Email
                  </p>
                  <p className="text-xs font-semibold lg:text-lg text-zinc-900 dark:text-white">
                    ishiwaraanuradha@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 p-6 transition-all duration-300 bg-transparent border group dark:bg-zinc-800 rounded-2xl hover:shadow-lg hover:-translate-y-1 border-zinc-200 dark:border-zinc-700">
                <div className="p-4 transition-transform duration-300 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl group-hover:scale-110">
                  <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase lg:text-smfont-medium text-zinc-500 dark:text-zinc-400">
                    Phone
                  </p>
                  <p className="text-xs font-semibold lg:text-lg text-zinc-900 dark:text-white">
                    +94 743-119-199
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="p-6 mt-8 border border-blue-200 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl dark:border-blue-800">
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
                Let's Build Something Amazing
              </h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Whether it's a new project or collaboration opportunity, I'm
                excited to hear your ideas.
              </p>
              <div className="flex items-center font-medium text-blue-600 dark:text-blue-400">
                <span>Start the conversation</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
