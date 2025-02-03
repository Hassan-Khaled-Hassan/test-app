"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdminUpdateNewCertificate,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/CertificateSlice";

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
    await dispatch(
      AdminUpdateNewCertificate({ id: response.data.id, formData })
    );
    setLoading(false);
  };

  const { AdminUpdateCertificates, error } = useSelector((state) => state.Certificates);
   console.log(AdminUpdateCertificates);
  useEffect(() => {
    if (error) {
      // console.log("++++++++++");
      // console.log(error.errors);
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminUpdateCertificates?.status &&
      AdminUpdateCertificates.status !== 200
    ) {
      const errorMessage =
        AdminUpdateCertificates.data.errors &&
        Array.isArray(AdminUpdateCertificates.data.errors) &&
        AdminUpdateCertificates.data.errors[0]
          ? AdminUpdateCertificates.data.errors[0].msg
          : "An unknown error occurred, try again later";
      notify(errorMessage, "error"); // Changed to "error" for consistency
      dispatch(resetAdminUpdateClientType());
    } else if (AdminUpdateCertificates?.status === 200) {
      notify("Certificate updated successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [AdminUpdateCertificates, error, dispatch]);

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
