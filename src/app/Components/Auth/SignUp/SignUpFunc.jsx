'use client'
import { createNewUser } from "@/app/lib/Slices/SignUpSlice";
import React, { useState , useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../Notifications/useNotification";
import { useRouter } from "next/navigation";
const SignUpFunc = () => {
  const router = useRouter();
  const regPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState("");
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChangeAddress = (e) => setAddress(e.target.value);
  const handleTogglePasswordVisibility = () => setShowPassword(!showPassword);

  // Access the relevant state from Redux store
  const { loading, createUser, error } = useSelector((state) => state.auth);
  console.log(loading);
  console.log(createUser);
  console.log(error);

  const handleClick = async (data) => {
    if (data.pass !== data.ConfirmPass) {
      console.log("error in data")
        notify("Please check your Password again", "warn");
        return;
    }
    const NewData = {
      name: data.Name,
      email: data.Email,
      phone: data.phone,
      password: data.pass,
      passwordConfirm: data.ConfirmPass,
    };
    console.log(NewData);
    setLoadingSpinner(true);
    await dispatch(createNewUser(NewData));
    setLoadingSpinner(false); // Uncomment if dispatching action
  };
  // Use `useEffect` for notifications on state change
useEffect(() => {
  if (error) {
    notify("Please check your data again", "error");
  } else if (createUser && Object.keys(createUser).length > 0) {
    notify("You are registered successfully", "success");
    setTimeout(() => {
       router.push("/Auth/login");
    }, 3000);
  }
}, [error, createUser]);


  return {
    regEmail,
    phoneRegExp,
    regPassword,
    showPassword,
    errors,
    register,
    handleSubmit,
    handleClick,
    handleTogglePasswordVisibility,
    address,
    onChangeAddress,
    loadingSpinner
  };
};

export default SignUpFunc;
