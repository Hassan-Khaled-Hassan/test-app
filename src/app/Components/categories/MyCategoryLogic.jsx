import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Typography } from "@mui/material";
import MyCard from "./MyCard";

const MyCategoryLogic = ({ swiperRef, setIsBeginning, setIsEnd, response }) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      pagination={{ clickable: true }}
      navigation={true}
      // autoplay={{
      //   delay: 3000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={20}
      breakpoints={{
        200: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1190: { slidesPerView: 3 },
      }}
      className="mySwiperBlog"
    >
      {response?.length > 0 ? (
        response.map((item, index) => (
          <SwiperSlide key={index}>
            <MyCard item={item} />
          </SwiperSlide>
        ))
      ) : (
        <Box sx={{ width: "100%", textAlign: "center", px: 3 }}>
          <Typography
            component="h2"
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#1C5D76",
            }}
          >
            There are no clients yet.
          </Typography>
        </Box>
      )}
    </Swiper>
  );
};

export default MyCategoryLogic;
