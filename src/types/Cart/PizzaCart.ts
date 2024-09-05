export type PizzaCart = {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  total: number;
  count: number;
};

export type Cart = {
  cart: PizzaCart[];
};
