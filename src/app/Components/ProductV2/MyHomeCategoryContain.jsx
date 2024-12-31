"use client";
import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MyHeaderOne from "@/app/Utils/MyHeaderOne";
import MyCategoryLogic from "./MyCategoryLogic";

const MyHomeCategoryContain = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // State for tracking if at the first slide
  const [isEnd, setIsEnd] = useState(false);

  return (
    <Box>
      <MyHeaderOne
        part1={"Our"}
        name={" Products"}
        swiperRef={swiperRef}
        isBeginning={isBeginning}
        isEnd={isEnd}
        link="/categories/All-Categories"
      />
      <Container
        id="pricing"
        maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 1 },
          pb: { xs: 1, sm: 1 },
          position: "relative",
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
          imgUrls={true}
          swiperRef={swiperRef}
          setIsBeginning={setIsBeginning}
          setIsEnd={setIsEnd}
          num={10}
        />
      </Container>
    </Box>
  );
};

export default MyHomeCategoryContain;
