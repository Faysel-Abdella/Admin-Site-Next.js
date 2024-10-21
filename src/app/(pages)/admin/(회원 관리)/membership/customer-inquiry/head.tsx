import MainButton from '@/components/button';
import DropDownWithLabel from '@/components/DropDownWithLabel';
import InputWithLabel from '@/components/InputWithLabel';

const MainHead = () => {
  return (
    <div className='mt-4 bg-mainWhite py-7 px-9 rounded-[20px]'>
      <div className='mt-[20px] flex items-end justify-between '>
        <InputWithLabel
          label='조회시작일'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />
        <InputWithLabel
          label='조회종료일'
          placeholder='입력'
          inputStyles='w-[350px] h-[44px]'
        />

        <MainButton text='조회' />
      </div>
    </div>
  );
};

export default MainHead;
