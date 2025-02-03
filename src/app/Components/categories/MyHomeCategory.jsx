'use server'
import React from 'react'
import Box from "@mui/material/Box";
import "./restDetails.css";
import axios from "axios";
import MyHomeCategoryContain from './MyHomeCategoryContain';
const MyHomeCategory = async () => {
    const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/Blogs`
  );
  // console.log(response.data);
  return (
    <Box
      sx={{
        // mt: "-96px",
        pt: 4,
        pb: 2,
        position: "relative",
        bgcolor: "#F5F5DC",
        borderRadius: "0px",
      }}
    >
      <MyHomeCategoryContain response={response.data.data} />
    </Box>
  );
}

export default MyHomeCategory