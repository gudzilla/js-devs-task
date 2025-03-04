export const findArrayMax = (array) =>
  array.reduce((max, item) => Math.max(max, item), 0);
