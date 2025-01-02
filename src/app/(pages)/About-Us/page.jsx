"use server";
import axios from "axios";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyHomeClients from "@/app/Components/Clients/MyHomeClients";
import MyHomeCertificate from "@/app/Components/Certificates/MyHomeClients";
import MyHomeValue from "./../../Components/Values/MyHomeValue";
import MyAboutContent from "@/app/Components/aboutContent/MyAboutContent";
import MyAboutList from "@/app/Components/aboutList/MyAboutList";

export default async function Page() {
  let data = { aboutList: [], Values: [] }; // Default fallback structure

  try {
    // Fetch data using Axios
    const response = await axios.get("https://siwagarden.com/data.json");
    data = response.data || { aboutList: [], Values: [] };
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }

  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        electronics={{ label: "About US" }}
        name={"About"}
      />
      <MyAboutContent data={data.aboutList?.[0] || {}} />
      {data.aboutList?.length > 1 ? (
        data.aboutList
          .slice(1)
          .map((item, index) => <MyAboutList key={index} data={item} />)
      ) : (
        <p>No additional list items available.</p>
      )}
      <MyHomeValue data={data.Values || []} />
      <MyHomeCertificate />
      <MyHomeClients />
    </div>
  );
}
