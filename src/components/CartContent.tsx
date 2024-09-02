import RoundedBtn from './buttons/RoundedBtn.tsx';
import PizzaInCart from './PizzaInCart.tsx';
import { useState } from 'react';

const CartContent = () => {
  const [activePizzaInCart, setActivePizzaInCart] = useState(true);

  return (
    <div
      className={
        'container w-screen h-screen flex flex-col items-center gap-[24px] pr-[240px] pl-[240px] pt-[110px]'
      }>
      <section className={'flex flex-col justify-center border-b pb-[24px]'}>
        {activePizzaInCart && (
          <PizzaInCart
            onClose={() => {
              setActivePizzaInCart(false);
            }}
          />
        )}
        {activePizzaInCart && (
          <PizzaInCart
            onClose={() => {
              setActivePizzaInCart(false);
            }}
          />
        )}
      </section>
      <div className={'flex items-center w-[960px]'}>
        <span className={'w-full font-[700] text-[24px]'}>
          Стоимость заказа: р
        </span>
        <RoundedBtn text={'Оформить заказ'} />
      </div>
    </div>
  );
};

export default CartContent;
