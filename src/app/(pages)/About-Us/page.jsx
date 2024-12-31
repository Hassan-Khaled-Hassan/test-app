import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyHomeClients from "@/app/Components/Clients/MyHomeClients";
import MyHomeCertificate from "@/app/Components/Certificates/MyHomeClients";
import MyHomeValue from "./../../Components/Values/MyHomeValue";
import MyAboutContent from "@/app/Components/aboutContent/MyAboutContent";
import MyAboutList from "@/app/Components/aboutList/MyAboutList";

// Mark the function as asynchronous to handle the data fetching
export default async function Page() {
  return (
    <div>
      <MyHomeProduct />
      <MyAboutContent />
      <MyAboutList />
      <MyHomeValue />
      <MyHomeCertificate />
      <MyHomeClients />
    </div>
  );
}
