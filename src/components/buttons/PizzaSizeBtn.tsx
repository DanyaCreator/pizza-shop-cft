import { useState } from 'react';

const PizzaSizeBtn = () => {
  const [activePizzaSizeBtn, setActivePizzaSizeBtn] = useState(25);

  return (
    <fieldset
      className={
        'w-full flex justify-between bg-[#F3F4F6] h-[44px] items-center rounded-[16px] p-[2px]'
      }>
      <div className={'relative w-[130px] h-[40px]'}>
        <input
          type='radio'
          checked={activePizzaSizeBtn === 25}
          onChange={() => setActivePizzaSizeBtn(25)}
          className={
            'transition-colors absolute w-full h-full rounded-[14px] cursor-pointer appearance-none peer checked:bg-[#FFFFFF]'
          }
        />
        <label
          className={
            'transition-colors absolute text-[#637083] font-[400] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none peer-checked:text-[#141C24]'
          }>
          Маленькая
        </label>
      </div>
      <div className={'relative w-[130px] h-[40px]'}>
        <input
          type='radio'
          checked={activePizzaSizeBtn === 30}
          onChange={() => setActivePizzaSizeBtn(30)}
          className={
            'transition-colors absolute w-full h-full rounded-[14px] cursor-pointer appearance-none peer checked:bg-[#FFFFFF]'
          }
        />
        <label
          className={
            'transition-colors absolute text-[#637083] font-[400] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none peer-checked:text-[#141C24]'
          }>
          Средняя
        </label>
      </div>
      <div className={'relative w-[130px] h-[40px]'}>
        <input
          type='radio'
          checked={activePizzaSizeBtn === 35}
          onChange={() => setActivePizzaSizeBtn(35)}
          className={
            'transition-colors absolute w-full h-full rounded-[14px] cursor-pointer appearance-none peer checked:bg-[#FFFFFF]'
          }
        />
        <label
          className={
            'transition-colors absolute text-[#637083] font-[400] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] pointer-events-none peer-checked:text-[#141C24]'
          }>
          Большая
        </label>
      </div>
    </fieldset>
  );
};

export default PizzaSizeBtn;
