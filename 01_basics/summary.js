/* Datatype in JavaScript 

1....Premitive Data Types....
There are 7 primitve data types in JavaScript
Number, string, boolean, null, undefined, symbol, bigInt

2....Reference/Non-Premitive Data Types....
Object, array, function etc.
Objects are used to store collections of data and more complex entities. *

*/

//...Array
let fruits = ["Apple", "Banana", "Orange"];

//object
let person = {
  name: "Alice",
  age: 25,
  isStudent: false,
};

//function
function greet() {
  console.log("Hello, World!");
}

//***********************************************************
// ? Premitive Data Types use stack memory.. we get a copy of the variable

let num1 = 10;
let num2 = num1; // copy of num1 is stored in num2
num2 = 20; // changing num2 does not affect num1

// ? Non-Premitive Data Types use heap memory .. we get a reference of the variable

let user1 = {
  emial: "user1@example.com",
  password: "password123",
  upi: "user1@bank",
};

let user2 = user1; // user2 references the same object as user1
user2.password = "newpassword456"; // changing user2 also affects user1

console.log(user1.password); // Output: "newpassword456"
console.log(user2.password); // Output: "newpassword456"
