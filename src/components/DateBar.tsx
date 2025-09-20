import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface DateBarProps {
  onDateSelect?: (date: Date) => void;
}

/**
 * DateBar component that displays a calendar navigation bar with month and week navigation modes.
 * Shows the current week by default, starting from Monday and ending on Sunday.
 * Allows navigation by month or week using arrow buttons.
 * Supports date selection with visual highlighting.
 */
export default function DateBar({ onDateSelect }: DateBarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  /**
   * Get day names using JavaScript Intl API
   */
  const getDayNames = (): string[] => {
    const date = new Date(2024, 0, 1);
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(date);
      day.setDate(date.getDate() + i);
      return day.toLocaleDateString('es-ES', { weekday: 'short' });
    });
  };

  /**
   * Get month names using JavaScript Intl API
   */
  const getMonthName = (date: Date): string => {
    return date.toLocaleDateString('es-ES', { month: 'long' });
  };

  /**
   * Gets the start of the week (Monday) for a given date
   */
  const getWeekStart = (date: Date): Date => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  /**
   * Gets all days in the current week
   */
  const getWeekDays = (date: Date): Date[] => {
    const weekStart = getWeekStart(new Date(date));
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      return day;
    });
  };

  /**
   * Navigate to previous week
   */
  const navigatePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  /**
   * Navigate to next week
   */
  const navigateNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  /**
   * Check if a date is today
   */
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  /**
   * Check if a date is selected
   */
  const isSelected = (date: Date): boolean => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  /**
   * Handle date selection
   */
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  /**
   * Handle going back to today
   */
  const goToToday = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
    onDateSelect?.(today);
  };

  /**
   * Check if selected date is different from today
   */
  const isDifferentFromToday = (): boolean => {
    if (!selectedDate) return false;
    const today = new Date();
    return selectedDate.toDateString() !== today.toDateString();
  };

  /**
   * Get the display text for the current month
   */
  const getMonthDisplayText = (): string => {
    return `${getMonthName(currentDate)}, ${currentDate.getFullYear()}`;
  };

  /**
   * Get the days to display for the current week
   */
  const getDisplayDays = (): Date[] => {
    return getWeekDays(currentDate);
  };

  useEffect(() => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(today);
    onDateSelect?.(today);
  }, []);

  const displayDays = getDisplayDays();

  return (
    <div className='px-5 mt-4'>
      {/* Month Navigation */}
      <div className='flex justify-between text-gray-700 mb-4 bg-gray-100 rounded-2xl'>
        <button
          className='px-4 hover:bg-gray-200 rounded-full transition-colors'
          aria-label='Mes anterior'
          onClick={navigatePreviousWeek}
        >
          <FaChevronLeft />
        </button>

        <div className='px-4 py-2 rounded-full text-sm font-medium mx-4'>
          {getMonthDisplayText()}
        </div>

        <button
          className='px-4 hover:bg-gray-200 rounded-full transition-colors'
          aria-label='Mes siguiente'
          onClick={navigateNextWeek}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className='flex justify-between'>
        {displayDays.map((day, i) => {
          const isCurrentDay = isToday(day);
          const isSelectedDay = isSelected(day);
          const dayNames = getDayNames();

          return (
            <button
              key={i}
              onClick={() => handleDateSelect(day)}
              className={`flex flex-col items-center justify-center w-12 h-14 rounded-2xl border transition-colors cursor-pointer hover:scale-105 ${
                isSelectedDay
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : isCurrentDay
                    ? 'bg-blue-100 text-primary border-blue-300'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className='text-xs'>{dayNames[i]}</span>
              <span className='font-bold'>{String(day.getDate()).padStart(2, '0')}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
