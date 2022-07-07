import React from "react";

const BtnPill = (props) => {
  return (
    <div className=" rounded-full bg-orange-400  max-w-fit m-2 px-4 text-black font-bold font-robo">
      <button>{props.text}</button>
    </div>
  );
};

export default BtnPill;
