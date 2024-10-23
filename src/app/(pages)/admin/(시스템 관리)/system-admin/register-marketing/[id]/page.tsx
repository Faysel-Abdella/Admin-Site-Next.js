"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabelActive from "@/components/InputWithLabelActive";
import { Input, Textarea } from "@nextui-org/react";

const RegisterTermIdPage = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div>
      <CommonHeader title="마케팅활용동의 상세정보" />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="언어"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <div className="w-[350px]"></div>
          <div className="w-[350px]"></div>
        </div>
        <div className="my-3 flex items-center justify-between gap-6">
          <div className="flex-grow">
            <h3 className="mb-2 text-mainGray">제목</h3>
            <Input
              placeholder="가입정보를 확인해 주세요"
              type="text"
              onChange={() => {}}
              className="h-[44px] w-full rounded-[12px] text-[15px] text-mainGray placeholder:text-[16px]"
              classNames={{
                inputWrapper: [
                  "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px]",
                ],
                input: ["placeholder:text-mainGray "],
              }}
            />
          </div>
          <InputWithLabelActive
            label="적용시작일"
            placeholder="입력"
            inputStyles="w-[350px] h-[44px] "
            type="email"
            defaultValue=""
          />
        </div>

        <div className="w-full">
          <h1 className="my-4 text-mainGray"> 내용</h1>
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder="비고"
            height="590px"
            classNames={{
              input: "text-[15px] placeholder:text-mainGray ",
            }}
            minRows={6}
          />
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

export default RegisterTermIdPage;
