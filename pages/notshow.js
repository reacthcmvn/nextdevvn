import React from "react";
import Image from "next/image";

import getme from "../styles/src/img/tungnoise.jpg";

const Notshow = () => {
  return (
    <div className=" overflow-hidden h-[68vh] min-w-[35vh] rounded-l-[100vh] m-2 mr-4 p-3 border-2 border-orange-300">
      <video autoPlay controls loop muted>
        <source src="/demo2.mp4" type="video/mp4" />
      </video>
      <Image
        src={tungye}
        alt="fully tung"
        layout="responsive"
        objectFit="cover"
      />
      {/* <FaCommentAlt className="text-yellow-300 text-[260px] h-[220px]" /> */}
    </div>
  );
};

export default Notshow;
