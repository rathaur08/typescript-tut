// Static Properties and Methods in TypeScript

//
// class Person2 {
//   constructor(public name:string){}
// }
// const user1 = new Person2(name: "Sunny");
// Person2.name= sunny;

class MathOper {
  public static PI: number = Math.PI;

  public static add(num1: number, num2: number) {
    return num1 + num2;
  }
  public static sub(num1: number, num2: number) {
    return num1 - num2;
  }
}

console.log(MathOper.PI);
console.log(MathOper.add(4, 6));
console.log(MathOper.sub(6, 4));
