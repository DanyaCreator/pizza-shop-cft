import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { PizzaIngredientNames } from '../../types/Pizza/Pizza.ts';

type PizzaAdditionBtnProps = InputHTMLAttributes<HTMLInputElement> & {
  image: string;
  ingredientName: string;
  price: number;
  number: number;
  selectIngredient: (
    ingredientName: PizzaIngredientNames,
    checked: boolean
  ) => void;
};

const PizzaAdditionBtn = forwardRef(
  (
    {
      image,
      ingredientName,
      price,
      number,
      selectIngredient,
      ...props
    }: PizzaAdditionBtnProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!props.onChange) return;

      props.onChange(e);
      selectIngredient(
        e.target.value as PizzaIngredientNames,
        e.target.checked
      );
    };

    return (
      <div>
        <input
          className={'peer hidden'}
          type='checkbox'
          id={`pizza-addition-btn${number}`}
          {...props}
          ref={ref}
          onChange={onChange}
        />
        <label
          htmlFor={`pizza-addition-btn${number}`}
          className={
            'shadow-default w-[124px] h-[192px] flex flex-col justify-between p-[8px] cursor-pointer rounded-2xl peer-checked:outline outline-1 outline-[#F4511E]'
          }>
          <img src={`https://shift-backend.onrender.com${image}`} alt='' />
          <span className={'text-[12px] font-[400] text-center'}>
            {ingredientName}
          </span>
          <span className={'text-[14px] font-[500] text-center'}>{price}₽</span>
        </label>
      </div>
    );
  }
);

export default PizzaAdditionBtn;
