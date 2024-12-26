"use client";
// app/not-found.js
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },
        justifyContent: "center",
        alignItems: "center",
        // width: { xs: "99%", md: "96%" },
        // margin: "10px auto",
        width: "62%",
        margin: "auto",
        mb: "30px",
        marginTop: "200px",
      }}
    >
      <Box
        sx={{
          mt: "15px",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#8B4513",
        }}
      >
        Page Not Found
      </Box>
      <Typography
        component="h1"
        variant="body2"
        sx={{
          width: "100%",
          fontSize: "clamp(2rem, 10vw, 2.15rem)",
          mb: 4,
          textTransform: "capitalize",
          color: "black",
          textAlign: "center",
          marginTop: "18px",
          fontSize: "32px !important",
          textTransform: "none",
        }}
      >
        Sorry, the page you are looking for does not exist. <br/>
        You can {" "}
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
           Go back to the homepage
        </Link>
      </Typography>
    </Box>
  );
}
