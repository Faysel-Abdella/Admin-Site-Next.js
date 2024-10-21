import MainButton from '@/components/button';
import InputWithLabel from '@/components/InputWithLabel';
import React from 'react';

const MainHead = () => {
  return (
    <div className='mt-4 bg-mainWhite py-7 px-9 rounded-[20px]'>
      <div className='flex items-center justify-between '>
        <InputWithLabel
          label='이름(닉네임)'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />
        <InputWithLabel
          label='아이디(이메일)'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />
        <InputWithLabel
          label='휴대폰 번호'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />
      </div>

      <div className='mt-[20px] flex items-end justify-between '>
        <InputWithLabel
          label='가입시작일'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />
        <InputWithLabel
          label='가입종료일'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />
        <MainButton text='조회' />
      </div>
    </div>
  );
};

export default MainHead;
