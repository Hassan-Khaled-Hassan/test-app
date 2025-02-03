import React from "react";
import MyMain from "@/app/Components/AdminCertifiactes/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" Certificate"} params={params} />
    </div>
  );
};

export default page;
