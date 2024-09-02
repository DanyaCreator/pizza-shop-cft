import { Cart, PizzaCart } from '../types/Cart/PizzaCart.ts';
import { LocalStorageKey } from '../enum/LocalStorageKey.ts';
import { data } from 'autoprefixer';

export const getCartData = (): Cart | null => {
  const cartData = localStorage.getItem(LocalStorageKey.Cart);

  if (!cartData) return null;

  return JSON.parse(cartData) as Cart;
};

export const addPizzaToCart = (data: PizzaCart) => {
  const cartData = getCartData();

  if (!cartData) {
    localStorage.setItem(
      LocalStorageKey.Cart,
      JSON.stringify({ cart: [data] })
    );
    return;
  }

  cartData.cart.push(data);
  localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
};

export const removePizzaFromCart = (data: PizzaCart) => {
  const cartData = getCartData();

  if (!cartData) return;

  cartData.cart.filter((item) => JSON.stringify(item) === JSON.stringify(data));

  localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
};

export const increasePizzaInCart = (data: PizzaCart) => {
  const cartData = getCartData();

  if (!cartData) return;

  cartData.cart.map((item) =>
    JSON.stringify(item) === JSON.stringify(data) ? (item.count += 1) : {}
  );

  localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
};

// TODO Сделай по аналогии с increase
export const decreasePizzaInCart;
