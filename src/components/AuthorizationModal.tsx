import RoundedBtn from './buttons/RoundedBtn.tsx';
import { useForm } from 'react-hook-form';

const AuthorizationModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        'flex flex-col justify-center items-center gap-[20px] p-[64px]'
      }>
      <h1 className={'font-[600] text-[20px]'}>
        Для продолжения, авторизуйтесь
      </h1>
      <p className={'font-[400]'}>
        Введите номер телефона, для входа в личный кабинет
      </p>
      <input
        id={'phone-number'}
        className={
          'phone-field font-[400] rounded-2xl border-[1px] p-[3%] hover:border-[#F4511E] focus:border-[#F4511E] focus:outline-none'
        }
        type='number'
        placeholder='Телефон'
        {...register('phone', { required: true, maxLength: 11, minLength: 11 })}
      />
      <input className={'hidden'} type='number' />
      <RoundedBtn onClick={handleSubmit(onSubmit)} text={'Продолжить'} />
    </form>
  );
};

export default AuthorizationModal;
