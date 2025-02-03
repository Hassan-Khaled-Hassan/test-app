import React from "react";
import MyMain from "@/app/Components/AdminBlogs/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" Blog"} params={params} />
    </div>
  );
};

export default page;
