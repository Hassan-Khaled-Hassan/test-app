import { Box, Paper, Typography,Button } from '@mui/material';
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
const MyCard = () => {
  return (
    <Paper
      component="div"
      // maxWidth="sm"
      sx={{
        backgroundColor: "#0E83AF",
        backgroundImage:
          "url('https://res.cloudinary.com/dyunrntg7/image/upload/v1735150769/image_z9jvlv.png')",
        backgroundSize: "cover",
        borderRadius: "10px",
        filter: "brightness(0.8)",
        p: "160px 32px",
        margin: "auto",
        maxWidth: "460px",
        cursor: "pointer",
        transition:
          "transform 0.3s ease, filter 0.3s ease , box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(0.9)",
          filter: "brightness(0.9)",
          boxShadow: "0 20px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
      bgcolor="primary.light"
    >
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            GIARDINERA GREEK STYLE MIXED PICKLES
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "6px",
              p: ["10px 22px", "10px 30px"], // Responsive padding values for mobile and larger screens
              background: "#8B4513",
              color: "#FFD700",
              // boxShadow:
              //   "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
              width: "190px",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
            startIcon={<SearchIcon />}
          >
            Read more
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default MyCard