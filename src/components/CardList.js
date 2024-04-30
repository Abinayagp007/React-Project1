import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Link,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination]);

const CardList = () => {
  const cards = [
        { id: 1, title: 'Temple 1', description: 
        "The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, temples include  each clan has a separate Kuladeivam.",
         image: 'https://media.istockphoto.com/id/1359690393/photo/bas-relief-ancient-historic-sculptures-of-god-humans-and-animals-carved-in-the-monolithic.webp?b=1&s=170667a&w=0&k=20&c=3OA-yon5DrS66KBUHRQ_6gf50XxJ6QEj4Qqxd95cVB8=' } ,
        { id: 2, title: 'Temple 2', description: 
        `A temple is a spiritual rituals such as prayer and sacrifice. temples include Christianity, Hinduism, Buddhism, Sikhism, Jainism, Islam, Judaism2`
        ,
         image: 'https://c0.wallpaperflare.com/preview/274/162/449/mayan-temple-surrounded-by-buildings.jpg'},
        { id: 3, title: 'Temple 3', description:
         `A temple is a religious building that's meant for worshipping or praying.  While temples tend to be associated with temples include details as follows`
        , image: "https://thumbs.dreamstime.com/b/ancient-hindu-temple-konark-india-intricate-carvings-stone-wheel-surya-orissa-th-century-ad-33044676.jpg"},
        { id: 4, title: 'Temple 4', description: 
        "The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam temple details a s follows.",
         image: 'https://t3.ftcdn.net/jpg/04/69/85/20/360_F_469852099_bO6ycWJoQXUyqVj9So2Dnfx6gVqSQAKF.jpg' } ,
        { id: 5, title: 'Temple 5', description: 
        `A temple is a spiritual rituals such as prayer and sacrifice. temples include Christianity, Hinduism, Buddhism, Sikhism, Jainism, Islam, Judaism2`
        ,
         image: 'https://i.etsystatic.com/21035089/r/il/597969/4740565990/il_fullxfull.4740565990_b365.jpg'},
        ];
        const arrowStyles = {
          color: 'red',     // Change the color to your desired color
          fontSize: '24px', // Adjust the font size as needed
        };
  return (
    <Grid container spacing={2}>
      <Swiper 
      sx={arrowStyles}
        spaceBetween={10}
        navigation
        pagination={{ type: 'fraction', clickable: true, renderBullet: function (index, className) { return '<span class="' + className + '">' + (index + 1) + '</span>'; }}}
        slidesPerView={3}
        loop={true}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} sx={{arrowStyles}}>
            <Card style={{ marginLeft: '30px', borderRadius: '50px', marginBottom: '6px' }}>
              <CardMedia component="img" height="250" image={card.image} alt={card.title} />
              <CardContent>
                <h3 align="center">{card.title}</h3>
                <p>{card.description}</p>
                <NavLink to={`/details/${card.id}`} style={{ marginLeft: '17rem', color: 'dodgerblue' }}>
                  More...
                </NavLink>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default CardList;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Grid } from '@mui/material';
// import kuladeivam5 from "../images/kuladeivam5.jpg"
// import kuladheivam2 from "../images/kuladheivam2.jpg";

// const CardList = () => {
//   const cards = [
//     { id: 1, title: 'Temple 1', description: 
//     "The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam.",
//      image: 'https://media.istockphoto.com/id/1359690393/photo/bas-relief-ancient-historic-sculptures-of-god-humans-and-animals-carved-in-the-monolithic.webp?b=1&s=170667a&w=0&k=20&c=3OA-yon5DrS66KBUHRQ_6gf50XxJ6QEj4Qqxd95cVB8=' } ,
//     { id: 2, title: 'Temple 2', description: `
//     A temple is a spiritual rituals such as prayer and sacrifice. temples include Christianity, Hinduism, Buddhism, Sikhism, Jainism, Islam, Judaism2`
//     ,
//      image: 'https://i.etsystatic.com/21035089/r/il/597969/4740565990/il_fullxfull.4740565990_b365.jpg'},
//     { id: 3, title: 'Temple 3', description: `A temple is a religious building that's meant for worshipping or praying.  While temples tend to be associated `
//     , image: "https://thumbs.dreamstime.com/b/ancient-hindu-temple-konark-india-intricate-carvings-stone-wheel-surya-orissa-th-century-ad-33044676.jpg"},
//     { id: 4, title: 'Temple 4', description: 
//     "The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam.",
//      image: 'https://media.istockphoto.com/id/1359690393/photo/bas-relief-ancient-historic-sculptures-of-god-humans-and-animals-carved-in-the-monolithic.webp?b=1&s=170667a&w=0&k=20&c=3OA-yon5DrS66KBUHRQ_6gf50XxJ6QEj4Qqxd95cVB8=' } ,
//     { id: 5, title: 'Temple 5', description: `
//     A temple is a spiritual rituals such as prayer and sacrifice. temples include Christianity, Hinduism, Buddhism, Sikhism, Jainism, Islam, Judaism2`
//     ,
//      image: 'https://i.etsystatic.com/21035089/r/il/597969/4740565990/il_fullxfull.4740565990_b365.jpg'},
//     ];

//   return (
//     <Grid container spacing={2}>
//       {cards.map((card) => (
//         <Grid item xs={12} sm={6} md={4} key={card.id}>
          
//             <Card style={{marginLeft:"30px", borderRadius:"50px", marginBottom:"3px"}}>
//               <CardMedia component="img" height="250"
//                image={card.image}
//               // style={{ backgroundImage: `url(${kuladheivam2})` }}
//                 alt={card.title} />

             
//               {/* style={{ backgroundImage: `url(${kuladheivam3})` }} */}
             

//               <CardContent>
//                 <h3 align="center">{card.title}</h3>
//                 <p>{card.description}</p>
             
//             <Link to={`/details/${card.id}`} style={{marginLeft:"17rem",color:"dodgerblue"}}>
//               More...
//           </Link>
//           </CardContent>
//             </Card>
//            {/* <p>style={{ backgroundImage: `url(${kuladheivam2})` }}</p>  */}
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default CardList;



// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CardList = () => {
//   // const history = useHistory();
//   const navigate = useNavigate();

//   const cards = [
//     { id: 1, title: 'Event 1', description: 'This is event 1' },
//     { id: 2, title: 'Event 2', description: 'This is event 2' },
//     { id: 3, title: 'Event  3', description: 'This is event 3' },
//     // Add more cards as needed
//   ];

//   const handleCardClick = (card) => {
//     // history.push(`/card/${id}`);
//     navigate(`/card/${card.id}`,{card}) ;
   
//   };

 

//   return (
    
//       <Grid container spacing={2} sx={{margin:"5px"}}>
//         {cards.map((card) => (
//           <Grid item xs={12} sm={6} md={4} key={card.id}>
//             <Card onClick={() => handleCardClick(card.id)}>
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {card.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {card.description}
//                 </Typography>
//               </CardContent><h4 style={{marginLeft:"20rem"}}>more...</h4>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     );
//   };
  
//   export default CardList;