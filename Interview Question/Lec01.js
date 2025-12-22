

### 1. Difference between `const` and `var`
- **`var`**: Function-scoped, can be redeclared and updated. Hoisted with `undefined` as default.
- **`const`**: Block-scoped, must be initialized at declaration, cannot be reassigned (though objects/arrays can be mutated).

---

### 2. Role of JavaScript in Full Stack Development (FSD)
- JavaScript is the **core language** for both client-side and server-side development.
- **Frontend**: Used with frameworks like React, Angular, Vue for interactive UIs.
- **Backend**: With Node.js, it powers servers, APIs, and handles databases.
- **Full Stack**: Enables developers to use a single language across the stack, improving efficiency and consistency.

---

### 3. What is Hoisting in JS
- Hoisting is JavaScript’s default behavior of moving **declarations** to the top of their scope before execution.
- Example: `var` and function declarations are hoisted, but `let` and `const` are hoisted without initialization (temporal dead zone).

---

### 4. Data Types in JS
- **Primitive types**: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
- **Non-primitive**: Objects (including Arrays, Functions, Dates, etc.).

---

### 5. What is DOM and Accessing Methods
- **DOM (Document Object Model)**: A programming interface that represents HTML/XML documents as a tree structure.
- **Access methods**:
  - `getElementById()`
  - `getElementsByClassName()`
  - `getElementsByTagName()`
  - `querySelector()`
  - `querySelectorAll()`

---

### 6. Arrow Function
- A shorter syntax for writing functions:  
  ```js
  const add = (a, b) => a + b;
  ```
- Benefits: concise, does not bind its own `this`, useful in callbacks.

---

### 7. Object in JS
- An object is a collection of **key-value pairs**.
- Keys are strings (or Symbols), values can be any data type.
- Example:  
  ```js
  const person = { name: "Abhishek", age: 22 };
  ```

---

### 8. Sync vs Async in JS
- **Synchronous**: Code executes line by line, blocking further execution until the current task finishes.
- **Asynchronous**: Code executes without blocking, allowing tasks like API calls, timers, or file reads to run in the background.

---

### 9. Event in JS
- An **event** is an action or occurrence (like a click, keypress, or page load) that can be handled with event listeners.
- Example:  
  ```js
  document.addEventListener("click", () => console.log("Clicked!"));
  ```

---

### 10. Callback Function
- A function passed as an argument to another function, executed later.
- Example:  
  ```js
  setTimeout(() => console.log("Hello"), 1000);
  ```

---

### 11. Callback Hell
- When multiple callbacks are nested inside each other, making code hard to read and maintain.
- Example:  
  ```js
  doSomething(() => {
    doSomethingElse(() => {
      doAnotherThing(() => {
        // deeply nested
      });
    });
  });
  ```
- **Solution**: Use Promises or `async/await`.

---

### 12. Difference between `null` and `undefined`
- **`null`**: Explicitly set by the programmer to represent “no value.”
- **`undefined`**: Default value of variables that are declared but not initialized.

---



  ..................................................................................................................................................................

  // Q. what is difference between Const and var;
Answer: var, let, and const are used to declare variables in JavaScript.
var is function-scoped, allows redeclaration, and can cause bugs, so it is generally avoided.
let is block-scoped and allows reassignment but not redeclaration.
const is also block-scoped and does not allow reassignment, making code more secure.
In modern JavaScript, we prefer const by default and use let only when the value needs to change.”


what is role of JS in FSD
what is hosting in JS
what are the data types in JS

what is DOM and what are the accessing method of DOM
what is the arrow function

what do you understand by object in JS
what is Sync and Async in JS

what is event in JS
what is call back function
explainn the concept of call back hell


1️⃣ Role of JavaScript in Full Stack Development

Script:

“JavaScript plays a very important role in Full Stack Development because it is used on both the frontend and backend. On the frontend, JavaScript is used to create interactive user interfaces such as form validation, dynamic content updates, and user events. On the backend, JavaScript is used with Node.js to handle server logic, APIs, and database communication. Using JavaScript allows developers to build complete applications using a single programming language.”



2️⃣ What is Hoisting in JavaScript?

Script:

“Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before execution. Because of hoisting, we can access variables declared with var before initialization, but their value will be undefined. However, variables declared using let and const are hoisted but cannot be accessed before declaration.”

3️⃣ What are the Data Types in JavaScript?

Script:

“JavaScript has two main types of data types: primitive and non-primitive. Primitive data types include Number, String, Boolean, Undefined, Null, Symbol, and BigInt. Non-primitive data types include Object, Array, and Function. Primitive types store single values, while non-primitive types store collections of data.”

4️⃣ What is DOM and What Are the Accessing Methods?

Script:

“The DOM, or Document Object Model, is a programming interface that represents the structure of an HTML document as objects. It allows JavaScript to dynamically access and modify HTML elements, styles, and content. Common DOM accessing methods include getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.”

5️⃣ What is an Arrow Function?

Script:

“An arrow function is a shorter and cleaner syntax for writing functions in JavaScript. It was introduced in ES6 and helps reduce boilerplate code. Arrow functions do not have their own this keyword, which makes them useful in callbacks and modern JavaScript applications.”

6️⃣ What Do You Understand by Object in JavaScript?

Script:

“In JavaScript, an object is a collection of data stored in the form of key-value pairs. Objects are used to represent real-world entities such as users, products, or students. Each object can contain properties and methods that define its behavior.”

what is Sync and Async in JS

what is event in JS
what is call back function
explainn the concept of call back hell
what is the difference between null and undefined;




..................................................................................................................................................................
