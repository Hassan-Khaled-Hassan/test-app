import React from "react";
import { Box, Typography } from "@mui/material";

const MyHeaderTwo = ({ part1, name, link, paragraphs = [] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "95%",
        margin: "auto",
        mb: "30px",
      }}
    >
      <Box
        sx={{
          mt: "15px",
          fontSize: {xs : "25px" , sm :"40px"},
          fontWeight: "bold",
          color: "#050430",
        }}
      >
        <span>{part1}</span>
        {name}
      </Box>
      {paragraphs.length > 0 &&
        paragraphs.map((paragraph, index) => (
          <Typography
            key={index}
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              flexWrap: "wrap",
              fontSize: "20px",
              textAlign: "center",
              color: "black",
              mt: 2,
            }}
          >
            {paragraph}
          </Typography>
        ))}
    </Box>
  );
};

export default MyHeaderTwo;
