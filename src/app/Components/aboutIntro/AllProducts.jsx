"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/system";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function AllProducts() {
  const theme = useTheme();
  return (
    <Container
      id="testimonials"
      //   maxWidth="xl"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 1 },
        px: { xs: "5px", sm: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          // width: { xs: "99%", md: "96%" },
          // margin: "10px auto",
          maxWidth: "95%",
          margin: "auto",
          mb: "10px",
        }}
      >
        <Box
          sx={{
            mt: "15px",
            fontSize: "40px",
            fontWeight: "bold",
            color: "#4CAF50",
          }}
        >
          About
        </Box>
      </Box>
      <Box>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ color: "white", fontSize: { xs: "14px", sm: "25px" } }}
        >
          <Link
            underline="hover"
            color="white"
            href="/"
            sx={{ color: "white", fontSize: { xs: "14px", sm: "25px" } }}
          >
            Home
          </Link>
          <Typography
            sx={{ color: "#FFD700", fontSize: { xs: "14px", sm: "25px" } }}
          >
            Breadcrumbs
          </Typography>
        </Breadcrumbs>
      </Box>
    </Container>
  );
}
