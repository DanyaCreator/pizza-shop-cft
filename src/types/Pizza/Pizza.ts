type PizzaIngredientNames =
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

type PizzaIngredient = {
  name: PizzaIngredientNames;
  cost: number;
  img: string;
};

type PizzaSize = {
  name: 'SMALL' | 'MEDIUM' | 'LARGE';
  price: number;
};

type PizzaDough = {
  name: 'THIN' | 'THICK';
  price: number;
};

type Pizza = {
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

export type PizzaCatalog = {
  success: boolean;
  reason?: string;
  catalog: Pizza[];
};
