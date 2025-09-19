import { useLocation, useNavigate } from 'react-router-dom';
import { formatTime } from '@/components/utils';

type State = { time?: string; coach?: string };

export default function Confirmation() {
  const loc = useLocation();
  const nav = useNavigate();
  const state = (loc.state ?? {}) as State;
  const time = state.time ?? '07:00';
  const coach = state.coach ?? 'Javier R.';

  return (
    <div className='min-h-screen p-6 flex flex-col items-center'>
      <div className='h-40 w-full bg-[radial-gradient(circle_at_20%_20%,#FCE7F3_0,transparent_40%),radial-gradient(circle_at_80%_10%,#EDE9FE_0,transparent_35%),radial-gradient(circle_at_30%_80%,#DCFCE7_0,transparent_30%)] rounded-3xl mb-6'></div>
      <h1 className='text-4xl font-extrabold text-primary text-center'>¡Todo listo!</h1>
      <p className='text-center text-gray-600 mt-2'>
        Tu clase de está confirmada.
        <br />
        ¡A darlo todo!
      </p>

      <div className='w-full mt-8 bg-primaryLight rounded-3xl p-4'>
        <p className='text-center font-extrabold'>{formatTime(time)}</p>
        <p className='text-center text-sm text-gray-600'>Coach: {coach}</p>
      </div>

      <button onClick={() => nav('/home')} className='btn btn-primary w-full mt-10'>
        Volver al inicio
      </button>
    </div>
  );
}
