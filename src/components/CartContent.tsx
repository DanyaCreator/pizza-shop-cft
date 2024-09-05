import RoundedBtn from './buttons/RoundedBtn.tsx';
import PizzaInCart from './PizzaInCart.tsx';
import { useEffect, useState } from 'react';
import { PizzaCart } from '../types/Cart/PizzaCart.ts';
import {
  decreasePizzaInCart,
  getCartData,
  increasePizzaInCart,
  removePizzaFromCart,
} from '../api/localStorage.ts';

const CartContent = () => {
  const [cartData, setCartData] = useState<PizzaCart[] | null>(null);

  const [totalAmount, setTotalAmount] = useState(0);

  const removePizza = (cartData: PizzaCart) => {
    removePizzaFromCart(cartData);
    fetchPizzaCart();
  };

  const increasePizza = (cartData: PizzaCart) => {
    increasePizzaInCart(cartData);
    fetchPizzaCart();
  };

  const decreasePizza = (cartData: PizzaCart) => {
    decreasePizzaInCart(cartData);
    fetchPizzaCart();
  };

  const fetchPizzaCart = () => {
    const pizzaDataInCart = getCartData();

    if (!pizzaDataInCart) {
      setCartData(null);
      return;
    }
    setCartData(pizzaDataInCart.cart);
  };

  useEffect(() => {
    fetchPizzaCart();
  }, []);

  useEffect(() => {
    let totalPrice = 0;

    if (!cartData) return;
    for (const i of cartData) {
      totalPrice += i.total * i.count;
    }
    setTotalAmount(totalPrice);
  }, [cartData]);

  return (
    <div
      className={
        'container w-screen h-screen flex flex-col items-center gap-[24px] pr-[240px] pl-[240px] pt-[110px]'
      }>
      <section
        className={
          'flex flex-col justify-center border-b pb-[24px] gap-[24px]'
        }>
        {cartData &&
          cartData.map((cartData, index) => (
            <PizzaInCart
              key={index}
              data={cartData}
              removePizza={removePizza}
              decrease={decreasePizza}
              increase={increasePizza}
            />
          ))}
      </section>
      <div className={'flex items-center w-[960px]'}>
        <span className={'w-full font-[700] text-[24px]'}>
          Стоимость заказа: {totalAmount} р
        </span>
        <RoundedBtn text={'Оформить заказ'} />
      </div>
    </div>
  );
};

export default CartContent;
