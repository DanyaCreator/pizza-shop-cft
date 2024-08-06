type BtnWithIconProps = {
  text: string;
  image: string;
};

const BtnWithIcon = ({ text, image }: BtnWithIconProps) => {
  return (
    <button>
      <div className='flex gap-[16px]'>
        <img src={image} alt='' />
        {text}
      </div>
    </button>
  );
};

export default BtnWithIcon;
