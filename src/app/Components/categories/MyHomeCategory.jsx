'use server'
import React from 'react'
import Box from "@mui/material/Box";
import "./restDetails.css";
import axios from "axios";
import MyHomeCategoryContain from './MyHomeCategoryContain';
const MyHomeCategory = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/Blogs`,
        { cache: "no-store" }
      );
  // console.log(response.data);
  const response = await data.json();
  return (
    <Box
      sx={{
        // mt: "-96px",
        pt: 4,
        pb: 2,
        position: "relative",
        bgcolor: "white",
        borderRadius: "0px",
      }}
    >
      <MyHomeCategoryContain response={response.data} />
    </Box>
  );
}

export default MyHomeCategory