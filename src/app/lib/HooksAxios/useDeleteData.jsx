"use server";
import BaseURL from "../BaseUrl";
import { getCookie, getCookies, hasCookie } from "cookies-next/server";
import { cookies } from "next/headers";

const useDeleteData = async (url) => {
  try {
    const authToken = await getCookie("authToken", { cookies });
    console.log("authToken : ",authToken)
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
    const res = await BaseURL.delete(url, config);
    // console.log("API Response:", res);
    return {status : res.status ,data : res.data};
  } catch (error) {
    console.error("Error in API call:", error.response);
    return {status : error.status , data : error.response.data};
  }
};

export default useDeleteData;
