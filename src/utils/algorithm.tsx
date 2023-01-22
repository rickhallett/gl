export type datum = {
  id: number;
  arr: number[];
  product: number;
  expect: number;
};

export const testData: datum[] = [
  {
    id: Math.random(),
    arr: [-1, 2, -3, 4, 5],
    product: 120,
    expect: 1,
  },
  {
    id: Math.random(),
    arr: [-1, 0, -3],
    product: 0,
    expect: 0,
  },
  {
    id: Math.random(),
    arr: [1, 2, 3, 4, 5],
    product: 120,
    expect: 1,
  },
  {
    id: Math.random(),
    arr: [-3, -6, -3],
    product: -54,
    expect: -1,
  },
];

const getSign = (num: number): number => {
  if (num > 0) return 1;
  if (num < 0) return -1;
  else return 0;
};

const getProduct = (array: number[]): number => array.reduce(product);

const product = (a: number, b: number): number => a * b;

export const calculateResult = (array: number[]): number =>
  getSign(getProduct(array));
