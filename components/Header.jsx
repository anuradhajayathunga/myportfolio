"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Socials from "./Socials";
import ThemeToggler from "./ThemeTogggler";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky  bg-light-base dark:bg-dark-base top-0 z-50 w-full transition-all ${
        isScrolled
          ? "bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg shadow-md z-50 "
          : "bg-transparent"
      } ${pathname === "/" && !isScrolled ? "bg-transparent" : ""}`}
    >
      <div className="px-5 lg:px-8 xl:px-[8%] py-3 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-x-10 items-center">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/#about" },
            { label: "Services", href: "/#services" },
            { label: "My Work", href: "/#mywork" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative font-medium transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          {/* Social Icons */}
          {/* <Socials
            containerStyles="hidden xl:flex items-center gap-x-4"
            iconsStyles="text-foreground text-xl hover:scale-110 transition-transform"
          /> */}
          {/* Theme Toggle */}
          <ThemeToggler />
          {/* CTA Button */}
          <Link href="#contact" className="hidden xl:block">
            <Button variant="outline" className="gap-2">
              LET'S TALK
            </Button>
          </Link>

          {/* Mobile Nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
