"use client";
import React, { useState, useEffect } from "react";
import { useDrawer } from "../DrawerContext";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { drawerWidth } from "../Roles";
import { useRouter } from "next/navigation";
const MyDrawerlogic = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
    console.log(open);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //=============================================================
  const { closeDrawer, isDrawerOpen, isDrawerOpenSecond, openDrawerSecond } =
    useDrawer();
  // console.log(isDrawerOpen);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
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
  return [
    open,
    setOpen,
    handleDrawerOpen,
    handleDrawerClose,
    variant,
    theme,
    isDrawerOpen,
    closeDrawer,
    openedMixin,
    closedMixin,
    DrawerHeader,
    handleItemClick,
    openDrawerSecond
  ];
};

export default MyDrawerlogic;
