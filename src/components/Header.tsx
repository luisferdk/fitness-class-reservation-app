import { useEffect, useRef, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { LuUserRound } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

type Props = { title?: string; showBack?: boolean };

export default function Header({ title = 'Hola, Luis 👋', showBack = false }: Props) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState('Usuario');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUserName('Luis');
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className='relative' ref={menuRef}>
        <button
          onClick={toggleMenu}
          className='w-8 h-8 text-lg rounded-full bg-white flex items-center justify-center border hover:bg-gray-50'
          aria-label='Menú de usuario'
        >
          <LuUserRound />
        </button>

        {isMenuOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50'>
            <div className='px-4 py-2 border-b border-gray-100'>
              <p className='text-sm font-medium text-gray-900'>{userName}</p>
            </div>
            <button
              onClick={handleLogout}
              className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
