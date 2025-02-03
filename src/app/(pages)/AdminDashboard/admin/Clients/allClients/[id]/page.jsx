import React from "react";
import MyMain from "@/app/Components/AdminClients/CategoryFormEdit/MyMain";
const page = ({ params }) => {
  return (
    <div>
      <MyMain part1={"Edit"} name={" Client"} params={params} />
    </div>
  );
};

export default page;
