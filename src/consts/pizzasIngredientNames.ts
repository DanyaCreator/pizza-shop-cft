import { PizzaIngredientNames } from '../types/Pizza/Pizza.ts';

type PizzasIngredients = Record<PizzaIngredientNames, string>;

export const pizzasIngredientNames: PizzasIngredients = {
  PINEAPPLE: 'Ананас',
  MOZZARELLA: 'Моцарелла',
  PEPERONI: 'Пепперони',
  GREEN_PEPPER: 'Зеленый перец',
  MUSHROOMS: 'Грибы',
  BASIL: 'Базилик',
  CHEDDAR: 'Сыр чеддар',
  PARMESAN: 'Сыр пармезан',
  FETA: 'Сыр фета',
  HAM: 'Ветчина',
  PICKLE: 'Огурец',
  TOMATO: 'Помидор',
  BACON: 'Бекон',
  ONION: 'Лук',
  CHILE: 'Чили',
  SHRIMPS: 'Креветки',
  CHICKEN_FILLET: 'Сочная курочка',
  MEATBALLS: 'Мясные шарики',
};
