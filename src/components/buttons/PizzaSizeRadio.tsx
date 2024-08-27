type PizzaSizeRadioProps = {
  checked: boolean;
  onChange: () => void;
  title: string;
};

const PizzaSizeRadio = ({ checked, onChange, title }: PizzaSizeRadioProps) => {
  return (
    <div className={'relative w-[130px] h-[40px]'}>
      <input
        type='radio'
        checked={checked}
        onChange={onChange}
        className={
          'transition-colors duration-200 absolute w-full h-full rounded-[14px] cursor-pointer appearance-none peer checked:bg-[#FFFFFF]'
        }
      />
      <label
        className={
          'transition duration-200 absolute text-[#637083] font-[400] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none peer-checked:text-[#141C24]'
        }>
        {title}
      </label>
    </div>
  );
};

export default PizzaSizeRadio;
