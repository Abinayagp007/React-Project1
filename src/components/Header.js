import React, { useState } from "react";
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Link,
 

  Menu, MenuItem
} from "@mui/material";
import Logo from "../images/logo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Navigate} from "react-router-dom";
import "../styles/HeaderStyles.css";
import { Padding } from "@mui/icons-material";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElAbout, setAnchorElAbout] = React.useState(null);
  const [anchorElContact, setAnchorElContact] = React.useState(null);

  const handleAboutClick = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleContactClick = (event) => {
    setAnchorElContact(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElAbout(null);
    setAnchorElContact(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography
  //       color={"goldenrod"}
  //       variant="h6"
  //       component="div"
  //       sx={{ flexGrow: 1, my: 2 }}
        
  //     >
  //                 <TempleHinduIcon sx={{ transform: "scale(2)" }} />

  //       {/* <img src={Logo} alt="logo" height={"70"} width="200" /> */}
  //     </Typography>
  //     <Divider />
  //     <ul className="mobile-navigation">
  //       <li>
  //         <NavLink activeClassName="active" to={"/"}>
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/about"}>About</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/contact"}>Contact</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/services"}>Services</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/Register"}>Signup</NavLink>
  //       </li>
  //     </ul>
  //   </Box>
  // );
  return (
    <>
      <Box>
        <AppBar  position="fixed" component={"nav"} sx={{ bgcolor: "dodgerblue" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
                // color:"cadetblue"
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"white"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
           <TempleHinduIcon sx={{ transform: "scale(2)", paddingRight:"2%"}} />
                                
              KULADEIVAM
              {/* <img src={Logo} alt="logo" height={"70"} width="250" /> */}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                   <b>Home</b> 
                  </NavLink>
                  
                </li>
                <li>
          <NavLink onClick={handleAboutClick} > <b>About</b></NavLink>
          {/* <NavLink to={"/about"} onClick={handleAboutClick}> About</NavLink> */}

        </li>
         {/* <Button color="inherit" >
          About
        </Button> */}
        <Menu  anchorEl={anchorElAbout} open={Boolean(anchorElAbout)} onClose={handleClose} >
          <MenuItem onClick={handleClose} component={NavLink} to={"/about"}>
            About Us
          </MenuItem>
          {/* <hr/> */}
          <MenuItem onClick={handleClose} component={NavLink} to={"/admin"}>
            Admin 
          </MenuItem>
          {/* <hr/> */}
          <MenuItem onClick={handleClose} component={NavLink} to={"/userlist"}>
            Our Team
          </MenuItem>
          {/* <hr/> */}
          <MenuItem onClick={handleClose} component={NavLink} to="/festivals">
            Festivals
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/events">
            Event Updates
          </MenuItem>
        </Menu>

        <li>
          <NavLink onClick={handleContactClick} > <b>Contact</b></NavLink>
          {/* <NavLink to={"/contact"}>Contact</NavLink> */}

        </li>
        <Menu anchorEl={anchorElContact} open={Boolean(anchorElContact)} onClose={handleClose}>
        <MenuItem onClick={handleClose} component={NavLink} to={"/contact"}> 
         Contact       
          </MenuItem>
          <MenuItem onClick={handleClose} component={NavLink} to="/location">
            Locations
          </MenuItem>
        </Menu>
        <li>
          <NavLink to={"/services"}><b>Services</b></NavLink>
        </li>
        <li>
          <NavLink to={"/Register"}><b>Signup</b></NavLink>
        </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "150px",
              },
            }}
          >
            {/* {drawer} */}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
