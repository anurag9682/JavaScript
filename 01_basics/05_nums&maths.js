const score = 100;

const balance = new Number(567); 
console.log(balance); // [Number: 567]
console.log(typeof balance); // object
 
console.log(typeof score); // number

console.log(score.toString()); // "100"
console.log(balance.toFixed(2)); // "567.00"

const num = 1000000
console.log(num.toLocaleString("en-IN")); // "10,00,000"


//.....................Math....................//

console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-7.8)); // 7.8
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 3, 2, 8, 5)); // 8
console.log(Math.min(1, 3, 2, 8, 5)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4

console.log(Math.random()); // random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const min = 5;
const max = 15;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 5 and 15
