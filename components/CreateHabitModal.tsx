'use client';

import React, { useState } from 'react';
import { CreateHabitInput } from '../types/habit';

interface CreateHabitModalProps {
  onCreateHabit: (habit: CreateHabitInput) => void;
  onClose: () => void;
}

const CreateHabitModal: React.FC<CreateHabitModalProps> = ({ onCreateHabit, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreateHabit({ name, description });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl mb-4">Create New Habit</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Habit Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <textarea
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <div className="flex justify-end space-x-2">
            <button 
              type="button" 
              onClick={onClose} 
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateHabitModal;