"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { AdminUpdateNewClient ,resetAdminUpdateClientType , resetError } from "@/app/lib/Slices/CLientsSlice";

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
      Role : response?.data?.clientTypeId || "",
      images: response?.data?.image ? { 0: response.data.image.url } : {}, // Provide fallback for undefined
    },
  });

  const base64ToFile = (base64String, filename) => {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  const handleClick = async (data) => {
    const formData = new FormData();
    formData.append("name", data.Name);
    formData.append("clientTypeId", data.Role);
    Object.keys(data.images).forEach((key) => {
      if (data.images[key].includes("base")) {
        console.log("1111111111111111");
        const file = base64ToFile(data.images[key], `image-${key}.png`);
        formData.append("image", file);
      }
    });

    setLoading(true);
    await dispatch(AdminUpdateNewClient({ id: response.data.id, formData }));
    setLoading(false);
  };

  const { AdminUpdateClient, error } = useSelector((state) => state.Clients);

  useEffect(() => {
    if (error) {
      // console.log("++++++++++");
      // console.log(error.errors);
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (AdminUpdateClient?.status && AdminUpdateClient.status !== 200) {
      const errorMessage =
        AdminUpdateClient.data.errors &&
        Array.isArray(AdminUpdateClient.data.errors) &&
        AdminUpdateClient.data.errors[0]
          ? AdminUpdateClient.data.errors[0].msg
          : "An unknown error occurred";
      notify(errorMessage, "error"); // Changed to "error" for consistency
      dispatch(resetAdminUpdateClientType());
    } else if (AdminUpdateClient?.status === 200) {
      notify("Client updated successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [AdminUpdateClient, error , dispatch]);

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
