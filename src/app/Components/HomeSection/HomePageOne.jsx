"use client";
import React, { useState, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const HomePageOne = () => {
  return (
    <Box
      sx={{
        marginTop: { xs: 12, lg: 18.5 },
        display: { xs: "block", md: "none" },
      }}
    >
      <Box
        className="video"
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
          height: 0,
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/WHqA4S1I2ow?rel=0&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&iv_load_policy=3&playlist=WHqA4S1I2ow"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            filter: "brightness(0.8)",
          }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default HomePageOne;
