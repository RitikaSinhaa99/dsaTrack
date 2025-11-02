// revisionUtils.js
export function needsRevision(question) {
  if (!question.dateCompleted) return false;
  const days = Math.floor(
    (Date.now() - new Date(question.dateCompleted)) / (1000 * 60 * 60 * 24)
  );
  return days >= 3; // start showing after 3 days
}

export function getRevisionTip(question) {
  const days = Math.floor(
    (Date.now() - new Date(question.dateCompleted)) / (1000 * 60 * 60 * 24)
  );

  if (days < 3) return "Looks fresh in your mind — try solving without hints!";
  if (days < 7) return "Good time to revisit edge cases.";
  return "Time for a full reattempt — solve it from scratch!";
}
