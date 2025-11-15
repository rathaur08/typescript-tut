// TypeScript Code to add two numbers
let a: number = 10;
let b: number = 20;

// @ts-ignore
let sum = a + b;
console.log("Sum is: " + sum);

// writa function to add two numbers
const addTwo = (a: number, b: number) => {
  return a + b;
};

// calling function
console.log("Sum to two Numbers : ", addTwo(45, 5));
