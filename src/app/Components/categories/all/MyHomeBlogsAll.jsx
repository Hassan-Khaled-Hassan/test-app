'use server'
import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import AllProducts from './AllProducts';
import axios from "axios";

const MyHomeBlogsAll = async() => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/Blogs`,
    { cache: "no-store" }
  );
  // console.log(response.data.data);
  const response = await data.json();
  return (
    <Box
      sx={{
        mb: 0,
        mt: "-7px",
        position: "relative",
        bgcolor: "white",
        // borderRadius: "40px",
      }}
    >
      <AllProducts  response={response.data}/>
    </Box>
  );
}

export default MyHomeBlogsAll;