// Array type annotation

// using Square brackets
const number: number[] = [1, 2, 3, 4, 5]; // inferred as number[]
const strings: string[] = ["one", "two", "three"]; // explicitly annotated as string[]
const mixed: (number | string)[] = [1, "two", 3, "four"]; // array with union types

// using Array Constructor
const number1: number[] = new Array(1, 2, 3, 4, 5); // inferred as number[]

// using  Array.of method
const number2: string[] = Array.of("one", "two", "three"); // inferred as number[]

// Accessing element using index

console.log(number2[2]);
console.log(number.length);

// const firstName: string = number2[0];

//
const fruits: string[] = ["Apple", "Banana", "Mango"];

const newUpdateFruits = fruits.push("Orange");
console.log("newUpdateFruits ", newUpdateFruits);
console.log("fruits ", fruits); // Output: 4

const removedFruit = fruits.pop();
console.log("removedFruit ", removedFruit); 
console.log("fruits after pop ", fruits); 

// Iterating over an array

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] );
}

// using for in loop
for (const index in fruits) {
  console.log(`Fruit at index : ${index}: ${fruits[index]}`);
}

// using for of loop
for (const fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// Using forEach method
fruits.forEach((fruit, index) => {
  console.log(`Fruit at index ${index}: ${fruit}`);
});
