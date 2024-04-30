// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, Typography } from '@material-ui/core';

// const TempleCard = ({ id }) => {
//   const [templeData, setTempleData] = useState(null);

//   useEffect(() => {
//     const fetchTempleData = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos/${id}`);
//         const data = await response.json();
//         setTempleData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchTempleData();
//   }, [id]);

//   if (!templeData) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">{templeData.name}</Typography>
//         <Typography>{templeData.location}</Typography>
//         {/* Display other temple details */}
//       </CardContent>
//     </Card>
//   );
// };

// const About = () => {
//   // Assuming you have a list of temple IDs
//   const templeIds = [1, 2, 3];

//   return (
//     <>
//       {templeIds.map((id) => (
//         <TempleCard key={id} id={id} />
//       ))}
//     </>
//   );
// };

// export default About;





import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import CardList from "../components/CardList";
import ProductCard from "../components/ProductCard";
// import Scrollup from "../components/Scrollup";

const About = () => {
  return (
    <Layout>
      {/* <CardList/> */}
      {/* <Scrollup/> */}
      
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To our Kuladeivam portal</Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          deserunt libero reprehenderit cum sint fugit cumque temporibus modi
          facere eveniet amet obcaecati ducimus harum velit maxime vel qui
          voluptatibus quam odio corrupti saepe, voluptas dolorum quidem
          tempore? Esse sapiente molestias minus enim quisquam dolorum eum culpa
          ullam impedit velit quo, corporis ducimus numquam dignissimos
          inventore maiores. Nam deleniti itaque nostrum neque dolorum dolores,
          aliquam, voluptatum sapiente doloribus laborum perspiciatis ipsam, quo
          ut nisi distinctio sunt nihil est blanditiis perferendis eveniet
          nesciunt! Nostrum, voluptatum eveniet repellat vel officia deleniti
          tempore voluptatibus perferendis esse eaque temporibus porro?
          Aspernatur beatae deleniti illo autem!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
