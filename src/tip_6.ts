//Typing function expressions

const add = (x: number, y: number): number => x + y;

const sub = (x: number, y: number): number => x - y;

const mul = (x: number, y: number): number => x * y;

const div = (x: number, y: number): number => x / y;

//Adding a type to functions with a common signature can clean up repeated code

type NumericOperation = (x: number, y: number) => number;

const typedAdd: NumericOperation = (x, y) => x + y;

const typedSub: NumericOperation = (x, y) => x - y;

const typedMul: NumericOperation = (x, y) => x * y;

const typedDiv: NumericOperation = (x, y) => x / y;

console.log(`Add ${add(2, 3)} and typed add ${typedAdd(2, 3)}!`);
