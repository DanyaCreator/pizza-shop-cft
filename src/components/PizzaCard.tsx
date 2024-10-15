import RoundedBtn from './buttons/RoundedBtn.tsx';
import { Pizza } from '../types/Pizza/Pizza.ts';
import { API } from '../enum/API.ts';

type PizzaCardProps = {
  pizza: Pizza;
  openPizzaModal: () => void;
};

const PizzaCard = ({ pizza, openPizzaModal }: PizzaCardProps) => {
  const pizzaMinimalCost = Math.min(...pizza.sizes.map((s) => s.price));

  return (
    <article className={'w-[298px] flex flex-col gap-[24px]'}>
      <div className={'flex justify-center'}>
        <img src={`${API.Root + pizza.img}`} alt='' />
      </div>
      <div className={'h-full flex flex-col justify-between'}>
        <div className={'flex flex-col'}>
          <span className={'font-[600] text-[20px]'}>{pizza.name}</span>
          <p className={'font-[400]'}>{pizza.description}</p>
        </div>
        <div className={'flex flex-col gap-[24px]'}>
          <span className={'font-[600] text-[20px] mt-[32px]'}>
            от {pizzaMinimalCost} ₽
          </span>
          <RoundedBtn onClick={openPizzaModal} text={'Выбрать'} />
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
