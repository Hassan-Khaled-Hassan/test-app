"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "./src/app/Components/Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdmincreateNewUser,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/UserSlice";
const useFormFunc = () => {
  const { closeDrawer, isDrawerOpenSecond } = useDrawer();
  // ===================================
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  // ================================================================
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // errors,
    // handleClick,
    // loading,
    control,
    formState: { errors },
  } = useForm();
  //   ===========================================

  const handleClick = async (data) => {
    // console.log(data);
    if (data.pass !== data.ConfirmPass) {
      console.log("error in data");
      notify("Please check your Password again", "warn");
      return;
    }
    const NewData = {
      name: data.Name,
      email: data.Email,
      phone: data.phone,
      password: data.pass,
      passwordConfirm: data.ConfirmPass,
      role: data.Role,
    };
    // console.log(NewData);

    setLoading(true);
    await dispatch(AdmincreateNewUser(NewData));
    setLoading(false);
  };

  const { AdmincreateUser, error } = useSelector((state) => state.user);
  console.log(AdmincreateUser);

  useEffect(() => {
    if (error) {
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdmincreateUser &&
      AdmincreateUser.status &&
      AdmincreateUser.status != 201
    ) {
      const errorMessage =
        AdmincreateUser.data.errors &&
        Array.isArray(AdmincreateUser.data.errors) &&
        AdmincreateUser.data.errors[0]
          ? AdmincreateUser.data.errors[0].msg
          : "An unknown error occurred, Please Check connection";
      notify(errorMessage, "error");
      dispatch(resetAdminUpdateClientType());
    } else if (AdmincreateUser && AdmincreateUser.status === 201) {
      notify("User Created Successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [error, AdmincreateUser, dispatch]);

  return [
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    isDrawerOpenSecond,
    control,
    regEmail,
    phoneRegExp,
    regPassword,
    showPassword,
    handleTogglePasswordVisibility,
  ];
};

export default useFormFunc;
