import React from 'react'
import Box from "@mui/material/Box";
import MyCategoryContainer from './MyCategoryContainer';
const MyCategory = ({part1 , name}) => {
  return (
    <Box sx={{ mt: { xs: "-11px", sm: 6 }, pb: 6, bgcolor: "#ECECEC" }}>
      <MyCategoryContainer part1={part1} name={name} />
    </Box>
  );
}

export default MyCategory