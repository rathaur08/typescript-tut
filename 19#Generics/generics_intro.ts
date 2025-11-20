// Generics

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(42);

console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42

// 2nd Example: Generic Interface
function add<T, U>(a: T, b: U): void {
  console.log(typeof a);
  console.log(typeof b);
}

const result1 = add(5, 8); // Both arguments are numbers
const result2 = add("Hello, ", "Generics!");

// 3rd Example:
function addValue<T, U, V>(a: T, b: U, c: V): void {
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
}

const result11 = addValue(5, 8, true); // Both arguments are numbers
const result22 = addValue("Hello, ", "Generics!", 80);
const result33 = addValue("Hello, ", "Generics!", false);