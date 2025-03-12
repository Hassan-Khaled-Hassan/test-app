'use client'
import { useState } from "react";
import { Box, Paper, Typography,Button } from '@mui/material';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import MyHeaderTwo from "@/app/Utils/MyHeaderTwo";
import Link from "next/link";
const MyCard = ({item}) => {
    const handleClick = (event) => {
    event.stopPropagation(); // Prevent Swiper from interfering
    console.log("Card clicked!");
    // alert("Card clicked!");
  };
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(false); // Reset drag state
  };

  const handleMouseMove = () => {
    setIsDragging(true); // Set dragging state when moving
  };
  return (
    <Link href={`/Products/Category/${item.id}/ALL`}>
      <Card
        sx={{
          borderRadius: "30px",
          width: { xs: "90%", sm: "87%", md: "94%", lg: "375px" },
          boxShadow: "none",
          border: "4px solid #4C6444",
          m: "auto",
          cursor: "pointer",
          height : "590px",
        }}
      >
        <CardActionArea
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          sx={{ width: "100%", height: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "transparent",
              borderRadius: "15px",
              p: "28px 10px 4px",
              m: "auto",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item?.image?.url || ""}
              alt="green iguana"
              sx={{
                width: "80%",
                margin: " auto",
                objectFit: "cover",
                height: "100%",
                // width : "253px",
              }}
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 1, // Limit to one line
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis", // Add ellipsis for overflow
                fontSize: "40px",
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                fontSize: "22px",
                textAlign: "center",
                color: "#696969",
                fontWeight: "600",
              }}
            >
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default MyCard