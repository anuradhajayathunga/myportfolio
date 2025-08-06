"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

const links = [
  { name: "home", id: "home" },
  { name: "about", id: "about" },
  { name: "services", id: "services" },
  { name: "my work", id: "mywork" },
  { name: "contact", path: "/contact" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);

  // Handles in-page or cross-page scroll linking
  const handleLinkClick = (e, link) => {
    e.preventDefault();

    // If external link (e.g. /contact), just use router.push
    if (link.path) {
      router.push(link.path);
      return;
    }

    // If already on homepage
    if (pathname === "/") {
      scroller.scrollTo(link.id, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    } else {
      // Navigate to homepage and remember what to scroll to
      setPendingScrollTarget(link.id);
      router.push("/");
    }
  };

  // After navigating to "/", scroll to the target
  useEffect(() => {
    if (pathname === "/" && pendingScrollTarget) {
      const scrollTarget = pendingScrollTarget;

      // Use requestAnimationFrame for smoother DOM readiness
      const frame = requestAnimationFrame(() => {
        scroller.scrollTo(scrollTarget, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
        setPendingScrollTarget(null);
      });

      // Use small timeout to ensure DOM is mounted
      const timeout = setTimeout(frame, 100);
      return () => clearTimeout(timeout);
    }
  }, [pathname, pendingScrollTarget]);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.path || `/#${link.id}`}
          onClick={(e) => handleLinkClick(e, link)}
          className={`capitalize cursor-pointer ${linkStyles}`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
