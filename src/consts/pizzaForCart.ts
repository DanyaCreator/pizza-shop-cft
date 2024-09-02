import { CheeseSmall, PepperoniSmall } from '../assets/images.ts';

type pizzasForCart = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export const pizzasForCart: pizzasForCart[] = [
  {
    name: 'Пепперони',
    image: PepperoniSmall,
    description: 'Средняя 30 см, традиционное тесто + моцарелла, халапеньо',
    price: 499,
  },
  {
    name: 'Сырная',
    image: CheeseSmall,
    description: 'Маленькая 25 см, традиционное тесто + моцарелла, халапеньо',
    price: 399,
  },
];
