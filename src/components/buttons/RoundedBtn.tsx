import { ButtonHTMLAttributes } from 'react';

type ChooseBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

const RoundedBtn = ({ text, ...props }: ChooseBtnProps) => {
  return (
    <div className={'group rounded-[16px] w-full'}>
      <button
        className={
          'w-full bg-[#F4511E] h-[56px] rounded-[16px] group-hover:bg-white group-hover: border-[1px] border-[#F4511E] transition-colors duration-200'
        }
        {...props}>
        <span
          className={
            'font-[500] text-white group-hover:text-[#F4511E] transition-colors duration-200 '
          }>
          {text}
        </span>
      </button>
    </div>
  );
};

export default RoundedBtn;
