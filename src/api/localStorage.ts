import { Cart, PizzaCart } from '../types/Cart/PizzaCart.ts';
import { LocalStorageKey } from '../enum/LocalStorageKey.ts';
import * as _ from 'lodash';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { count, ...dataWithoutCount } = data;
  for (const item of cartData.cart) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { count, ...itemDataWithoutCount } = item;
    if (_.isEqual(dataWithoutCount, itemDataWithoutCount)) {
      item.count += 1;
      localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
      return;
    }
  }

  cartData.cart.push(data);
  localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
};

export const removePizzaFromCart = (data: PizzaCart) => {
  const cartData = getCartData();

  if (!cartData) return;

  const currentCartData = cartData.cart.filter(
    (item) => !_.isEqual(item, data)
  );

  localStorage.setItem(
    LocalStorageKey.Cart,
    JSON.stringify({ cart: currentCartData })
  );
};

export const increasePizzaInCart = (data: PizzaCart) => {
  const cartData = getCartData();

  if (!cartData) return;

  cartData.cart.map((item) =>
    _.isEqual(item, data) && item.count <= 100 ? (item.count += 1) : {}
  );

  localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
};

export const decreasePizzaInCart = (data: PizzaCart) => {
  const cartData = getCartData();

  if (!cartData) return;

  cartData.cart.map((item) =>
    _.isEqual(item, data) && item.count > 1 ? (item.count -= 1) : {}
  );

  localStorage.setItem(LocalStorageKey.Cart, JSON.stringify(cartData));
};
