import ModalWrapper from './modal/ModalWrapper.tsx';
import { useEffect, useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaModalMenu from './PizzaModalMenu.tsx';
import { PizzaData } from '../data/pizzasData.ts';
import PizzaCard from './PizzaCard.tsx';
import { PizzaCatalog } from '../types/Pizza/Pizza.ts';
import { getCatalog } from '../api/getCatalog.ts';

const MainContent = () => {
  const [activePizzaData, setActivePizzaData] = useState<Omit<
    PizzaData,
    'cost'
  > | null>(null);
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
          />
        </ModalWrapper>
      )}
    </main>
  );
};

export default MainContent;
