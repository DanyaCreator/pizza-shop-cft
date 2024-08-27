import ModalWrapper from './modal/ModalWrapper.tsx';
import { useEffect, useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaModalMenu from './PizzaModalMenu.tsx';
import PizzaCard from './PizzaCard.tsx';
import { PizzaCatalog, PizzaIngredient } from '../types/Pizza/Pizza.ts';
import { getCatalog } from '../api/getCatalog.ts';

export type PizzaInfo = {
  image: string;
  name: string;
  description: string;
  ingredients: PizzaIngredient[];
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
              })
            }
          />
        ))}
      {activePizzaData && (
        <ModalWrapper onClose={() => setActivePizzaData(null)}>
          <PizzaModalMenu
            image={activePizzaData.image}
            name={activePizzaData.name}
            description={activePizzaData.description}
            ingredients={activePizzaData.ingredients}
          />
        </ModalWrapper>
      )}
    </main>
  );
};

export default MainContent;
