import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import kuladeivam5 from "../images/kuladeivam5.jpg";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import Layout from "./Layout";

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch card details based on the ID (e.g., from an API)
  const cardDetails = {
    1: {
      title: "Temple  1",
      description: `The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam
    The Kuladeivam can be a male, or a female and these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity (Sanctum Sanctorum) while other 
     Gods may also be present in the periphery. The Kula deivam can be formless as well.
     The Kuladeivam can be a male, or a female and these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity.The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam
     The Kuladeivam can be a male, or a female and these
     deities are consecrated in a manner to protect and nurture
     people belonging to a particular. Generally, Temple of a 
     Kula deivam is constructed in one's ancestral village or town,
      will have it as the main deity (Sanctum Sanctorum) while other 
      Gods may also be present in the periphery. The Kula deivam can be formless as well.
      The Kuladeivam can be a male, or a female and these
     deities are consecrated in a manner to protect and nurture
     people belonging to a particular`,
      image:
        "https://media.istockphoto.com/id/1359690393/photo/bas-relief-ancient-historic-sculptures-of-god-humans-and-animals-carved-in-the-monolithic.webp?b=1&s=170667a&w=0&k=20&c=3OA-yon5DrS66KBUHRQ_6gf50XxJ6QEj4Qqxd95cVB8=",
    },
    2: {
      title: "Temple  2",
      description: `
    A temple is a building reserved for spiritual rituals and activities such as prayer and sacrifice. Religions which erect temples include Christianity, Hinduism, Buddhism, Sikhism, Jainism, Islam, Judaism2
    5 things to know about visiting a Hindu temple
    these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity
    19 Temples In India Which One Must Definitely Visit In 2023
    10 of the most beautiful temples in India! | Times of India
    More images
    Temple
    Building function.things to know about visiting a Hindu temple
    these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity
    19 Temples In India Which One Must Definitely Visit In 2023
    10 of the most beautiful temples in India! | Times of India
    More images
    Temple
    Building function`,

      image:
      "https://c0.wallpaperflare.com/preview/274/162/449/mayan-temple-surrounded-by-buildings.jpg",
      
    },
    3: {
      title: "Temple 3",
      description: `A temple is a religious building that's meant for worshipping or praying. Hindu temples are typically devoted to one specific god. While temples tend to be associated with non-Christian religions like Islam, Judaism, and Buddhism, some sects of Orthodox Christianity worship in temples as wel
    `,

      image:
        "https://thumbs.dreamstime.com/b/ancient-hindu-temple-konark-india-intricate-carvings-stone-wheel-surya-orissa-th-century-ad-33044676.jpg",
    },
    4: {
      title: "Temple  4",
      description: `The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam
    The Kuladeivam can be a male, or a female and these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity (Sanctum Sanctorum) while other 
     Gods may also be present in the periphery. The Kula deivam can be formless as well.
     The Kuladeivam can be a male, or a female and these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity.The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam
     The Kuladeivam can be a male, or a female and these
     deities are consecrated in a manner to protect and nurture
     people belonging to a particular. Generally, Temple of a 
     Kula deivam is constructed in one's ancestral village or town,
      will have it as the main deity (Sanctum Sanctorum) while other 
      Gods may also be present in the periphery. The Kula deivam can be formless as well.
      The Kuladeivam can be a male, or a female and these
     deities are consecrated in a manner to protect and nurture
     people belonging to a particular`,
      image:
        "https://t3.ftcdn.net/jpg/04/69/85/20/360_F_469852099_bO6ycWJoQXUyqVj9So2Dnfx6gVqSQAKF.jpg",
    },
    5: {
      title: "Temple  5",
      description: `The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam
    The Kuladeivam can be a male, or a female and these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity (Sanctum Sanctorum) while other 
     Gods may also be present in the periphery. The Kula deivam can be formless as well.
     The Kuladeivam can be a male, or a female and these
    deities are consecrated in a manner to protect and nurture
    people belonging to a particular. Generally, Temple of a 
    Kula deivam is constructed in one's ancestral village or town,
     will have it as the main deity.The Kuladeivam-s are deities that the Father's side ancestors (forefathers) worshiped. In fact, each clan has a separate Kuladeivam
     The Kuladeivam can be a male, or a female and these
     deities are consecrated in a manner to protect and nurture
     people belonging to a particular. Generally, Temple of a 
     Kula deivam is constructed in one's ancestral village or town,
      will have it as the main deity (Sanctum Sanctorum) while other 
      Gods may also be present in the periphery. The Kula deivam can be formless as well.
      The Kuladeivam can be a male, or a female and these
     deities are consecrated in a manner to protect and nurture
     people belonging to a particular`,
      image:
      'https://i.etsystatic.com/21035089/r/il/597969/4740565990/il_fullxfull.4740565990_b365.jpg'
    },
  };

  const card = cardDetails[id];

  if (!card) {
    return <div>Card not found</div>;
  }

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <Layout />
      <h2>Temple Details</h2>
      <Card>
        <CardMedia
          component="img"
          src={card.image}
          alt={card.title}
          style={{ maxWidth: "full", maxHeight: "350px", marginRight: "45px" }}
        />
      </Card>
      <p>TEMPLE: {id}</p>
      <h3 >{card.title}</h3>
      <p>{card.description}</p>
      <button onClick={handleGoBack} style={{margin:"10px"}}>Go Back</button>
    </div>
  );
};

export default CardDetails;

// import React from 'react';
// import { useLocation, useParams } from 'react-router-dom';

// // const CardDetails = () => {
// //   // const { id } = useParams();
// //   const { card} = useParams();
// //   const location = useLocation();

//   const CardDetails = () => {
//     const location = useLocation();
//     const { card } = location.state;

//   // Fetch card details based on the id from an API or any other data source

//   return (
//     <div>
//       <h2>Card Details </h2>
//       <p>Card ID: {card.id}</p>
//       <p>card: {card.description}</p>
//       <p>Current Location: {location.pathname}</p>
//             {/* Display other details of the card */}
//     </div>
//   );
// };

// export default CardDetails;
