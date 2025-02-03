/* eslint-disable no-useless-escape */
'use client'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminUpdateUserPass,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/UserSlice";
import Cookies from "js-cookie";
import notify from "../../Notifications/useNotification";
const UseChangePassHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  // ======================================
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  //  ================================
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //AdminDashboard/Auth/login
  const handleClick = async (data) => {
    // console.log(data)
    const NewData = {
      currentPass: data.CurrentPassword,
      password: data.NewPassword,
      passwordConfirm: data.ConfirmedPassword,
    };
   setLoading(true);
   await dispatch(AdminUpdateUserPass(NewData));
   setLoading(false);
  };
  const { AdminUpdatePass, error } = useSelector((state) => state.user);
  // console.log(AdminUpdatePass);
useEffect(() => {
  if (error) {
    console.log("Dispatching error notification");
    notify("Please check your data and try again", "error");
    dispatch(resetError());
  } else if (AdminUpdatePass?.status && AdminUpdatePass.status !== 200) {
    const errorMessage =
      AdminUpdatePass.data.errors &&
      Array.isArray(AdminUpdatePass.data.errors) &&
      AdminUpdatePass.data.errors[0]
        ? AdminUpdatePass.data.errors[0].msg
        : "An unknown error occurred, try again later";
    notify(errorMessage, "error");
    dispatch(resetAdminUpdateClientType());
  } else if (AdminUpdatePass?.status === 200) {
    console.log("Dispatching success notification");
    notify("Password updated successfully", "success");
    Cookies.remove("authToken");
          setTimeout(() => {
            window.location.href = "/AdminDashboard/Auth/login";
          }, 3000);
    dispatch(resetAdminUpdateClientType());
  }
}, [AdminUpdatePass, error, dispatch]);

  return [
    register,
    handleSubmit,
    errors,
    handleClick,
    regPassword,
    handleTogglePasswordVisibility,
    showPassword,
    loading,
  ];
};

export default UseChangePassHook;
