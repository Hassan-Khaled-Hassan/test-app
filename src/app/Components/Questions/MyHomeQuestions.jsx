import React from 'react'
import Box from "@mui/material/Box";
// import "./restDetails.css";
import AllQuestions from './AllQuestions';


const MyHomeQuestions = () => {
  return (
    <Box
      sx={{
        mb: 4,
        // mt: "-40px",
        position: "relative",
        bgcolor: "white",
        // borderRadius: "40px",
        zIndex: "1",
      }}
    >
      <AllQuestions />
    </Box>
  );
}

export default MyHomeQuestions;