'use client'
import MyHeaderThree from '@/app/Utils/MyHeaderThree'
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import MyForms from './MyForms';
import { drawerWidth } from "@/app/Utils/Roles";
import { useDrawer } from "@/app/Utils/DrawerContext";
import MultiImageInput from "react-multiple-image-input";
const MyFormContainer = ({part1 , name}) => {
  const { openDrawer, isDrawerOpenSecond } = useDrawer();
   const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize with 0 or any default value

   useEffect(() => {
     // This will only run on the client
     const handleResize = () => {
       setScreenWidth(window.innerWidth);
     };

     // Set initial screen width
     handleResize();

     window.addEventListener("resize", handleResize);
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);
  return (
    <Box
      sx={{
        width: {
          xs: "98%",
          md: isDrawerOpenSecond ? `calc(100% - ${drawerWidth}px)` : "91%",
        },
        padding: { xs: "117px 0px", sm: "10px 0px", md: "40px 0px" },
        m: "auto",
        marginLeft: {
          xs: "auto",
          md: isDrawerOpenSecond ? "246px" : "79px",
        },
      }}
    >
      <MyHeaderThree part1={part1} name={name} paragraphs={["this page to add new Blog"]}/>
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
        <MyForms />
      </Container>
    </Box>
  );
}

export default MyFormContainer