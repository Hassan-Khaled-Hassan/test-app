'use server'
import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import LogoCollection from "./AllQuestions";
import axios from "axios";

const MyHomeCertificate = async (async) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Certification/Certifications`,
    { cache: "no-store" }
  );
  // display data
  const response = await data.json();
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
      <LogoCollection part1="Quality" name= " & Compliance Certifications" response={response.data}/>
    </Box>
  );
}

export default MyHomeCertificate;