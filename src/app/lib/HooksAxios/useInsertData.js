"use server";
import BaseURL from "../BaseUrl";
import { getCookie, getCookies, hasCookie } from "cookies-next/server";
import { cookies } from "next/headers";
import FormData from "form-data";
import axios from 'axios';
export const insertDataWithToken = async (url, params) => {
  try {
    const authToken = await getCookie("authToken", { cookies });
    console.log(authToken)
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const res = await BaseURL.post(url, params, config);
    // console.log("API Response:", res);
    return { status: res.status, data: res.data };
  } catch (error) {
    console.error("Error in API call:", error);
    // console.error(error.response);
    return { status: error.status, data: error.response.data };
  }
};



export const useInsertDataWithImg = async (url, data) => {
  try {
    const authToken = await getCookie("authToken", { cookies });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: data, // FormData
    });

    // Log the raw response object
    // console.log("Raw Response:", response);

    // Parse the JSON response body
    const parsedData = await response.json();
    // console.log("Parsed Response Body:", parsedData);

    return {data : parsedData , status : response.status}; // Return the parsed data
  } catch (error) {
    console.error("Error in useInsertDataWithImg:", error);
    throw error;
  }
};



