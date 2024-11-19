import React from 'react';
import { useRecurrenceStore } from '../../store/useRecurrenceStore';

const Calendar: React.FC = () => {
  const { recurrenceDates } = useRecurrenceStore();

  return (
    <div className="border p-4 rounded-md">
      <h3 className="text-xl font-semibold">Recurrence Preview</h3>
      <div className="grid grid-cols-7 gap-1 mt-4">
        {recurrenceDates.map((date, index) => (
          <div key={index} className="text-center text-xs">{date.getDate()}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
