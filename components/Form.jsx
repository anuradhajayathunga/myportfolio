"use client";

import { FormEvent, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  const [result, setResult] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "1e624748-02c0-4640-a847-440526915d22");

    try {
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
    }
  };

  useEffect(() => {
    if (result) {
      const timeout = setTimeout(() => setResult(null), 3500);
      return () => clearTimeout(timeout);
    }
  }, [result]);
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
        {/* form input */}
        <div className="relative flex items-center">
          <Input type="name" id="name" placeholder="Name" />
          <User className="absolute right-6" size={20} />
        </div>

        {/* form input */}
        <div className="relative flex items-center">
          <Input type="email" id="email" placeholder="Email" />
          <MailIcon className="absolute right-6" size={20} />
        </div>

        {/* form input */}
        <div className="relative flex items-center">
          <Textarea type="" id="" placeholder="" />
          <MessageSquare className="absolute right-6 top-4" size={20} />
        </div>
        <Button size="" className="flex flex-center max-w-[166px] uppercase ">
          Send Message
        </Button>
      </form>
      {/* ✅ Animated Toast */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-xl text-sm
              ${
                result.type === "success"
                  ? "text-light-primary"
                  : "text-light-accent4"
              }`}
          >
            {result.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Form;
