import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import LogoCollection from "./AllQuestions";


const MyHomeClients = () => {
  return (
    <Box
      sx={{
        mb: 0,
        // mt: "-96px",
        position: "relative",
        bgcolor: "rgb(228 192 94)",
        // borderRadius: "40px",
      }}
    >
      <LogoCollection part1="Retail" name= " Clients"/>
      <LogoCollection part1="Ecommerce" name= " Clients"/>
    </Box>
  );
}

export default MyHomeClients;