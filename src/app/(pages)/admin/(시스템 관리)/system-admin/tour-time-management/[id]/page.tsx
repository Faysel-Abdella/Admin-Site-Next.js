"use client";
import MainButton from "@/components/button";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabelActive from "@/components/InputWithLabelActive";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const HolyDayInfoRegisterIdPage = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div>
      <CommonHeader title="휴일 상세정보" />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="투어일자"
            placeholder="2024.08.15"
            inputStyles="w-[350px] h-[44px] "
            type="text"
            defaultValue=""
          />
          <InputWithLabelActive
            label="투어시간"
            placeholder="12:00"
            inputStyles="w-[350px] h-[44px] "
            type="email"
            defaultValue=""
          />
          <InputWithLabelActive
            label="투어시간"
            placeholder="30"
            inputStyles="w-[350px] h-[44px] "
            type="email"
            defaultValue=""
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              예약인원
            </h3>
            <div>
              <Input
                placeholder="10"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
            <div className="w-[350px]"></div>
            <div className="w-[350px]"></div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button className="h-[50px] rounded-xl bg-[#A2ABAF] px-8 py-[14px] text-white">
          취소
        </button>
        <div className="mt-5 flex gap-5">
          <button className="h-[50px] rounded-xl bg-[#6D8EEB] px-8 py-[14px] text-white">
            등록
          </button>

          <button className=""></button>
        </div>
      </div>
    </div>
  );
};

export default HolyDayInfoRegisterIdPage;
