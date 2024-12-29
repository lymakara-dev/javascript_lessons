// Operator
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

let x = 5;
let y = 10;
let result = x + y * 2; // Expression: (x + (y * 2))

// Comparison
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than
console.log(a >= b); // Greater than or equal to
console.log(a <= b); // Less than or equal to

// strict comparison
let k = "10";
let l = 10;
console.log("==> not strict: ", k == l);
console.log("==> strict: ", k === l);

let age1 = 25;

if (age1 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// Ternary operator
let age = 25;
let isAdult = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(isAdult); // Output: "You are an adult."

// Logical Operator
let isYoung = true;
let hasID = false;
console.log(isYoung && hasID); // AND
console.log(isYoung || hasID); // OR
console.log(!isYoung); // NOT
