import { Pizza, PizzaIngredient, PizzaSize } from '../Pizza/Pizza.ts';

export type PizzaCart = Pizza & {
  count: number;
  selectedIngredients: PizzaIngredient[];
  selectedSize: PizzaSize;
};

export type Cart = {
  cart: PizzaCart[];
};
