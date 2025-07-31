import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className=" py-6 bg-transparent ">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* <Image
            src="/logo.svg" // Replace with your actual logo path
            alt="Logo"
            width={36}
            height={36}
            className="object-contain"
          /> */}
          <span className="text-3xl font-bold text-foreground dark:text-white font-poppins">
            anu
            <span className="text-4xl text-light-primary dark:text-dark-primary">
              .
            </span>
          </span>
        </Link>

        {/* Social icons */}
        <Socials
          containerStyles="flex items-center gap-x-4"
          iconsStyles="text-foreground hover:scale-110 transition-transform"
        />
      </div>
      {/* Copyright */}
      <div className="text-light-mutborder-light-muted text-sm text-center mt-4 md:mt-0 ">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-foreground font-medium">Anuradha Jayathunga</span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
