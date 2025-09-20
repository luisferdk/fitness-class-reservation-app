import ConfettiBurst from '@/components/ConfettiBurst';
import { formatTime } from '@/components/utils';
import { GoCheckCircleFill } from 'react-icons/go';
import { useLocation, useNavigate } from 'react-router-dom';

type State = { time?: string; coach?: string };

export default function Confirmation() {
  const loc = useLocation();
  const nav = useNavigate();
  const state = (loc.state ?? {}) as State;
  const time = state.time ?? '07:00';
  const coach = state.coach ?? 'Javier R.';
  const play = true;

  return (
    <div className='min-h-screen p-6 flex flex-col items-center'>
      {play && <ConfettiBurst autoFire duration={1300} />}
      <GoCheckCircleFill className='text-primary text-[80px]' />
      <h1 className='text-4xl font-extrabold text-primary text-center mt-4'>¡Todo listo!</h1>
      <p className='text-center text-gray-600 mt-2'>
        Tu clase de está confirmada.
        <br /> ¡A darlo todo!
      </p>

      <div className='w-full mt-8 bg-primaryLight rounded-3xl p-4'>
        <p className='text-center font-extrabold'>{formatTime(time)}</p>
        <p className='text-center text-sm text-gray-600'>Coach: {coach}</p>
      </div>

      <button onClick={() => nav('/home')} className='btn btn-outline mt-8'>
        Volver al inicio
      </button>
    </div>
  );
}
