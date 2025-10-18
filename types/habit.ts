export interface Habit {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  currentStreak: number;
  longestStreak: number;
  completions: HabitCompletion[];
}

export interface HabitCompletion {
  id: string;
  habitId: string;
  completedAt: Date;
}

export interface CreateHabitInput {
  name: string;
  description?: string;
}