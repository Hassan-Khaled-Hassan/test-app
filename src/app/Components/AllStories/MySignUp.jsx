"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import SignInCard from "./SignInCard";
import Image from "next/image";
const MySignUp = ({type ,paragraph , MyImage}) => {
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
          mb: 16,
          // borderTop: "1px solid",
          // borderColor: "divider",
          bgcolor: "white",
        }}
      >
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: "center",
              // height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
              marginTop: "0px",
              // minHeight: "100%",
              width: "100%",
            },
          ]}
        >
          <Stack
            direction={{ xs: "column-reverse", md: `${type}` }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 3 },
              p: 0,
              mx: "auto",
              width: "100%",
            }}
          >
            <SignInCard paragraph={paragraph} />
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                width: { xs: "100%", md: "50%" },
                height: { xs: "500px", md: "auto" },
                maxHeight: "800px",
                justifyContent: "center",
              }}
            >
              <Image
                src={`${MyImage}`}
                width={568}
                height={466}
                alt="Description"
                style={{
                  width: "600px",
                  height: "500px",
                  borderRadius: "15px",
                }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default MySignUp;
