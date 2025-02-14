"use client";
import React, { useState, useEffect } from "react";
import { Box,Typography,Button,Stack, useMediaQuery, useTheme } from "@mui/material";

const HomePageTwo = ({homeData}) => {
  return (
    <Box
      sx={{
        marginTop: { xs: 10, lg: 13 },
        display: { xs: "flex", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('https://res.cloudinary.com/dsccvadus/image/upload/v1739468522/yxj8zyvmfvpytujz8t61.png')`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", sm: "center" },
        height: { xs: "auto", sm: "932px" },
      }}
    >
      <Box
        className="video"
        sx={{
          position: "relative",
          width: { xs: "98%", sm: "80%" },
          // overflow: "hidden",
          // height: 0,
          display: { xs: "flex", sm: "flex" },
          justifyContent: { xs: "center", sm: "start" },
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "start" },
            flexWrap: "wrap",
            gap: 1,
            bgcolor: "#4C6444",
            maxWidth: { xs: "90%", md: "53%" },
            p: 3,
            borderRadius: "30px",
            my: { xs: 6, sm: "auto" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#F4F6FA",
              mb: 2,
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Who are we ?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#F4F6FA",
              mb: 1,
              textAlign: "justify",
              fontSize: "20px",
              // fontWeight: "bold",
              lineHeight: "2",
            }}
          >
            Siwa Garden brings authentic Mediterranean flavors through
            high-quality pickled products. We use fresh, sustainably sourced
            ingredients and traditional methods to ensure great taste and top
            quality in every jar.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Button
              sx={{
                borderRadius: "16px",
                p: ["10px 22px", "15px 30px"],
                background: "#F1E8D8",
                color: "#000000",
                width: "195px",
                fontWeight: "bold",
                transition: "all 0.6s",
                ":hover": {
                  background: "#F1E8D8",
                  color: "#000000",
                  // border : "0px"
                },
              }}
              type="submit"
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageTwo;