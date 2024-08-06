type ChooseBtnProps = {
  onClick: () => void;
  text: string;
};

const RoundedBtn = ({ onClick, text }: ChooseBtnProps) => {
  return (
    <button
      className={'bg-[#F4511E] w-full h-[56px] rounded-[16px]'}
      onClick={onClick}>
      <span className={'font-[600] text-white'}>{text}</span>
    </button>
  );
};

export default RoundedBtn;
