import { Cross } from '../assets/images.ts';
import { PizzaCart } from '../types/Cart/PizzaCart.ts';
import { useState } from 'react';
import ModalWrapper from './wrappers/ModalWrapper.tsx';
import PizzaModalMenu from './modal/PizzaModalMenu.tsx';
import { pizzasIngredientNames } from '../consts/pizzasIngredientNames.ts';
import { PizzaSizeNames } from '../types/Pizza/Pizza.ts';
import { API } from '../enum/API.ts';
import { PizzaUtils } from '../utils/PizzaUtils.ts';

type PizzaInCartProps = {
  data: PizzaCart;
  removePizza: (cartData: PizzaCart) => void;
  decrease: (cartData: PizzaCart) => void;
  increase: (cartData: PizzaCart) => void;
};

const sizeDescription: Record<PizzaSizeNames, string> = {
  SMALL: 'Маленькая 25 см',
  MEDIUM: 'Средняя 30 см',
  LARGE: 'Большая 35 см',
};

const PizzaInCart = ({
  data,
  removePizza,
  decrease,
  increase,
}: PizzaInCartProps) => {
  // const [pizzaModal, setPizzaModal] = useState<PizzaCart | null>(null);
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <article className={'flex gap-[24px] items-center'}>
      <img className={'w-[63px] h-[63px]'} src={API.Root + data.img} alt='' />
      <h1 className={'w-[120px] font-[500]'}>{data.name}</h1>
      <p className={'w-[280px] font-[400] text-[14px]'}>
        {sizeDescription[data.selectedSize.name]}, традиционное тесто
        <br />
        {data.selectedIngredients
          .map((item) => pizzasIngredientNames[item.name])
          .join(', ')}
      </p>
      <div
        className={
          'w-[124px] h-[36px] flex items-center justify-center gap-[24px] p-[10px] bg-gray-200 rounded-[15px]'
        }>
        <button onClick={() => decrease(data)} className={'p-2'}>
          -
        </button>
        <span className={'w-[15px]'}>{data.count}</span>
        <button onClick={() => increase(data)} className={'p-2'}>
          +
        </button>
      </div>
      <button
        onClick={() => {
          setIsModalOpened((prevState) => !prevState);
        }}
        className={'font-[400] text-[14px] text-[#97A1AF] border-b'}>
        Изменить
      </button>
      {isModalOpened && (
        <ModalWrapper
          onClose={() => setIsModalOpened(false)}
          isOpen={isModalOpened}>
          <PizzaModalMenu
            onClose={() => setIsModalOpened(false)}
            pizza={data}
            selectedIngredients={data.selectedIngredients}
            selectedSize={data.selectedSize}
          />
        </ModalWrapper>
      )}
      <span className={'font-[500] text-[16px]'}>
        {PizzaUtils.calculatePizzaCost(data) * data.count} р
      </span>
      <button onClick={() => removePizza(data)}>
        <img src={Cross} alt='' className={'p-[10px]'} />
      </button>
    </article>
  );
};

export default PizzaInCart;
