import React from "react";
import Image from "next/image";

import tungboard from "../styles/src/img/tungnoisecover.jpg";

const aboutMe = () => {
  return (
    <div className="main-body p-6">
      <div className="absolute max-w-[30vw] right-0">
        <Image src={tungboard} alt="tung works hard" layout="intrinsic" />
      </div>
      <div className="max-w-[60vw] first-letter:text-7xl">
        Finding myself in middle of nowhere at the age 32, I decide to become a
        web developer.
      </div>
      <br />
      <Image src={tungboard} alt="tung works hard" layout="intrinsic" />

      <h1 className="h1">Why?</h1>
      <div className="">
        I had over 6 years of experience working as Digital Marketer but I have
        never felt that I reach my full potential.
      </div>
      <div className="">
        Last year, after meeting with my developer friends, they suggested that
        I should try learning web development.
      </div>
      <br />
      <h1 className="">Today, I am so happy that I took that advice.</h1>
      <div className="">
        As I find out more about the job and the things that developers do
        everyday I feel that I have found something I want to do for the rest of
        my life.
      </div>
      <br />
      <div className="">
        <p>And there are three major reasons for that:</p>
        <ul className="list-disc	">
          <li className="mx-10">
            First of all, the sky is limit. I can develop any app and deliver
            solutions amazingly fast to the world. I can contribute to the whole
            teams effort and give a little help to change the whole big market.
          </li>
          <li className="mx-10">
            Seconds, as developer I cannot stop learning, with which satisfy me
            a lot since I really liked to read and learn.
          </li>
          <li className="mx-10">
            Lastly, the money. Yes! I have never thought that I can one day
            working for global firms right at my home desk and earning BIGGG...
            x3 from my marketing job.
          </li>
          <br />
        </ul>
      </div>
      <div className="">
        What I have accomplished:
        <ul className="list-disc	">
          <li className="mx-10">Practice 100 hours of Html, CSS.</li>
          <li className="mx-10">Practice 200 hours of Javascript.</li>
          <li className="mx-10">Learning 100 hours MERN. </li>
          <li className="mx-10">Practice 50 hours of React.</li>
          <li className="mx-10">Practice 80 hours of Next.</li>
          <li className="mx-10">
            28/06/2022 deploy first web app on Vercel with Nextjs.
          </li>
        </ul>
        <br />
      </div>
      <div className="">
        Here my plan for 2022:
        <ul className="list-disc	">
          <li className="mx-10">Get Front-end developer job.</li>
          <li className="mx-10">
            Increase working hours of Nextjs, React to 2000++ hours.
          </li>
          <li className="mx-10">
            Develop two new app serving: stock investor and home owner.
          </li>
          <li className="mx-10">
            Improve front-end skills with: CSS, TailwindCSS, Gsap,
            Framer-motion.
          </li>
          <li className="mx-10">Solving more Javascript algorithms.</li>
        </ul>
      </div>
      <br />
      <div className="font-corm text-5xl">Thank you,</div>
      <div className="font-corm text-5xl">for your consideration.</div>
      <br />
      <div className="">Hope to work with you soon!</div>
      <div className="font-corm ">Le Anh Tung.</div>
    </div>
  );
};

export default aboutMe;
