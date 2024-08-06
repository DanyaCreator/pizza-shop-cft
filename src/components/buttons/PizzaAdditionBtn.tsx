type PizzaAdditionBtnProps = {
  image: string;
  name: string;
  price: number;
};

const PizzaAdditionBtn = ({ image, name, price }: PizzaAdditionBtnProps) => {
  return (
    <button
      className={
        'w-[124px] h-[192px] flex flex-col items-center justify-between p-[8px]'
      }>
      <img src={image} alt='' />
      <span className={'text-[12px] font-[400]'}>{name}</span>
      <span className={'text-[14px] font-[500]'}>{price}₽</span>
    </button>
  );
};

export default PizzaAdditionBtn;
