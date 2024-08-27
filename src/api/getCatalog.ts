import { PizzaCatalog } from '../types/Pizza/Pizza.ts';
import axios from 'axios';

export const getCatalog = async (): Promise<PizzaCatalog | null> => {
  try {
    const pizzaCatalog = await axios.get<PizzaCatalog>(
      'https://shift-backend.onrender.com/pizza/catalog'
    );

    return pizzaCatalog.data;
  } catch {
    return null;
  }
};
