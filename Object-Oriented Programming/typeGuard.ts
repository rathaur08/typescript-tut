// Type Safety with Typeof Guards: Understanding Type Narrowing in TypeScript

//
const favHobbies = (hobby: string | string[]) => {
  // return hobby.map(() => {});

  if (typeof hobby === "object" && Array.isArray(hobby)) {
    return hobby.map(() => {});
  } else {
    console.log(hobby);
  }
};

favHobbies(["games", "coding"]);
favHobbies("coding");
