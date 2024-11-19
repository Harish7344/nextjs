import React from 'react';
import { useRecurrenceStore } from '../../store/useRecurrenceStore';

const RecurrenceOptions: React.FC = () => {
  const { setFrequency } = useRecurrenceStore(); //setInterval, setSpecificDays, setNthDay 
  const handleFrequencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFrequency(e.target.value as 'daily' | 'weekly' | 'monthly' | 'yearly');
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Frequency</label>
        <select
          onChange={handleFrequencyChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Add logic for interval input */}
    </div>
  );
};

export default RecurrenceOptions;
