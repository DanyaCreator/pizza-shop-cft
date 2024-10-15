import { Cross } from '../../assets/images.ts';
import { ReactNode, useRef } from 'react';
import { useClickOutside } from '../../hooks/use-click-outside.hook.ts';
import { useLockedBody } from '../../hooks/use-lock-body.hook.ts';

type ModalWrapperProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ModalWrapper = ({ onClose, isOpen, children }: ModalWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(wrapperRef, onClose);
  useLockedBody(isOpen);

  return (
    <div
      className={
        'fixed top-0 left-0 z-50 w-screen h-screen bg-[#0000004A] flex justify-center items-center'
      }>
      <div className={'bg-white relative rounded-[20px]'} ref={wrapperRef}>
        <button
          className={'absolute right-[24px] top-[16px]'}
          onClick={onClose}>
          <img src={Cross} alt='' className={'p-[10px]'} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
