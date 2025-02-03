'use server'
import { Box } from "@mui/material";
import React from "react";
import SignInCard from "./SignInCard";
import axios from "axios";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
const MyAboutContent = async({ id }) => {
  // console.log(data);
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Blog/Blogs/${id}`
  );
  console.log(response.data);
  return (
    <Box sx={{ mt: 6 }}>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        products={{ label: "Blogs", href: "/Blogs" }}
        Categories={{ label: response.data.data.name }}
        name={response.data.data.name}
      />
      <SignInCard response={response.data.data} />
    </Box>
  );
};

export default MyAboutContent;
