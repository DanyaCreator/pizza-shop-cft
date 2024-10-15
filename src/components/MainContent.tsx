import ModalWrapper from './wrappers/ModalWrapper.tsx';
import { useEffect, useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaModalMenu from './modal/PizzaModalMenu.tsx';
import PizzaCard from './PizzaCard.tsx';
import { Pizza, PizzaCatalog, PizzaDto } from '../types/Pizza/Pizza.ts';
import { getCatalog } from '../api/getCatalog.ts';

const MainContent = () => {
  const [activePizzaData, setActivePizzaData] = useState<PizzaDto | null>();
  const [pizzaCatalog, setPizzaCatalog] = useState<PizzaCatalog | null>();
  useLockedBody(!!activePizzaData);

  useEffect(() => {
    getCatalog().then(setPizzaCatalog);
  }, []);

  const setPizzaDto = (pizzaData: Pizza) => {
    const pizzaDto: PizzaDto = {
      image: pizzaData.img,
      name: pizzaData.name,
      description: pizzaData.description,
      ingredients: pizzaData.ingredients,
      size: pizzaData.sizes,
    };

    setActivePizzaData(pizzaDto);
  };

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
            openPizzaModal={() => setPizzaDto(pizzaData)}
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
