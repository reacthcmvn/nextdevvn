import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../styles/src/img/logo1-02.png";
import { FiBarChart2 } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Navigation1 from "./Navigation1";

const mobileNavvariant = {
  hidden: {
    x: 400,
    scale: 1,
  },
  show: {
    x: 0,
    scale: 1,
    transition: {
      // when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavHandler(arg) {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative z-[100] p-2">
      <div id="logo" className="p-2 flex justify-between  md:hidden">
        <div className="max-h-[20px]">
          <Link href="/">
            <Image src={logo} layout="intrinsic" alt="logo" />
          </Link>
        </div>
        <div className="h-[40px] table" id="toggler">
          <div className="table-cell  align-middle ">
            <FiBarChart2
              onClick={toggleNavHandler}
              className="rotate-90 scale-[1.4]"
            />
          </div>
        </div>
      </div>

      <div id="nav-mobile" className="md:hidden ">
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={mobileNavvariant}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute w-full min-h-screen top-0 flex flex-col md:flex-row bg-white border-2 border-red-500 z-100 text-[50px] font-robo font-bold"
            >
              <motion.li variants={item} onClick={toggleNavHandler}>
                <div className="flex justify-between">
                  <div></div>
                  <div>
                    <BsXLg className="scale-50" />
                  </div>
                </div>
              </motion.li>
              <motion.li
                variants={item}
                onClick={toggleNavHandler}
                className="mx-auto"
              >
                <Link href="/">
                  <a className="">Home</a>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                onClick={toggleNavHandler}
                className="mx-auto"
              >
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                onClick={toggleNavHandler}
                className="mx-auto"
              >
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                onClick={toggleNavHandler}
                className="mx-auto"
              >
                <Link href="/blog/hello-world">
                  <a>Blog</a>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
                onClick={toggleNavHandler}
                className="mx-auto"
              >
                <Link href="/about-me">
                  <a>About Me</a>
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div id="nav-pc-navigation1" className="p-2 hidden md:block">
        <div className="flex flex-row justify-between">
          <div className="h-[40px] my-auto">
            <Link href="/">
              <Image src={logo} layout="intrinsic" alt="logo" />
            </Link>
          </div>
          <div className="h-[40px] table" id="toggler">
            <div className="table-cell  align-middle ">
              <Navigation1 />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-orange-300/90" />
      <br />
    </div>
  );
};

export default NavMobile;
