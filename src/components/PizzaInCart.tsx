import { Cross, PepperoniSmall } from '../assets/images.ts';
import { useState } from 'react';

const PizzaInCart = () => {
  const [counter, setCounter] = useState(1);
  const handleClickMinus = () => {
    if (counter <= 1) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  const [closePizza, setClosePizza] = useState(true);

  return (
    closePizza && (
      <article className={'flex gap-[24px] items-center'}>
        <img className={'w-[63px] h-[63px]'} src={PepperoniSmall} alt='' />
        <h1 className={'w-[120px] font-[500]'}>Двойной цыпленок</h1>
        <p className={'w-[280px] font-[400] text-[14px]'}>
          Средняя 30 см, традиционное тесто <br /> + моцарелла, халапеньо
        </p>
        <div
          className={
            'w-[124px] h-[36px] flex items-center justify-center gap-[24px] p-[10px] bg-gray-200 rounded-[15px]'
          }>
          <button onClick={() => handleClickMinus()}>-</button>
          <span>{counter}</span>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
        <button className={'font-[400] text-[14px] text-[#97A1AF] border-b'}>
          Изменить
        </button>
        <span className={'w-[160px] font-[500] text-[16px]'}>620 р</span>
        <button onClick={() => setClosePizza(false)}>
          <img src={Cross} alt='' />
        </button>
      </article>
    )
  );
};

export default PizzaInCart;
