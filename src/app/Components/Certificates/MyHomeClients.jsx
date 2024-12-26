import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import LogoCollection from "./AllQuestions";


const MyHomeCertificate = () => {
  return (
    <Box
      sx={{
        mb: 4,
        // mt: "-96px",
        position: "relative",
        bgcolor: "white",
        // borderRadius: "40px",
      }}
    >
      <LogoCollection part1="Our" name= " Certificates"/>
    </Box>
  );
}

export default MyHomeCertificate;