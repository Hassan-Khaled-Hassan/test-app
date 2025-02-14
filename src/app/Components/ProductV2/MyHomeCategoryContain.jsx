"use client";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MyHeaderOne from "@/app/Utils/MyHeaderOne";
import MyCategoryLogic from "./MyCategoryLogic";

const MyHomeCategoryContain = ({response}) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // State for tracking if at the first slide
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Box>
      <MyHeaderOne
        part1={"Discover"}
        name={" high-quality products curated just for you"}
        swiperRef={swiperRef}
        isBeginning={isBeginning}
        isEnd={isEnd}
        link="/categories/All-Categories"
      />
      <Container
        id="pricing"
        // maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 1 },
          pb: { xs: 1, sm: 1 },
          position: "relative",
          maxWidth : "1300px !important",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: { xs: 3, sm: "2px" },
          flexGrow: 1,
          paddingRight: "0px !important",
          paddingLeft: "0px !important",
        }}
      >
        <MyCategoryLogic
          swiperRef={swiperRef}
          setIsBeginning={setIsBeginning}
          setIsEnd={setIsEnd}
          response={response}
        />
      </Container>
    </Box>
  );
};

export default MyHomeCategoryContain;
