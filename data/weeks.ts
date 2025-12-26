export const availableWeeks = [1, 2, 3, 4, 5, 6, 7];

export const getWeekNeighbors = (currentWeek: number) => {
  const index = availableWeeks.indexOf(currentWeek);
  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? availableWeeks[index - 1] : null,
    next: index < availableWeeks.length - 1 ? availableWeeks[index + 1] : null,
  };
};
