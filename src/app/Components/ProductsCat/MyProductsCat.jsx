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
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/Products`,
        { cache: "no-store" }
      );
      const response = await data.json();
      Products = response;
      // console.log("-------------------------------"); // Debugging
    } else {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Product/Products?categoryID=${id}`,
        { cache: "no-store" }
      );
      const response = await data.json();
      Products = response;
      // console.log("==============================");
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    Products = { data: [] }; // Fallback data
  }

  let Categories;


  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Category/Categories?sort=name`,
      { cache: "no-store" }
    );
    const response = await data.json();
    Categories = response;
  } catch (error) {
    console.error("Error fetching categories:", error);
    Categories = { data: [] }; // Fallback data
  }

  let selectedCategory = null;
  if (!Number.isNaN(Number(id))) {
    selectedCategory = Categories?.data?.find(
      (category) => category.id === Number(id)
    );
  }
    // console.error("selectedCategory: ", selectedCategory);
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
