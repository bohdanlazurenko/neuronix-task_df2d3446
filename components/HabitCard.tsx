'use client';

import React from 'react';
import { Habit } from '../types/habit';

interface HabitCardProps {
  habit: Habit;
  onComplete: () => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, onComplete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{habit.name}</h3>
          <p className="text-gray-600">{habit.description}</p>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-4">{habit.currentStreak} 🔥</span>
          <button 
            onClick={onComplete}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;