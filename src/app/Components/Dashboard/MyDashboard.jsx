"use server";
import React from "react";
import axios from "axios";
import { getCookie, getCookies, hasCookie } from "cookies-next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const MyDashboard = async () => {
  const authToken = await getCookie("authToken", { cookies });
  // Uncomment if API call is required
  if (!authToken) {
    redirect("/AdminDashboard/Auth/login"); // Redirect if no token
  }
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Users/UserData`,
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );
     console.log(response?.data?.status)
    if (response?.data?.status === "success") {
      redirect("/AdminDashboard/admin/UserProfile"); // Redirect on success
    } else {
      redirect("/AdminDashboard/Auth/login"); // Redirect on failure
    }
  


  return null; // Required to satisfy the function return type
};

export default MyDashboard;
