import PizzaSizeRadio from '../buttons/PizzaSizeRadio.tsx';
import RoundedBtn from '../buttons/RoundedBtn.tsx';
import PizzaAdditionBtn from '../buttons/PizzaAdditionBtn.tsx';
import { pizzasIngredientNames } from '../../consts/pizzasIngredientNames.ts';
import { useForm } from 'react-hook-form';
import { addPizzaToCart } from '../../api/localStorage.ts';
import { useEffect, useState } from 'react';
import { PizzaDto, PizzaIngredientNames } from '../../types/Pizza/Pizza.ts';
import { PizzaCart } from '../../types/Cart/PizzaCart.ts';

type PizzaModalMenuProps = (PizzaDto | PizzaCart) & {
  onClose: () => void;
  defaultValues?: FormValues;
};

type FormValues = {
  ingredients: string[];
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
};

const pizzaSizes: Record<'SMALL' | 'MEDIUM' | 'LARGE', number> = {
  SMALL: 25,
  MEDIUM: 30,
  LARGE: 35,
};

const PizzaModalMenu = ({
  onClose,
  defaultValues,
  ...pizzaDto
}: PizzaModalMenuProps) => {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: defaultValues
      ? defaultValues
      : { size: 'SMALL', ingredients: [] },
  });

  const pizzaSizeWatch = watch('size');
  const pizzaIngredientsWatch = watch('ingredients');

  const [pizzaCartDto, setPizzaCartDto] = useState<PizzaCart | null>(null);

  useEffect(() => {
    const pizzaCart: PizzaCart = {
      ...pizzaDto,
      ingredients: pizzaDto.ingredients.map((i) => ({ ...i, selected: false })),
      size: pizzaDto.size.map((s) => ({ ...s, selected: false })),
      total: pizzaDto.size[0].price,
      count: 1,
    };

    let total = 0;

    const selectedSize = pizzaCart.size.find((s) => s.name === pizzaSizeWatch);
    if (selectedSize) {
      total = selectedSize.price;
      selectedSize.selected = true;
    }

    if (!pizzaIngredientsWatch) {
      pizzaCart.total = total;
      setPizzaCartDto(pizzaCart);
      return;
    }

    const selectedIngredients = pizzaIngredientsWatch.map(
      (i) => JSON.parse(i).name as PizzaIngredientNames
    );

    pizzaCart.ingredients = pizzaCart.ingredients.map((i) => ({
      ...i,
      selected: selectedIngredients.includes(i.name),
    }));

    for (const i of pizzaIngredientsWatch) {
      total += JSON.parse(i).cost;
    }

    pizzaCart.total = total;
    setPizzaCartDto(pizzaCart);
  }, [pizzaSizeWatch, pizzaIngredientsWatch]);

  const onSubmit = () => {
    if (!pizzaCartDto) return;

    addPizzaToCart(pizzaCartDto);
    onClose();
  };

  return (
    <div
      className={
        'flex items-center justify-center gap-[32px] rounded-[15px] p-[64px] pb-[24px]'
      }>
      <div className={'flex self-start w-[220px]'}>
        <img
          src={`https://shift-backend.onrender.com${pizzaDto.image}`}
          alt=''
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={'w-[426px] flex flex-col gap-[24px]'}>
        <div className={'pizza-info-menu'}>
          <div className={'flex flex-col gap-[8px] pl-[10px]'}>
            <h1 className={'font-[700] text-[#292929] text-[24px]'}>
              {pizzaDto.name}
            </h1>
            <span className={'font-[400] text-[#535353] text-[14px]'}>
              {pizzaSizes[pizzaSizeWatch]} см, традиционное тесто
            </span>
            <span className={'font-[400] text-[#535353] text-[16px]'}>
              {pizzaDto.description}
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
              {pizzaDto.ingredients.map((item, index) => (
                <PizzaAdditionBtn
                  image={item.img}
                  ingredientName={pizzasIngredientNames[item.name]}
                  price={item.cost}
                  number={index + 1}
                  value={JSON.stringify(item)}
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
