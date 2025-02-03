"use client";
import Cookies from "js-cookie"; // Use js-cookie for client-side
import { UpdatePasswordFunction, resetAdminUpdateClientType, resetError } from "@/app/lib/Slices/SignUpSlice";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../../Notifications/useNotification";
import {setCookie} from 'cookies-next/client';
const SetPasswordFunc = () => {
  const dispatch = useDispatch();
   const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 const [showPassword, setShowPassword] = useState(false);
   const [loadingSpinner, setLoadingSpinner] = useState(false);

    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleClick = async (data) => {
    if (data.pass !== data.ConfirmedPass){
     notify("Please check your Password and Confirmed Password again", "warn");
     return;
    }
     let Mail = Cookies.get("resetMail");
    if (!Mail) {
      notify(
        "Please Set your mail again",
        "warn"
      );
      setTimeout(() => {
        window.location.href = "/AdminDashboard/Auth/reset-password/setEmail";
      }, 3000);
    }
    console.log(Mail);
    const NewData = {
      email: Mail,
      newPassword: data.pass,
    };
    setLoadingSpinner(true);
    await dispatch(UpdatePasswordFunction(NewData));
    setLoadingSpinner(false);
  };
const { UpdatePass, error } = useSelector((state) => state.auth);
console.log(UpdatePass);
console.log(error);

  useEffect(() => {
    if (error) {
      notify("Please check your data again", "error");
      dispatch(resetError());
    } else if (UpdatePass && Object.keys(UpdatePass).length > 0) {
      notify("Your Password updated successfully", "success");
      dispatch(resetAdminUpdateClientType());
      setTimeout(() => {
        window.location.href = "/AdminDashboard/Auth/login";
      }, 3000);
    }
  }, [error, UpdatePass , dispatch]);

  return {
    regPassword,
    showPassword,
    errors,
    register,
    handleSubmit,
    handleClick,
    handleTogglePasswordVisibility,
    loadingSpinner,
  };
};

export default SetPasswordFunc;
