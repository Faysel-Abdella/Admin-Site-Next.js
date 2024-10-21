import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';

const Page = () => {
  return (
    <main className='flex h-screen place-items-center items-center justify-center'>
      <div className='flex flex-col items-center gap-3'>
        <div className='flex justify-center mb-12'>
          <Image src={logo} alt='Logo' />
        </div>

        <div>
          {' '}
          <Input
            type='email'
            id='id'
            name='id'
            placeholder='아이디(이메일)를 입력해 주세요'
            classNames={{
              input: 'placeholder:text-grayText',
              inputWrapper:
                'h-[50px] w-[358px] rounded-[12px] border-[1px] border-grayBorder bg-white',
            }}
          />
        </div>
        <div>
          {' '}
          <Input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호를 입력해 주세요'
            classNames={{
              input: 'placeholder:text-grayText',
              inputWrapper:
                'h-[50px] w-[358px] rounded-[12px] border-[1px] border-grayBorder bg-white',
            }}
          />
        </div>
        <div className='w-full'>
          <Link href='/admin/membership/dashboard'>
            <Button className='bg-rootBtn text-mainWhite w-full rounded-[10px] text-[16px] font-normal leading-[22px]'>
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
