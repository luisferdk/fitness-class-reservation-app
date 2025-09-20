import { FormEvent } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nav('/home');
  };
  return (
    <div className='min-h-screen p-5'>
      <button onClick={() => history.back()} className='p-2 -ml-2' aria-label='Volver'>
        <FaArrowLeftLong />
      </button>
      <h1 className='text-3xl font-extrabold mt-2'>Bienvenido de nuevo 👋</h1>
      <p className='text-gray-500 mt-2'>Agenda tu próxima clase en segundos</p>

      <form className='mt-8 space-y-5' onSubmit={onSubmit}>
        <label className='block'>
          <span className='text-sm'>Correo electrónico</span>
          <input
            className='mt-1 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary'
            placeholder='Ej: abc@example.com'
          />
        </label>
        <label className='block'>
          <span className='text-sm'>Contraseña</span>
          <input
            type='password'
            className='mt-1 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary'
            placeholder='••••••••'
          />
        </label>
        <div className='text-right text-sm text-primary'>
          <a href='#'>¿Olvidaste tu contraseña?</a>
        </div>
        <button type='submit' className='btn btn-primary w-full mt-4'>
          ¡Empezar ahora!
        </button>
      </form>

      <div className='text-center mt-6 text-primary font-semibold'>
        <button onClick={() => nav('/register')}>¿No tienes cuenta? Regístrate</button>
      </div>
    </div>
  );
}
