"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import { Input, Textarea } from "@nextui-org/react";
import Link from "next/link";

const ProblemRegisterDetail = () => {
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div>
      <CommonHeader title="문제 상세정보" />
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
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="코스명"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="경유지명"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />

          <div className="w-[350px]"></div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <DropDownWithLabel
            title="문제 등급"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />
          <DropDownWithLabel
            title="문제 유형"
            options={options}
            defaultSelectedKeys="1"
            titleStyles="  w-[90px]"
            insideStyles=" w-[350px] h-[44px] "
          />

          <div className="w-[350px]"></div>
        </div>
        <div className="w-full">
          <h1 className="my-4 text-mainGray"> 비고</h1>
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder=""
            height="590px"
            classNames={{
              input: "text-[15px] placeholder:text-mainGray ",
            }}
            minRows={8}
          />
        </div>
        <div className="my-6 flex items-center justify-between">
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              정답
            </h3>
            <div>
              <Input
                placeholder="문제유형이 카메라일 경우에는 모두 정답 처리됩니다."
                type="text"
                onChange={() => {}}
                classNames={{
                  input: [
                    "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                  ],
                  inputWrapper: [
                    "bg-[#F4F6F7] border-[1px] border-[#DADFE2] rounded-[12px] ",
                  ],
                }}
                className="w-full text-[15px] placeholder:text-[16px] placeholder:text-mainGray"
                disabled
              />
            </div>
          </div>
          <div className="w-[350px]"></div>
          <div className="w-[350px]"></div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button className="h-[50px] rounded-xl bg-[#A2ABAF] px-8 py-[14px] text-white">
          취소
        </button>
        <div className="mt-5 flex gap-5">
          <button className="h-[50px] rounded-xl bg-[#6D8EEB] px-8 py-[14px] text-white">
            <Link href="/admin/group-room/problem-registration/1/1/1">
              등록
            </Link>
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

export default ProblemRegisterDetail;
