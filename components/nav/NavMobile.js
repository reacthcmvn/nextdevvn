import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../styles/src/img/logofit-03.png";
import { FiBarChart2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navigation1 from "./Navigation1";

const mobileNavvariant = {
  hidden: {
    x: 400,
    // scale: 0.1,
  },
  show: {
    x: 0,
    // scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0 },
};

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleNavHandler(arg) {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <div className="p-2 flex justify-between bg-red-500/30">
        <div className="h-[40px]">
          <Link href="/">
            <Image src={logo} layout="intrinsic" alt="logo" />
          </Link>
        </div>
        <div className="h-[40px] table" id="toggler">
          <div className="table-cell  align-middle md:hidden">
            <FiBarChart2
              onClick={toggleNavHandler}
              className="rotate-90 scale-[1.4]"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden " id="nav-link">
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={mobileNavvariant}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="absolute  w-full flex flex-col md:flex-row bg-white border-2 border-red-500 z-100 text-[50px] font-robo"
            >
              <motion.li variants={item} onClick={toggleNavHandler}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </motion.li>
              <motion.li variants={item} onClick={toggleNavHandler}>
                <Link href="/blog/hello-world">
                  <a>Project</a>
                </Link>
              </motion.li>
              <motion.li variants={item} onClick={toggleNavHandler}>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </motion.li>
              <motion.li variants={item} onClick={toggleNavHandler}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </motion.li>
              <motion.li variants={item} onClick={toggleNavHandler}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden md:block">
        <Navigation1 />
      </div>
    </div>
  );
};

export default NavMobile;
