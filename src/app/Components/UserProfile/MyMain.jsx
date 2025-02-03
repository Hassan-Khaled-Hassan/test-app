"use server";
import React from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { getCookie, getCookies, hasCookie } from 'cookies-next/server';
import { cookies } from 'next/headers'; // Ensure correct import
import MyProfilePage from './MyProfilePage'
const MyMain = async ({ part1, name }) => {
  const authToken = await getCookie("authToken", { cookies });
  // Uncomment if API call is required
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Users/UserData`,
    config
  );
  console.log("response.data.data");

  console.log(response.data);
  return (
    <Box sx={{ mt: "95px" }}>
      <MyProfilePage part1={part1} name={name} response={response.data.data} />
    </Box>
  );
};

export default MyMain;
