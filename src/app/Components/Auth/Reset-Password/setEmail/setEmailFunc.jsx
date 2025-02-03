"use client";
import Cookies from "js-cookie";
import { ForgetPasswordLogin , resetAdminUpdateClientType, resetError } from "@/app/lib/Slices/SignUpSlice";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../../Notifications/useNotification";
import { useRouter } from "next/navigation";

const setEmailFunc = () => {
  const router = useRouter();
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, ForgetPass, error } = useSelector((state) => state.auth);
  console.log(loading);
  console.log(ForgetPass);
  console.log(error);

  const handleClick = async (data) => {
    const NewData = {
      email: data.Email,
    };
    Cookies.set("resetMail", data.Email);
    console.log(NewData);
    setLoadingSpinner(true);
    await dispatch(ForgetPasswordLogin(NewData));
    setLoadingSpinner(false); // Uncomment if dispatching action
  };
  // Use `useEffect` for notifications on state change
  useEffect(() => {
    if (error) {
      notify("Please check your Mail again", "error");
      dispatch(resetError());

    } else if (ForgetPass && Object.keys(ForgetPass).length > 0) {
      notify("reset code sent to your mail successfully", "success");
      dispatch(resetAdminUpdateClientType());
      setTimeout(() => {
         router.push("/AdminDashboard/Auth/reset-password/verifyCode");
      }, 3000);
    }
  }, [error, ForgetPass, dispatch]);
  

  return {
    regEmail,
    errors,
    register,
    handleSubmit,
    handleClick,
    loadingSpinner
  }
};

export default setEmailFunc;
