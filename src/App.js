// import logo from "./logo.svg";
// import Home from "./pages/Home";
// // import "./App.css";
// // import Header from "./components/Header.js";


// function App() {
//   return 
//   <>
 
//   <Home/>
//   </>
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import ProductCard from "./components/ProductCard";
import ProductDetailPage from "./components/ProductDetailPage";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import Admin from "./components/Admin";
import Festivals from "./components/Festivals";
import ImageListPage from "./components/ImageListPage";
import ImageDetailsPage from "./components/ImageDetailsPage";
import TempleEvents from "./components/TempleEvents";
import CalendarComponent from "./components/CalendarComponent";
import CalanderEvents from "./components/CalendarEvents";
import CalendarEvents from "./components/CalendarEvents";
 import "./temple-events.json";
import { TempleHinduTwoTone } from "@mui/icons-material";
import CalendarRoute from "./components/CalendarRoute";
import Calander from "./components/Calander"
import { useNavigate } from "react-router-dom";
// import Menu from "./pages/Menu";
// import Pagenotfound from "./pages/Pagenotfound";
import { BrowserRouter as Router } from "react-router-dom";
import EventPage from "./components/EventPage";
import CalendarPage from "./components/CalendarPage";
import UserTable from "./components/UserTable";
import Background from "./components/Background";
import '../src/App.css';
import Map from "./components/Map";

function App() {

  const templeEvents = require('./temple-events.json');

  return (
    <>
   {/* <Background/> */}
    <div>
      <BrowserRouter>
        <Routes>
          
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/festivals" element={<Festivals/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/location" element={<Map/>} />

          <Route exact path="/product"  element={<ProductCard/>} />
        <Route path="/admin/:id"  element={<ProductDetailPage/>} />
        <Route exact path="/" element={<CardList/>} />
          {/* <Route path="/card/:id" element={<CardDetails/>} /> */}
          <Route path="/details/:id"  element={<CardDetails/>} />
          <Route exact path="/gallery" element={<ImageListPage/>} />
          <Route exact path="/userlist" element={<UserTable/>} />
        <Route path="/gallerydetails/:id" element={<ImageDetailsPage/>} /> 
        <Route exact path="/events" element={<CalendarPage templeEvents={TempleEvents} />} />
        <Route path="/events/:date" element={<EventPage/>} />
        {/* <Route path="/temple-events/:date" element={<TempleEvents  templeEvents={templeEvents} />}/> */}
                  <Route path="/temple-events/:date" element={<CalendarComponent templeEvents={TempleEvents} />}/> 
        {/* <CalendarComponent templeEvents={templeEvents} /> */} 
          {/* <TempleEvents templeEvents={templeEvents} />

                   <Route path="/temple-events/:date" element={<TempleEvents  templeEvents={templeEvents} />}/>
                  <Route path="/temple-events/:date" element={<CalendarComponent/>}/> 

          
        {/* <CalendarComponent templeEvents={TempleEvents} />
          <TempleEvents templeEvents={TempleEvents} /> */}


          {/* <Route path="*" element={<Pagenotfound />} /> */}
        
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

