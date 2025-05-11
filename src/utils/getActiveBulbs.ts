export const getActiveBulbs = (difficulty: string, defaultDifficulty: number = 2): number => {
  const difficultyLevels: Record<string, number> = {
    beginner: 1,
    medium: 2,
    hard: 3,
  };
  return (
    difficultyLevels[difficulty.toLowerCase() as keyof typeof difficultyLevels] || defaultDifficulty
  );
};
