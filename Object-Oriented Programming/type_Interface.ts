// Types vs. Interfaces

// Examle type --
// type Stud = {
//   name:string;
// }

// type StudAddr = {
//   city: string;
// }

// const BioData : Stud & StudAddr = {
//   name: "Sunny",
//   city: "Delhi",

// }

// console.log(BioData);

// Examle interface ----
interface Stud  {
  name: string;
};

interface StudAddr {
  city: string;
};

interface Data extends Stud, StudAddr {}

const BioData: Stud & StudAddr = {
  name: "Sunny",
  city: "Delhi",
};

console.log(BioData);
