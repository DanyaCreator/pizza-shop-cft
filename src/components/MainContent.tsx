import PizzaCard from './PizzaCard.tsx';
import { PepperoniBig } from '../assets/images.ts';
import ModalWrapper from './modal/ModalWrapper.tsx';
import { useState } from 'react';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import PizzaMenu from './PizzaMenu.tsx';

const MainContent = () => {
  const [isPizzaModalOpened, setIsPizzaModalOpened] = useState(false);
  useLockedBody(isPizzaModalOpened);
  return (
    <main className='container main-content'>
      <PizzaCard
        name={'Пепперони'}
        image={PepperoniBig}
        cost={299}
        description={
          'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус'
        }
        openPizzaModal={() => setIsPizzaModalOpened(true)}
      />
      <PizzaCard
        name={'Пепперони'}
        image={PepperoniBig}
        cost={299}
        description={
          'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус'
        }
        openPizzaModal={() => setIsPizzaModalOpened(true)}
      />
      <PizzaCard
        name={'Пепперони'}
        image={PepperoniBig}
        cost={299}
        description={
          'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус'
        }
        openPizzaModal={() => setIsPizzaModalOpened(true)}
      />
      <PizzaCard
        name={'Пепперони'}
        image={PepperoniBig}
        cost={299}
        description={
          'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус'
        }
        openPizzaModal={() => setIsPizzaModalOpened(true)}
      />
      <PizzaCard
        name={'Пепперони'}
        image={PepperoniBig}
        cost={299}
        description={
          'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус'
        }
        openPizzaModal={() => setIsPizzaModalOpened(true)}
      />
      <PizzaCard
        name={'Пепперони'}
        image={PepperoniBig}
        cost={299}
        description={
          'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус'
        }
        openPizzaModal={() => setIsPizzaModalOpened(true)}
      />
      {isPizzaModalOpened && (
        <ModalWrapper onClose={() => setIsPizzaModalOpened(false)}>
          <PizzaMenu />
        </ModalWrapper>
      )}
    </main>
  );
};

export default MainContent;
