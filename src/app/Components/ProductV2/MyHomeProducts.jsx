"use server";
import React from 'react'
import Box from "@mui/material/Box";
import "./restDetails.css";
import MyHomeCategoryContain from './MyHomeCategoryContain';
import axios from "axios";
import { unstable_noStore as noStore } from "next/cache";
const MyHomeProducts = async () => {
 noStore(); // Ensures data is always fresh
 const data = await fetch(
   `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/Categories`,
   { cache: "no-store" }
 );
const response = await data.json();
  console.log(response)
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
      {response?.data?.length > 0 ? (
        <MyHomeCategoryContain response = {response.data}/>
      ) : null}
    </Box>
  );
}

export default MyHomeProducts;