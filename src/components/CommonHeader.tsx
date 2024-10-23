import React from 'react';

interface CommonHeaderProps {
  title: string; // Define the title prop type as a string
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title }) => {
  return (
    <>
      <div className='flex justify-end'>
        <div className='flex gap-2 items-center mb-4'>
          <div className='text-mainGray'>관리자 님</div>
          <button className='bg-[#A2ABAF] px-3 py-1 rounded-sm font-normal text-base text-right text-white'>
            관리자 님
          </button>
        </div>
      </div>
      <h2 className='mt-4 font-bold text-[30px] leading-[42px] text-center text-mainBlack'>
        {title} {/* Render the title passed as a prop */}
      </h2>
    </>
  );
};

export default CommonHeader;
