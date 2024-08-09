import {
  CheddarParmesanBig,
  CheeseSideBig,
  MozzarellaBig,
  PepperBig,
  ShrimpBig,
} from '../assets/images.ts';
import PizzaSizeBtn from './buttons/PizzaSizeBtn.tsx';
import PizzaAdditionBtn from './buttons/PizzaAdditionBtn.tsx';
import RoundedBtn from './buttons/RoundedBtn.tsx';
import { PizzaData } from '../data/pizzasData.ts';

type PizzaModalMenuProps = Omit<PizzaData, 'cost'>;

const PizzaModalMenu = ({ image, name, description }: PizzaModalMenuProps) => {
  return (
    <div
      className={
        'flex items-center justify-center gap-[32px] rounded-[15px] p-[64px] pb-[24px]'
      }>
      <div className={'flex self-start w-[220px]'}>
        <img src={image} alt='' />
      </div>
      <div className={'w-[426px] flex flex-col gap-[24px]'}>
        <div className={'pizza-info-menu'}>
          <div className={'flex flex-col gap-[8px] pl-[10px]'}>
            <h1 className={'font-[700] text-[#292929] text-[24px]'}>{name}</h1>
            <span className={'font-[400] text-[#535353] text-[14px]'}>
              {25} см, традиционное тесто
            </span>
            <span className={'font-[400] text-[#535353] text-[16px]'}>
              {description}
            </span>
          </div>
          <div className={'flex justify-between pt-[26px] pb-[26px] pl-[10px]'}>
            <PizzaSizeBtn />
          </div>
          <article className={'text-[#292929] h-full'}>
            <span className={'font-[500] text-[16px] pl-[10px]'}>
              Добавить по вкусу
            </span>
            <div className={'pizza-addition-menu'}>
              <PizzaAdditionBtn
                image={CheeseSideBig}
                name={'Сырный бортик'}
                price={179}
                number={1}
              />
              <PizzaAdditionBtn
                image={ShrimpBig}
                name={'Креветки'}
                price={199}
                number={2}
              />
              <PizzaAdditionBtn
                image={MozzarellaBig}
                name={'Сливочная моцарелла'}
                price={79}
                number={3}
              />
              <PizzaAdditionBtn
                image={CheddarParmesanBig}
                name={'Пармезан'}
                price={199}
                number={4}
              />
              <PizzaAdditionBtn
                image={PepperBig}
                name={'Халопеньо'}
                price={99}
                number={5}
              />
            </div>
          </article>
        </div>
        <RoundedBtn onClick={() => {}} text={'Добавить в корзину'} />
      </div>
    </div>
  );
};

export default PizzaModalMenu;
