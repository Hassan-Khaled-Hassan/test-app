"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SignInCard from "./SignInCard";
import Image from "next/image";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
const MyAboutContent = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Box sx={{ width: { xs: "96%", md: "85%" }, m: "auto" }}>
        <MyHeaderTwo
          part1="About"
          name=" Us"
          link="/"
          paragraphs={[
            "Nile Garden is a company deeply rooted in the traditions of Mediterranean cuisine, with a mission to bring the rich and savory flavors of this region to tables worldwide. Our journey began with a simple yet profound goal: to craft pickled products that not only taste delicious but also embody the essence of authentic Mediterranean pickling methods. Over the years, we have dedicated ourselves to perfecting our recipes and refining our techniques, ensuring that every product we offer meets the highest standards of quality and taste.",
            "Our team comprises skilled artisans and food experts who share a common passion for excellence in every jar we produce. At Nile Garden, we believe that the best pickles start with the best ingredients. This is why we meticulously select the freshest olives, cucumbers, peppers, carrots, and other vegetables, sourced from trusted farmers who adhere to sustainable and ethical farming practices. Our commitment to quality begins in the fields and extends through every step of our production process.",
          ]}
        />
      </Box>
      <Container
        id="SignUp"
        maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 0 },
          pb: { xs: 1, sm: 0 },
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: "2px" },
          flexGrow: 1,
          paddingRight: "0px !important",
          paddingLeft: "0px !important",
          width: "100%",
          m: 0,
          mt: 6,
          mb: 6,

          // borderTop: "1px solid",
          // borderColor: "divider",
          bgcolor: "transparent",
        }}
      >
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: "center",
              height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
              marginTop: "0px",
              minHeight: "100%",
              width: "100%",
            },
            (theme) => ({
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                zIndex: -1,
                inset: 0,
                backgroundImage:
                  "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
                backgroundRepeat: "no-repeat",
                ...theme.applyStyles("dark", {
                  backgroundImage:
                    "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
                }),
              },
            }),
          ]}
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 3 },
              p: 0,
              mx: "auto",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                width: { xs: "100%", md: "100%" },
                height: { xs: "600px", md: "auto" },
                maxHeight: "800px",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dyunrntg7/image/upload/v1735564848/pexels-photo-6231906_qrnuxl.jpg"
                width={568}
                height={466}
                alt="Description"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MyAboutContent;
