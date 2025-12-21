const accountID = 123456;
let Name = "Alice";
var emailID = "xyz@gmail.com";

accountCity = "Lucknow";

let accountBalance; // Declaration without initialization will make it undefined;

console.log([accountID, Name, emailID, accountBalance]);

/* Perfer not use of var because of its function scope and and block scpe issues.

const can not be reassigned, but its properties can be modified if it's an object or array

Use const when you don't want the variable to be reassigned.

Use let when you want the variable to be reassigned.

Avoid using undeclared variables as they become global variables.

Always declare variables before using them to avoid unexpected behaviors.

Use meaningful variable names that follow standard naming conventions (camelCase).
Avoid using reserved keywords as variable names. example  */
