"use client";
import CommonHeader from "@/components/CommonHeader";
import { Input, Textarea } from "@nextui-org/react";

const InquiriesOnetoOneIdPage = () => {
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
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              이름(닉네임)
            </h3>
            <div>
              <Input
                placeholder="홍길동"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              아이디(이메일)
            </h3>
            <div>
              <Input
                placeholder="aaa@aaa.com"
                type="email"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-nowrap font-bold text-mainGray">
              휴대폰 번호
            </h3>
            <div>
              <Input
                placeholder="010-0000-0000"
                type="text"
                onChange={() => {}}
                className="w-[350px] rounded-[12px] border-[1px] border-[#DADFE2] bg-[#ffffff] text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                disabled // Makes the input field disabled
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <Input
            placeholder="가입정보를 확인해 주세요"
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

        <div className="my-8 w-full">
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder="가입정보의 메일 주소를 확인해 주세요"
            height="590px"
            classNames={{
              input: "text-[15px] placeholder:text-mainGray ",
            }}
            minRows={8}
          />
        </div>
        <h3 className="mb-2 mt-8 text-nowrap font-bold text-mainGray">답변</h3>
        <div className="w-full">
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder="고객님의 메일 주소는 aaa@aaa.com 입니다."
            height="590px"
            classNames={{
              input: "text-[15px]  placeholder:text-mainGray ",
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

export default InquiriesOnetoOneIdPage;
