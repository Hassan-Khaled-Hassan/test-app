'use server'
import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import LogoCollection from "./AllQuestions";
import axios from "axios";

const MyHomeClients = async() => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Clients/Clients`
  );
  // console.log(response.data.data);
  const filteredClients = response.data.data.filter(
    (client) => client.clientType.id === 2
  );
    const filteredClientsRetail = response.data.data.filter(
    (client) => client.clientType.id === 1
  );
  // console.log(filteredClients);
  // console.log(filteredClientsRetail);

  return (
    <Box
      sx={{
        mb: 0,
        // mt: "-96px",
        position: "relative",
        bgcolor: "#F5F5DC", //rgb(228 192 94)
        // borderRadius: "40px",
      }}
    >
      <LogoCollection part1="Retail" name=" Clients" response={filteredClientsRetail}/>
      <LogoCollection part1="Ecommerce" name=" Clients" response={filteredClients}/>
    </Box>
  );
}

export default MyHomeClients;