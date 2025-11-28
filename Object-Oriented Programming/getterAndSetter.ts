// Getter and Setter Methods in TypeScript Classes

// Example

// class Persons {
//   private _age: number | undefined;

//   constructor(public name: string, protected hobbies: string[]) {}

//   public set age(age: number) {
//     if (age > 150 || age < 0) {
//       throw new Error("age is not valid");
//     }
//     this._age = age;
//   }

//   public get age() {
//     if (this._age === undefined) {
//       throw new Error("age is not defind");
//     }
//     return this._age;
//   }

//   greet(): string {
//     return `Hello, my name is ${this.name} and I am ${
//       this._age
//     } years old. If you like, my hobbies are ${this.hobbies.join(", ")}.`;
//   }
// }

// const person1 = new Persons("Alice", 30, ["painting", "traveling"]);
// person1.age = 537;
// console.log(person1.greet());

// practice Quetions

// Bank Account Balance -------------
class BankAccount {
  private _balance: number = 0;

  public get balance(): number {
    return this._balance;
  }

  public set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error("Invald Balance");
    }
    this._balance = newBalance;
  }
}

const account = new BankAccount();
account.balance = 10;
console.log(account.balance);

// Temperature Converter --------------

class Temperature {
  private _celsius: number = 0;

  public get celsius(): number {
    return this._celsius;
  }

  public set celsius(newCelcius: number) {
    this._celsius = newCelcius;
  }

  public get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  public set fahrenheit(newFahrenheit: number) {
    this._celsius = ((newFahrenheit - 32) * 5) / 9;
  }
}

const temp: any = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);


temp.fahrenheit = 77;
console.log(temp.celsius);

