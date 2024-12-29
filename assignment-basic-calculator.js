const readline = require("readline-sync"); // npm install readline-sync

let num1 = parseFloat(readline.question("Enter first number:"));
let num2 = parseFloat(readline.question("Enter second number:"));
let operator = readline.question("Enter operator (+, -, *, /):");

let result;
if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
} else {
  console.log("Invalid operator");
}

console.log("Result:", result);
