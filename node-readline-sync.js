//https://www.npmjs.com/package/readline-sync

const readline = require("readline-sync");

const name = readline.question("What is your name? ");
console.log("Hello", name);
