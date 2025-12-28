// Arrow functions provide a concise syntax for writing functions in JavaScript.
// in 2015 (ES6), arrow functions were introduced as a new way to define functions.
// They are often used for shorter functions and have a different behavior regarding the 'this' keyword.



// This Keyword ... this refers to the object that is executing the current function. 

const user = {
  username: "Alice",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, Welcome to website`);

    // console.log(this); // output = 
    
    
  }
}

user.welcomeMessage(); // Output: Alice, Welcome to website
user.username = "Bob";
user.welcomeMessage(); // Output: Bob, Welcome to website

// in browser  window is the global object that....

showThis(); // Output: Window {...}
function showThis() {
  // console.log(this);
}

// we can not use this in function  
const chai = function(){
  let username = "Charlie";
  console.log(this.username); // Output: undefined    
}


//....................................................................

// Arrow Function Syntax
// Arrow functions have a shorter syntax compared to traditional function expressions.
const add = (a, b) => {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// If the function has a single expression, you can omit the curly braces and the return keyword.
const multiply = (a, b) => a * b;  // Implicit return
console.log(multiply(2, 3)); // Output: 6

// {} ka use hua to return keyword lagana hi padega .. impclicit return me () ka use krte hai 



const addTwo = (num1,num2) => ({username:"Ajay", sum: num1 + num2});
console.log(addTwo(5,10)); // Output: { username: 'Ajay', sum: 15 }

// agr implicit return me object return krna ho to () ke sath andr {} me object wrap krna hoga

