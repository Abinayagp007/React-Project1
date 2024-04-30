import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';


function Background() {
  return (
    <div className="App" >
      <CssBaseline />
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Material-UI Background Image Example
          </Typography>
          <Typography>
            This is your content on top of the background image.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Background;
