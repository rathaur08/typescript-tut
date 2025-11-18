// #13: TypeScript Objects Explained: Everything You Need to Know with Real Life Example// Objects in TypeScript

const person: {
  name: string;
  age: number;
  isEmployed: boolean;
  address: {
    city: string;
    country: string;
  };
  hobbies: string[];
} = {
  name: "John",
  age: 30,
  isEmployed: true,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling", "swimming"],
};

// Accessing object properties
console.log(person.name); // John
console.log(person.address.city); // New York
console.log(person.hobbies[1]); // traveling

// Modifying object properties
person.age = 31;
person.address.city = "Los Angeles";
person.hobbies.push("coding");

console.log(person);

// #14: TypeScript Type Aliases: Making Your Code Easier to Read & Maintain🚀
// Type Aliases in TypeScript

type Address = {
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
  address: Address;
  hobbies: string[];
};

const employee: Person = {
  name: "Rahul",
  age: 28,
  isEmployed: false,
  address: {
    city: "Chicago",
    country: "USA",
  },
  hobbies: ["painting", "dancing"],
};

console.log(employee);

// Modifying employee properties
employee.isEmployed = true;
employee.address.city = "San Francisco";

console.log(employee);

// Create a Product Object with Type Alias

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  inStock: boolean;
};

const product: Product = {
  id: 101,
  name: "Laptop",
  price: 999.99,
  quantity: 50,
  inStock: true,
};

const product1: Product = {
  id: 102,
  name: "phone",
  price: 499.99,
  quantity: 150,
  inStock: true,
};

console.log(product);

// Calculate total value of the product stock
const totalValue = product.price * product.quantity;
console.log(`Total value of product stock: $${totalValue}`);

// function to calculate total price
const calculateTotalPrice = (product: Product): number => {
  return product.price * product.quantity;
};

console.log(`Total Price of ${product.name}: $${calculateTotalPrice(product)}`);
console.log(`Total Price of ${product1.name}: $${calculateTotalPrice(product1)}`);
