// How to create class and also instance of class in TS\

class Persons {
  name: string = "Rahul";
  age: number = 18;
  hobbies: string[] = ["reading", "gaming", "coding"];
}

const persons1: Persons = new Persons();
console.log(persons1);
console.log(persons1.hobbies);


// 2nd Example

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30, ["painting", "traveling"]);
console.log(person1);

console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.
