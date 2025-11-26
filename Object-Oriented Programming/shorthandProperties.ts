//  Shorthand Properties in Classes

// Example 
class Person {
  constructor(
    public name: string,
    public age: number,
    protected hobbies: string[]
  ) {}

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${
      this.age
    } years old. if you like, my hobbies are ${this.hobbies.join(", ")}.`;
  }
}

class Students extends Person {
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    public grade: number
  ) {
    super(name, age, hobbies);
  }

  introduce(): string[] {
    return this.hobbies;
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30, ["painting", "traveling"]);
// console.log(person1.hobbies);
console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

const student1 = new Students("Bob", 20, ["football", "chess"], 10);
console.log(student1.introduce());
