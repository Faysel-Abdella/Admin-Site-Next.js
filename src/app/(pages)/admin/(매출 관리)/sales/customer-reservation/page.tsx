import React from "react";
import MyCalendar from "./calander";
import CommonHeader from "@/components/CommonHeader";

const page = () => {
  return (
    <div>
      <CommonHeader />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <MyCalendar />
      </div>
    </div>
  );
};

export default page;
