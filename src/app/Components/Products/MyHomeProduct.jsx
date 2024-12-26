import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import AllProducts from './AllProducts';


const MyHomeProduct = () => {
  return (
    <Box
      sx={{
        mb: 0,
        mt: "-7px",
        position: "relative",
        bgcolor: "white",
        // borderRadius: "40px",
        backgroundImage:
          "url('https://res.cloudinary.com/dyunrntg7/image/upload/v1735150771/background_eiio4i.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ":before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)" /* Adjust opacity as needed */,
          zIndex: "0",
        },
      }}
    >
      <AllProducts />
    </Box>
  );
}

export default MyHomeProduct;