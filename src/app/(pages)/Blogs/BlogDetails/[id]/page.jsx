"use server";
import MyHomeProduct from "@/app/Components/aboutIntro/MyHomeProduct";
import MyAboutContent from "@/app/Components/BlogDetails/MyAboutContent";

const Page = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <MyAboutContent id={id}/>
    </div>
  );
};

export default Page;
