// Access Modifiers

class Person {
  public name: string;
  private age: number;
  protected hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${
      this.age
    } years old. if you like, my hobbies are ${this.hobbies.join(", ")}.`;
  }
}

class Students extends Person {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }
  greet(): string {
    return ` Students-: Hello, my name is ${this.name} and I am ${
      this.age
    } -years old. I am in grade ${
      this.grade
    }. if you like, my hobbies are ${this.hobbies.join(", ")}.`;
  }

  introduce(): string[] {
    return this.hobbies;
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30, ["painting", "traveling"]);
// console.log(person1.hobbies);
// console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

const student1 = new Students("Bob", 20, ["football", "chess"], 10);
console.log(student1.introduce());
console.log(student1.greet()); // Output: Hello, my name is Bob and I am 20 years old.
// console.log(student1);
