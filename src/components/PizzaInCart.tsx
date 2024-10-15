import { Cross } from '../assets/images.ts';
import { PizzaCart } from '../types/Cart/PizzaCart.ts';
import { useState } from 'react';
import ModalWrapper from './wrappers/ModalWrapper.tsx';
import PizzaModalMenu from './modal/PizzaModalMenu.tsx';
import { pizzasIngredientNames } from '../consts/pizzasIngredientNames.ts';

type PizzaInCartProps = {
  data: PizzaCart;
  removePizza: (cartData: PizzaCart) => void;
  decrease: (cartData: PizzaCart) => void;
  increase: (cartData: PizzaCart) => void;
};

const PizzaInCart = ({
  data,
  removePizza,
  decrease,
  increase,
}: PizzaInCartProps) => {
  let pizzaSize;
  if (data.size[0].selected) pizzaSize = 'Маленькая 25 см';
  if (data.size[1].selected) pizzaSize = 'Средняя 30 см';
  if (data.size[2].selected) pizzaSize = 'Большая 35 см';

  const [pizzaModal, setPizzaModal] = useState<PizzaCart | null>(null);

  return (
    <article className={'flex gap-[24px] items-center'}>
      <img
        className={'w-[63px] h-[63px]'}
        src={`https://shift-backend.onrender.com${data.image}`}
        alt=''
      />
      <h1 className={'w-[120px] font-[500]'}>{data.name}</h1>
      <p className={'w-[280px] font-[400] text-[14px]'}>
        {pizzaSize}, традиционное тесто
        <br />
        {data.ingredients
          .filter((item) => item.selected)
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
          setPizzaModal({
            image: data.image,
            name: data.name,
            description: data.description,
            ingredients: data.ingredients,
            size: data.size,
            total: data.total,
            count: data.count,
          });
        }}
        className={'font-[400] text-[14px] text-[#97A1AF] border-b'}>
        Изменить
      </button>
      {pizzaModal && (
        <ModalWrapper onClose={() => setPizzaModal(null)}>
          <PizzaModalMenu
            onClose={() => setPizzaModal(null)}
            image={pizzaModal.image}
            name={pizzaModal.name}
            description={pizzaModal.description}
            ingredients={pizzaModal.ingredients}
            size={pizzaModal.size}
            defaultValues={{
              ingredients: pizzaModal.ingredients
                .filter((i) => i.selected)
                .map((i) => JSON.stringify(i)),
              size: pizzaModal.size.find((i) => i.selected)?.name || 'SMALL',
            }}
          />
        </ModalWrapper>
      )}
      <span className={'font-[500] text-[16px]'}>
        {data.total * data.count} р
      </span>
      <button onClick={() => removePizza(data)}>
        <img src={Cross} alt='' className={'p-[10px]'} />
      </button>
    </article>
  );
};

export default PizzaInCart;
