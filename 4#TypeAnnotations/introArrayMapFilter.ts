// Array in TypeScript
// Using map method

const numbers: number[] = [1, 2, 3, 4, 5];
// Doubling each number in the array
const doubledNumbers: number[] = numbers.map((num: number): number => num * 2);
console.log("Doubled Numbers: ", doubledNumbers);

// Converting number to strings
const numberToString: string[] = numbers.map((data: number) => data.toString());
console.log("Number to String: ", numberToString);

// Using filter method
// filtering even numbers from the array
const evenNumbers: number[] = numbers.filter(
  (num: number): boolean => num % 2 === 0
);
console.log("Even Numbers: ", evenNumbers);

// Filtering numbers greater than 3
const greaterThanThree: number[] = numbers.filter(
  (num: number): boolean => num > 3
);
console.log("Numbers Greater than 3: ", greaterThanThree);

// Homework Time
//* Practice questions for map:

//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
const names: string[] = ["Alice", "Bob", "Charlie", "David"];
const upperCaseNames: string[] = names.map((name: string): string =>
  name.toUpperCase()
);
console.log("Uppercase Names: ", upperCaseNames);

//? 2: Given an array of numbers, create a new array that contains the square of each number.
const nums: number[] = [1, 2, 3, 4, 5];
const squaredNumbers: number[] = nums.map((num: number): number => num * num);
console.log("Squared Numbers: ", squaredNumbers);

//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4.
const names2: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const longNames: string[] = names2.filter((name: string): boolean => name.length > 4);
console.log("Names with length greater than 4: ", longNames);

//? 2: Given an array of strings, filter out the names that start with the letter "A".
const names3: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex", "Brian"];
const filteredNames: string[] = names3.filter(
  (name: string): boolean => !name.startsWith("A")
);
console.log("Names not starting with A: ", filteredNames);

//! Homework 🧑‍💻
//? 1: Create a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers.
function calculateAverage(arr: number[]): number {
  const sum: number = arr.reduce(
    (acc: number, curr: number): number => acc + curr,
    0
  );
  return sum / arr.length;
}
const average: number = calculateAverage([10, 20, 30, 40, 50]);
console.log("Average: ", average);

//? 2: Write a function called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMaxValue(arr: number[]): number {
  return Math.max(...arr);
}
const maxValue: number = findMaxValue([10, 20, 30, 40, 50]);
console.log("Maximum Value: ", maxValue);
