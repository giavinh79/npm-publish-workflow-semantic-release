export const areNumbersEqual = (a: number, b: number) => {
  return a === b;
}

export const getSum = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => {
    return acc + num;
  }, 0)
}

export const areStringsEqual = (a: string, b: string) => {
  return a === b;
}

export const isNil = (element: any): boolean => {
  return element != null;
}