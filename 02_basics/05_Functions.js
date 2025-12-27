//Function in js

// function add(num1, num2){
//   console.log(num1+num2);
// }

// add(5,10); //15

function sum(num1, num2) {
  return num1 + num2;
}

const result = sum(7, 3);
console.log(result); // 10



function greetUser(name) {
  if (!name) {
    return "please enter a name";
  }
  return `Hello, ${name}!`;
}

console.log(greetUser("Alice")); // Hello, Alice!

// jb function me argument pass nhi krte to to undefined aata hai
console.log(greetUser()); // Hello, undefined!


//... rest operator in function jb nuumber of arguments nhi pata ho to rest operator use krte hai
function calculateSum(...numbers) {
  let total = 0;  
  for (let num of numbers) {
    total += num;
  } 
  return total;
}

console.log(calculateSum(1, 2, 3)); // 6
console.log(calculateSum(10, 20, 30, 40, 50)); // 150

//passing object to function
const user = {
  userName: "john_doe",
  age : 22
}

function handlObject(anyObj){
  return `User Name is ${anyObj.userName} and age is ${anyObj.age}`; 
} // accessing object properties inside function

console.log(handlObject(user)); // User Name is john_doe and age is 22

// we can also pass an array to function same as object
