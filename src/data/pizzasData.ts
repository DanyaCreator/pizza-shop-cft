import {
  CheeseBig,
  DoubleChickenBig,
  HamAndCheeseBig,
  PepperoniBig,
} from '../assets/images.ts';

export type PizzaData = {
  image: string;
  name: string;
  description: string;
  cost: number;
};

export const pizzaData: PizzaData[] = [
  {
    image: PepperoniBig,
    name: 'Пепперони',
    description:
      'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус',
    cost: 299,
  },
  {
    image: CheeseBig,
    name: 'Сырная',
    description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
    cost: 289,
  },
  {
    image: DoubleChickenBig,
    name: 'Двойной цыпленок',
    description: 'Цыпленок, моцарелла, фирменный соус альфредо',
    cost: 389,
  },
  {
    image: HamAndCheeseBig,
    name: 'Ветчина и сыр',
    description:
      'Сочная ветчина, моцарелла, сыр мармезан, фирменный соус альфредо',
    cost: 359,
  },
  {
    image: PepperoniBig,
    name: 'Двойная пепперони',
    description:
      'Двойная порция пепперони, увеличенная порция моцареллы, фирменный томатный соус',
    cost: 299,
  },
];
