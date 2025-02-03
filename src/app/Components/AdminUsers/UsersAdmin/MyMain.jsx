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
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Users/AllUsers?role=user`,
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
         email: item.email,
         phone: item.phone,
         type: item.role,
         image:
           item.imageCover && item.imageCover != "" ? item.imageCover.url : "",
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
