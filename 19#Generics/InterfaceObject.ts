// Interface Object

//

interface Person {
  name: string;
  age: number;
}

const person1: Person = {
  name: "Alice",
  age: 30,
};

//
interface Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const product1: Products = {
  id: 1,
  name: "Laptop",
  price: 999,
  quantity: 10,
};

const product2: Products = {
  id: 2,
  name: "Smartphone",
  price: 699,
  quantity: 20,
};

const claculateTotalPrice = (product: Products): number => {
  return product.price * product.quantity;
};

const totalPrice = claculateTotalPrice(product1);
const totalPrices = claculateTotalPrice(product2);

console.log(`Total Price: $${totalPrice}`); // Output: Total Price: $9990
console.log(`Total Price: $${totalPrices}`); // Output: Total Price: $13980
