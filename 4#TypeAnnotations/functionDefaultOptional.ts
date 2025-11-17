// Optional and Default Parameters in Functions

//  Default parameter
const greet = (name: string, age: number = 50): string => {
  return `Welcone, ${name} and your Age is ${age}`;
};
const myGreet = greet("Sunny", 45);
console.log(myGreet);

// Optional parameter

const greet2 = (name: string, id?: number): string => {
  if (id) {
    return `Welcone, ${name} and your ID is ${id}`;
  }
  return `Welcone, ${name}`;
};

const myGreet2 = greet2("Sunny");
console.log(myGreet2);
