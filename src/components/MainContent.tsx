import ModalWrapper from './wrappers/ModalWrapper.tsx';
import { useEffect, useState } from 'react';
import PizzaModalMenu from './modal/PizzaModalMenu.tsx';
import PizzaCard from './PizzaCard.tsx';
import { Pizza, PizzaCatalog } from '../types/Pizza/Pizza.ts';
import { getCatalog } from '../api/getCatalog.ts';

const MainContent = () => {
  const [currentPizza, setCurrentPizza] = useState<Pizza | null>();
  const [pizzaCatalog, setPizzaCatalog] = useState<PizzaCatalog | null>();

  useEffect(() => {
    // TODO Make output error via toast
    getCatalog()
      .then(setPizzaCatalog)
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='container main-content'>
      {pizzaCatalog &&
        pizzaCatalog.catalog.map((pizza) => (
          <PizzaCard
            pizza={pizza}
            openPizzaModal={() => setCurrentPizza(pizza)}
          />
        ))}
      {currentPizza && (
        <ModalWrapper
          isOpen={!!currentPizza}
          onClose={() => setCurrentPizza(null)}>
          <PizzaModalMenu
            onClose={() => setCurrentPizza(null)}
            pizza={currentPizza}
          />
        </ModalWrapper>
      )}
    </main>
  );
};

export default MainContent;
