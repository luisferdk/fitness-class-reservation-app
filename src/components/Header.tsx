import { FaArrowLeftLong } from 'react-icons/fa6';
import { LuUserRound } from 'react-icons/lu';

type Props = { title?: string; showBack?: boolean };

export default function Header({ title = 'Hola, Ney 👋', showBack = false }: Props) {
  return (
    <div className='flex items-center gap-3 px-5 pt-6'>
      {showBack ? (
        <button
          onClick={() => history.back()}
          className='p-2 rounded-xl hover:bg-gray-100'
          aria-label='Volver'
        >
          <FaArrowLeftLong />
        </button>
      ) : (
        <div className='w-6' />
      )}
      <h1 className='text-2xl font-extrabold flex-1'>{title}</h1>
      <div className='w-8 h-8 text-lg rounded-full bg-white flex items-center justify-center border'>
        <LuUserRound />
      </div>
    </div>
  );
}
