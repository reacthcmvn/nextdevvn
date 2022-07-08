import React from "react";
import Image from "next/image";

import BtnPill from "../components/ui/BtnPill";
import { HiCursorClick } from "react-icons/hi";
import { BsFillCheckSquareFill } from "react-icons/bs";

import mockup from "../styles/src/img/project1/port1-01.jpg";
import fullboard from "../styles/src/img/project1/port1-01.png";
import mainbnf from "../styles/src/img/project1/port101.png";
import watchlist from "../styles/src/img/project1/port102.png";
import breakout from "../styles/src/img/project1/port103.png";
import myorder from "../styles/src/img/project1/port104.png";
import multichart from "../styles/src/img/project1/port105.png";
import newnews from "../styles/src/img/project1/port106.png";
import tungye from "../styles/src/img/tungyellow.jpg";
import Feature from "../components/ui/Feature";

// import demo2 from "../styles/src/vid/demo2.mp4";

const projects = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="main-body">
      <div className="mt-8 w-full bg-white ">
        <div className="p-6">
          <Image
            src={mockup}
            alt="get this url"
            layout="responsive"
            // objectFit="cover"
          />

          <div className="text-[12px] text-gray-400 p-4 bg-gray-900 drop-shadow-md rounded-b-lg ">
            <p className="text-center mx-auto ">
              Homepage:{" "}
              <a className="" href="https://funtradinglab2.vercel.app/">
                https://funtradinglab2.vercel.app/
              </a>{" "}
            </p>
            <p className="text-center mx-auto ">
              Gitpage:{" "}
              <a
                className=" "
                href="https://github.com/reacthcmvn/funtradinglab"
              >
                https://github.com/reacthcmvn/funtradinglab
              </a>{" "}
            </p>
            <br />
            <div className="flex flex-row flex-wrap justify-center">
              <BtnPill text="React" colorx="white" />
              <BtnPill text="Next" />
              <BtnPill text="@redux/toolkit" />
              <BtnPill text="Tailwindcss" />
              <BtnPill text="ChartJS" />
              <BtnPill text="React-Chartjs-2" />
            </div>
          </div>
        </div>
        {/* ---------------------links-------------------------------------------- */}

        <br />
      </div>
      {/* ---------------------overview-------------------------------------------- */}
      <div className=" h-[100vh] bg-red-500/0 py-10 px-6">
        <div id="headline" className="font-robo  text-center">
          <div className="text-[3rem] font-bold ">
            <p>Built by Trader,</p>
            <p>For Trader</p>
          </div>
          <p className="my-10">
            The only tool trader need for backtesting crypto market & no trading
            knowledge required.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 h-20 mx-0 my-6 font-robo font-semibold text-lg flex justify-start pl-6">
          <HiCursorClick className="my-auto m-2 " />
          <p className="my-auto">Watch Live Demo Now!</p>
        </div>

        <div className="relative overflow-hidden rounded-lg min-w-3/4 min-h-[30vh] drop-shadow-xl ">
          <Image
            src={fullboard}
            alt="get this url"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-center">
          <p className="mt-10">
            Let&apos;s the computer do hard work! So you can enjoy{" "}
            <span className="font-staa text-green-700">profit</span>.
          </p>
        </div>
      </div>
      {/* ---------------------function 1-------------------------------------------- */}

      <div
        id="demo-part-1"
        className="min-h-[40vh] max-w-[400px] rounded-xl bg-yellow-400 mx-6 my-40 drop-shadow-lg"
      >
        <div className="flex justify-end w-full">
          <div
            id="split-board"
            className=" drop-shadow-lg absolute bg-gray-900 mr-[16vw] -mt-20 overflow-hidden min-w-[20vh] h-[20vh] rounded-[20vh]"
          >
            <Image
              src={myorder}
              alt="fully control"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div id="quote" className="font-corm text-[2rem] p-6">
          <div className="mt-20">
            <p>&ldquoYou cannot lose </p>
            <p> by taking profit.&ldquo</p>
          </div>
        </div>

        <div className="flex justify-start p-6 text-lg">
          <BsFillCheckSquareFill className=" my-auto" />
          <p className="font-robo p-2 my-auto text-sm">
            NOTIFY HELP TRADERS CLOSE ORDERS.
          </p>
        </div>
      </div>
      {/* ---------------------function 2-------------------------------------------- */}
      <div id="demo-part-1" className="min-h-[80vh] w-full">
        <div className=" rounded-t-3 min-h-[50vh] rounded-[20px] ">
          <video autoPlay controls loop muted className="">
            <source src="/demo2.mp4" type="video/mp4" />
          </video>
          <br />
          <p className="text-center font-bold text-[2rem] ">
            Fully customizable dashboard
          </p>
          <p className="text-center font-robo p-2 my-auto text-sm">
            More than 12 indicators are included. Aimed to assist traders making
            meaningful decisions.
          </p>
        </div>
      </div>

      {/* ---------------------function 4-------------------------------------------- */}
      <div
        id="feature-container"
        className="flex flex-wrap justify-evenly m-6 gap-6 my-40"
      >
        <p className="text-center font-bold text-[2rem] ">
          12+ System Built-In
        </p>

        <p>
          With everything connected, you will get timely nerdy insights so you
          can be sure you are making the right financial decisions for you. Best
          of all, its free.
        </p>
        <Feature img={mainbnf} feature="BNF Indicator." copy="Never be late again!"/>
        <Feature img={watchlist} />
        <Feature img={breakout} />
        <Feature img={newnews} />
      </div>
      {/* ---------------------function 3-------------------------------------------- */}

      <div id="demo-part-2" className="min-h-[50vh] w-full">
        <div className=" rounded-t-3 min-h-[50vh] rounded-[20px] ">
          <p className="text-center font-bold text-[2rem] ">
            Multiple timeframes
          </p>
          <br />
          <div className="flex justify-end w-full">
            <div id="split-board" className="">
              <Image
                src={multichart}
                alt="fully control"
                // layout="intrinsic"
                // objectFit="cover"
              />
            </div>
          </div>
          <br />

          <p className="text-center font-robo p-2 my-auto text-sm">
            See all your savings, credit cards, and investments together in one
            place. With everything connected, you will get timely nerdy insights
            so you can be sure you are making the right financial decisions for
            you. Best of all, its free.
          </p>
        </div>
      </div>
      {/* ---------------------function 5-------------------------------------------- */}
      {/* ---------------------function 6-------------------------------------------- */}
      {/* ---------------------function 7-------------------------------------------- */}
      {/* ---------------------function 8-------------------------------------------- */}
      {/* ---------------------links-------------------------------------------- */}
      {/* ---------------------links-------------------------------------------- */}
      {/* ---------------------links-------------------------------------------- */}
      {/* ---------------------links-------------------------------------------- */}
      {/* ---------------------links-------------------------------------------- */}
      {/* ---------------------links-------------------------------------------- */}
    </div>
  );
};

export default projects;
