"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyProductsCat from "@/app/Components/ProductsCat/MyProductsCat";

const Page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <MyProductsCat id={id} />
    </div>
  );
};

export default Page;
