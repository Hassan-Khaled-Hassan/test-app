import React from "react";
import MyMain from "@/app/Components/AdminUsers/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" User"} params={params} />
    </div>
  );
};

export default page;
