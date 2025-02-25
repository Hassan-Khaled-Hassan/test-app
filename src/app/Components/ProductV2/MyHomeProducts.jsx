"use server";
import React from 'react'
import Box from "@mui/material/Box";
import "./restDetails.css";
import MyHomeCategoryContain from './MyHomeCategoryContain';
import axios from "axios";
import { getCookie, getCookies, hasCookie } from 'cookies-next/server';
import { cookies } from 'next/headers';
const MyHomeProducts = async () => {
 const response = await axios.get(
   `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/Categories`,
   {
     headers: {
       "Cache-Control": "no-cache, no-store, must-revalidate",
       Pragma: "no-cache",
       Expires: "0",
     },
   }
 );

  // console.log(response.data.data)
  return (
    <Box
      sx={{
        // mt: "-96px",
        pt: 4,
        pb: 3,
        position: "relative",
        bgcolor: "white",
        borderRadius: "0px",
      }}
    >
      {response?.data?.data?.length > 0 ? (
        <MyHomeCategoryContain response = {response.data.data}/>
      ) : null}
    </Box>
  );
}

export default MyHomeProducts;