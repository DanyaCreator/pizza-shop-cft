type PizzaSizeBtnProps = {
  size: string;
};

const PizzaSizeBtn = ({ size }: PizzaSizeBtnProps) => {
  return (
    <button className={'pizza-size-btn rounded-[14px] text-[#637083]'}>
      {size}
    </button>
  );
};

export default PizzaSizeBtn;
