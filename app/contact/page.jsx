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

// Main Contact Component
const Contact = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-900 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-20 mb-16">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Decorative Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-500"></div>
              <span className="text-sm font-semibold uppercase tracking-widest text-zinc-800 dark:text-white">
                Say Hello
              </span>
              <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-500"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
              Let's Work
              <span className="block text-blue-600 dark:text-blue-500">
                Together.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out and let's explore how we can collaborate.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative h-96 xl:h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-12 h-12 text-white" />
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 font-medium">
                  Ready to start a conversation?
                </p>
              </div>
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-cyan-400/20 dark:bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-12 left-8 w-20 h-20 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-20">
          {/* Form */}
          <div className="order-2 xl:order-1">
            <Form />
          </div>

          {/* Contact Information */}
          <div className="order-1 xl:order-2 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                I'm always interested in hearing about new opportunities and
                exciting projects.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="group flex items-center gap-6 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    ishiwaraanuradha@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-6 p-6 bg-zinc-50 dark:bg-zinc-800 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-zinc-200 dark:border-zinc-700">
                <div className="p-4 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    +94 759-089-188
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
