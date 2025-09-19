import Header from '@/components/Header';
import WeeklyGoal from '@/components/WeeklyGoal';
import DateBar from '@/components/DateBar';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav = useNavigate();
  const cards = [
    { type: 'crossfit', label: 'Crossfit', count: 5, bg: 'bg-amber-50', emoji: '🏋️' },
    { type: 'boxeo', label: 'Boxeo', count: 1, bg: 'bg-rose-50', emoji: '🥊' },
    { type: 'pilates', label: 'Pilates', count: 2, bg: 'bg-teal-50', emoji: '🧘' },
  ] as const;

  return (
    <div className='pb-24'>
      <Header />
      <WeeklyGoal current={0} total={5} />
      <DateBar />
      <div className='px-5 mt-6'>
        <h2 className='text-xl font-extrabold mb-3'>Clases para hoy</h2>
        <div className='space-y-4'>
          {cards.map((c) => (
            <div key={c.type} className='card p-4 flex items-center gap-4'>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${c.bg}`}
              >
                {c.emoji}
              </div>
              <div className='flex-1'>
                <p className='font-bold'>{c.label}</p>
                <p className='text-sm text-gray-500'>{c.count} clases</p>
              </div>
              <button onClick={() => nav(`/classes/${c.type}`)} className='btn btn-primary'>
                Ver
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
