"use client";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { drawerWidth } from "@/app/Utils/Roles";
import { useDrawer } from "@/app/Utils/DrawerContext";
import UserProfile from "./UserProfile";
import UserChangePass from "./ChangePass/UserChangePass";
import MyHeaderThree from "@/app/Utils/MyHeaderThree";

const MyProfilePage = ({response}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Initialize with window.innerWidth
  const { openDrawer, isDrawerOpenSecond } = useDrawer();

  // Add event listener for resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      component={"main"}
      sx={{
        display: "block",
        width: {
          xs: "100%",
          md: isDrawerOpenSecond
            ? `calc(100% - ${drawerWidth}px)`
            : "calc(100% - 10px)",
        },
        marginLeft: {
          xs: "auto",
          md: isDrawerOpenSecond ? "235px" : "79px",
        },
      }}
    >
      <MyHeaderThree
        part1="User"
        name=" Profile"
        paragraphs={["this page to display user data"]}
      />
      <UserProfile
        isDrawerOpen={isDrawerOpenSecond}
        screenWidth={screenWidth}
        mode={""}
        response={response}
      />
      <UserChangePass
        isDrawerOpenSecond={isDrawerOpenSecond}
        screenWidth={screenWidth}
        mode={""}
      />
    </Box>
  );
};

export default MyProfilePage;
