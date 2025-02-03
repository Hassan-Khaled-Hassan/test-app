"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdminUpdateNewUser,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/UserSlice";

const useFormFunc = (response) => {
  const { closeDrawer, isDrawerOpenSecond } = useDrawer();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
const {
  register,
  handleSubmit,
  setValue,
  control,
  formState: { errors },
} = useForm({
  defaultValues: {
    Name: response?.data?.name || "", // Provide fallback for undefined
    Email: response?.data?.email || "",
    Role: response?.data?.role || "",
    phone: response?.data?.phone || "",
  },
});
// ======================================
   const regPassword =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
   const regEmail =
     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   const phoneRegExp =
     /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
   const [showPassword, setShowPassword] = useState(false);
   const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

// ======================================

  const handleClick = async (data) => {
    // console.log(data);
    if (data.pass !== data.ConfirmPass) {
      console.log("error in data");
      notify("Please check your Password again", "warn");
      return;
    }
    const newData = {
      name: data.Name,
      email: data.Email,
      phone: data.phone,
      password: data.pass,
      passwordConfirm: data.ConfirmPass,
      role: data.Role,
    };
    // console.log(newData);

    setLoading(true);
    await dispatch(AdminUpdateNewUser({ id: response.data.id, newData }));
    setLoading(false);
  };

  const { AdminUpdateUsers, error } = useSelector((state) => state.user);
   console.log(AdminUpdateUsers);
  useEffect(() => {
    if (error) {
      // console.log("++++++++++");
      // console.log(error.errors);
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminUpdateUsers?.status &&
      AdminUpdateUsers.status !== 200
    ) {
      const errorMessage =
        AdminUpdateUsers.data.errors &&
        Array.isArray(AdminUpdateUsers.data.errors) &&
        AdminUpdateUsers.data.errors[0]
          ? AdminUpdateUsers.data.errors[0].msg
          : "An unknown error occurred, try again later";
      notify(errorMessage, "error"); // Changed to "error" for consistency
      dispatch(resetAdminUpdateClientType());
    } else if (AdminUpdateUsers?.status === 200) {
      notify("User updated successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [AdminUpdateUsers, error, dispatch]);

  return {
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
  };
};

export default useFormFunc;
