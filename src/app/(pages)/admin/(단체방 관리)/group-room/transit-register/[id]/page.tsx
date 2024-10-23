"use client";
import CommonHeader from "@/components/CommonHeader";
import DropDownWithLabel from "@/components/DropDownWithLabel";

import redbg from "@/assets/redbg.png";
import BlueAndBlackBtn from "@/components/blueAndBlackBtn";
import InputWithLabelActive from "@/components/InputWithLabelActive";
import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

const TransitRegisterDetailPage = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div>
      <CommonHeader title="경유지 상세정보" />

      <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
        <div className="mt-[20px] flex items-end justify-between">
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
        <div className="mt-[20px] flex items-end justify-between">
          <InputWithLabelActive
            label="코스명"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="코스명"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="경유지명"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
        </div>
        <div className="mt-[20px] flex items-end justify-between">
          <InputWithLabelActive
            label="GPS정보(N)"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <InputWithLabelActive
            label="GPS정보(N)"
            type="text"
            placeholder=""
            inputStyles="w-[350px] h-[44px] placeholder:text-[#A1A9A3]"
            defaultValue=""
          />
          <div className="w-[350px]"></div>
        </div>
        <div className="mt-[20px] flex items-end justify-between">
          <div className="flex-grow">
            <h3 className="mb-2 text-nowrap text-sm font-bold text-mainGray">
              경유지 이미지
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
          <div className="h-[210px] w-[770px] rounded-[12px] border border-[#DADFE2] p-[14px_24px]">
            <Image
              src={redbg}
              alt="Image"
              className="w-[152px]object-cover h-[152px]"
            />
          </div>
        </div>

        <div className="w-full">
          <h1 className="my-4 text-mainGray">관광정보 </h1>
          <Textarea
            key="bordered"
            variant="bordered"
            placeholder=""
            height="590px"
            classNames={{
              input: "text-[15px] placeholder:text-mainGray ",
            }}
            minRows={4}
          />
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <button className="h-[50px] rounded-xl bg-[#A2ABAF] px-8 py-[14px] text-white">
          취소
        </button>
        <BlueAndBlackBtn />
      </div>
    </div>
  );
};

export default TransitRegisterDetailPage;
