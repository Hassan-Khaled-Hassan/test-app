import React from "react";
import MyMain from "@/app/Components/AdminClientTypes/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" Client Type"} params={params} />
    </div>
  );
};

export default page;
