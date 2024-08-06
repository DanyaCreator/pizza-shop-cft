import {
  CheddarParmesanBig,
  CheeseSideBig,
  MozzarellaBig,
  PepperBig,
  PepperoniBig,
  ShrimpBig,
} from '../assets/images.ts';
import PizzaSizeBtn from './buttons/PizzaSizeBtn.tsx';
import PizzaAdditionBtn from './buttons/PizzaAdditionBtn.tsx';
import RoundedBtn from './buttons/RoundedBtn.tsx';

const PizzaMenu = () => {
  return (
    <div
      className={
        'flex items-center justify-center gap-[32px] rounded-[15px] p-[64px] pb-[24px]'
      }>
      <div className={'flex self-start w-[220px]'}>
        <img src={PepperoniBig} alt='pizza' />
      </div>
      <div className={'flex flex-col gap-[24px]'}>
        <div className={'pizza-info-menu'}>
          <div className={'flex flex-col gap-[8px]'}>
            <h1 className={'font-[700] text-[#292929] text-[24px]'}>
              Двойной цыпленок
            </h1>
            <span className={'font-[400] text-[#535353] text-[14px]'}>
              30 см, традиционное тесто
            </span>
            <span className={'font-[400] text-[#535353] text-[16px]'}>
              Цыпленок, моцарелла, фирменный соус альфредо
            </span>
          </div>
          <div className={'flex justify-between pt-[26px] pb-[26px]'}>
            <PizzaSizeBtn size={'Маленькая'} />
            <PizzaSizeBtn size={'Средняя'} />
            <PizzaSizeBtn size={'Большая'} />
          </div>
          <article className={'text-[#292929] h-full'}>
            <span className={'font-[500] text-[16px]'}>Добавить по вкусу</span>
            <div className={'pizza-addition-menu'}>
              <PizzaAdditionBtn
                image={CheeseSideBig}
                name={'Сырный бортик'}
                price={179}
              />
              <PizzaAdditionBtn
                image={ShrimpBig}
                name={'Креветки'}
                price={199}
              />
              <PizzaAdditionBtn
                image={MozzarellaBig}
                name={'Сливочная моцарелла'}
                price={79}
              />
              <PizzaAdditionBtn
                image={CheddarParmesanBig}
                name={'Пармезан'}
                price={199}
              />
              <PizzaAdditionBtn
                image={PepperBig}
                name={'Халопеньо'}
                price={99}
              />
            </div>
          </article>
        </div>
        <RoundedBtn onClick={() => {}} text={'Добавить в корзину'} />
      </div>
    </div>
  );
};

export default PizzaMenu;
