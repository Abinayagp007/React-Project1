import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pic1 from "../images/pic1.jpg";
import shiv from "../images/shiv.jpg";
import kuladheivam1 from "../images/kuladheivam1.jpg";
import kuladheivam2 from "../images/kuladheivam2.jpg";
import kuladheivam3 from "../images/kuladheivam3.jpg";
import kuladheivam4 from "../images/kuladheivam4.jpg";
import kuladheivam7 from "../images/kuladheivam7.jpg";



import { useState } from "react";
import { colors } from "@mui/material";

export default function ImageSlider() {
    const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div >
         <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}  style={{marginLeft:"4rem"}}>
     
      <Carousel
     
        additionalTransfrom={0}
        arrows
        autoPlay={!isHovered}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        
        // responsive={responsive}
      >
        <div>
          <Card style={{ maxWidth: 350, marginTop:"6px"  }}>
            <CardMedia 
              component="img"
            //   alt="green iguana"
            height="250"
              // style={{ backgroundImage: `url(${kuladheivam1})` }}
              image="https://img.freepik.com/premium-photo/painting-god-with-gold-red-colors_534373-2150.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                kuladheivam 1
              </Typography>
              <Typography align= 'center' width ="250" variant="body2" color="text.secondary">
              <div>
      <p>{isExpanded ?  "In fact, each clan has a separate Kuladeivam" : "The Kuladeivam-s are deities that the Father's side ancestors worshiped. The Kuladeivam can be a male, or a female and these deities are ...."}</p>
      <button onClick={()=>setIsExpanded(!isExpanded)} style={{  margin:"5px", color:"white",background:"dodgerblue",border: 0, borderRadius: 20, padding: '10px 100px',height: 40, marginBottom:"10px",
                hover: {
                    background: 'yellow',
                  },
                  }}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
              </Typography>
            </CardContent>
           
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 350, marginTop:"6px" }}>
            <CardMedia
              component="img"
            //   alt="green iguana"
              height="250"
              // style={{ backgroundImage: `url(${kuladheivam2})` }}
              image="https://img.freepik.com/premium-photo/dussehra-vijayadashami-festival-celebration-with-cultural-events_950002-114239.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                kuladheivam 2
              </Typography>
              <div>
              <Typography variant="body2" color="text.secondary"  align="center">
                <div>
                The Kuladeivam-s are deities that the Father's side ancestors
                (forefathers) worshiped. In fact, each clan has a separate
                Kuladeivam.
                {show2 ? (
                <div>
                   The Kuladeivam can be a male, or a female and these
                deities are consecrated in a manner to protect and nurture
                people belonging to a particular clan.
               
              
                  <button style={{  margin:"5px", color:"white",background:"dodgerblue" ,border: 0,borderRadius: 20,  padding: '10px 100px',height: 40, marginBottom:"13px",marginTop:"20px",
                 
                hover: {
                    background: 'yellow',
                  },
                  }} onClick={() => setShow2(!show2)}>Read Less</button>
                </div>
              ) : (
                 <button  style={{  margin:"5px", color:"white",background: "dodgerblue",border: 0, borderRadius: 20,  padding: '10px 100px',height: 40, marginBottom:"13px",marginTop:"20px",
                 
                  
                hover: {
                    background: 'yellow',
                  },
                  }} onClick={() => setShow2(!show2)}>Read More</button>
              ) }
             
             
              </div>
              
              </Typography>
              </div>
              </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 350, marginTop:"6px"}}>
            <CardMedia
              component="img"
            //   alt="green iguana"
            height="250"
              // style={{ backgroundImage: `url(${kuladheivam3})` }}
              image="https://media.istockphoto.com/id/175454330/photo/hindu-god-krishna.jpg?s=612x612&w=0&k=20&c=dXCyaWomjyqvtjKgOyV7fuaXdxZKHkE79AoljTBa_Hc="
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                kuladheivam 3
              </Typography>
              <div>
              <Typography variant="body2" color="text.secondary">
                <div>
                The Kuladeivam-s are deities that the Father's side ancestors
                (forefathers) worshiped. In fact, each clan has a separate
                Kuladeivam.
                {show3 ? (
                <div>
                   The Kuladeivam can be a male, or a female and these
                deities are consecrated in a manner to protect and nurture
                people belonging to a particular clan.
               
              
                  <button style={{  margin:"5px", color:"white",background:"dodgerblue",border: 0, borderRadius: 20,  padding: '10px 100px',height: 40, marginBottom:"13px",marginTop:"20px", 
                hover: {
                    background: 'yellow',
                  },
                  }} onClick={() => setShow3(!show3)}>Read Less</button>
                </div>
              ) : (
                 <button  style={{  margin:"5px", color:"white", background:"dodgerblue",border: 0,  borderRadius: 20,  padding: '10px 100px',height: 40, marginBottom:"13px",marginTop:"20px", 
                hover: {
                    background: 'yellow',
                  },
                  }} onClick={() => setShow3(!show3)}>Read More</button>
              ) }
             
             
              </div>
              
              </Typography>
              </div>
              </CardContent>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 350, marginTop:"6px", marginBottom:"30px"}}>
            <CardMedia
              component="img"
            //   alt="green iguana"
            height="250"
              // style={{ backgroundImage: `url(${kuladheivam7})` }}
              image="https://img.freepik.com/premium-photo/statue-shiva-with-face-dark_582637-2367.jpg?w=360"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" align="center">
                kuladheivam 4
              </Typography>
              <div>
              <Typography variant="body2" color="text.secondary">
                <div>
                The Kuladeivam-s are deities that the Father's side ancestors
                (forefathers) worshiped. In fact, each clan has a separate
                Kuladeivam.
                {show4 ? (
                <div>
                   The Kuladeivam can be a male, or a female and these
                deities are consecrated in a manner to protect and nurture
                people belonging to a particular clan.
               
              
                  <button  style={{  margin:"5px",  color:"white",background:"dodgerblue",border: 0,  borderRadius: 20,  padding: '10px 100px',height: 40, marginBottom:"13px", marginTop:"20px",
                hover: {
                    background: 'yellow',
                  },
                  }} onClick={() => setShow4(!show4)}>Read Less</button>
                </div>
              ) : (
                 <button  style={{  margin:"5px", color:"white",background:"dodgerblue",border: 0,  borderRadius: 20,  padding: '10px 100px',height: 40, marginBottom:"13px",marginTop:"20px", 
                hover: {
                    background: 'yellow',
                  },
                  }} onClick={() => setShow4(!show4)}>Read More</button>
              ) }
             
             
              </div>
              
              </Typography>
              
              </div>
            </CardContent>
            
            {/* <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
  </CardActions> */}
          </Card>
        </div>
       
      </Carousel>
      </div>
      
    </div>
  );
}
