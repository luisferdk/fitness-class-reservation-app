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
          ←
        </button>
      ) : (
        <div className='w-6' />
      )}
      <h1 className='text-2xl font-extrabold flex-1'>{title}</h1>
      <div
        className='w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center border'
        aria-hidden
      >
        <span className='text-xl'>👤</span>
      </div>
    </div>
  );
}
