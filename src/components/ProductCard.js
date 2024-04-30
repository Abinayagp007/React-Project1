import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button , Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Header from './Header';
import Layout from './Layout';


const ProductCard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
    <div >
    <Typography noWrap gutterBottom={true} sx={{margin:"10px"}}>
        <Grid>
    <Layout />  
    </Grid> 
    </Typography>   
 <h2 align="center" style={{color:"dodgerblue", marginBottom:"40px"}} >ADMIN DETAILS </h2>
    <Grid  container
                spacing={2}
                direction="row"
                // justify="flex-start"
                // alignItems="flex-start"
                >
   

          {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{marginLeft:"20px"}}> */}

      {userData.map((user) => (
        <Grid item xs={12} sm={6} md={4}  >
        <Card  >          

        {/* gutterBottom={true}  key={user.id} style={{ display: 'flex', margin:"25px", marginInlineEnd:"45px", maxWidth: 400, maxHeight: 400}} > */}
          <CardContent>
            <Typography variant="h5">{user.name}</Typography>
            <Typography>{user.email}</Typography>
             <Button style={{background:"dodgerblue", marginInline:"17rem",color:"white"}} component={Link} to={`/admin/${user.id}`}>
               More...
            </Button>
          </CardContent>
        </Card>
        </Grid>
      ))}
      </Grid>
      </div>
    </>
  );
};

export default ProductCard;