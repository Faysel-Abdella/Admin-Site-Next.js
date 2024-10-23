"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabelActive from "@/components/InputWithLabelActive";
import { Input, Textarea } from "@nextui-org/react";

const CompanyInfoPage = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div>
      <CommonHeader title="자주묻는질문 상세정보" />
      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="회사명"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="사업자 등록번호"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="통신판매업 신고번호"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="대표자"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="전화번호"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="이메일"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
        <div className="mb-3">
          <h3 className="mb-3 text-mainGray">주소</h3>
          <Input
            placeholder=""
            type="text"
            onChange={() => {}}
            className="w-full rounded-[12px] text-[15px] text-mainGray placeholder:text-[16px] placeholder:text-mainBlack"
            classNames={{
              inputWrapper: [
                "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px]",
              ],
              input: ["placeholder:text-mainGray "],
            }}
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <InputWithLabelActive
            label="회사명 영문"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="회사명 영문"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <div className="w-[350px]"></div>
        </div>

        <div className="mb-3">
          <h3 className="mb-3 text-mainGray">제목</h3>
          <Input
            placeholder=""
            type="text"
            onChange={() => {}}
            className="w-full rounded-[12px] text-[15px] text-mainGray placeholder:text-[16px] placeholder:text-mainBlack"
            classNames={{
              inputWrapper: [
                "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px]",
              ],
              input: ["placeholder:text-mainGray "],
            }}
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

export default CompanyInfoPage;
