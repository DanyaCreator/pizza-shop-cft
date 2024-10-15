import PizzaSizeRadio from '../buttons/PizzaSizeRadio.tsx';
import RoundedBtn from '../buttons/RoundedBtn.tsx';
import PizzaAdditionBtn from '../buttons/PizzaAdditionBtn.tsx';
import { pizzasIngredientNames } from '../../consts/pizzasIngredientNames.ts';
import { useForm } from 'react-hook-form';
import { addPizzaToCart } from '../../api/localStorage.ts';
import { useEffect, useState } from 'react';
import {
  Pizza,
  PizzaIngredient,
  PizzaIngredientNames,
  PizzaSize,
  PizzaSizeNames,
} from '../../types/Pizza/Pizza.ts';
import { PizzaCart } from '../../types/Cart/PizzaCart.ts';
import { API } from '../../enum/API.ts';

type PizzaModalMenuProps = {
  pizza: Pizza;
  onClose: () => void;
  selectedSize?: PizzaSize;
  selectedIngredients?: PizzaIngredient[];
};

type FormValues = {
  ingredients: PizzaIngredientNames[];
  size: PizzaSizeNames;
};

const pizzaSizes: Record<'SMALL' | 'MEDIUM' | 'LARGE', number> = {
  SMALL: 25,
  MEDIUM: 30,
  LARGE: 35,
};

const PizzaModalMenu = ({
  pizza,
  onClose,
  selectedIngredients,
  selectedSize,
}: PizzaModalMenuProps) => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues:
      selectedSize && selectedIngredients
        ? {
            size: selectedSize.name,
            ingredients: selectedIngredients.map((i) => i.name),
          }
        : { size: 'SMALL', ingredients: [] },
  });

  const pizzaSizeWatch = watch('size');

  const [currentPizza, setCurrentPizza] = useState<PizzaCart | null>(null);

  useEffect(() => {
    const minimalPizzaSize = pizza.sizes.find((s) => s.name === 'SMALL');

    if (!minimalPizzaSize) return;

    setCurrentPizza({
      ...pizza,
      selectedSize: minimalPizzaSize,
      selectedIngredients: [],
      count: 1,
    });
  }, [pizza]);

  const selectSize = (sizeName: PizzaSizeNames) => {
    if (!currentPizza) return;

    const selectedSize = pizza.sizes.find((s) => s.name === sizeName);

    if (!selectedSize) return;

    setCurrentPizza({ ...currentPizza, selectedSize });
  };

  const selectIngredient = (
    ingredientName: PizzaIngredientNames,
    checked: boolean
  ) => {
    if (!currentPizza) return;

    const ingredient = pizza.ingredients.find((i) => i.name === ingredientName);

    if (!ingredient) return;

    let selectedIngredients: PizzaIngredient[];

    if (checked)
      selectedIngredients = [...currentPizza.selectedIngredients, ingredient];
    else
      selectedIngredients = currentPizza.selectedIngredients.filter(
        (i) => i.name !== ingredientName
      );

    setCurrentPizza({ ...currentPizza, selectedIngredients });
  };

  const onSubmit = () => {
    if (!currentPizza) return;

    addPizzaToCart(currentPizza);
    onClose();
  };

  return (
    <div
      className={
        'flex items-center justify-center gap-[32px] rounded-[15px] p-[64px] pb-[24px]'
      }>
      <div className={'flex self-start w-[220px]'}>
        <img src={`${API.Root + pizza.img}`} alt='' />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'w-[426px] flex flex-col gap-[24px]'}>
        <div className={'pizza-info-menu'}>
          <div className={'flex flex-col gap-[8px] pl-[10px]'}>
            <h1 className={'font-[700] text-[#292929] text-[24px]'}>
              {pizza.name}
            </h1>
            <span className={'font-[400] text-[#535353] text-[14px]'}>
              {pizzaSizes[pizzaSizeWatch]} см, традиционное тесто
            </span>
            <span className={'font-[400] text-[#535353] text-[16px]'}>
              {pizza.description}
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
                selectSize={selectSize}
                {...register('size')}
              />
              <PizzaSizeRadio
                title={'Средняя'}
                value={'MEDIUM'}
                selectSize={selectSize}
                {...register('size')}
              />
              <PizzaSizeRadio
                title={'Большая'}
                value={'LARGE'}
                selectSize={selectSize}
                {...register('size')}
              />
            </fieldset>
          </div>
          <article className={'text-[#292929] h-full'}>
            <span className={'font-[500] text-[16px] pl-[10px]'}>
              Добавить по вкусу
            </span>
            <div className={'pizza-addition-menu'}>
              {pizza.ingredients.map((item, index) => (
                <PizzaAdditionBtn
                  image={item.img}
                  ingredientName={pizzasIngredientNames[item.name]}
                  price={item.cost}
                  number={index + 1}
                  value={item.name}
                  selectIngredient={selectIngredient}
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
