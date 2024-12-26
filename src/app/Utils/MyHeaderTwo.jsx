import React from 'react'
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
const MyHeaderTwo = ({ part1, name, link }) => {
  return (
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
        mb: "30px",
      }}
    >
      <Box
        sx={{
          mt: "15px",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#FFD700",
        }}
      >
        <span style={{ borderBottom: "4px solid #8B4513" }}>{part1}</span>
        {name}
      </Box>
    </Box>
  );
};

export default MyHeaderTwo