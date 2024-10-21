import MainButton from "@/components/button";
import DropDownWithLabel from "@/components/DropDownWithLabel";
import InputWithLabel from "@/components/InputWithLabel";

const MainHead = () => {
  // selection field
  const options = [
    { key: "1", label: "선택" },
    { key: "2", label: "일반회원" },
    { key: "3", label: "판매자" },
    { key: "4", label: "관리자" },
  ];
  return (
    <div className="mt-4 rounded-[20px] bg-mainWhite px-9 py-7">
      <div className="mt-[20px] flex items-end justify-between">
        <InputWithLabel
          label="투어시작일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <InputWithLabel
          label="투어종료일"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <DropDownWithLabel
          title="진행상태"
          options={options}
          defaultSelectedKeys="1"
          titleStyles="  w-[90px]"
          insideStyles=" w-[350px] h-[44px] "
        />
      </div>
      <div className="mt-[20px] flex items-end justify-between">
        <InputWithLabel
          label="단체방명"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <InputWithLabel
          label="방장"
          placeholder="입력"
          inputStyles="w-[350px] h-[44px]"
        />
        <MainButton text="조회" />
      </div>
    </div>
  );
};

export default MainHead;
