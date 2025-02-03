"use server";
import MyDrawerData from "./MyDrawerData";
import axios from "axios";
import { getCookie, getCookies, hasCookie } from 'cookies-next/server';
import { cookies } from 'next/headers';
export default async function MiniDrawer() {
  const authToken = await getCookie("authToken", { cookies });
  // Uncomment if API call is required
  const config = {
    headers: { Authorization: `Bearer ${authToken}` },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_Backend_URL}api/v1/Users/UserData`,
    config
  );
  // console.log("response.data.data drawer");

  // console.log(response.data);
  return <MyDrawerData response={response.data} />;
}
