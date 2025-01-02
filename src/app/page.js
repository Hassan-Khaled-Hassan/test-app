"use server";
import axios from "axios";
import MyHomeCategory from "./Components/categories/MyHomeCategory";
import HomePage from './Components/HomeSection/HomePage';
import HomePageOne from './Components/HomeSection/HomePageOne';
import MyHomeQuestions from "./Components/Questions/MyHomeQuestions";
import MyHomeClients from "./Components/Clients/MyHomeClients";
import MySignUp from "./Components/Stories/MySignUp";
import MyHomeCertificate from "./Components/Certificates/MyHomeClients";
import MyHomeProducts from "./Components/ProductV2/MyHomeProducts";



export default async function Home() {
  let homeData = null;
  try {
    // Fetch data on the server
    const response = await axios.get("https://siwagarden.com/data.json");
    homeData = response.data || {};
    console.log(homeData)
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
  return (
    <div>
      {homeData != null ?<HomePage homeData = {homeData.homeVedioSize} /> : null}
      {homeData != null ?<HomePageOne homeData = {homeData.homeVedioMobileSize }/>: null}
      <MyHomeProducts />
      <MySignUp/>
      <MyHomeCertificate/>
      <MyHomeClients/>
      <MyHomeQuestions/>
      <MyHomeCategory />
    </div>
  );
}
