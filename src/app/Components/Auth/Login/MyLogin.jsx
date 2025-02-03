"use client";
import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import LoginCard from "./LoginCard";

const MyLogin = () => {
  return (
    <Box sx={{ mt: { xs: 8, sm: 10, md: 15 }, bgcolor: "#f1f8fe" }}>
      <Container
        id="SignUp"
        maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 1 },
          pb: { xs: 1, sm: 1 },
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: "2px" },
          flexGrow: 1,
          paddingRight: "0px !important",
          paddingLeft: "0px !important",
          width: "96%",
          // borderTop: "1px solid",
          // borderColor: "divider",
        }}
      >
        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: "center",
              height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
              marginTop: "max(40px - var(--template-frame-height, 0px), 0px)",
              minHeight: "100%",
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
              p: 2,
              mx: "auto",
            }}
          >
            <LoginCard />
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                maxWidth: { md: "360px", lg: "568px" },
                height: "500px",
              }}
            >
              <Image
                src="/olive tree-bro.png"
                width={500}
                height={500}
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

export default MyLogin;
