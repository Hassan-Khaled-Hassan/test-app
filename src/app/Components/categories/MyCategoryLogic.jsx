"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MyCard from "./MyCard";

const MyCategoryLogic = ({
  imgUrls,
  swiperRef,
  setIsBeginning,
  setIsEnd,
  num,
  response
}) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper; // Set swiper instance to the ref
      }}
      onSlideChange={(swiper) => {
        // Update states based on swiper's position
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      pagination={{ clickable: true }}
      //   autoplay={{
      //     delay: 3000,
      //     disableOnInteraction: false,
      //     pauseOnMouseEnter: true,
      //   }} // Enables autoplay
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      lazy="true"
      breakpoints={{
        200: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
      className="mySwiper"
    >
      {response?.length > 0 ? (
        response.map((item, index) => (
          <SwiperSlide key={index}>
            <MyCard item={item}/>
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
