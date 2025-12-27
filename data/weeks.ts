const unitOneWeeks = [1, 2, 3, 4, 5, 6, 7];
const unitTwoWeeks = [9, 10, 11, 12, 13, 14, 15];

export const availableWeeks = [...unitOneWeeks, ...unitTwoWeeks];

export const getWeekGroup = (currentWeek: number) =>
  currentWeek >= 9 ? unitTwoWeeks : unitOneWeeks;

export const getWeekNeighbors = (currentWeek: number) => {
  const weeks = getWeekGroup(currentWeek);
  const index = weeks.indexOf(currentWeek);
  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? weeks[index - 1] : null,
    next: index < weeks.length - 1 ? weeks[index + 1] : null,
  };
};
