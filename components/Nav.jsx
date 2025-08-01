//link next js
import Link from "next/link";

//framer motion
import { motion } from "framer-motion";

//next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/#top", name: "home", id: "home" },
  { path: "/#about", name: "about", id: "#about" },
  { path: "/#services", name: "services", id: "#services" },
  { path: "/#mywork", name: "portfolio", id: "#mywork" },
  { path: "/contact", name: "contact", id: "contact" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                className={`${underlineStyles}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
