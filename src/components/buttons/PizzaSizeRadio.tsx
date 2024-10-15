import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from 'react';
import { PizzaSizeNames } from '../../types/Pizza/Pizza.ts';

type PizzaSizeRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  selectSize: (sizeName: PizzaSizeNames) => void;
};

const PizzaSizeRadio = forwardRef(
  (
    { title, selectSize, ...props }: PizzaSizeRadioProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!props.onChange) return;

      props.onChange(e);
      selectSize(e.target.value as PizzaSizeNames);
    };

    return (
      <div className={'relative w-[130px] h-[40px]'}>
        <input
          type='radio'
          className={
            'transition-colors duration-200 absolute w-full h-full rounded-[14px] cursor-pointer appearance-none peer checked:bg-[#FFFFFF]'
          }
          {...props}
          ref={ref}
          onChange={onChange}
        />
        <label
          className={
            'transition duration-200 absolute text-[#637083] font-[400] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none peer-checked:text-[#141C24]'
          }>
          {title}
        </label>
      </div>
    );
  }
);

export default PizzaSizeRadio;
