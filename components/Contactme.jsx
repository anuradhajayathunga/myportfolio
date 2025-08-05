import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
const Contactme = () => {
  return (
    <section className=" xl:px-[0%]">
      <div className="relative ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-3xl blur-3xl"></div>
        <div className="relative flex items-center justify-center p-8 overflow-hidden xl:h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-700">
          <div className="space-y-4 text-center">
            {/* <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full shadow-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-500 dark:to-blue-600">
              <MessageSquare className="w-12 h-12 text-white" />
            </div> */}
            <p className="text-2xl font-bold text-center md:text-3xl lg:text-4xl xl:text-5xl text-zinc-600 dark:text-zinc-200">
              Prepared to turn your ideas into reality?
              <br /> <span className="lg:mt-2">I'm here to help you.</span>
              {/* Let's discuss your ideas and create something amazing together. */}
              {/* <br /> Get in touch to begin your journey. */}
            </p>
            <div className="flex max-w-md p-2 mx-auto mt-8 border rounded-full border-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-500 dark:to-purple-500">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 bg-transparent rounded-full md:flex-1 focus:outline-none focus:ring-1 focus:ring-zinc-200 dark:focus:ring-zinc-600"
              />

              <Button variant="link" className="whitespace-nowrap">
                <Link href="/contact">Sign Up</Link>
              </Button>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute w-16 h-16 rounded-full top-8 right-8 bg-cyan-400/20 dark:bg-cyan-400/10 blur-xl"></div>
          <div className="absolute w-20 h-20 rounded-full bottom-12 left-8 bg-purple-400/20 dark:bg-purple-400/10 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
