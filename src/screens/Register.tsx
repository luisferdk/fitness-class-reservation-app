import { FormEvent } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
export default function Register() {
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
      <h1 className='text-3xl font-extrabold mt-2'>Register</h1>
      <p className='text-gray-500 mt-2'>
        ¡Crea una cuenta para acceder a <b>ReservaClass</b>!
      </p>

      <form className='mt-8 space-y-5' onSubmit={onSubmit}>
        <label className='block'>
          <span className='text-sm'>Nombre</span>
          <input
            className='mt-1 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary'
            placeholder='Ej: Saul Ramirez'
          />
        </label>
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

        <button type='submit' className='btn btn-primary w-full mt-2'>
          ¡Empezar ahora!
        </button>
      </form>

      <div className='text-center mt-6 text-primary font-semibold'>
        <button onClick={() => nav('/login')}>Ya tengo una cuenta</button>
      </div>
    </div>
  );
}
