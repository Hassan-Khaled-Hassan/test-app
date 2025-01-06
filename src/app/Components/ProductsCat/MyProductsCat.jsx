import React from 'react'
import Box from "@mui/material/Box";
import AllProducts from './AllProducts';
// import "./restDetails.css";



const MyProductsCat = () => {
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
      <AllProducts />
    </Box>
  );
}

export default MyProductsCat;