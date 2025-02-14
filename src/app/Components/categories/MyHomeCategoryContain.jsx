"use client";
import React, { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import MyHeaderOne from "@/app/Utils/MyHeaderOne";
import MyCategoryLogic from "./MyCategoryLogic";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
const MyHomeCategoryContain = ({response}) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true); // State for tracking if at the first slide
  const [isEnd, setIsEnd] = useState(false);
    const buttonStyles = {
    color: "#8B4513",
    border: "3px solid #8B4513",
    mx: "4px",
    fontSize: "20px",
    position: "absolute",
    left: "-70px",
    top: "40%",
    zIndex : 1,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#8B4513",
      color: "white",
      transform: "scale(1.1)",
    },
  };
      const buttonStylesNext = {
    color: "#8B4513",
    border: "3px solid #8B4513",
    mx: "4px",
    fontSize: "20px",
    position: "absolute",
    right: "-70px",
    top: "40%",
        zIndex : 1,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#8B4513",
      color: "white",
      transform: "scale(1.1)",
    },
  };

  return (
    <Box>
      <MyHeaderOne
        part1={"The"}
        name={" Power of Olive Oil"}
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
          maxWidth : "1291px !important",
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