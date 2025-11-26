// Inheritance

class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound(): string {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }

  makeSound(): string {
    return `${this.name} barks.`;
  }
}

const myDog = new Dog("Buddy", "Canine", "Golden Retriever");
console.log(myDog);
console.log(myDog.makeSound()); // Output: Buddy barks.

// Another Example

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
    return `Hello, my name is ${this.name} and I am ${
      this.age
    } years old. I am in grade ${
      this.grade
    }. if you like, my hobbies are ${this.hobbies.join(", ")}.`;
  }
}

// Creating an instance of the Person class
const person1 = new Person("Alice", 30, ["painting", "traveling"]);
// console.log(person1);
// console.log(person1.greet()); // Output: Hello, my name is Alice and I am 30 years old.

const student1 = new Students("Bob", 20, ["football", "chess"], 10);
// console.log(student1);
console.log(student1.greet()); // Output: Hello, my name is Bob and I am 20 years old.
