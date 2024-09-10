import { PizzaIngredient, PizzaSize } from '../Pizza/Pizza.ts';

type SelectedPizzaIngredient = PizzaIngredient & {
  selected: boolean;
};

type SelectedPizzaSize = PizzaSize & {
  selected: boolean;
};

export type PizzaCart = {
  name: string;
  description: string;
  image: string;
  ingredients: SelectedPizzaIngredient[];
  size: SelectedPizzaSize[];
  total: number;
  count: number;
};

export type Cart = {
  cart: PizzaCart[];
};
