import MainButton from "@/components/button";
import InputWithLabel from "@/components/InputWithLabel";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import React from "react";

const MainHead = () => {
  return (
    <div className="my-6 rounded-[20px] bg-mainWhite px-9 py-7">
      <div className="flex justify-end">
        <CheckboxGroup orientation="horizontal">
          <Checkbox value="1">메인코드</Checkbox>
          <Checkbox value="2">서브코드</Checkbox>
        </CheckboxGroup>
      </div>

      <div className="mt-[20px] flex items-end justify-between">
        <InputWithLabel
          label="메인코드"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <InputWithLabel
          label="가입종료일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <MainButton text="조회" />
      </div>
    </div>
  );
};

export default MainHead;
