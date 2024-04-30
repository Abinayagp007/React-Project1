import React from "react";
// import Layout from "./../components/Layout/Layout";
// import { Link } from "react-router-dom";
import temple6 from "../images/temple6.jpg";
import "../styles/HomeStyles.css";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ImageSlider from "../components/imageslider";
import Textslider from "../components/Marquee";
import Scrollup from "../components/Scrollup";
import CardList from "../components/CardList";
import ImageListPage from "../components/ImageListPage";
import BackToTopButton from "../components/BackToTopButton";
import ImageSwiper from "../components/ImageSwiper";
import CalendarComponent from "../components/CalendarComponent";
import CalendarPage from "../components/CalendarPage";
import Calendar from "../components/Calander";
import '../temple-events.json';
import TempleEvents from "../components/TempleEvents";
import CalendarRoute from "../components/CalendarRoute";
import { useTheme } from '@mui/material/styles';
import LiveDate from "../components/LiveDate";
import Background from "../components/Background";
import Map from "../components/Map";
import ItemList from "../components/ItemList";
const Home = () => {
  const theme = useTheme();
  const templeEvents = require('../temple-events.json');
  return (
    <>
        <Layout>
        <LiveDate/>
          {/* <Background/> */}
    <Textslider/>
      {/* <div className="home" style={{ backgroundImage: `url(${temple6})`, maxHeight: "150 px" }}> */}
      <ImageSwiper/>
        <div className="headerContainer">
          <h2 align="center" style = {{
           background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // backgroundColor: theme.palette.primary.main,
    padding: '10px 20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginBottom:'7vh'
  }}>DEITY DETAILS</h2>
          {/* <p>Best website In India</p> */}
          {/* <Link to="/menu">
            <button>ORDER NOW</button>
          </Link> */}
          
        </div>
      {/* </div> */}
    </Layout>
    
    <ImageSlider/>
    <div className="headerContainer">
          <h2 align="center"    style = {{
           background:  'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // backgroundColor: theme.palette.primary.main,
    padding: '10px 20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',marginBottom:'7vh'
  }}>TEMPLE DETAILS</h2>
    <CardList/></div>
    <div className="headerContainer">
          <h2 style={{marginLeft:"20rem",alignSelf:"center", marginBottom:"0px", }}>GALLERY</h2 >
    <ImageListPage/></div>
    {/* <CalendarComponent templeEvents={TempleEvents} /> */}
    {/* <TempleEvents templeEvents={templeEvents} /> */}
    {/* <CalendarRoute/> */}

    {/* <CalendarPage/> */}

    {/* <Calendar/> */}
    {/* <ItemList/> */}
   <Map/>
    <BackToTopButton/>
    <Footer/>
   
    </>
  );
};

export default Home;
