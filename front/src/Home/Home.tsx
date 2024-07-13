import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './Home.module.css';
import { useState } from 'react';

interface IFormState {
  name: string;
  email: string;
}

const API = import.meta.env.VITE_BASE_API;

function Home() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormState>();

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    setIsLoading(true);
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((responce) => responce.json())
      .then((data) => {
        if (!data) return;
        setIsSuccess(true);
        reset();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Форма отправлена!</div>
        ) : (
          <>
            <h1>GTA 6 - Оставь заявку</h1>
            {errors.name && (
              <span className="text-sm">This field is required!</span>
            )}
            <input
              type="name"
              placeholder="Введите ваше имя"
              {...register('name', { required: true })}
            />
            {errors.email && (
              <span className="text-sm">This field is required!</span>
            )}
            <input
              type="email"
              placeholder="Введите ваш email"
              {...register('email', { required: true })}
            />
            <button disabled={isLoading}>
              {isLoading ? 'Отправка...' : 'Хочу ГТА!'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default Home;
