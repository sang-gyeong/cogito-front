export const getScoreImage = (score: number) => {
  if (score >= 50) {
    return '🥇';
  } else if (score >= 30) {
    return '🥈';
  } else {
    return '🥉';
  }
};
