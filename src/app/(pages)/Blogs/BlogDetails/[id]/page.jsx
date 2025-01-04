"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyAboutContent from "@/app/Components/BlogDetails/MyAboutContent";

const Page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        products={{ label: "Blogs", href: "/Blogs" }}
        Categories={{ label: "Pickled black olives slices" }}
        name={"Pickled black olives slices"}
      />
      <MyAboutContent/>
    </div>
  );
};

export default Page;
