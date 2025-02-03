"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdminCreateNewBlog,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/BlogsSlice";
const useFormFunc = () => {
  const { closeDrawer, isDrawerOpenSecond } = useDrawer();
  // ===================================
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
    // Initialize an array for benefits
    const benefitsArray = [];
    // Split requirements into separate sentences
    const requirementsArray = data.Requirements.split(/(?<=[.!?])\s+/); // Splitting at sentence-ending punctuation
    requirementsArray.forEach((sentence) => {
      const parts = sentence.split(":").map((part) => part.trim()); // Split into head & body
      if (parts.length === 2) {
        benefitsArray.push({ head: parts[0], body: parts[1] }); // Add as object
      } else {
        benefitsArray.push({ body: parts[0] }); // No head, only body
      }
    });
    formData.append("Benefits", JSON.stringify(benefitsArray));
    Object.keys(data.images).forEach((key) => {
      const file = base64ToFile(data.images[key], `image-${key}.png`);
      formData.append("image", file);
    });

    setLoading(true);
    await dispatch(AdminCreateNewBlog(formData));
    setLoading(false);
  };

  const { AdminCreateBlogs, error } = useSelector(
    (state) => state.Blogs
  );
  console.log(AdminCreateBlogs);

  useEffect(() => {
    if (error) {
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminCreateBlogs &&
      AdminCreateBlogs.status &&
      AdminCreateBlogs.status != 201
    ) {
      const errorMessage =
        AdminCreateBlogs.data.errors &&
        Array.isArray(AdminCreateBlogs.data.errors) &&
        AdminCreateBlogs.data.errors[0]
          ? AdminCreateBlogs.data.errors[0].msg
          : "An unknown error occurred, Please Check connection";
      notify(errorMessage, "error");
      dispatch(resetAdminUpdateClientType());
    } else if (AdminCreateBlogs && AdminCreateBlogs.status === 201) {
      notify("Blog added Successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [error, AdminCreateBlogs , dispatch]);

  return [
    handleSubmit,
    errors,
    register,
    handleClick,
    loading,
    isDrawerOpenSecond,
    control,
  ];
};

export default useFormFunc;
