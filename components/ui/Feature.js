import React from "react";
import Image from "next/image";
    
const Feature = (props) => {
  return (
    <div>
      <div className="bg-yellow-400 w-[40vw]">
        <div className="relative overflow-hidden rounded-2xl h-[25vh] ">
          <Image
            src={props.img}
            alt="card-feature"
            layout="fill"
            objectFit="cover"
          />
          <p>fsfddsfdf</p>
        </div>

        <div className="font-robo">
          <p>{props.feature}</p>
          <p>{props.copy}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
