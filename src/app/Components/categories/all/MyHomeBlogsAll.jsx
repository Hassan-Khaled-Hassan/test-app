import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import AllProducts from './AllProducts';


const MyHomeBlogsAll = () => {
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

export default MyHomeBlogsAll;