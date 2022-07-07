import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navigation1 = (props) => {
  return (
    <div>
      <div>
        {/* <ul className="flex flex-col md:flex-row bg-green-500/30 border-2 border-red-500 z-100">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul> */}

        <ul
          id="navigation1"
          className="flex flex-row  z-100 font-robo font-bold text-[1rem] "
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about-me">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navigation1;
