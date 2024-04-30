import React from 'react'
import Marquee from 'react-fast-marquee'

export default function Scrollup() {
  return (
    <div> <h2 style={{justifyContent:"center", alignItems:"center" , marginLeft:"14rem"}}> EVENTS </h2>
<Marquee
  behavior="scroll"
  direction="up"
//   height="5px"
  pauseOnHover="true"
  
//   onmouseout="this.start();"
//   onmouseover="this.stop();"
  scrollamount="3"
  style={{fontweight : "normal", fontsize: "12px",  color: "red",
  background: "goldenrod", fontweight: "bold" , fontfamily:" Verdana", marginLeft:"4rem", padding:"5px", maxHeight:"35rem", maxWidth:"25rem"
//   Arial, Helvetica, sansserif
  }}
>
  <div
    align="left"
    style={{fontfamily: "verdana", paddingleft:"5px", fontsize:"11px", color: "#ffffff", paddingtop: "5px", lineheight: "20px"}}
    valign="top"
  >
    <div id="cph_Home_divEvents" style={{width:"100%"}}>
      <table
        style={{width:"105px",
        align:"center",
        cellpadding:"0",
        cellspacing:"0",
        border:"0"}}
      >
        <tbody>
          {/* <tr>
            <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              02:30-03:00 hrs
            </td>
          </tr> */}
          {/* <tr>
            <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Suprabhatam
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              03:30 - 04:00 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Thomala Seva
            </td>
          </tr> */}
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              04:00 - 04:15 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Koluvu&nbsp;and Panchanga Sravanam inside&nbsp;Bangaru Vakili
              (Ekantam)
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              04:15 - 05:00 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              First&nbsp;Archana&nbsp;i.e.,Sahasranama Archana (Ekantam)
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              06:00 - 08:00 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              SahasraKalasa Abhishekam&nbsp;Second Archana (Ekantam) and Bell
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              09:30 - 19:00 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Darshanam
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              12:00 - 17:00 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Kalyanostavam,Brahmostavam,Vasanthostavam, Unjal Seva
            </td>
          </tr>
         
          {/* <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Sahasra Deepalankarana Seva
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              19:00 - 20:00 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Suddhi,Night Kainkaryams&nbsp;(Ekantam) and Night Bell
            </td>
          </tr>
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              20:00 - 00:30 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Darshanam
            </td>
          </tr> */}
          {/* <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              00:30 - 00:45 hrs
            </td>
          </tr> */}
          {/* <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Suddi&nbsp;and preparations for Ekanta Seva
            </td>
          </tr> */}
          <tr>
          <td style={{wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"10px", lineheight:"15px", color: "#a40508", paddingtop:"5px", bordertop:"0px #000 solid"}}>
              00:45 hrs
            </td>
          </tr>
          <tr>
          <td style={{width:"195px",wordwrap: "break-word", wordbreak: "break-all", fontweight:"bold", fontsize:"11px", lineheight:"15px" ,paddingbottom:"8px", borderbottom:"1px #000 solid", color:"#000000"}}>
              Ekanta Seva
            </td>
          </tr>
        </tbody>
      
      </table>
      </div>
      </div>
      </Marquee>
    
  
  

</div>
  )
}
