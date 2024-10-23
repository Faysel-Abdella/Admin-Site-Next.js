import MainButton from "@/components/button";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React from "react";

const MainHead = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];

  return (
    <div className="my-6 rounded-[20px] bg-mainWhite px-9 py-7">
      <div className="mt-[20px] flex items-end justify-between">
        <InputWithLabel
          label="조회시작일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
          type="text"
        />
        <InputWithLabel
          label="조회종료일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
          type="text"
        />

        <MainButton text="조회" />
      </div>
    </div>
  );
};

export default MainHead;
