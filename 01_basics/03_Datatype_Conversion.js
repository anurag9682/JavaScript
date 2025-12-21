let score = "50";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let str = "123Abc";

let valueInNumber2 = Number(str);
console.log(valueInNumber2); // NaN => Not a Number

console.log(typeof valueInNumber2); // number
// NaN is a special number value that indicates an invalid number

/*..........Type Conversion in Number...........

"33" => 33
"33abc" => NaN
"abc33" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = 1;
console.log(typeof isLoggedIn);

let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue);
console.log(typeof booleanValue);

let num = 20;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);

/*..........Type Conversion in String...........
33 => "33"
true => "true"
false => "false"
null => "null"
undefined => "undefined"
NaN => "NaN"

*/


//*************Operations in JavaScript***

let value = 100;
let negValue = -value;
console.log(negValue); // -100


let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;
console.log(str3); // Hello World

console.log("1"+2+2);// "122"
console.log(1+2+"2");// "32"
// + operator is left to right associative 

console.log("5"-2);// 3
// - , * , / operators always treat operands as numbers
