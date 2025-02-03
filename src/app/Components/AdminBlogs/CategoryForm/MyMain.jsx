import React from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import MyFormContainer from "./MyFormContainer";
const MyMain = ({part1 , name}) => {
  return (
    <Box sx={{ mt: { xs: "-11px", sm: 13, md: 6 }, pb: 6, bgcolor: "#ECECEC" }}>
      <MyFormContainer part1={part1} name={name} />
    </Box>
  );
};

export default MyMain;
