// Call Signatures in TypeScript with Real-life Examples & Best Practices 🧑‍

// Call Signatures in TypeScript

type Student = {
  name: string;
  age: number;
  grade: string;
  greet: (country: string) => string;
};

const student: Student = {
  name: "Alice",
  age: 20,
  grade: "A",
  greet: (country: string): string => {
    return `Hello, my name is ${student.name}, I am from ${country}.`;
  },
};

const student2: Student = {
  name: "Sunny",
  age: 22,
  grade: "B",
  greet: (country: string): string => {
    return `Hello, my name is ${student2.name}, I am from ${country}.`;
  },
};

// console.log(student);
console.log(student.greet("USA"));
console.log(student2.greet("India"));

const introduction: (student1: Student) => string = (student1: Student): string => {
  const { name, age, grade } = student1;
  return `Hello, my name is ${student1.name}, I am ${student1.age} years old and I am in grade ${student1.grade}.`;
};

// console.log(introduction(student));
// console.log(introduction(student2));
