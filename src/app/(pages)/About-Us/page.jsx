"use server";
import axios from "axios";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyHomeClients from "@/app/Components/Clients/MyHomeClients";
import MyHomeCertificate from "@/app/Components/Certificates/MyHomeClients";
import MyHomeValue from "./../../Components/Values/MyHomeValue";
import MyAboutContent from "@/app/Components/aboutContent/MyAboutContent";
import MyAboutList from "@/app/Components/aboutList/MyAboutList";

// Mark the function as asynchronous to handle the data fetching
export default async function Page() {
  let data = null;
  try {
    // Fetch data using Axios
    const response = await axios.get("https://siwagarden.com/data.json");
    data = response.data;
    // console.log(data.aboutList[0]); // Log the fetched data to verify
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }

  return (
    <div>
      <MyHomeProduct data={data} />
      <MyAboutContent data={data?.aboutList?.[0]} />
      {data?.aboutList && data.aboutList.length > 1
        ? data.aboutList
            .slice(1)
            .map((item, index) => <MyAboutList key={index} data={item} />)
        : null}
      <MyHomeValue data={data?.Values} />
      <MyHomeCertificate />
      <MyHomeClients />
    </div>
  );
}
