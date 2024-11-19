import React from 'react';
import DatePicker from '../components/DatePicker/DatePicker';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <DatePicker />
    </div>
  );
};

export default HomePage;
