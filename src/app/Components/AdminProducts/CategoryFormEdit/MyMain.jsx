"use server";
import React from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import MyFormContainer from "./MyFormContainer";
import axios from "axios";
import { getCookie, getCookies, hasCookie } from 'cookies-next/server';
import { cookies } from 'next/headers';
const MyMain = async ({part1 , name , params}) => {
  const { id } = params;
   const authToken = await getCookie('authToken', { cookies });
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/Products/${id}`,
    config
  );

  const Types = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/Categories`,
    config
  );
  // console.log(response.data);
  return (
    <Box sx={{ mt: { xs: "-11px", sm: 13, md: 6 }, pb: 6, bgcolor: "#ECECEC" }}>
      <MyFormContainer
        part1={part1}
        name={name}
        response={response.data}
        Types={Types.data.data}
      />
    </Box>
  );
};

export default MyMain;
