import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeaderTwo from "./HeaderTwo";
import LiveDate from "./LiveDate";
// import Textslider from "./Marquee";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {/* <HeaderTwo/> */}

      <div>{children}</div>
      {/* <Footer/> */}
     
   
        </>
  );
};

export default Layout;
