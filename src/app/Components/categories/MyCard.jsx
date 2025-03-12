import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
const MyCard = ({ item }) => {
  return (
  <Link href={`/Blogs/BlogDetails/${item.id}`}>
    <Paper
      component="div"
      sx={{
        position: "relative",
        backgroundImage: `url('${item?.image?.url || ""}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        width: { xs: "90%", sm: "87%", md: "94%", lg: "375px" },
        height: { xs: "300px", sm: "350px", md: "440px" },
        m: "auto",
        cursor: "pointer",
        overflow: "hidden",
        transition:
          "transform 0.3s ease, filter 0.3s ease , box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(0.95)",
          filter: "brightness(0.9)",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 120%)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          height: "96%",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "22px", sm: "22px", md: "24px" },
            p: "0px 22px",
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Paper>
    </Link>
  );
};

export default MyCard;
