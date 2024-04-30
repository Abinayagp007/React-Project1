import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton } from '@material-ui/core';
import { Home, Info, ContactPhone, Person } from '@material-ui/icons';


 const HeaderTwo = () => {
    const [aboutMenuAnchorEl, setAboutMenuAnchorEl] = React.useState(null);
    const [serviceMenuAnchorEl, setServiceMenuAnchorEl] = React.useState(null);
  
    const handleAboutMenuOpen = (event) => {
      setAboutMenuAnchorEl(event.currentTarget);
    };
  
    const handleAboutMenuClose = () => {
      setAboutMenuAnchorEl(null);
    };
  
    const handleServiceMenuOpen = (event) => {
      setServiceMenuAnchorEl(event.currentTarget);
    };
  
    const handleServiceMenuClose = () => {
      setServiceMenuAnchorEl(null);
    };
  
    return (
      <AppBar position="static">
        <Toolbar>
          <Button href="/" startIcon={<Home />}>
            Home
          </Button>
          <IconButton
            aria-label="About"
            aria-controls="about-menu"
            aria-haspopup="true"
            onClick={handleAboutMenuOpen}
          >
            <Info />
          </IconButton>
          <Menu
            id="about-menu"
            anchorEl={aboutMenuAnchorEl}
            keepMounted
            open={Boolean(aboutMenuAnchorEl)}
            onClose={handleAboutMenuClose}
          >
            <MenuItem href="#">About Us</MenuItem>
            <MenuItem href="#">Admin</MenuItem>
            <MenuItem href="#">Festival</MenuItem>
          </Menu>
          <IconButton
            aria-label="Service"
            aria-controls="service-menu"
            aria-haspopup="true"
            onClick={handleServiceMenuOpen}
          >
            <ContactPhone />
          </IconButton>
          <Menu
            id="service-menu"
            anchorEl={serviceMenuAnchorEl}
            keepMounted
            open={Boolean(serviceMenuAnchorEl)}
            onClose={handleServiceMenuClose}
          >
            <MenuItem href="#">Location</MenuItem>
            <MenuItem href="#">Contact Us</MenuItem>
          </Menu>
          <Button href="/login" endIcon={<Person />}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default HeaderTwo;