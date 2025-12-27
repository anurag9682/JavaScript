// singleton

// object literal s
const obj1 = {
  name: "Alice",
  age: 21,
  location: "kanpur",
  email: "alice@goggle.com",
  isLoggedIn: "false",
  lastLoginDays: ["Monday", "Friday"],
};

// accessing object properties
console.log(obj1.name); // Alice
console.log(obj1["age"]); // 21
console.log(typeof obj1); // object

const mySymbol = Symbol("key1"); // creating symbol

const myObj = {
  mySymbol: "value1",
  fulName: "John Doe",
  hobbies: ["reading", "gaming", "coding"],
};
console.log(myObj.hobbies[1]); // gaming
console.log(myObj["hobbies"]); // ["reading", "gaming", "coding"]

console.log(myObj.mySymbol); // value1
console.log(typeof myObj.mySymbol); // string ,, not symbol because key is string not symbol to access symbol key we have to use bracket notation e.g [mySymbol]: "value1" and access like myObj[mySymbol]

Object.freeze(myObj); // freeze the object to make it immutable
myObj.fulName = "Jane Doe"; // this will not change the fulName property
console.log(myObj.fulName); // John Doe

obj1.geerting = function () {
  console.log("Hello JS user");
};
obj1.geerting2 = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(obj1.geerting()); // Hello JS user
obj1.geerting2(); // Hello JS user, Alice

// js create shallow copy for object change will reflect in both objects
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // Bob

// to create a deep copy of object changes will not reflect in both objects
const obj3 = { ...obj1 };
obj3.age = 30;
console.log(obj1.age); // 21
console.log(obj3.age); // 30
