import React from 'react';
import { useRecurrenceStore } from '../../store/useRecurrenceStore';
import RecurrenceOptions from './RecurrenceOptions';
import Calendar from './Calendar';

const DatePicker: React.FC = () => {
  const { setStartDate, setEndDate, generateRecurrenceDates } = useRecurrenceStore();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <RecurrenceOptions />
      <Calendar />

      <button
        onClick={generateRecurrenceDates}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Generate Recurrence
      </button>
    </div>
  );
};

export default DatePicker;
