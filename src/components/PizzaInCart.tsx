import { Cross } from '../assets/images.ts';
import { PizzaCart } from '../types/Cart/PizzaCart.ts';

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
  return (
    <article className={'flex gap-[24px] items-center'}>
      <img
        className={'w-[63px] h-[63px]'}
        src={`https://shift-backend.onrender.com${data.image}`}
        alt=''
      />
      <h1 className={'w-[120px] font-[500]'}>{data.name}</h1>
      <p className={'w-[280px] font-[400] text-[14px]'}>{data.description}</p>
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
      <button className={'font-[400] text-[14px] text-[#97A1AF] border-b'}>
        Изменить
      </button>
      <span className={'font-[500] text-[16px]'}>
        {data.total * data.count} р
      </span>
      <button onClick={() => removePizza(data)}>
        <img src={Cross} alt='' />
      </button>
    </article>
  );
};

export default PizzaInCart;
