import { Cross } from '../assets/images.ts';
import { useState } from 'react';

type PizzaInCartProps = {
  name: string;
  image: string;
  description: string;
  price: number;
};

const PizzaInCart = ({ name, image, description, price }: PizzaInCartProps) => {
  const [counter, setCounter] = useState(1);
  const handleClickDecrease = () => {
    if (counter <= 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleClickIncrease = () => {
    setCounter(counter + 1);
  };

  const [closePizza, setClosePizza] = useState(true);

  return (
    closePizza && (
      <article className={'flex gap-[24px] items-center'}>
        <img className={'w-[63px] h-[63px]'} src={image} alt='' />
        <h1 className={'w-[120px] font-[500]'}>{name}</h1>
        <p className={'w-[280px] font-[400] text-[14px]'}>{description}</p>
        <div
          className={
            'w-[124px] h-[36px] flex items-center justify-center gap-[24px] p-[10px] bg-gray-200 rounded-[15px]'
          }>
          <button onClick={() => handleClickDecrease()} className={'p-2'}>
            -
          </button>
          <span>{counter}</span>
          <button onClick={() => handleClickIncrease()} className={'p-2'}>
            +
          </button>
        </div>
        <button className={'font-[400] text-[14px] text-[#97A1AF] border-b'}>
          Изменить
        </button>
        <span className={'font-[500] text-[16px]'}>
          {price * counter} р
        </span>
        <button onClick={() => setClosePizza(false)}>
          <img src={Cross} alt='' />
        </button>
      </article>
    )
  );
};

export default PizzaInCart;
