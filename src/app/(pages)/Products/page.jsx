"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyHomeProductAll from "@/app/Components/CategoriesV1/MyHomeProductAll";

export default async function Page() {
  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        products={{ label: "Products", href: "/Products" }}
        Categories={{ label: "Categories" }}
        name={"Products"}
      />
      <MyHomeProductAll />
    </div>
  );
}
