"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { useTheme } from "@mui/material";
import { AdminDeleteProduct } from "@/app/lib/Slices/ProductsSlice";
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
    await dispatch(AdminDeleteProduct(id)).unwrap();
    setLoading(false);
  };
  const { AdminDeleteProducts, error } = useSelector((state) => state.Products);
  // console.log(AdminDeleteProducts);
  // console.log(error);

  useEffect(() => {
    if (error) {
      notify(`Please check your data and try again!!!!`, "error");
    } else if (
      AdminDeleteProducts &&
      AdminDeleteProducts.status === 200
    ) {
      notify("Blog deleted Successfully", "success");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [error, AdminDeleteProducts]);

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
