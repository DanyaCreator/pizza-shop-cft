import ModalWrapper from './modal/ModalWrapper.tsx';
import { useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaModalMenu from './PizzaModalMenu.tsx';
import { PizzaData, pizzaData } from '../data/pizzasData.ts';
import PizzaCard from './PizzaCard.tsx';

const MainContent = () => {
  const [activePizzaData, setActivePizzaData] = useState<Omit<
    PizzaData,
    'cost'
  > | null>(null);
  useLockedBody(!!activePizzaData);
  return (
    <main className='container main-content'>
      {pizzaData.map((pizzaData, index) => (
        <PizzaCard
          key={index}
          image={pizzaData.image}
          name={pizzaData.name}
          description={pizzaData.description}
          cost={pizzaData.cost}
          openPizzaModal={() =>
            setActivePizzaData({
              image: pizzaData.image,
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
