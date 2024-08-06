import { Basket, Logo, Orders, RegLog, User } from '../assets/images.ts';
import BtnWithIcon from './buttons/BtnWithIcon.tsx';

const Header = () => {
  return (
    <header
      className={
        'w-screen h-[80px] flex justify-center items-center fixed left-0 border-b-[1px] bg-white font-[500]'
      }>
      <div className={'container flex gap-[32px]'}>
        <img src={Logo} alt='' />
        <div className={'w-full flex justify-between items-center'}>
          <div className={'flex gap-[32px]'}>
            <BtnWithIcon text={'Профиль'} image={User} />
            <BtnWithIcon text={'Заказы'} image={Orders} />
          </div>
          <div className={'flex gap-[32px]'}>
            <BtnWithIcon text={'Корзина'} image={Basket} />
            <BtnWithIcon text={'Войти'} image={RegLog} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
