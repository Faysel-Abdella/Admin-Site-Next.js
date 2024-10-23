import MainButton from "@/components/button";
import InputWithLabel from "@/components/InputWithLabel";

import React from "react";

const MainHead = () => {
  return (
    <div className="my-6 rounded-[20px] bg-mainWhite px-9 py-7">
      <div className="mt-[20px] flex items-end justify-between">
        <InputWithLabel
          label="조회시작일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <InputWithLabel
          label="조회종료일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <MainButton text="조회" />
      </div>
    </div>
  );
};

export default MainHead;
