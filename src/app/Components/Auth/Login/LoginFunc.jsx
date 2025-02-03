"use client";
import Cookies from "js-cookie"; // Use js-cookie for client-side
import { createLogin , resetAdminUpdateClientType, resetError } from "@/app/lib/Slices/SignUpSlice";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import {setCookie} from 'cookies-next/client';
const LoginFunc = () => {
  const dispatch = useDispatch();
   const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 const [showPassword, setShowPassword] = useState(false);
   const [loadingSpinner, setLoadingSpinner] = useState(false);

    const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleClick = async (data) => {
    const NewData = {
      email: data.Email,
      password: data.pass,
    };
    setLoadingSpinner(true);
    await dispatch(createLogin(NewData));
    setLoadingSpinner(false);
  };
const {  LoginUser, error } = useSelector((state) => state.auth);
console.log(LoginUser);
console.log(error);

  useEffect(() => {
    if (error) {
      notify("Please check your data again", "error");
      dispatch(resetError());
    } else if (LoginUser && Object.keys(LoginUser).length > 0) {
      Cookies.set("authToken", LoginUser.token, { expires: 30 });
      localStorage.setItem("userData", JSON.stringify(LoginUser.data));
      notify("You are registered successfully", "success");
      dispatch(resetAdminUpdateClientType());
      setTimeout(() => {
        window.location.href = "/AdminDashboard/admin/UserProfile";
      }, 3000);
    }
  }, [error, LoginUser , dispatch]);

  return {
    regEmail,
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

export default LoginFunc;
