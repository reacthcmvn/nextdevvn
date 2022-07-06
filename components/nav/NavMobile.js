import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../styles/src/img/logofit-03.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const mobileNavvariant = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
  },
};

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavHandler(arg) {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-pink-500">
      <div className="">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="bg-pink-100 flex flex-row flex-nowrap justify-between">
        <motion.div
          animate={isOpen ? "visible" : "hidden"}
          variants={mobileNavvariant}
          className=""
        >
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#project">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </motion.div>
        <div
          onClick={toggleNavHandler}
          id="burger"
          className="fixed right-6 top-6 z-30 bg-slate-600"
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
