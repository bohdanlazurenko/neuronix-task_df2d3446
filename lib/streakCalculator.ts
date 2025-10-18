export function calculateStreak(completions: Date[]): number {
  if (completions.length === 0) return 0;

  let streak = 1;
  const sortedCompletions = completions.sort((a, b) => b.getTime() - a.getTime());
  
  for (let i = 1; i < sortedCompletions.length; i++) {
    const currentDay = sortedCompletions[i];
    const previousDay = sortedCompletions[i - 1];
    
    const dayDifference = (previousDay.getTime() - currentDay.getTime()) / (1000 * 3600 * 24);
    
    if (dayDifference === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}