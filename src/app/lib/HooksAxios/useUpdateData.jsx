"use server";
import BaseURL from "../BaseUrl";
import { getCookie, getCookies, hasCookie } from "cookies-next/server";
import { cookies } from "next/headers";
export const useUpdateDataWithImg = async (url, data) => {
  try {
    const authToken = await getCookie("authToken", { cookies });

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: data, // FormData
    });

    // Log the raw response object
    console.log("Raw Response:", response);

    // Parse the JSON response body
    const parsedData = await response.json();
    // console.log("Parsed Response Body:", parsedData);

    return { data: parsedData, status: response.status }; // Return the parsed data
  } catch (error) {
    console.error("Error in useInsertDataWithImg:", error);
    throw error;
  }
};

export const UpdateDataWithToken = async (url, params) => {
  try {
    const authToken = await getCookie("authToken", { cookies });
    if (!authToken) {
      throw new Error("Authentication token not found");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    // console.log(params)
    const res = await BaseURL.put(url, params, config);
    // console.log("API Response:", res);
    return { status: res.status, data: res.data };
  } catch (error) {
    console.error("Error in API call:", error);

    // Safely handle errors and provide fallback values
    const status = error.response?.status || 500; // Default to 500 if status is unavailable
    const data = error.response?.data || {
      message: "An unexpected error occurred",
    };

    return { status, data };
  }
};


export const useUpdatePatchData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await BaseURL.patch(url, params, config);

  return res;
};
