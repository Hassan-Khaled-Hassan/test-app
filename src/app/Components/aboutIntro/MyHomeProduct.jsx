"use client";
import React from "react";
import AllProducts from "./AllProducts";
import { useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/material";

const MyHomeProduct = ({ name , ...links }) => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("ssm"));

  return (
    <Box
      sx={{
        mb: 1,
        mt: isSmallMobile ? "14px" : 10,
        position: "relative",
        bgcolor: "white",
        backgroundImage:
          "url('https://res.cloudinary.com/dyunrntg7/image/upload/v1735573867/pexels-photo-4916275_hnw0ly.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        ":before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgb(0 0 0 / 2%)",
          zIndex: "0",
        },
      }}
    >
      <AllProducts {...links} name={name}/>
    </Box>
  );
};

export default MyHomeProduct;
