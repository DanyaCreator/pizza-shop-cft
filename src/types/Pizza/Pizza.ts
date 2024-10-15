export type PizzaIngredientNames =
  | 'PINEAPPLE'
  | 'MOZZARELLA'
  | 'PEPERONI'
  | 'GREEN_PEPPER'
  | 'MUSHROOMS'
  | 'BASIL'
  | 'CHEDDAR'
  | 'PARMESAN'
  | 'FETA'
  | 'HAM'
  | 'PICKLE'
  | 'TOMATO'
  | 'BACON'
  | 'ONION'
  | 'CHILE'
  | 'SHRIMPS'
  | 'CHICKEN_FILLET'
  | 'MEATBALLS';

export type PizzaIngredient = {
  name: PizzaIngredientNames;
  cost: number;
  img: string;
};

export type PizzaSizeNames = 'SMALL' | 'MEDIUM' | 'LARGE';

export type PizzaSize = {
  name: PizzaSizeNames;
  price: number;
};

type PizzaDough = {
  name: 'THIN' | 'THICK';
  price: number;
};

export type Pizza = {
  id: string;
  name: string;
  ingredients: PizzaIngredient[];
  toppings: PizzaIngredient[];
  description: string;
  sizes: PizzaSize[];
  doughs: PizzaDough;
  calories: number;
  protein: string;
  totalFat: string;
  carbohydrates: string;
  sodium: string;
  allergens: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isNew: boolean;
  isHit: boolean;
  img: string;
};

export type PizzaDto = {
  image: string;
  name: string;
  description: string;
  ingredients: PizzaIngredient[];
  size: PizzaSize[];
};

export type PizzaCatalog = {
  success: boolean;
  reason?: string;
  catalog: Pizza[];
};
