//const obj1 = new Object() // object constructor singleton object

const obj2 = {};

(obj2.id = 101), (obj2.name = "John"), (obj2.isAdmin = false);

console.log(Object.keys(obj2)); // [ 'id', 'name', 'isAdmin' ] array of keys

console.log(Object.values(obj2)); // [ 101, 'John', false ] array of values

console.log(obj2.hasOwnProperty("isAdmin")); // true checking if key exists

const user = {
  email: "john@example.com",
  fullName: {
    // nested object
    userFullName: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

console.log(user.fullName); // { userFullName: { firstName: 'John', lastName: 'Doe' } }

console.log(user.fullName.userFullName); // { firstName: 'John', lastName: 'Doe' }
console.log(user.fullName.userFullName.firstName); // John

const obj3 = { 1: "a", 2: "b", 3: "c" }; // keys are numbers but treated as strings

const obj4 = { 4: "d", 5: "e", 6: "f" };

const mergObj = Object.assign({}, obj3, obj4); // merging objects
console.log(mergObj); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const mergObj2 = { ...obj3, ...obj4 }; // merging objects using spread operator
