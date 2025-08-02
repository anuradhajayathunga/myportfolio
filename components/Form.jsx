"use client";

import { FormEvent, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  Mail,
  MessageSquare ,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Form Component (your existing form with styling updates)
const Form = () => {
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "1e624748-02c0-4640-a847-440526915d22");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ type: "success", message: "Form Submitted Successfully." });
        form.reset();
      } else {
        setResult({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setResult({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (result) {
      const timeout = setTimeout(() => setResult(null), 3500);
      return () => clearTimeout(timeout);
    }
  }, [result]);

  return (
    <div className="bg-transparent rounded-md">
      {/* <div className="mb-8">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
          Send Me a Message
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div> */}

      <form onSubmit={onSubmit} className="space-y-8">
        {/* Name Input */}
        <div className="relative">
          {/* <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            Full Name *
          </label> */}
          <div className="relative">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              className="pr-3"
            />
            <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
          </div>
        </div>

        {/* Email Input */}
        <div className="relative">
          {/* <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            Email Address *
          </label> */}
          <div className="relative">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="pr-3"
            />
            <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
          </div>
        </div>

        {/* Message Input */}
        <div className="relative">
          {/* <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
            Message *
          </label> */}
          <div className="relative">
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or inquiry..."
              required
              className="pr-3"
            />
            <MessageSquare  className="absolute right-4 top-4 w-5 h-5 text-zinc-400 dark:text-zinc-500" />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>

      {/* Toast Notification */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 p-4 fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-xl text-sm border ${
              result.type === "success"
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-400"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-400"
            }`}
          >
            {result.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Form;
