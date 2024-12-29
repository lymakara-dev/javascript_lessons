const readline = require("readline-sync"); // npm install readline-sync

function getNumber(prompt) {
  return parseFloat(readline.question(prompt));
}

function getOperator(prompt) {
  return readline.question(prompt);
}

function calculate(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return null;
  }
  return result;
}

const num1 = getNumber("Enter first number:");
const num2 = getNumber("Enter second number:");
const operator = getOperator("Enter operator (+, -, *, /):");

const result = calculate(num1, num2, operator);

if (result !== null) {
  console.log("Result:", result);
}
