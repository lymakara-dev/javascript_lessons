// Variables can be declared using var, let, or const
let username = "Alice"; // string
let age = 25; // number
let isStudent = true; // boolean
let hobbies = ["reading", "gaming", "coding"]; // array
let person = {
  // object
  firstName: "John",
  lastName: "Doe",
};
console.log(username, age, isStudent, hobbies, person);

// let allows you to reassign a value. Mutable!
let weather = "cold";
weather = "hot";

// string concatenation
let sum = "10" + 20;
console.log(sum); // Output: "1020"

// const or constant make an object immutable
const today = "Wed";
today = "Thu"; // error! cannot reassign today as it's a constant.
