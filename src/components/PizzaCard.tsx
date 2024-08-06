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
    <article className={'w-[298px]'}>
      <div className={'flex justify-center pb-[24px]'}>
        <img src={image} alt='' />
      </div>
      <div className={'flex flex-col gap-[8px] pb-[32px]'}>
        <span className={'font-[600] text-[20px]'}>{name}</span>
        <p className={'font-[400]'}>{description}</p>
      </div>
      <div className={'flex flex-col gap-[24px]'}>
        <span className={'font-[600] text-[20px]'}>от {cost} ₽</span>
        <RoundedBtn onClick={openPizzaModal} text={'Выбрать'} />
      </div>
    </article>
  );
};

export default PizzaCard;
