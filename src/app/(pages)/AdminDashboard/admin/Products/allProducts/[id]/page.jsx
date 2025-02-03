import React from "react";
import MyMain from "@/app/Components/AdminProducts/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" Product"} params={params} />
    </div>
  );
};

export default page;
