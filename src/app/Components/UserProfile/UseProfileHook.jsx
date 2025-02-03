"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../Notifications/useNotification";
import {
  AdminUpdateUserProfile,
  resetAdminUpdateClientType,
  resetError,
} from "@/app/lib/Slices/UserSlice";

const UseProfileHook = (response) => {
  // console.log(response);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      FirstName: response?.name || "",
      Email: response?.email || "",
      phone: response?.phone || "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [imageSrc, setImageSrc] = useState(response?.profileImage?.url || "");

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result); // Display new image preview
    };
    reader.readAsDataURL(file); // Convert image to base64 for preview
  }
};


  const triggerFileInput = () => {
    document.getElementById("imageInput").click();
  };
  const handleDeleteImage = () => {
    setImageSrc(null); // Removes the image
  };

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
   formData.append("name", data.FirstName);
   formData.append("email", data.Email);
   formData.append("phone", data.phone);
  if(imageSrc === null &&imageSrc !== response?.profileImage?.url){
    formData.append("profileImage", imageSrc);
  }
   else if (imageSrc &&imageSrc !== response?.profileImage?.url) {
    console.log("=================")
     const file = base64ToFile(imageSrc, "profile.jpg"); // Convert base64 to File
     formData.append("profileImage", file);
   }
   for (let [key, value] of formData.entries()) {
     console.log(`${key}: ${value}`);
   }
   setLoading(true);
   await dispatch(AdminUpdateUserProfile(formData));
   setLoading(false);
 };


  const { AdminUpdateProfile, error } = useSelector((state) => state.user);
  // console.log(AdminUpdateProfile);
useEffect(() => {
  if (error) {
    console.log("Dispatching error notification");
    notify("Please check your data and try again", "error");
    dispatch(resetError());
  } else if (AdminUpdateProfile?.status && AdminUpdateProfile.status !== 200) {
    console.log("Dispatching update profile error notification");
    const errorMessage =
      AdminUpdateProfile.data.errors &&
      Array.isArray(AdminUpdateProfile.data.errors) &&
      AdminUpdateProfile.data.errors[0]
        ? AdminUpdateProfile.data.errors[0].msg
        : "An unknown error occurred, try again later";
    notify(errorMessage, "error");
    dispatch(resetAdminUpdateClientType());
  } else if (AdminUpdateProfile?.status === 200) {
    console.log("Dispatching success notification");
    notify("Profile updated successfully", "success");
    dispatch(resetAdminUpdateClientType());
  }
}, [AdminUpdateProfile, error, dispatch]);



  return [
    regEmail,
    register,
    handleSubmit,
    errors,
    handleClick,
    showPassword,
    handleTogglePasswordVisibility,
    regPassword,
    loading,
    imageSrc,
    handleImageChange,
    triggerFileInput,
    handleDeleteImage
  ];
};

export default UseProfileHook;
