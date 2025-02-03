import React from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import MyFormContainer from "./MyFormContainer";
import { cookies } from 'next/headers'; // Ensure correct import
import { getCookie, getCookies, hasCookie } from 'cookies-next/server';
import axios from "axios";
const MyMain = async({part1 , name}) => {
  return (
    <Box sx={{ mt: { xs: "-11px", sm: 13, md: 6 }, pb: 6, bgcolor: "#ECECEC" }}>
      <MyFormContainer part1={part1} name={name} />
    </Box>
  );
};

export default MyMain;
