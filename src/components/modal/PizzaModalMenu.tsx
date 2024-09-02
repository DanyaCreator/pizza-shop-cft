import PizzaSizeRadio from '../buttons/PizzaSizeRadio.tsx';
import RoundedBtn from '../buttons/RoundedBtn.tsx';
import { PizzaInfo } from '../MainContent.tsx';
import PizzaAdditionBtn from '../buttons/PizzaAdditionBtn.tsx';
import { pizzasIngredientNames } from '../../consts/pizzasIngredientNames.ts';
import { useForm } from 'react-hook-form';
import { PizzaIngredientNames } from '../../types/Pizza/Pizza.ts';
import { addPizzaToCart } from '../../api/localStorage.ts';
import { useEffect, useState } from 'react';

type PizzaModalMenuProps = PizzaInfo & {
  onClose: () => void;
};

type FormValues = {
  ingredients: PizzaIngredientNames[];
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
};

const pizzaSizes: Record<'SMALL' | 'MEDIUM' | 'LARGE', number> = {
  SMALL: 25,
  MEDIUM: 30,
  LARGE: 35,
};

const PizzaModalMenu = ({
  image,
  name,
  description,
  ingredients,
  onClose,
}: PizzaModalMenuProps) => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      ingredients: [],
      size: 'SMALL',
    },
  });

  const pizzaSizeWatch = watch('size');
  const pizzaIngredientsWatch = watch('ingredients');

  // TODO В useState добавь дефолтное значение, вдруг пользователь выбирать ничего не будет, пока что там 0, должна быть цена выбранной пиццы маленького размера
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // TODO Здесь тебе нужно исходя из выбранных юзером данных в форме менять общую сумму пиццы, используй данные pizzaSizeWatch и pizzaIngredientsWatch
  }, [pizzaSizeWatch, pizzaIngredientsWatch]);

  const onSubmit = (data: FormValues) => {
    const cartPizza = {
      name: name,
      description: description,
      image: image,
      ingredients: data.ingredients,
      size: data.size,
      // TODO Тут должна быть актуальная сумма
      total: totalAmount,
      count: 1,
    };

    addPizzaToCart(cartPizza);
    onClose();
  };

  return (
    <div
      className={
        'flex items-center justify-center gap-[32px] rounded-[15px] p-[64px] pb-[24px]'
      }>
      <div className={'flex self-start w-[220px]'}>
        <img src={`https://shift-backend.onrender.com${image}`} alt='' />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'w-[426px] flex flex-col gap-[24px]'}>
        <div className={'pizza-info-menu'}>
          <div className={'flex flex-col gap-[8px] pl-[10px]'}>
            <h1 className={'font-[700] text-[#292929] text-[24px]'}>{name}</h1>
            <span className={'font-[400] text-[#535353] text-[14px]'}>
              {pizzaSizes[pizzaSizeWatch]} см, традиционное тесто
            </span>
            <span className={'font-[400] text-[#535353] text-[16px]'}>
              {description}
            </span>
          </div>
          <div className={'flex justify-between pt-[26px] pb-[26px] pl-[10px]'}>
            <fieldset
              className={
                'w-full flex justify-between bg-[#F3F4F6] h-[44px] items-center rounded-[16px] p-[2px]'
              }>
              <PizzaSizeRadio
                title={'Маленькая'}
                value={'SMALL'}
                {...register('size')}
              />
              <PizzaSizeRadio
                title={'Средняя'}
                value={'MEDIUM'}
                {...register('size')}
              />
              <PizzaSizeRadio
                title={'Большая'}
                value={'LARGE'}
                {...register('size')}
              />
            </fieldset>
          </div>
          <article className={'text-[#292929] h-full'}>
            <span className={'font-[500] text-[16px] pl-[10px]'}>
              Добавить по вкусу
            </span>
            <div className={'pizza-addition-menu'}>
              {ingredients.map((item, index) => (
                <PizzaAdditionBtn
                  image={item.img}
                  ingredientName={pizzasIngredientNames[item.name]}
                  price={item.cost}
                  number={index + 1}
                  value={item.name}
                  {...register('ingredients')}
                />
              ))}
            </div>
          </article>
        </div>
        <RoundedBtn type={'submit'} text={'Добавить в корзину'} />
      </form>
    </div>
  );
};

export default PizzaModalMenu;
