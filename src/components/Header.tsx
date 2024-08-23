import { Basket, Logo, Orders, RegLog, User } from '../assets/images.ts';
import BtnWithIcon from './buttons/BtnWithIcon.tsx';
import { useLockedBody } from '../hooks/use-lock-body.hook.ts';
import { useState } from 'react';
import ModalWrapper from './modal/ModalWrapper.tsx';
import AuthorizationModal from './AuthorizationModal.tsx';

const Header = () => {
  const [activeModalInfo, setActiveModalInfo] = useState(null);
  useLockedBody(!!activeModalInfo);
  return (
    <header
      className={
        'w-screen h-[80px] flex justify-center items-center fixed left-0 border-b-[1px] bg-white font-[500]'
      }>
      <div className={'container flex gap-[32px]'}>
        <img src={Logo} alt="" />
        <div className={'w-full flex justify-between items-center'}>
          <div className={'flex gap-[32px]'}>
            <BtnWithIcon
              text={'Профиль'}
              image={User}
              openModalInfo={setActiveModalInfo}
            />
            <BtnWithIcon
              text={'Заказы'}
              image={Orders}
              openModalInfo={setActiveModalInfo}
            />
          </div>
          <div className={'flex gap-[32px]'}>
            <BtnWithIcon
              text={'Корзина'}
              image={Basket}
              openModalInfo={setActiveModalInfo}
            />
            <BtnWithIcon
              text={'Войти'}
              image={RegLog}
              openModalInfo={setActiveModalInfo}
            />
          </div>
        </div>
      </div>
      {activeModalInfo && (
        <ModalWrapper onClose={() => setActiveModalInfo(null)}>
          <AuthorizationModal onClose={activeModalInfo} />
        </ModalWrapper>
      )}
    </header>
  );
};

export default Header;
