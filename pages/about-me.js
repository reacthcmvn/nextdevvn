import React from "react";
import Image from "next/image";

import tungboard from "../styles/src/img/tungnoisecover.jpg";

const aboutMe = () => {
  return (
    <div className="main-body p-6">
      <div className="max-w-[60vw] first-letter:text-7xl">
        Finding myself in middle of nowhere at the age 32, I decide to become a
        web developer.
      </div>
      <Image src={tungboard} alt="tung works hard" />

      <h1 className="h1">Why?</h1>
      <div className="bg-green-100">
        I had over 6 years of experience working as Digital Marketer but I have
        never felt that I reach my full potential.
      </div>
      <div className="bg-green-100">
        Last year, after meeting with my developer friends, they suggested that
        I should try learning web development.{" "}
      </div>
      <div className="bg-green-100">
        Today, I am so happy that I took that advice.
      </div>
      <div className="bg-green-100">
        As I find out more about the job and the things that developers do
        everyday I feel that I have found something I want to do for the rest of
        my life.
      </div>
      <div className="bg-green-100">
        And there are three major reasons for that:
        <ul>
          <li>
            First of all, the sky is limit. I can develop any app and deliver
            solutions amazingly fast to the world. I can contribute to the whole
            teams effort and give a little help to change the whole big market.
          </li>
          <li>
            Seconds, as developer I cannot stop learning, with which satisfy me
            a lot since I really liked to read and learn.
          </li>
          <li>
            Lastly, the money. Yes! I have never thought that I can one day
            working for global firms right at my home desk and earning BIGGG...
            x3 from my marketing job.
          </li>
        </ul>
      </div>
      <div className="bg-green-100">
        What I have done:
        <ul>
          <li>Practice 100 hours of Html, CSS.</li>
          <li>Practice 200 hours of Javascript.</li>
          <li>Learning 100 hours MERN. </li>
          <li>Practice 50 hours of React.</li>
          <li>Practice 80 hours of Next.</li>
          <li>28/06/2022 deploy first web app on Vercel with Nextjs.</li>
        </ul>
      </div>
      <div className="bg-green-100">
        Here my plan for 2022:
        <ul>
          <li>Get Front-end developer job.</li>
          <li>Increase working hours of Nextjs, React to 2000++ hours.</li>
          <li>Develop two new app serving: stock investor and home owner.</li>
          <li>
            Improve front-end skills with: CSS, TailwindCSS, Gsap,
            Framer-motion.
          </li>
          <li>Solving more Javascript algorithms.</li>
        </ul>
      </div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
      <div className="bg-green-100"></div>
    </div>
  );
};

export default aboutMe;
