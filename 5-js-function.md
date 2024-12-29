JavaScript Functions
## Basic Function Declaration
### Syntax
```javascript
function functionName(parameters) {
 // function body
 // code to be executed
}
```
- `functionName`: The name of the function.
- `parameters`: Optional. A function can have zero or more parameters.
- `function body`: The code that will be executed when the function is called.
### Example
```javascript
function greet(name) {
 console.log("Hello, " + name + "!");
}
// Calling the function
greet("Alice");
```
**Output:**
```
Hello, Alice!
```
## Function Expressions
A function can also be defined using a function expression. A function expression can be stored in a variable.
### Syntax
```javascript
const variableName = function(parameters) {
 // function body
};
```
### Example
```javascript
const greet = function(name) {
 console.log("Hello, " + name + "!");
};
// Calling the function
greet("Bob");
```
**Output:**
```
Hello, Bob!
```
## Arrow Functions
Arrow functions provide a shorter syntax for writing function expressions. They are always anonymous and change the way `this` binds in functions.
### Syntax
```javascript
const functionName = (parameters) => {
 // function body
};
```
### Example
```javascript
const greet = (name) => {
 console.log("Hello, " + name + "!");
};
// Calling the function
greet("Charlie");
```
**Output:**
```
Hello, Charlie!
```
### Simplified Arrow Function
If the function has a single parameter, you can omit the parentheses. If the function body contains a single statement, you can omit the curly braces and the `return` keyword.
```javascript
const greet = name => console.log("Hello, " + name + "!");
// Calling the function
greet("Dave");
```
**Output:**
```
Hello, Dave!
```
## Parameters and Arguments
### Default Parameters
You can assign default values to parameters.
```javascript
function greet(name = "Guest") {
 console.log("Hello, " + name + "!");
}
// Calling the function without an argument
greet(); 
// Calling the function with an argument
greet("Eve");
```
**Output:**
```
Hello, Guest!
Hello, Eve!
```
### Rest Parameters
Rest parameters allow you to pass an indefinite number of arguments as an array.
```javascript
function greet(...names) {
 names.forEach(name => console.log("Hello, " + name + "!"));
}
// Calling the function with multiple arguments
greet("Frank", "Grace", "Heidi");
```
**Output:**
```
Hello, Frank!
Hello, Grace!
Hello, Heidi!
```
## Return Statement
Functions can return a value using the `return` statement.
### Example
```javascript
function add(a, b) {
 return a + b;
}
const result = add(3, 4);
console.log(result);
```
**Output:**
```
7
```
## Anonymous Functions
Anonymous functions are functions without a name. They are often used as arguments to other functions or as immediately invoked function expressions (IIFE).
### Example
```javascript
setTimeout(function() {
 console.log("This message is delayed by 2 seconds.");
}, 2000);
```
**Output (after 2 seconds):**
```
This message is delayed by 2 seconds.
```
### Immediately Invoked Function Expression (IIFE)
An IIFE is a function that runs as soon as it is defined.
```javascript
(function() {
 console.log("This message is immediately invoked.");
})();
```
**Output:**
```
This message is immediately invoked.
```
## Higher-Order Functions
Higher-order functions are functions that take other functions as arguments or return functions as their result.
### Example
```javascript
function greet(name) {
 return function(message) {
 console.log(message + ", " + name + "!");
 };
}
const greetAlice = greet("Alice");
greetAlice("Good morning");
greetAlice("Good evening");
```
**Output:**
```
Good morning, Alice!
Good evening, Alice!
```
## Summary
- **Function Declaration**: `function name(parameters) { ... }`
- **Function Expression**: `const name = function(parameters) { ... }`
- **Arrow Function**: `const name = (parameters) => { ... }`
- **Default Parameters**: `function name(param = default) { ... }`
- **Rest Parameters**: `function name(...params) { ... }`
- **Return Statement**: `return value;`
- **Anonymous Functions**: `function() { ... }`
- **Immediately Invoked Function Expression (IIFE)**: `(function() { ... })();`
- **Higher-Order Functions**: Functions that take or return other functions