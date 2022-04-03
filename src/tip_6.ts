//Typing function expressions

const add = (x: number, y: number): number => {
  return x + y;
};

const sub = (x: number, y: number): number => {
  return x - y;
};

const mul = (x: number, y: number): number => {
  return x * y;
};

const div = (x: number, y: number): number => {
  return x / y;
};

//Adding a type to functions with a common signature can clean up repeated code

type NumericOperation = (x: number, y: number) => number;

const typedAdd: NumericOperation = (x, y) => {
  return x + y;
};

const typedSub: NumericOperation = (x, y) => {
  return x - y;
};

const typedMul: NumericOperation = (x, y) => {
  return x * y;
};

const typedDiv: NumericOperation = (x, y) => {
  return x / y;
};
