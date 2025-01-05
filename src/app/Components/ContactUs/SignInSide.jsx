"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import SignInCard from "./SignInCard";
import Content from "./Content";

export default function SignInSide() {
  return (
    <Stack
      direction="column"
      component="main"
      sx={[
        {
          justifyContent: "center",
          height: "calc((1 - var(--template-frame-height, 0)) * 100%)",
          marginTop: "max(40px - var(--template-frame-height, 0px), 0px)",
          minHeight: "100%",
          mb:18,
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
        direction={{ xs: "column", md: "row" }}
        sx={{
          justifyContent: "center",
          gap: { xs: 3, md: 6 },
          p: { xs: "4px", sm: 4 },
          mx: "auto",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 3, sm : 1, md: 4 },
            p: 0,
            m: "auto",
          }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </Stack>
  );
}
