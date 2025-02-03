"use client";
import React, { useState, useEffect } from "react";
import { useDrawer } from "../DrawerContext";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { drawerWidth } from "../Roles";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const MyDrawerlogic = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    // console.log(open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
    const handleLogout = () => {
      Cookies.remove("authToken");
      localStorage.removeItem("userData");
      setTimeout(() => {
         window.location.href = "/AdminDashboard/Auth/login";
      }, 3000);
    };
  //=============================================================
  const { isDrawerOpenSecond , closeDrawerSecond  , openDrawerSecond } = useDrawer();
  // console.log(isDrawerOpenSecond);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const [variant, setVariant] = useState(isXs ? "temporary" : "permanent");

  useEffect(() => {
    setVariant(isXs ? "temporary" : "permanent");
  }, [isXs]);
  // ===========================================
  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });
  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(9)} + 1px)`,
    },
  });
  // =========================================
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));
  const router = useRouter();
  const handleItemClick = (link) => {
    router.push(link); // Navigate to the new link
  };

  const [ListOpen, setListOpen] = useState(false);
  const [ListTwoOpen, setListTwoOpen] = useState(false);
  const [ListThreeOpen, setListThreeOpen] = useState(false);
  const [ListFourOpen, setListFourOpen] = useState(false);
  const [ListFiveOpen, setListFiveOpen] = useState(false);
  const [ListSexOpen, setListSexOpen] = useState(false);
  const [ListSevenOpen, setListSevenOpen] = useState(false);


 const handleClick = () => {
   setListOpen(!ListOpen);
 };
  const handleClickTwo = () => {
   setListTwoOpen(!ListTwoOpen);
 };
   const handleClickThree = () => {
   setListThreeOpen(!ListThreeOpen);
 };
    const handleClickFour = () => {
   setListFourOpen(!ListFourOpen);
 };
     const handleClickFive = () => {
   setListFiveOpen(!ListFiveOpen);
 };
  const handleClickSex = () => {
   setListSexOpen(!ListSexOpen);
 };
   const handleClickSeven = () => {
     setListSevenOpen(!ListSevenOpen);
   };
  return [
    open,
    setOpen,
    handleDrawerOpen,
    handleDrawerClose,
    variant,
    theme,
    isDrawerOpenSecond,
    closeDrawerSecond,
    openedMixin,
    closedMixin,
    DrawerHeader,
    handleItemClick,
    openDrawerSecond,
    ListOpen,
    handleClick,
    ListTwoOpen,
    handleClickTwo,
    ListThreeOpen,
    handleClickThree,
    ListFourOpen,
    handleClickFour,
    ListFiveOpen,
    handleClickFive,
    ListSexOpen,
    handleClickSex,
    ListSevenOpen,
    handleClickSeven,
    handleLogout
  ];
};

export default MyDrawerlogic;
