"use stict"; // treat all JS code as newer version

alert("3+3"); // we can use alert only in browser environment

// code readability should be high

let name = "Alice";
let age = 20;
let isLoggedIn = false;

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean

/*..........Data Types in JavaScript...........

number => integer and float both are represented as number
bigInt => larger than 2^53

string => "" or '' 
boolean => true or false 
null => empty value 
undefined => value not assigned
symbol => unique identifier 

object => collection of key value pairs (more complex data structure)

*/

console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a bug in JS, null is not an object)
