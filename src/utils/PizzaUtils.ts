import { PizzaCart } from '../types/Cart/PizzaCart.ts';

export class PizzaUtils {
  static calculatePizzaCost(pizza: PizzaCart) {
    const ingredientsCost = Array.from(
      pizza.selectedIngredients.map((i) => i.cost)
    ).reduce((partialSum, a) => partialSum + a, 0);

    return pizza.selectedSize.price + ingredientsCost;
  }
}
