type PizzaSizeBtnProps = {
  size: string;
};

const PizzaSizeBtn = ({ size }: PizzaSizeBtnProps) => {
  return (
    <button
      className={
        'pizza-size-btn w-[130px] h-[40px] rounded-[10px] text-[#637083]'
      }>
      {size}
    </button>
  );
};

export default PizzaSizeBtn;
