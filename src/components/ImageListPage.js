import React from 'react';
import { Link } from 'react-router-dom';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
// import Grid from '@material-ui/core';
import Grid from '@mui/material/Grid'
import Scrollup from './Scrollup';

const ImageListPage = () => {
  const hinduDeities = [
    {
      id: 1,
      title: 'Thiruvizha',
      imageUrl: 'https://i.pinimg.com/564x/52/a6/d1/52a6d1abba000b518a5bf716b5ce8979.jpg',
      description: 'The deity of intellect and wisdom.',
    },
    {
      id: 2,
      title: 'Kambam Thiruvizha',
      imageUrl: 'https://media.maalaimalar.com/h-upload/2023/04/08/1862800-07.webp',
      description: 'The deity of love and compassion.',
    },
    {
        id: 3,
        title: 'Pongal Thiruvizha',
        imageUrl: 'https://c8.alamy.com/comp/ET09W2/women-celebrating-pongal-festival-tamil-nadu-india-ET09W2.jpg',
        description: 'The deity of love and compassion.',
      },
      {
        id: 4,
        title: 'Thiruvizha',
        imageUrl: 'https://i.pinimg.com/474x/c4/28/62/c42862a30755b991b7daab27af42deaa.jpg',
        description: 'The deity of love and compassion.',
      },
      {
        id: 5,
        title: 'Manjal neer Thiruvizha',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZk1P-Aduk16J1G8VKjEOaV-bFLC-GnTZbA3M0rglHYE5rLljJuh_AP1mNxWEFzA2OoTc&usqp=CAU',
        description: 'The deity of love and compassion.',
      },
      {
        id: 6,
        title: 'Annual chariot festival',
        imageUrl: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2018/4/28/w600X300/A_tale_of_two.jpg?w=400&dpr=2.6',
        description: 'The deity of love and compassion.',
      },
      {
        id: 7,
        title: 'Karagam festival',
        imageUrl: 'https://c8.alamy.com/comp/2G1FKDE/karagam-tanz-anthimahakallai-kavu-festival-in-cheelakkarai-bei-thrissur-kerala-indien-2G1FKDE.jpg',
        description: 'The deity of love and compassion.',
      },
      {
        id: 8,
        title: 'Agni gundam festival',
        imageUrl: 'https://funglitz.com/wp-content/uploads/2022/04/images-2.jpg',
        description: 'The deity of love and compassion.',
      },
      {
        id: 9,
        title: 'Kavadi festival',
        imageUrl: 'https://www.atyutka.com/wp-content/uploads/2021/11/KavadiAttam-2100x1200.jpg',
        description: 'The deity of love and compassion.',
      },





      
     
    // Add more deities as needed
  ];

  return (
    // <ImageList sx={{ width: 500 }}>
    <>
    <div>
            {/* <h2 style={{justifyContent:"center", alignItems:"center" , marginLeft:"14rem", marginBottom:"0"}}> Gallery </h2> */}

    <Grid container spacing={2} columns={16} sx={{ marginLeft:"10px"}}>
  <Grid item xs={9}>
    {/* <Item>xs=8</Item> */}
  
    {/* <h2 style={{justifyContent:"center", alignItems:"center" , marginLeft:"14rem"}}> Gallery </h2> */}

      <ImageList  sx={{ width: 700, height: 530, }} cols={3} >
      {hinduDeities.map((deity) => (
        <ImageListItem key={deity.id} component={Link} to={`/gallerydetails/${deity.id}`}>
          <img src={deity.imageUrl} alt={deity.title} />
          <ImageListItemBar title={deity.title} subtitle={deity.description} />
        </ImageListItem>
      ))}
  </ImageList>
  </Grid>
  <Grid item xs={3}>
    {/* <Item>xs=8</Item> */}
    <Scrollup/>
  </Grid>
</Grid>
 
  </div>
    
     </>
  );
};

export default ImageListPage;