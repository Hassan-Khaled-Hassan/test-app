"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SignInCard from "./SignInCard";
import Image from "next/image";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
const MyAboutContent = ({data}) => {
  console.log(data);
  return (
    <Box sx={{ mt: 6 }}>
      <Container
        id="SignUp"
        // maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 0 },
          pb: { xs: 1, sm: 0 },
          position: "relative",
          maxWidth: "1250px !important",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: "2px" },
          flexGrow: 1,
          paddingRight: "0px !important",
          paddingLeft: "0px !important",
          width: "100%",
          m: "auto",
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
                ...theme.applyStyles("dark", {
                  backgroundImage:
                    "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
                }),
              },
            }),
          ]}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 2, sm: 3 },
              p: 0,
              mx: "auto",
              width: "100%",
            }}
          >
            <SignInCard data={data} />
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                width: { xs: "100%", md: "38%" },
                height: { xs: "350px", md: "400px" },
                maxHeight: "800px",
              }}
            >
              <Image
                src={`${data.image}`}
                width={568}
                height={466}
                alt="Description"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "46px",
                  padding: 8,
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MyAboutContent;
