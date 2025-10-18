'use client';

import React, { useState } from 'react';
import HabitCard from '../components/HabitCard';
import CreateHabitModal from '../components/CreateHabitModal';
import { Habit, CreateHabitInput } from '../types/habit';
import { calculateStreak } from '../lib/streakCalculator';

export default function Home() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const createHabit = (input: CreateHabitInput) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      ...input,
      createdAt: new Date(),
      currentStreak: 0,
      longestStreak: 0,
      completions: []
    };
    setHabits([...habits, newHabit]);
  };

  const completeHabit = (habitId: string) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id === habitId) {
        const newCompletions = [...habit.completions, { 
          id: Date.now().toString(), 
          habitId, 
          completedAt: new Date() 
        }];
        
        const currentStreak = calculateStreak(
          newCompletions.map(c => c.completedAt)
        );

        return {
          ...habit,
          currentStreak,
          longestStreak: Math.max(currentStreak, habit.longestStreak),
          completions: newCompletions
        };
      }
      return habit;
    });

    setHabits(updatedHabits);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Streak Tracker</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Habit
        </button>
      </div>

      {habits.map(habit => (
        <HabitCard 
          key={habit.id} 
          habit={habit} 
          onComplete={() => completeHabit(habit.id)} 
        />
      ))}

      {isModalOpen && (
        <CreateHabitModal 
          onCreateHabit={createHabit} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </main>
  );
}