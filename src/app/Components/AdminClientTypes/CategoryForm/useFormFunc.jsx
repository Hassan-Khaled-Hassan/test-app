"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useDrawer } from "@/app/Utils/DrawerContext";
import { AdminCreateNewClientType } from "@/app/lib/Slices/ClientTypeSlice";
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
  const handleClick = async (data) => {
    const newData = {
      name: data.Name,
    };
    // console.log(newData);
    setLoading(true);
    await dispatch(AdminCreateNewClientType(newData));
    setLoading(false);
  };

  const { AdminCreateClientType, error } = useSelector(
    (state) => state.ClientType
  );
  // console.log(AdminCreateClientType);
  // console.log(error);

  useEffect(() => {
      // console.log("++++++++++");
    if (error) {
      // console.log("++++++++++");
      // console.log(error.errors);
      notify(`please check your data and try again`, "error");
    }else if (
      AdminCreateClientType &&
      AdminCreateClientType.status &&
      AdminCreateClientType.status !== 201
    ) {
      // console.log(AdminCreateClientType.data.errors);
      const errorMessage =
        AdminCreateClientType.data.errors &&
        Array.isArray(AdminCreateClientType.data.errors) &&
        AdminCreateClientType.data.errors[0]
          ? AdminCreateClientType.data.errors[0].msg
          : "An unknown error occurred";
      notify(errorMessage, "error"); // Changed to "error" for consistency
    } else if (AdminCreateClientType && AdminCreateClientType.status === 201) {
      notify("Client Type added Successfully", "success");
    }
  }, [error, AdminCreateClientType]);

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
