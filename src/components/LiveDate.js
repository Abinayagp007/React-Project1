import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const LiveDate = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const formattedDateTime = dateTime.toLocaleDateString(undefined, options);

  return (
    // <Typography variant="h4" component="header">
    //   {formattedDateTime}
    // </Typography>
    <>
    <div className="App">
      <div >
    {/* <Card style={{marginTop:"10px",width:"800px",alignItems:"center", justifyContent:"center",marginLeft:"40vh" , backgroundColor:"#ec407a", borderRadius:"10px",display:"flex",height:"40px"}}> */}
        <CardContent sx={{alignItems:"center", justifyContent:"center", marginLeft:"60vh",width:"800px",marginTop:"5px",padding:"10px"}}>
          <Typography variant="h5" component="div">
           {/* DATE */}
          </Typography>
          <Typography variant="h6" style={{background:"#ec407a" , color:"#80cbc4",borderRadius:"50px",width:"85vh",alignItems:"center",justifyItems:"center",marginLeft:"20px",padding:"10px"}}>
          {formattedDateTime}
          </Typography>
        </CardContent>
      {/* </Card> */}
      </div></div></>
  );
};

export default LiveDate;
