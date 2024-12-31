import React from 'react'
import Box from "@mui/material/Box";
import "./restDetails.css";
import MyHomeCategoryContain from './MyHomeCategoryContain';
const MyHomeProducts = () => {
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
      <MyHomeCategoryContain />
    </Box>
  );
}

export default MyHomeProducts;