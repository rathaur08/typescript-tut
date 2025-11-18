// #16: Enums in Typescript Explained with Real-life Examples 👉 Used in Thapa Technical Website

// Enums in TypeScript

// user1 = login => normal user
// user2 = login => admin user

enum Role {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name: string;
  email: string;
  password: string;
  role: Role;
};

const user1: LoginDetails = {
  name: "Ravi",
  email: "ravi@gmail.com",
  password: "12345",
  role: Role.user,
};

// const isAdmin: (user: LoginDetails) => string = (
//   user: LoginDetails
// ): string => {
//   const { name, role } = user;
//   return role === Role.admin ? `${name} is admin` : `${name} is not admin`;
// };

// console.log(isAdmin(user1));


const isAdmin = (user: LoginDetails): string => {
  const { name, role } = user;
  return role === Role.admin ? `${name} is admin` : `${name} is not admin`;
};

console.log(isAdmin(user1));