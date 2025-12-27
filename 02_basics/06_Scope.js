// var variables are function-scoped or globally-scoped means they are accessible outside the block they are defined in

let a = 10;
const b = 20;
var c = 30;

if (true) {
  var d = 40; // var is function-scoped, so accessible outside this block
  let e = 50; // let is block-scoped, so not accessible outside this block
}
console.log(d); // 40
// console.log(e); // ReferenceError: e is not defined


// avoid using var to prevent scope-related issues

function testScope() {
  var x = 100; // function-scoped
  let y = 200; // block-scoped

  if (true) {
    var x = 300; // same variable as above, function-scoped
    let y = 400; // different variable, block-scoped
    console.log(x); // 300
    console.log(y); // 400
  }
  console.log(x); // 300
  console.log(y); // 200
}


// child function can access parent function variables but parent function cannot access child function variables

// function with expression
const add = function(num1, num2) {
  return num1 + num2;
};

console.log(add(5, 10)); // 15

function multyply(num1, num2) {
  return num1 * num2;
} 
console.log(multyply(5, 10)); // 50

function outerFunction() {
  const outerVar = "I am from outer function";  
  function innerFunction() {
    const innerVar = "I am from inner function";
    console.log(outerVar); // accessible
    console.log(innerVar); // accessible
  }
  innerFunction();
  // console.log(innerVar); // ReferenceError: innerVar is not defined
} 
outerFunction();

// global scope
const globalVar = "I am a global variable";
function checkGlobalScope() {
  console.log(globalVar); // accessible
} 
