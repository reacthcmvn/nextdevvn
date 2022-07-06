import React from "react";
import NavMobile from "../nav/NavMobile";

const Layout = ({ children }) => {
  return (
    <>
      <NavMobile />
      <main>{children}</main>
    </>
  );
};

export default Layout;
