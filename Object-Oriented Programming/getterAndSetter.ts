// Getter and Setter Methods in TypeScript Classes

// Example

class Persons {
  private _age: number | undefined;

  constructor(public name: string, protected hobbies: string[]) {}

  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("age is not valid");
    }
    this._age = age;
  }

  public get age() {
    if (this._age === undefined) {
      throw new Error("age is not defind");
    }
    return this._age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${
      this._age
    } years old. If you like, my hobbies are ${this.hobbies.join(", ")}.`;
  }
}

const person1 = new Persons("Alice", 30, ["painting", "traveling"]);

person1.age = 537;

console.log(person1.greet());
