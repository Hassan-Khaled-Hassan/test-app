"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyProductsCat from "@/app/Components/ProductsCat/MyProductsCat";


export default async function Page() {
  return (
    <div>
      <MyProductsCat  />
    </div>
  );
}
