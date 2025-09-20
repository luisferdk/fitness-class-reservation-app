import { FcGoogle } from 'react-icons/fc';
import { MdAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const nav = useNavigate();
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-6 p-6'>
      <p className='text-lg text-gray-500'>Bienvenido a</p>
      <h1 className='text-4xl font-extrabold text-primary'>ReservaClass</h1>
      <div className='w-full max-w-sm space-y-3'>
        <button onClick={() => nav('/home')} className='btn btn-outline w-full gap-4'>
          <FcGoogle />
          Continuar con Google
        </button>
        <button onClick={() => nav('/login')} className='btn btn-outline w-full gap-4'>
          <MdAlternateEmail />
          Continuar con Email
        </button>
      </div>
    </div>
  );
}
