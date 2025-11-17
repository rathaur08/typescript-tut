// Function Declearation with Type Annotations

// function calling

// function greet(name: string, id: number) {
//   console.log(`Welcone, ${name} and your id is ${id}`);
// }
// greet("Sunny", 25);

// arrow function

// const greet = (name: string, id: number) => {
//   console.log(`Welcone, ${name} and your id is: ${id}`);
// };
// greet("Sunny", 25);

// Function Invocation

function greet(name: string, age: number): string {
  return `Welcone, ${name} and your Age is ${age}`;
}
const myGreet = greet("Sunny", 25);
console.log(myGreet);

// function called isPalindrome

const isPalindrome = (palin: string) => {
  let myPalin = palin.split("").reverse().join("");
  return myPalin === palin;
};
console.log(isPalindrome("12321"));
