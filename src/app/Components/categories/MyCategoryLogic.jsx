"use client";
import dynamic from "next/dynamic";
import React from "react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import MyCard from "./MyCard";

// Dynamically import Swiper components
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then((mod) => mod.SwiperSlide), { ssr: false });

const MyCategoryLogic = ({
  imgUrls,
  swiperRef,
  setIsBeginning,
  setIsEnd,
  num,
}) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      lazy={true}
      breakpoints={{
        200: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
      className="mySwiper"
    >
      {imgUrls === true ? (
        Array.from({ length: num }).map((_, index) => (
          <SwiperSlide key={index}>
            <MyCard />
          </SwiperSlide>
        ))
      ) : (
        <Box
          sx={{
            width: { sm: "100%", md: "100%" },
            textAlign: { sm: "left", md: "center" },
            px: 3,
          }}
        >
          <Typography
            component="h2"
            variant="h6"
            color="text.primary"
            sx={{
              textAlign: "center",
              fontFamily: "__Lexend_Fallback_86777a",
              fontWeight: "bold",
              color: "#1C5D76",
            }}
          >
            There is No Clients until Now.
          </Typography>
        </Box>
      )}
    </Swiper>
  );
};

export default MyCategoryLogic;
