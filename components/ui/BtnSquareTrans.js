import Link from "next/link";
import React from "react";

const BtnSquareTrans = (props) => {
  return (
    <div>
      <div className="w-fit border-[1.2px] px-6 py-2 my-2 border-white bg-white/0">
        <Link className="bg-red-500" href="/contact">
          <div>
            <button>{props.text}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BtnSquareTrans;
