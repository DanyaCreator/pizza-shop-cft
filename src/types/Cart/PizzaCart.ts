export type PizzaCart = {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  size: string | 'SMALL' | 'MEDIUM' | 'LARGE';
  total: number;
  count: number;
};

export type Cart = {
  cart: PizzaCart[];
};
