'use client'
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MyPaginate = () => {
  return (
    <Stack spacing={2} sx = {{justifyContent: "center",
    alignItems: "center",my : 4}}>
      <Pagination count={10} color="secondary" />
    </Stack>
  );
};

export default MyPaginate;
