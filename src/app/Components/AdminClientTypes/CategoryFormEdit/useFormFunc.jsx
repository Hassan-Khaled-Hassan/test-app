"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { AdminUpdateNewClientType ,resetAdminUpdateClientType , resetError } from "@/app/lib/Slices/ClientTypeSlice";
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
      Description : response?.data?.description || "",
      images: response?.data?.image ? { 0: response.data.image.url } : {}, // Provide fallback for undefined
    },
  });

  const handleClick = async (data) => {
    const newData = {
      name: data.Name,
    };
      // console.log(newData);
    setLoading(true);
    await dispatch(AdminUpdateNewClientType({ id: response.data.id, newData}));
    setLoading(false);
  };

  const { AdminUpdateClientType, error } = useSelector((state) => state.ClientType);
  // console.log(AdminUpdateClientType);

  useEffect(() => {
    if (error) {
      // console.log("++++++++++");
      // console.log(error.errors);
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminUpdateClientType &&
      AdminUpdateClientType.status &&
      AdminUpdateClientType.status !== 200
    ) {
      // console.log(AdminUpdateClientType.data.errors);
      const errorMessage =
        AdminUpdateClientType.data.errors &&
        Array.isArray(AdminUpdateClientType.data.errors) &&
        AdminUpdateClientType.data.errors[0]
          ? AdminUpdateClientType.data.errors[0].msg
          : "An unknown error occurred";
      notify(errorMessage, "error"); // Changed to "error" for consistency
      dispatch(resetAdminUpdateClientType());
    } else if (AdminUpdateClientType && AdminUpdateClientType.status === 200) {
      notify("Client Type updated Successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [AdminUpdateClientType, error, dispatch]);

  return {
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    isDrawerOpenSecond,
    control,
  };
};

export default useFormFunc;
