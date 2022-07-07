import React from "react";
import Image from "next/image";

import getme from "../styles/src/img/tungnoise.jpg";

const Notshow = () => {
  return (
    <div>
      <Image src={getme} alt="get this url" />
    </div>
  );
};

export default Notshow;
