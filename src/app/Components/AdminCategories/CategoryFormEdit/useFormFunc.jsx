"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { AdminUpdateNewCat } from "@/app/lib/Slices/CategorySlice";

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
    formData.append("description", data.Description);
    Object.keys(data.images).forEach((key) => {
      if (data.images[key].includes("base")) {
        // console.log("1111111111111111");
        const file = base64ToFile(data.images[key], `image-${key}.png`);
        formData.append("image", file);
      }
    });

    setLoading(true);
    await dispatch(AdminUpdateNewCat({ id: response.data.id, formData }));
    setLoading(false);
  };

  const { AdminUpdateCategory, error } = useSelector((state) => state.Category);

  useEffect(() => {
    if (AdminUpdateCategory?.status && AdminUpdateCategory.status !== 200) {
      notify("Please check your data again", "error");
    } else if (AdminUpdateCategory?.status === 200) {
      notify("Category updated successfully", "success");
    }
  }, [AdminUpdateCategory]);

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
