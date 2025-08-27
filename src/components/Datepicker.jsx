import { useState, useMemo } from 'react';

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const formattedDate = useMemo(() => 
    selectedDate ? selectedDate.toLocaleDateString() : '', 
    [selectedDate]
  );

  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    
    // previous month days
    const prevMonthDays = daysInMonth(currentYear, currentMonth - 1);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthDays - i),
        otherMonth: true,
      });
    }
    
    // current month days
    const thisMonthDays = daysInMonth(currentYear, currentMonth);
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push({ 
        date: new Date(currentYear, currentMonth, i), 
        otherMonth: false 
      });
    }
    
    // next month days (fill to 6 weeks grid)
    const nextDays = 42 - days.length;
    for (let i = 1; i <= nextDays; i++) {
      days.push({ 
        date: new Date(currentYear, currentMonth + 1, i), 
        otherMonth: true 
      });
    }
    
    return days;
  }, [currentYear, currentMonth]);

  const currentMonthName = useMemo(() =>
    new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' }),
    [currentYear, currentMonth]
  );

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const selectDate = (day) => {
    if (day.otherMonth) return;
    setSelectedDate(day.date);
    setShowCalendar(false);
  };

  const isSelected = (day) =>
    selectedDate && day.date.toDateString() === selectedDate.toDateString();

  return (
    <div className="relative inline-block">
      <input
        type="text"
        readOnly
        value={formattedDate}
        onClick={toggleCalendar}
        placeholder="Select date"
        className="w-48 p-3 border-2 border-pastel-lavender rounded-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-pastel-purple bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-500 transition-all duration-200 hover:border-pastel-purple"
      />
      
      {showCalendar && (
        <div className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-md border-2 border-pastel-lavender rounded-2xl shadow-2xl z-50 p-4 min-w-[280px]">
          {/* header */}
          <div className="flex justify-between items-center mb-4">
            <button 
              onClick={prevMonth} 
              className="p-2 hover:bg-pastel-lavender rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-800"
            >
              ← 
            </button>
            <span className="font-semibold text-gray-800 text-lg">
              {currentMonthName} {currentYear}
            </span>
            <button 
              onClick={nextMonth} 
              className="p-2 hover:bg-pastel-lavender rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-800"
            >
              →
            </button>
          </div>
          
          {/* weekdays */}
          <div className="grid grid-cols-7 text-center mb-2">
            {weekdays.map((day) => (
              <span key={day} className="font-semibold text-gray-600 py-2 text-sm">
                {day}
              </span>
            ))}
          </div>
          
          {/* days */}
          <div className="grid grid-cols-7 text-center gap-1">
            {calendarDays.map((day, index) => (
              <span
                key={index}
                onClick={() => selectDate(day)}
                className={`
                  p-2 cursor-pointer rounded-lg text-sm font-medium transition-all duration-200
                  ${day.otherMonth ? 'text-gray-300 hover:text-gray-400' : 'text-gray-700'}
                  ${isSelected(day) ? 'bg-pastel-purple text-white shadow-md transform scale-105' : ''}
                  ${!day.otherMonth && !isSelected(day) ? 'hover:bg-pastel-mint hover:scale-105' : ''}
                `}
              >
                {day.date.getDate()}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Datepicker;
