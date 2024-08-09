type PizzaAdditionBtnProps = {
  image: string;
  name: string;
  price: number;
  number: number;
};

const PizzaAdditionBtn = ({
  image,
  name,
  price,
  number,
}: PizzaAdditionBtnProps) => {
  return (
    <div>
      <input
        className={'peer hidden'}
        type='checkbox'
        id={`pizza-addition-btn${number}`}
      />
      <label
        htmlFor={`pizza-addition-btn${number}`}
        className={
          'pizza-addition-btn w-[124px] h-[192px] flex flex-col justify-between p-[8px] cursor-pointer peer-checked:outline outline-1 outline-[#F4511E] transition-colors duration-200 ease-in-out'
        }>
        <img src={image} alt='' />
        <span className={'text-[12px] font-[400] text-center'}>{name}</span>
        <span className={'text-[14px] font-[500] text-center'}>{price}₽</span>
      </label>
    </div>
  );
};

export default PizzaAdditionBtn;
