// streakUtils.js
export function calculateStreak(questions) {
  const completedDates = [
    ...new Set(
      questions
        .filter(q => q.done && q.dateCompleted)
        .map(q => q.dateCompleted)
    ),
  ].sort();

  let streak = 0;
  for (let i = completedDates.length - 1; i >= 0; i--) {
    const current = new Date(completedDates[i]);
    const prev = new Date(current);
    prev.setDate(current.getDate() - 1);
    if (
      completedDates.includes(prev.toISOString().split("T")[0]) ||
      i === completedDates.length - 1
    )
      streak++;
    else break;
  }

  return streak;
}
