// Unions and Intersections

// Union Types Example
type StringOrNumber = string | number;

function displayValue(value: StringOrNumber): void {
  console.log(`The value is: ${value}`);
}

displayValue("Hello, World!");
displayValue(42);

// 2nd Example:
const inputValue: (value: string | number | boolean) => void = (value) => {
  console.log(`Input value is: ${value}`);
};

inputValue("Test String");
inputValue(100);
inputValue(true);

// 3rd Example:
const userInput: (value: string | number) => string = (value) => {
  if (typeof value === "string") {
    return `You entered a string: ${value.toUpperCase()}`;
  } else if (typeof value === "number") {
    return `You entered a number: ${value * 2}`;
  } else {
    return `You entered an unsupported type`;
  }
};

console.log(userInput(20));
console.log(userInput("Sample Input"));

// Intersection Types Example
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeePerson = Person & Employee;

const employee: EmployeePerson = {
  name: "John Doe",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};

console.log(
  `Employee Name: ${employee.name}, Age: ${employee.age}, ID: ${employee.employeeId}, Department: ${employee.department}`
);

// 2nd Example:

type User = {
  username: string;
  age: number;
};
type MyLocation = {
  city: string;
  country: string;
};

const user: User = { username: "alice", age: 28 };
const myLocation: MyLocation = { city: "New York", country: "USA" };

const createUserProfile = (
  user: User,
  location: MyLocation
): User & MyLocation => {
  return { ...user, ...location };
};

const myCompleteInfo: User & MyLocation=  createUserProfile(user, myLocation);
console.log(myCompleteInfo);

