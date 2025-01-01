"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyHomeBlogsAll from "@/app/Components/categories/all/MyHomeBlogsAll";

export default async function Page() {
  return (
    <div>
      <MyHomeProduct
        home={{ label: "Home", href: "/" }}
        Blogs={{ label: "Blogs" }}
        name={"Blogs"}
      />
      <MyHomeBlogsAll />
    </div>
  );
}
