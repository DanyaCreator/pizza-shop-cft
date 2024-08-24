import RoundedBtn from './buttons/RoundedBtn.tsx';

type PizzaCardProps = {
  image: string;
  name: string;
  description: string;
  cost: number;
  openPizzaModal: () => void;
};

const PizzaCard = ({
  image,
  name,
  description,
  cost,
  openPizzaModal,
}: PizzaCardProps) => {
  return (
    <article className={'w-[298px] flex flex-col gap-[24px]'}>
      <div className={'flex justify-center'}>
        <img src={`https://shift-backend.onrender.com${image}`} alt='' />
      </div>
      <div className={'h-full flex flex-col justify-between'}>
        <div className={'flex flex-col'}>
          <span className={'font-[600] text-[20px]'}>{name}</span>
          <p className={'font-[400]'}>{description}</p>
        </div>
        <div className={'flex flex-col gap-[24px]'}>
          <span className={'font-[600] text-[20px] mt-[32px]'}>
            от {cost} ₽
          </span>
          <RoundedBtn onClick={openPizzaModal} text={'Выбрать'} />
        </div>
      </div>
    </article>
  );
};

export default PizzaCard;
