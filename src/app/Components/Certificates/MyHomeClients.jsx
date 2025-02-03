'use server'
import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import LogoCollection from "./AllQuestions";
import axios from "axios";

const MyHomeCertificate = async (async) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Certification/Certifications`
  );
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
      <LogoCollection part1="Our" name= " Certificates" response={response.data.data}/>
    </Box>
  );
}

export default MyHomeCertificate;