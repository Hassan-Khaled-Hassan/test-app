import { Box, IconButton } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Link from "next/link";

const MyHeaderOne = ({
  part1 = "",
  name = "",
  swiperRef,
  isBeginning = false,
  isEnd = false,
  link = "#",
}) => {
  const buttonStyles = {
    color: "#8B4513",
    border: "3px solid #8B4513",
    mx: "4px",
    fontSize: "20px",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#8B4513",
      color: "white",
      transform: "scale(1.1)",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "98%", sm: "96%" },
        margin: "10px auto",
        padding: "0 1%",
      }}
    >
      <Link href={link} passHref style={{textDecoration : "none"}}>
        <Box
          sx={{
            mt: "15px",
            fontSize: { xs: "26px", sm: "40px" },
            fontWeight: "bold",
            color: "#4C6444",
            textAlign : "center",
          }}
          aria-label={`Go to ${name}`}
        >
          <span >{part1}</span>
          {name}
        </Box>
      </Link>
    </Box>
  );
};

export default MyHeaderOne;
