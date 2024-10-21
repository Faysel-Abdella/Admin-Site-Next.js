
import Image from 'next/image';

import assets from '@/assets';


const Head = () => {
  return (
    <div className='mt-4  py-3  rounded-[20px]'>
      <div className='flex items-center justify-between '>
        <div className='flex px-4 justify-between items-center h-[65px] w-[380px] rounded-xl bg-white'>
          <div className='text-grayText flex gap-2'>
            {' '}
            <Image
              src={assets.member.src}
              alt='member icon'
              width={assets.member.width}
              height={assets.member.height}
            />{' '}
            신규 회원
          </div>
          <div className='text-blue font-bold'>00명</div>
        </div>
        <div className='flex  px-4 justify-between items-center h-[65px] w-[380px] rounded-xl bg-white'>
          <div className='text-grayText flex gap-2'>
            <Image
              src={assets.member.src}
              alt='member icon'
              width={assets.member.width}
              height={assets.member.height}
            />
            탈퇴 회원
          </div>
          <div className='text-[#F46F6F] font-bold'>00명</div>
        </div>
        <div className='flex px-4 justify-between items-center h-[65px] w-[380px] rounded-xl bg-white'>
          <div className='text-grayText flex gap-2'>
            <Image
              src={assets.member.src}
              alt='member icon'
              width={assets.member.width}
              height={assets.member.height}
            />
            1:1문의 미답변
          </div>
          <div className='text-mainBlack font-bold'>00명</div>
        </div>
      </div>
    </div>
  );
};

export default Head;
