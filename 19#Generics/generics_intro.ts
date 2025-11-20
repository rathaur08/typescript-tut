// Generics

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(42);

console.log(output1); // Output: Hello, Generics!
console.log(output2); // Output: 42

// 2nd Example: Generic Interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

console.log(myIdentity(100)); // Output: 100
