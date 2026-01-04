export const calculateNights = (start: Date, end: Date) => {
  return Math.max(
    1,
    Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  );
};
