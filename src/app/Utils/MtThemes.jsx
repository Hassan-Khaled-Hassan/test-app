'use client'
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

// Create a custom theme with a `lg` breakpoint set to 992px
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      msm: 768,
      md: 900,
      mmd : 992,
      lg: 1100, // Custom breakpoint for 992px
      xl :1536,
    },
  },
});

function MtThemes({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MtThemes;
 