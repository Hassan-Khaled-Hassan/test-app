import { Box, Paper, Typography,Button } from '@mui/material';
import React from 'react'
import SearchIcon from "@mui/icons-material/Search";
const MyCardBox = () => {
  return (
    <Paper
      component="div"
      // maxWidth="sm"
      sx={{
        backgroundColor: "#0E83AF",
        backgroundImage: "url('/1684c638371fe46a21391a3c62c121f9.jpg')",
        backgroundSize: "cover",
        borderRadius: "10px",
        filter: "brightness(0.8)",
        p: "160px 32px",
        margin: "20px auto",
        maxWidth: "460px",
        width: "460px",
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
            Men Clothes
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
              background: "#C076CB",
              color: "white",
              // boxShadow:
              //   "6px -2px 30px 1px #CF77F3, -13px 7px 50px 1px #009BFF",
              width: "190px",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
            startIcon={<SearchIcon />}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default MyCardBox