import React from "react";
import { GoHeart } from "react-icons/go";

const contact = () => {
  return (
    <div className="main-body">
      <div className="mx-6">
        <h2>Get in touch {<GoHeart />}</h2>
        <div id="contact">
          <span>My E-mail: </span>
          <a href="mailto:react.hcmvn@gmail.com">react.hcmvn@gmail.com</a>
          <br />
          <span>My Phone: </span>
          <a href="tel:+84932704612">093-270-4612</a>
        </div>
      </div>
    </div>
  );
};

export default contact;
