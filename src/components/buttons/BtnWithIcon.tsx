type BtnWithIconProps = {
  text: string;
  image: string;
  openModalInfo: () => void;
};

const BtnWithIcon = ({ text, image, openModalInfo }: BtnWithIconProps) => {
  return (
    <button onClick={openModalInfo}>
      <div className='flex gap-[16px]'>
        <img src={image} alt='' />
        {text}
      </div>
    </button>
  );
};

export default BtnWithIcon;
