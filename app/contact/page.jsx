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
    <section className="min-h-screen bg-white dark:bg-zinc-900 py-24 transition-colors duration-300">
      <div className="container xl:mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 mb-2 ">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4 ">
            {/* Decorative Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-500"></div>
              <span className="text-sm font-semibold uppercase tracking-widest text-zinc-800 dark:text-white">
                Say Hello
              </span>
              <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-500"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight ">
              Let's Work
              <span className="block text-blue-600 dark:text-blue-500">
                Together.
              </span>
            </h1>

            {/* Description */}
            <p className="text-md text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
              Have a project in mind or want to discuss potential opportunities?
              <br />
              Feel free to reach out and let's explore how we can collaborate.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative ">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 dark:from-blue-400/10 dark:to-blue-400/10 rounded-3xl blur-3xl"></div> */}
            {/* content */}
            <div className="text-center space-y-4 flex items-start justify-center">
              {/* <div className=" w-[320px] h-[320px] opacity-10 blur-sm">
                <img src={`${prefix}/contact/message.png`} alt="message"/>
              </div> */}
              {/* <p className="text-zinc-600 dark:text-zinc-300 font-medium">
                  Ready to start a conversation?
                </p>  */}
            </div>

            {/* Floating elements */}
            {/* <div className="absolute top-14 left-8 w-20 h-20 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 left-20 w-16 h-16 bg-cyan-400/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div> */}
            
          </div>
        </div>

        {/* Content Section */}
        <div className="grid xl:grid-cols-2  xl:items-start gap-12 xl:gap-20 ">
          {/* Form */}
          <div className="order-2 xl:order-1 pt-8 ">
            <Form />
          </div>

          {/* Contact Information */}
          <div className="order-1 xl:order-2 flex flex-col justify-center space-y-0 ">
            <div className="flex flex-row items-end justify-start top-0 ">
              <div className="flex flex-col z-20">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-sm">
                  I'm always interested in hearing about new opportunities and
                  exciting projects.
                </p>
              </div>
              <div className="absolute hidden  md:flex md:right-[5px] lg:right-[10px] xl:right-[280px]  z-10 ">
                {/* Developer image */}
                <DevImg
                  containerStyles=" w-[500px] h-[500px] bg-no-repeat absolute"
                  // lightbg={`${prefix}/about/shape-light.svg`}
                  // bg={`${prefix}/about/shape-dark.svg`}
                  imgSrc={`${prefix}/contact/developer.png`}
                />
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6 z-20 ">
              {/* Email */}
              <div className="group flex items-center mx-auto gap-6 p-6 bg-transparent  dark:bg-zinc-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-xs lg:text-lg font-semibold text-zinc-900 dark:text-white">
                    ishiwaraanuradha@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-6 p-6 bg-transparent dark:bg-zinc-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
                <div className="p-4 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs lg:text-smfont-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-xs lg:text-lg font-semibold text-zinc-900 dark:text-white">
                    +94 743-119-199
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            {/* <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Let's Build Something Amazing
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Whether it's a new project or collaboration opportunity, I'm
                excited to hear your ideas.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                <span>Start the conversation</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
