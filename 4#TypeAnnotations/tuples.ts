// #17: TypeScript Tuples🔥Mastering Data Structures| Best Practices & Examples

//  Tuples in Typescript

// PersonInfo is a tuple type that holds a string, a number, and a boolean
type PersonInfo = readonly [string, number, boolean];

// function to display person Information from a tuple
const displayPersionInfo = (persion: PersonInfo): void => {
  const [name, age, isEmployed] = persion;
  console.log(
    `Name: ${name}, Age: ${age}, Employed: ${isEmployed ? "Yes" : "No"}`
  );
};

// Creating tuples
const person1: PersonInfo = ["Alice", 30, true];
const person2: PersonInfo = ["Bob", 25, false];

// Accessing tuple elements
// person1.push("data")
// console.log(person1);

// Using the function to display information
displayPersionInfo(person1);
displayPersionInfo(person2);

//! Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

const ProductInfo: readonly [string, number, number] = [
  // Product name (string)
  "Laptop",
  // Price (number)
  999.99,
  // Quantity in stock (number)
  50,
];

// Create two product instances using this tuple type and display their information.
const product1: typeof ProductInfo = ["Smartphone", 699.99, 100];
const product2: typeof ProductInfo = ["Headphones", 199.99, 200];

const displayProductInfo = (product: typeof ProductInfo): void => {
  const [name, price, quantity] = product;
  console.log(
    `Product Name: ${name}, Price: $${price}, Quantity in Stock: ${quantity}`
  );
};

displayProductInfo(product1);
displayProductInfo(product2);

// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.

const productA: typeof ProductInfo = ["Tablet", 499.99, 75];
const productB: typeof ProductInfo = ["Smartwatch", 299.99, 150];

displayProductInfo(productA);
displayProductInfo(productB);

//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:
type SubjectGrade = readonly [string, number];

const grades: SubjectGrade[] = [
  ["Math", 85],
  ["English", 90],
  ["Science", 78],
];

const calculateAverageGrade = (grades: SubjectGrade[]): number => {
  const total = grades.reduce((sum, [, grade]) => sum + grade, 0);
  return total / grades.length;
};

const averageGrade = calculateAverageGrade(grades);
console.log(`Average Grade: ${averageGrade.toFixed(2)}`);

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

const studentGrades: SubjectGrade[] = [
  ["Math", 92],
  ["English", 88],
  ["Science", 95],
];

const avgGrade = calculateAverageGrade(studentGrades);
console.log(`Student's Average Grade: ${avgGrade.toFixed(2)}`);

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:
type WeatherData = readonly [string, number, string];

const weatherReports: WeatherData[] = [
  ["New York", 22, "Sunny"],
  ["Los Angeles", 28, "Cloudy"],
  ["Chicago", 18, "Rainy"],
];

const displayWeather = (reports: WeatherData[]): void => {
  reports.forEach(([city, temperature, condition]) => {
    console.log(
      `City: ${city}, Temperature: ${temperature}°C, Condition: ${condition}`
    );
  });
};

displayWeather(weatherReports);

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

const cityWeatherReports: WeatherData[] = [
  ["Miami", 30, "Sunny"],
  ["Seattle", 16, "Rainy"],
  ["Denver", 20, "Cloudy"],
];

displayWeather(cityWeatherReports);
