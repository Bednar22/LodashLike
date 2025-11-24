export const getLastElement = <T>(array: Array<T>) => {
  return array[array.length - 1];
};

export const makePair = <T1, T2>(val1: T1, val2: T2) => {
  return [val1, val2];
};
