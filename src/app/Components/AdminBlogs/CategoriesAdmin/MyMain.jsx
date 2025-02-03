"use server";
import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { getCookie, getCookies, hasCookie } from 'cookies-next/server';
import { cookies } from 'next/headers'; // Ensure correct import
import MyFormContainer from './MyFormContainer'
const MyMain = async ({ part1, name }) => {
  const authToken = await getCookie('authToken', { cookies });
  // console.log("1-=====================================");
  // console.log("Server-side authToken:", authToken);
  // console.log("2-=====================================");

  // Uncomment if API call is required
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/Blogs`,
    config
  );
  // console.log(response.data);
   let newItems = [];
    let count=1;
   if (response.data.data.length > 0) {
  // console.log("response================");
   newItems = response.data.data.map((item, index) => {
       return {
         id: count++, // Start with 1 and increase with each map iteration
         registrarId: item.id,
         name: item.name,
         description: item.description,
         image: item.image && item.image != "" ? item.image.url : "",
         actions: "Delete",
       };
   }).filter((item) => item !== null);
    // Filter out null values
 }
  // console.log(response.data);
  // console.log(newItems);


  return (
    <Box sx={{ mt: { xs: "5px", sm: 13, md: 6 }, pb: 6, bgcolor: "#ECECEC" }}>
      <MyFormContainer part1={part1} name={name} newItems={newItems} />
    </Box>
  );
};

export default MyMain;
