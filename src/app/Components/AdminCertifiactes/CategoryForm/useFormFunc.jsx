"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import {
  AdminCreateNewCertificate,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/CertificateSlice";
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
    Object.keys(data.images).forEach((key) => {
      const file = base64ToFile(data.images[key], `image-${key}.png`);
      formData.append("image", file);
    });

    setLoading(true);
    await dispatch(AdminCreateNewCertificate(formData));
    setLoading(false);
  };

  const { AdminCreateCertificates, error } = useSelector(
    (state) => state.Certificates
  );
  console.log(AdminCreateCertificates);

  useEffect(() => {
    if (error) {
      notify(`please check your data and try again`, "error");
      dispatch(resetError());
    } else if (
      AdminCreateCertificates &&
      AdminCreateCertificates.status &&
      AdminCreateCertificates.status != 201
    ) {
      const errorMessage =
        AdminCreateCertificates.data.errors &&
        Array.isArray(AdminCreateCertificates.data.errors) &&
        AdminCreateCertificates.data.errors[0]
          ? AdminCreateCertificates.data.errors[0].msg
          : "An unknown error occurred, Please Check connection";
      notify(errorMessage, "error");
      dispatch(resetAdminUpdateClientType());
    } else if (AdminCreateCertificates && AdminCreateCertificates.status === 201) {
      notify("Certificate added Successfully", "success");
      dispatch(resetAdminUpdateClientType());
    }
  }, [error, AdminCreateCertificates , dispatch]);

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
