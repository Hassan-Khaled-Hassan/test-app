"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdminUpdateNewProduct,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/ProductsSlice";

const useFormFunc = (response) => {
  const { closeDrawer, isDrawerOpenSecond } = useDrawer();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
// Transform the benefits array to strings with desired format
const formattedBenefits =
  response?.data?.Benefits?.map(
    (benefit) =>
      `${benefit.head ? benefit.head : ""} ${
        benefit.head ? ":" : ""
      } ${benefit.body}\n`
  )?.join("") || [];


  const sortedImages =
    response?.data?.images?.sort((a, b) => {
      const numA = parseInt(a.name.match(/image\((\d+)\)/)[1]);
      const numB = parseInt(b.name.match(/image\((\d+)\)/)[1]);
      return numA - numB;
    }) || [];;

const {
  register,
  handleSubmit,
  setValue,
  control,
  formState: { errors },
} = useForm({
  defaultValues: {
    Name: response?.data?.name || "", // Provide fallback for undefined
    Description: response?.data?.description || "",
    Role: response?.data?.categoryID || "",
    Requirements: formattedBenefits, // Array of formatted benefits
    images: sortedImages.length
      ? sortedImages.reduce((acc, img, index) => {
          acc[index] = img.url; // Use index as key, URL as value
          return acc;
        }, {})
      : {},
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
    if (data.images[key].includes("base")) {
        const file = base64ToFile(data.images[key], `image-${key}.png`);
        // console.log(file);
        if (index === 0) {
          // First image as imageCover
          formData.append("imageCover", file);
          formData.append("images", file);
        } else {
          // Remaining images as images
          formData.append("images", file);
        } 
    }
   });

    setLoading(true);
    await dispatch(AdminUpdateNewProduct({ id: response.data.id, formData }));
    setLoading(false);
  };

  const { AdminUpdateProducts, error } = useSelector((state) => state.Products);
   console.log(AdminUpdateProducts);
  useEffect(() => {
    if (error) {
      // console.log("++++++++++");
      // console.log(error.errors);
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminUpdateProducts?.status &&
      AdminUpdateProducts.status !== 200
    ) {
      const errorMessage =
        AdminUpdateProducts.data.errors &&
        Array.isArray(AdminUpdateProducts.data.errors) &&
        AdminUpdateProducts.data.errors[0]
          ? AdminUpdateProducts.data.errors[0].msg
          : "An unknown error occurred, try again later";
      notify(errorMessage, "error"); // Changed to "error" for consistency
      dispatch(resetAdminUpdateClientType());
    } else if (AdminUpdateProducts?.status === 200) {
      notify("Blog updated successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [AdminUpdateProducts, error, dispatch]);

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
