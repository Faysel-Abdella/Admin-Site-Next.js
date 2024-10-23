import React from "react";

interface CommonHeaderProps {
  title?: string; // Define the title prop type as a string
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-end">
        <div className="mb-4 flex items-center gap-2">
          <div className="text-mainGray">관리자 님</div>
          <button className="rounded-sm bg-[#A2ABAF] px-3 py-1 text-right text-base font-normal text-white">
            관리자 님
          </button>
        </div>
      </div>
      <h2 className="mt-4 text-center text-[30px] font-bold leading-[42px] text-mainBlack">
        {title} {/* Render the title passed as a prop */}
      </h2>
    </>
  );
};

export default CommonHeader;
