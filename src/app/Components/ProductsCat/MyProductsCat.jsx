"use server";
import React from "react";
import Box from "@mui/material/Box";
import AllProducts from "./AllProducts";
import axios from "axios";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import ClientPathnameHandler from "./ClientPathnameHandler";

const MyProductsCat = async ({ id }) => {
  console.log("Current Path:", Number(id)); // Debugging

  let Products;
  try {
    if (Number.isNaN(Number(id))) {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/Products`
      );
      Products = response.data;
      // console.log("-------------------------------"); // Debugging
    } else {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/Products?categoryID=${id}`
      );
      Products = response.data;
      // console.log("==============================");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    Products = { data: [] }; // Fallback data
  }

  let Categories;


  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/Categories?sort=name`
    );
    Categories = response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    Categories = { data: [] }; // Fallback data
  }

  const selectedCategory = Categories?.data?.data?.find(
    (category) => category.id === Number(id)
  );

  return (
    <Box
      sx={{
        mb: 0,
        mt: "-7px",
        position: "relative",
        bgcolor: "white",
      }}
    >
      <ClientPathnameHandler selectedCategory={selectedCategory} />
      <AllProducts Categories={Categories} id={id} Products={Products} />
    </Box>
  );
};

export default MyProductsCat;
