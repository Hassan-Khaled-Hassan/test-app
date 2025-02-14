"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SignInCard from "./SignInCard";
import Image from "next/image";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
const MySignUp = () => {
  return (
    <Box sx={{ mt: 6 }}>
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
          // borderTop: "1px solid",
          // borderColor: "divider",
          bgcolor: "#4C6444",
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
            <SignInCard />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                width: { xs: "100%", md: "32%" },
                height: { xs: "600px", md: "auto", lg: "610px" },
                maxHeight: "832px",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dyunrntg7/image/upload/v1735564848/pexels-photo-6231906_qrnuxl.jpg"
                width={568}
                height={366}
                alt="Description"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MySignUp;
