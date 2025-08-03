"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useEffect, useState } from "react";

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

  const handleScrollLink = (id) => {
    if (pathname !== "/") {
      setPendingScrollTarget(id);
      router.push("/");
    } else {
      scroller.scrollTo(id, {
        smooth: true,
        duration: 300,
        offset: -80,
      });
    }
  };

  useEffect(() => {
    if (pathname === "/" && pendingScrollTarget) {
      setTimeout(() => {
        scroller.scrollTo(pendingScrollTarget, {
          smooth: true,
          duration: 300,
          offset: -80,
        });
        setPendingScrollTarget(null);
      }, 100);
    }
  }, [pathname, pendingScrollTarget]);

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        if (link.path) {
          return (
            <Link
              key={index}
              href={link.path}
              className={`capitalize ${linkStyles}`}
            >
              {link.name}
            </Link>
          );
        }

        return pathname === "/" ? (
          <ScrollLink
            key={index}
            to={link.id}
            smooth={true}
            duration={300}
            offset={-80}
            spy={true}
            className={`capitalize cursor-pointer ${linkStyles}`}
            activeClass="active"
          >
            {link.name}
          </ScrollLink>
        ) : (
          <button
            key={index}
            onClick={() => handleScrollLink(link.id)}
            className={`capitalize cursor-pointer ${linkStyles}`}
          >
            {link.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Nav;