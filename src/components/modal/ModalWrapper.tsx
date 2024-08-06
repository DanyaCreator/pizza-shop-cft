import { Cross } from '../../assets/images.ts';
import { ReactNode, useRef } from 'react';
import { useClickOutside } from '../../hooks/use-click-outside.hook.ts';

type ModalWrapperProps = {
  onClose: () => void;
  children: ReactNode;
};

const ModalWrapper = ({ onClose, children }: ModalWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(wrapperRef, onClose);

  return (
    <div
      className={
        'fixed top-0 left-0 z-50 w-screen h-screen bg-[#0000004A] flex justify-center items-center'
      }>
      <div className={'bg-white relative rounded-[20px]'} ref={wrapperRef}>
        <button
          className={'absolute right-[24px] top-[16px]'}
          onClick={onClose}>
          <img src={Cross} alt='' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
