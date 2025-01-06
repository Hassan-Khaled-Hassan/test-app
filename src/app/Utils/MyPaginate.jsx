'use client'
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MyPaginate = () => {
  return (
    <Stack
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center", my: 6 }}
    >
      <Pagination count={10} size="large" />
    </Stack>
  );
};

export default MyPaginate;
