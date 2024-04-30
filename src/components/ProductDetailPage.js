import { Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./Footer";
const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!userData) {
    return <Typography>Loading...</Typography>;
  }
  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };
  return (
    <>
    <Layout/>
      <h1>Admin Details</h1>
      {/* <ul>
        <li>
        <li>
                  <NavLink activeClassName="active" to={"/users/:id"}> */}
      <Typography>
        <h3>Name:</h3> {userData.name}
      </Typography>
      <Typography>
        <h3>Email:</h3> {userData.email}
      </Typography>
      <Typography>
        <h3>Address-</h3> Street : {userData?.address?.street} |
         City : {userData?.address?.city} | Zipcode : {userData?.address?.zipcode}
      </Typography>
      <Typography>
        {" "}
        <h3>Phone No. -</h3> {userData.phone}
      </Typography>
      <button style={{marginTop:"2rem" , background:"black", color:"white", padding:"5px", marginLeft:"5px"}}onClick={handleGoBack}>Go Back</button>

      {/* </NavLink>
                  
                </li>
        </li>
      </ul>
       */}
      {/* Display other user details */}
   <Footer/>
   
    </>
  );
};

export default ProductDetailPage;
