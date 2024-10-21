import { Input } from "@nextui-org/react";

const InputWithLabelActive = ({
  label,
  defaultValue,
  handelChangeText,
  mainStyles,
  labelStyles,
  inputParentStyles,
  inputStyles,
  placeholder,
  type = "text",
}: {
  label: string;
  defaultValue?: string;
  handelChangeText?: any;
  mainStyles?: string;
  labelStyles?: string;
  inputParentStyles?: string;
  inputStyles?: string;
  placeholder?: string;
  type?: "text" | "number" | "date" | "email";
}) => {
  return (
    <section className={`${mainStyles}`}>
      <div>
        <h3
          className={`${labelStyles} mb-2 text-nowrap text-sm font-bold text-mainGray`}
        >
          {label}
        </h3>
      </div>

      <div>
        <div className={`${inputParentStyles} `}>
          <Input
            placeholder={placeholder}
            defaultValue={defaultValue}
            type={type}
            onValueChange={handelChangeText}
            classNames={{
              input: [
                "placeholder:text-mainGray placeholder:text-[16px] text-[15px]",
              ],
              inputWrapper: [
                `${inputStyles}  bg-[#ffffff] border-[1px] border-[#DADFE2] rounded-[12px] `,
              ],
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default InputWithLabelActive;
