import React from "react";
import Image from "next/image";

const Feature = (props) => {
  return (
    <>
      <div className="relative flex flex-row items-end w-[40vw]  md:max-w-[26vw]  md:justify-around justify-center drop-shadow-lg ">
        <div className=" h-[25vh]">
          <Image
            className="rounded-lg"
            src={props.img}
            alt="card-feature"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="font-robo absolute bg-yellow-400 m-2 p-2 -mb-4 w-9/12 rounded-lg ">
          <h2>{props.feature}</h2>
          <p>{props.copy}</p>
        </div>
      </div>
    </>
  );
};

export default Feature;
