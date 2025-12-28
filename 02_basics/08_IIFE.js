// immediately invoked function expression (IIFE)

// global scope ke variable se pollution se bachne ke liye IIFE ka use krte hai

(function fun() { //name iife
  console.log("IIFE executed");
})();
// Output: IIFE executed
// ye function define hote hi execute ho jata hai
// iska use hum tab karte hai jab hume function ko ek baar hi execute karna ho aur uske baad uska use na karna ho

// function ke end me () lagate hai jisse function execute ho jata hai aur ; ka use karte hai statement ko terminate karne ke liye

(() => {
  console.log("Arrow Function IIFE executed");
})();
// Output: Arrow Function IIFE executed
// arrow function IIFE ka use bhi same hota hai jese normal IIFE ka hota hai

((name) => {// unamed iife
  console.log(`Hello ${name}`);
})("Alice");
// Output: Hello Alice
// arrow function IIFE me bhi hum parameters pass kar sakte hai jese normal function me karte hai


// ; ka use important hai agr 2 iife ek sath likhe ho to