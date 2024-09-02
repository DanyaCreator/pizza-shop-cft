import { PizzaIngredientNames } from '../Pizza/Pizza.ts';

export type PizzaCart = {
  name: string;
  description: string;
  image: string;
  ingredients: PizzaIngredientNames[];
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  total: number;
  count: number;
};

export type Cart = {
  cart: PizzaCart[];
};
