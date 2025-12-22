const name = "Robert";
const repocount = 50;

//concatenate name and repocount and log it
console.log(name + repocount); // Robert50

console.log(`Hello My name is ${name} and my repo count is ${repocount}`);

const name2 = new String("Alice");
console.log(name2); // [String: 'Alice']
console.log(typeof name2); // object

console.log(name2.length); // 5
console.log(name2.toUpperCase()); // ALICE
console.log(name2.charAt(2)); // i
console.log(name2.includes("lic")); // true
console.log(name2.startsWith("Al")); // true
console.log(name2.endsWith("ce")); // true
console.log(name2.indexOf("i")); // 2
console.log(name2.slice(1, 4)); // lic
console.log(name2.split("")); // [ 'A', 'l', 'i', 'c', 'e' ]
console.log(name2.replace("Alice", "Bob")); // Bob
