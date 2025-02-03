import React from "react";
import MyMain from "@/app/Components/AdminCategories/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" Category"} params={params} />
    </div>
  );
};

export default page;
