import React from 'react'
import Box from "@mui/material/Box";
import "./restDetails.css";
import MyHomeCategoryContain from './MyHomeCategoryContain';
const MyHomeCategory = () => {
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
      <MyHomeCategoryContain />
    </Box>
  );
}

export default MyHomeCategory