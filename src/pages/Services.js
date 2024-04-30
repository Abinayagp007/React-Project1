import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { Stack } from '@mui/material';

function Services() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => {
        setCards(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <div>
      <Typography noWrap gutterBottom={true} sx={{margin:"10px"}}>
        <Grid>
    <Layout />  
    </Grid> 
    </Typography>   
    </div>
    <div>

      <div>
        
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {/* {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item>xs=2</Item>
    </Grid>
  ))} */}
      {/* <Stack direction="row" spacing={2}> */}

      {

      cards.map(card => (
        
        <Card key={card.id} style={{margin:"30px", maxWidth: 300, }} >

          <CardMedia
            component="img"
            


            alt={card.title}
            height="140"
            image={card.url}
          />
          
          <CardContent>
            <Typography variant="h6" component="h2">
             {card.id}. {card.title}
            </Typography>
          </CardContent>
          
        </Card>
        
        
      ))
      
     }
      {/* </Stack> */}
      </Grid>

      </div>
      {/* </carousel> */}
      
    </div>
    </>

  );
}

export default Services;