export const getAnswers = (
  incorrectAnswers: string[],
  answer: string,
): string[] => {
  const randomIndex = Math.floor(Math.random() * 4);
  const before = incorrectAnswers?.slice(0, randomIndex);
  const after = incorrectAnswers?.slice(randomIndex);

  return [...before, answer, ...after];
};
