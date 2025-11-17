//  any type
let myfabNum: any = 42;

myfabNum = "sunny";

// console.log(myfabNum);

// unknown type

let myUnknownVar: unknown = 10;

myUnknownVar = "hello";
myUnknownVar = true;

if (typeof myUnknownVar === "number") {
  console.log(myUnknownVar + 20);
} else if (typeof myUnknownVar === "boolean") {
  console.log( myUnknownVar);
}
