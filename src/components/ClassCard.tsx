import { formatTime, ClassItem } from './utils';
import { useNavigate } from 'react-router-dom';

type Props = { item: ClassItem; disabled?: boolean };

export default function ClassCard({ item, disabled = false }: Props) {
  const nav = useNavigate();
  return (
    <div className={`card p-4 flex items-center gap-4 ${disabled ? 'opacity-60' : ''}`}>
      <div className='flex-1'>
        <p className={`font-extrabold ${disabled ? 'text-gray-400' : 'text-black'}`}>
          {formatTime(item.time)}
        </p>
        <p className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
          Coach: {item.coach}
        </p>
        <p
          className={`${item.spots > 0 ? 'text-green-600' : 'text-rose-500'} text-sm font-medium mt-1`}
        >
          {item.spots > 0 ? `¡Quedan ${item.spots} cupos!` : 'Clase sin cupo'}
        </p>
      </div>
      <button
        disabled={item.spots === 0}
        onClick={() => nav('/confirmation', { state: { time: item.time, coach: item.coach } })}
        className={`btn ${item.spots === 0 ? 'bg-gray-300 text-gray-700' : 'btn-primary'}`}
      >
        {item.spots === 0 ? 'Lleno' : 'Reservar'}
      </button>
    </div>
  );
}
