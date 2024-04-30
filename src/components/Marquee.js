import Marquee from "react-fast-marquee";
import React from "react";
// import { red } from "@material-ui/core/colors";

export default function Textslider() {
  return (
    <div>
      <Marquee
        pauseOnHover="true"
        style={{
            marginBottom:"5px",
            marginTop:"-10px",
          // color: "deeppink",
          color:"#e91e63",
          // background: "mediumspringgreen",
           background: "#4caf50 ",

          gradient: "#7fb505",
          padding:"10px"
        }}
      >
        The Advance booking arjitha seva ticket holders 
        are requested to
        avail  booking
        made in advance. 
      </Marquee>
    </div>
  );
}
