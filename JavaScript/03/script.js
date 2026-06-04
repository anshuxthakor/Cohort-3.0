// Loops In JavaScript

// // While Loop
// var a = 1;
// var num = Number(prompt("Enter the table number: "));
// while (a <= 10) {
//   console.log(num + " x " + a + " = " + num * a);
//   a++;
// }

// // Do While Loop
// do {
//   var pass = Number(prompt("Enter the password: "));
// } while (pass != 123);
// console.log('Welcome !, You have entered the correct password.');


// For Loop
// for (var a = 0; a < 10; a++) {
//   console.log(a);
// }

// Var --> Function Scoped, Value Updation Allowed
// Let --> Block Scoped, Value Updation Allowed
// Const --> Block Scoped and cannot be reassigned

// Strings In JavaScript

let a = 'Anshu'; // String enclosed in single quotes
let name = "Anshu"; // String enclosed in double quotes

let age = 20; // Number
let literal = `Anshu`; // String enclosed in backticks (template literals)

console.log(`My name is ${name} and I am ${age} years old.`);

// String Methods
let s = "Hello, World!";

console.log(s.length);              // 13
console.log(s.toUpperCase());       // "HELLO, WORLD!"
console.log(s.toLowerCase());       // "hello, world!"
console.log(s.indexOf("World"));    // 7  (position of "World")
console.log(s.includes("Hello"));   // true
console.log(s.slice(0, 5));         // "Hello"
console.log(s.substring(7, 12));    // "World"
console.log(s.replace("World", "JS"));   // "Hello, JS!"
console.log(s.split(", "));         // ["Hello", "World!"]
console.log("   hi   ".trim());     // "hi"
console.log("abc".repeat(3));       // "abcabcabc"
console.log(s.startsWith("Hello")); // true
console.log(s.endsWith("!"));       // true
console.log(s.charAt(0));           // "H"
console.log(s[0]);                  // "H" (also works)