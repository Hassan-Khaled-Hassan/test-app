"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyProductsCat from "@/app/Components/ProductsCat/MyProductsCat";

const Page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        products={{ label: "Products", href: "/Products" }}
        Category={{ label: "Categories", href: "#" }}
        Categories={{ label: "Pickled black olives slices" }}
        name={"Our Category"}
      />
      <MyProductsCat/>
    </div>
  );
};

export default Page;
