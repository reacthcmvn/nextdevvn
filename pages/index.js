import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import getme from "../styles/src/img/tungnoise.jpg";
import tungclean from "../styles/src/img/tungclean.jpg";

import { GoHeart } from "react-icons/go";

export default function Home() {
  return (
    <div className="main-body">
      <div className=" flex justify-between w-full">
        <div></div>
        <div className="">
          <div className=" h-[68vh] min-w-[35vh] rounded-l-[100vh] m-2 mr-4 p-3 border-2 border-orange-300">
            {/* <div className=" bg-pink-500  min-h-[60vh] mt-4 ml-2 max-w-[30vh] rounded-l-[100vh] z-[99] bg-cover bg-[url('https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/290184563_118413767561642_4631229608620407579_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=BKcoyLhX6s8AX8Cgd_T&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT9nfpYEWwEVhYXfQAl7kQ3s3eIAxZWOzujShql26wimhw&oe=62CAA9EA')] "></div> */}
            {/* <div className=" bg-pink-500  min-h-[60vh] mt-4 ml-2 max-w-[30vh] rounded-l-[100vh] z-[99] bg-cover bg-[url('https://nextdevvn2.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftungnoise.8c3624ea.jpg&w=3840&q=75')] "></div> */}
            <div className="relative overflow-hidden bg-orange-500/30  min-h-[60vh] mt-4 ml-2 max-w-[30vh] rounded-l-[100vh] z-[99]  ">
              <Image
                src={tungclean}
                alt="get this url"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="intro" className="p-4">
        <p
          href=""
          className="  text-center font-robo text-xs font-bold text-orange-400"
        >
          SINCE 2022
        </p>
        <div className="font-pra text-[2rem] text-right">Le Anh Tung</div>
        <h2 className=" text-right font-thin">Front-end Developer</h2>
        <p className=" text-right font-corm">Self-taught</p>
      </div>

      <div id="below-screen" className="p-6">
        <div className=" first-letter:text-7xl">
          Tung is a web developer using React/Next. He is an open-minded
          front-end guy who always ready for new challenges. He has spent almost
          1000hours learning & 200 hours practicing (React, Redux, Next, CSS,
          HTML, JS…).
        </div>
        <br />
        <h2 className="">My porfolio</h2>
        <div id="project">
          This project [Completed: 30%]: Tung created desktop app for crypto
          market. MVP: to split capital into 9 accounts and help users
          paper-trading on crypto.{" "}
          <Link href="/projects">
            <span className="underline underline-offset-2">View details</span>
          </Link>
          .
        </div>
        <br />
        <h2>My story</h2>
        <div id="about-me">
          Tung spent nearly one and half years learning developing. Code hard,
          made hundreds of mistakes and now well practicing everyday, making
          beautiful web applications. see about me{" "}
          <Link href="/about-me">
            <span className="underline underline-offset-2">here</span>
          </Link>
          .
        </div>
        <br />
        <h2>Get in touch {<GoHeart />}</h2>
        <div id="contact">
          <span>My E-mail: </span>
          <a href="mailto:react.hcmvn@gmail.com">react.hcmvn@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
