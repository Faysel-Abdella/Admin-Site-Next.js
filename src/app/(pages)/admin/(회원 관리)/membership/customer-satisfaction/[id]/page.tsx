"use client";
import MainButton from "@/components/button";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabelActive from "@/components/InputWithLabelActive";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const CustomerSatisfactionIdPage = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div>
      <CommonHeader title="회원 상세정보" />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="성별"
            options={options}
            defaultSelectedKeys="1"
            titleStyles=""
            insideStyles=" w-[350px] h-[44px] "
          />
          <div></div>
          <div></div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <div className="mr-4 flex-grow">
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              평가문항
            </h3>
            <Input
              placeholder="가이드의 해설은 만족하셨나요?"
              type="text"
              onChange={() => {}}
              className="w-full rounded-[12px] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
              classNames={{
                inputWrapper: [
                  "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px]",
                ],
                input: ["placeholder:text-mainGray "],
              }}
            />
          </div>
          <InputWithLabelActive
            label="문항순번"
            type="text"
            placeholder="1"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="불만족"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="기타포함여부"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="사용여부"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
        </div>
      </div>
      <div className="mt-8 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="보기 1"
            type="text"
            placeholder="매우 불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="보기 2"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="보기 3"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="보기 4"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="보기 5"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="보기 6"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="보기 7"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="보기 8"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="보기 9"
            type="text"
            placeholder="불만족"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <button className="h-[50px] rounded-xl bg-[#A2ABAF] px-8 py-[14px] text-white">
          취소
        </button>
        <div className="mt-5 flex gap-5">
          <button className="h-[50px] rounded-xl bg-[#6D8EEB] px-8 py-[14px] text-white">
            등록
          </button>
          <button className="h-[50px] rounded-xl bg-[#424242] px-8 py-[14px] text-white">
            삭제
          </button>
          <button className=""></button>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfactionIdPage;
