"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdminCreateNewProduct,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/ProductsSlice";
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
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.Name);
    formData.append("description", data.Description);
    formData.append("categoryID", data.Role);
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
    Object.keys(data.images).forEach((key, index) => {
      const file = base64ToFile(data.images[key], `image-${key}.png`);
      if (index === 0) {
        // First image as imageCover
        formData.append("imageCover", file);
        formData.append("images", file);
      } else {
        // Remaining images as images
        formData.append("images", file);
      }
    });

    setLoading(true);
    await dispatch(AdminCreateNewProduct(formData));
    setLoading(false);
  };

  const { AdminCreateProducts, error } = useSelector(
    (state) => state.Products
  );
  console.log(AdminCreateProducts);

  useEffect(() => {
    if (error) {
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminCreateProducts &&
      AdminCreateProducts.status &&
      AdminCreateProducts.status != 201
    ) {
      const errorMessage =
        AdminCreateProducts.data.errors &&
        Array.isArray(AdminCreateProducts.data.errors) &&
        AdminCreateProducts.data.errors[0]
          ? AdminCreateProducts.data.errors[0].msg
          : "An unknown error occurred, Please Check connection";
      notify(errorMessage, "error");
      dispatch(resetAdminUpdateClientType());
    } else if (AdminCreateProducts && AdminCreateProducts.status === 201) {
      notify("Product added Successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [error, AdminCreateProducts , dispatch]);

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
