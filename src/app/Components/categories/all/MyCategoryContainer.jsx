import MyHeaderTwo from '@/app/Utils/MyHeaderTwo';
import { Box, Container } from '@mui/material';
import React from 'react'
import MyCardBox from './MyCardBox';
import MyPaginate from '@/app/Utils/MyPaginate';

const MyCategoryContainer = ({ part1, name }) => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "68px auto",
        // marginLeft: {
        //   xs: "auto",
        //   sm: isDrawerOpen ? "252px" : "79px",
        //   md: isDrawerOpen ? "235px" : "79px",
        // },
      }}
    >
      <MyHeaderTwo part1={part1} name={name} />
      <Container
        id="pricing"
        maxWidth="xl"
        sx={{
          pt: { xs: 1, sm: 1 },
          pb: { xs: 1, sm: 1 },
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: { xs: 3, sm: "2px" },
          flexGrow: 1,
          paddingRight: "5px !important",
          paddingLeft: "12px !important",
          mt: "32px",
          // borderTop: "1px solid",
          // borderColor: "divider",
        }}
      >
        <Box sx={{ display: "flex ", flexWrap: "wrap" }}>
          <MyCardBox />
          <MyCardBox />
          <MyCardBox />
          <MyCardBox />
          <MyCardBox />
          <MyCardBox />
          <MyCardBox />
          <MyCardBox />
        </Box>
      </Container>
      <MyPaginate />
    </Box>
  );
};

export default MyCategoryContainer