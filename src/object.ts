export const objMap = <T1, T2>(obj: T1, fn: (arg: T1[keyof T1]) => T2): { [K in keyof T1]: T2 } => {
  const newObj = {} as { [K in keyof T1]: T2 };

  for (const key in obj) {
    newObj[key] = fn(obj[key]);
  }

  return newObj;
};
