"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { useTheme } from "@mui/material";
import { AdminDeleteClient } from "@/app/lib/Slices/CLientsSlice";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
const useCategoriesHook = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openButton = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorEl(null);
  };
  const { openDrawer, isDrawerOpenSecond } = useDrawer();
  const [OpenMenu, setOpenMenu] = useState(false);
  const [User, setUser] = useState(""); // Initialize with 0 or any default value
  const [Request, setRequest] = useState(""); // Initialize with 0 or any default value
  const [Images, setImages] = useState([]); // Initialize with 0 or any default value

  const handleClose = () => {
    setOpenMenu(false);
  };
  // Initialize with 0 or any default value
  const theme = useTheme();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  // =====================================================
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleDeleteClick = async (id) => {
    // console.log(id);
    setLoading(true);
    await dispatch(AdminDeleteClient(id)).unwrap();
    setLoading(false);
  };
  const { AdminDeleteClients, error } = useSelector((state) => state.Clients);
  // console.log(AdminDeleteClients);
  // console.log(error);

  useEffect(() => {
    if (
      AdminDeleteClients &&
      AdminDeleteClients.status &&
      AdminDeleteClients.status !== 200
    ) {
      notify(`${AdminDeleteClients.data.message}`, "error");
    } else if (AdminDeleteClients && AdminDeleteClients.status === 200) {
      notify("Client deleted Successfully", "success");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [error, AdminDeleteClients]);

  return {
    anchorEl,
    openButton,
    handleClick,
    handleCloseTwo,
    isDrawerOpenSecond,
    OpenMenu,
    User,
    setUser,
    Request,
    setRequest,
    Images,
    setImages,
    handleClose,
    theme,
    screenWidth,
    setOpenMenu,
    handleDeleteClick,
    loading,
  };
};

export default useCategoriesHook;
