"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 32px",
  opacity: 1,
  background: "transparent",
};

export default function LogoCollection({ name , part1 , response }) {
  const theme = useTheme();
  return (
    <Box id="logoCollection" sx={{ py: 6 }}>
      <Box
        sx={{
          mt: "15px",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#050430",
          textAlign: "center",
        }}
      >
        <span>{part1}</span>
        {name}
      </Box>
      <Grid
        container
        sx={{ justifyContent: "center", mt: { xs: 2, md: 4 }, opacity: 1 }}
      >
        {response.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo?.image?.url || ""}
              alt={logo.name}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}