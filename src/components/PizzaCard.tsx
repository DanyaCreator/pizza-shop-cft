import ChooseBtn from './buttons/ChooseBtn.tsx';

type PizzaCardProps = {
  image: string;
  name: string;
  description: string;
  cost: number;
};

const PizzaCard = ({ image, name, description, cost }: PizzaCardProps) => {
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
        <ChooseBtn />
      </div>
    </article>
  );
};

export default PizzaCard;
