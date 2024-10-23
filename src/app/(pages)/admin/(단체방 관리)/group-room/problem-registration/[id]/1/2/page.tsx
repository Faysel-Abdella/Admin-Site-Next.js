"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import redbg from "@/assets/redbg.png";

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
        <div className="mt-[20px] flex items-end justify-between">
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              문제
            </h3>
            <div className="flex items-center gap-4">
              <button className="rounded-xl bg-[#A2ABAF] px-8 py-[8px] text-white">
                파일 선택
              </button>
              <div className="flex-grow">
                <Input
                  placeholder=""
                  type="text"
                  onChange={() => {}}
                  classNames={{
                    input: [
                      "placeholder:text-[#A1A9A3] placeholder:text-[14px] text-[15px]",
                    ],
                    inputWrapper: [
                      "bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] w-full",
                    ],
                  }}
                  className="text-[15px] placeholder:text-[16px] placeholder:text-mainBlack"
                />
              </div>
            </div>
          </div>

          {/* Fixed width for the space at the end */}
          <div className="w-[380px]"></div>
        </div>
        <div className="mt-[20px] flex items-end justify-between">
          <div className="h-[210px] w-[750px] rounded-[12px] border border-[#DADFE2] p-[14px_24px]">
            <Image
              src={redbg}
              alt="Image"
              className="w-[152px]object-cover h-[152px]"
            />
          </div>
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
