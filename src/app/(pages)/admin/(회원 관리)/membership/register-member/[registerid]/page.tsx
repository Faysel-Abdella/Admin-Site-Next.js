"use client";
import MainButton from "@/components/button";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabelActive from "@/components/InputWithLabelActive";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const RegisterMemberIdPage = () => {
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
          <InputWithLabelActive
            label="이름(닉네임)"
            placeholder="홍길동"
            inputStyles="w-[350px] h-[44px] "
            type="text"
            defaultValue=""
          />
          <InputWithLabelActive
            label="아이디(이메일)"
            placeholder="abc@aaa.com"
            inputStyles="w-[350px] h-[44px] "
            type="email"
            defaultValue=""
          />
          <InputWithLabelActive
            label="휴대폰 번호"
            placeholder="010-1111-1111"
            inputStyles="w-[350px] h-[44px] "
            type="text"
            defaultValue=""
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="출생년도"
            type="text"
            placeholder="2000"
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <DropDownWithLabel
            title="성별"
            options={options}
            defaultSelectedKeys="1"
            titleStyles=""
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="회원상태"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="가입일"
            type="text"
            placeholder="2024.08.01"
            inputStyles="w-[350px] h-[44px] "
          />
          <InputWithLabelActive
            label="탈퇴일"
            placeholder="_"
            inputStyles="w-[350px] h-[44px] "
            type="text"
            defaultValue=""
          />

          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              간편가입경로
            </h3>
            <div>
              <Input
                placeholder="네이버"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="관리자 권한"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <div></div>
          <div></div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="이용약관"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="개인정보처리방침"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="마케팅활용"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
        </div>
        <div className="w-full">
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder="비고"
            height="590px"
            classNames={{
              input: "text-[15px] text-mainGray",
            }}
            minRows={8}
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

export default RegisterMemberIdPage;
