import ModalWrapper from './modal/ModalWrapper.tsx';
import { useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaModalMenu from './PizzaModalMenu.tsx';
import { pizzaData } from '../data/pizzasData.ts';
import PizzaCard from './PizzaCard.tsx';

const MainContent = () => {
  const [isPizzaModalOpened, setIsPizzaModalOpened] = useState(false);
  useLockedBody(isPizzaModalOpened);
  return (
    <main className='container main-content'>
      {pizzaData.map((pizzaData, index) => (
        <PizzaCard
          key={index}
          image={pizzaData.image}
          name={pizzaData.name}
          description={pizzaData.description}
          cost={pizzaData.cost}
          openPizzaModal={() => setIsPizzaModalOpened(true)}
        />
      ))}
      {isPizzaModalOpened && (
        <ModalWrapper onClose={() => setIsPizzaModalOpened(false)}>
          <PizzaModalMenu />
        </ModalWrapper>
      )}
    </main>
  );
};

export default MainContent;
