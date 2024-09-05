import ModalWrapper from './modal/ModalWrapper.tsx';
import { useEffect, useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaModalMenu from './modal/PizzaModalMenu.tsx';
import PizzaCard from './PizzaCard.tsx';
import {
  PizzaCatalog,
  PizzaIngredient,
  PizzaSize,
} from '../types/Pizza/Pizza.ts';
import { getCatalog } from '../api/getCatalog.ts';

export type PizzaInfo = {
  image: string;
  name: string;
  description: string;
  ingredients: PizzaIngredient[];
  size: PizzaSize[];
};

const MainContent = () => {
  const [activePizzaData, setActivePizzaData] = useState<PizzaInfo | null>();
  const [pizzaCatalog, setPizzaCatalog] = useState<PizzaCatalog | null>();
  useLockedBody(!!activePizzaData);

  useEffect(() => {
    getCatalog().then(setPizzaCatalog);
  }, []);

  return (
    <main className='container main-content'>
      {pizzaCatalog &&
        pizzaCatalog.catalog.map((pizzaData, index) => (
          <PizzaCard
            key={index}
            image={pizzaData.img}
            name={pizzaData.name}
            description={pizzaData.description}
            cost={pizzaData.sizes[0].price}
            openPizzaModal={() =>
              setActivePizzaData({
                image: pizzaData.img,
                name: pizzaData.name,
                description: pizzaData.description,
                ingredients: pizzaData.ingredients,
                size: pizzaData.sizes,
              })
            }
          />
        ))}
      {activePizzaData && (
        <ModalWrapper onClose={() => setActivePizzaData(null)}>
          <PizzaModalMenu
            onClose={() => setActivePizzaData(null)}
            image={activePizzaData.image}
            name={activePizzaData.name}
            description={activePizzaData.description}
            ingredients={activePizzaData.ingredients}
            size={activePizzaData.size}
          />
        </ModalWrapper>
      )}
    </main>
  );
};

export default MainContent;
