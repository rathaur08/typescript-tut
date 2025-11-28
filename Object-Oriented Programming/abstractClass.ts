// Abstract Classes in TypeScript

// Circle , Rectangle

// Circle , Rectangle

abstract class Shape {
  protected color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract calculateArea(): number;
  abstract displayArea(): void;
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea(): void {
    console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
  }
}

const circle = new Circle("Red", 5);
console.log(circle.calculateArea());
circle.displayArea();

