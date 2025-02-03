"use client";
import Cookies from "js-cookie";
import { VerifyCode , resetAdminUpdateClientType, resetError } from "@/app/lib/Slices/SignUpSlice";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../../Notifications/useNotification";
import { useRouter } from "next/navigation";
const VerifyCodeFunc = () => {
  const router = useRouter();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Access the relevant state from Redux store
  const { loading, verifyCode, error } = useSelector((state) => state.auth);
  console.log(loading);
  console.log(verifyCode);
  console.log(error);

  const handleClick = async (data) => {
    const NewData = {
      resetCode: data.code
    };
    console.log(NewData);
    setLoadingSpinner(true);
    await dispatch(VerifyCode(NewData));
    setLoadingSpinner(false); // Uncomment if dispatching action
  };
  // Use `useEffect` for notifications on state change
  useEffect(() => {
    if (error) {
      notify("Please check your data again", "error");
      dispatch(resetError());
    } else if (verifyCode && Object.keys(verifyCode).length > 0) {
      notify("You are registered successfully", "success");
      dispatch(resetAdminUpdateClientType());
      setTimeout(() => {
        router.push("/AdminDashboard/Auth/reset-password/setNewPass");
      }, 3000);
    }
  }, [error, verifyCode ,dispatch]);
  return {
    errors,
    register,
    handleSubmit,
    handleClick,
    loadingSpinner,
  };
}

export default VerifyCodeFunc