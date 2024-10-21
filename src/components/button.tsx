import React from "react";

interface MainButtonProps {
  text: string; // Define the type of the text prop
}

const MainButton: React.FC<MainButtonProps> = ({ text }) => {
  return (
    <button className="flex h-[44px] w-[350px] items-center justify-center rounded-xl bg-bgYellow px-4">
      <div className="text-center font-bold text-textYellow">{text}</div>
    </button>
  );
};

export default MainButton;
