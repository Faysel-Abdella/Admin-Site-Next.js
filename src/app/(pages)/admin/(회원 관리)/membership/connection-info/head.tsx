import MainButton from '@/components/button';
import DropDownWithLabel from '@/components/DropDownWithLabel';
import InputWithLabel from '@/components/InputWithLabel';

const MainHead = () => {
  // selection field
  const options = [
    { key: '1', label: '선택' },
    { key: '2', label: '일반회원' },
    { key: '3', label: '판매자' },
    { key: '4', label: '관리자' },
  ];
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
