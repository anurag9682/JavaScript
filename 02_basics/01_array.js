//array 
const  myArr = [1, 2, 3, 4, 5, true, "hello"];

console.log(myArr[5]);// true
console.log(typeof myArr);// object


// js create shallow copy for array change will reflect in both arrays
const newArr = myArr;
newArr[0] = 100;
console.log(myArr); // [100, 2, 3, 4, 5, true, 'hello']

// to create a deep copy of array changes will not reflect in both arrays
const deepArr = [...myArr];
deepArr[1] = 200;
console.log(myArr); // [100, 2, 3, 4, 5, true, 'hello']
console.log(deepArr); // [100, 200, 3, 4, 5, true, 'hello']



// ...............array methods...................

console.log(myArr.length); // 7   
myArr.push("world");
console.log(myArr); // [100, 2, 3, 4, 5, true, 'hello', 'world']

myArr.pop();
console.log(myArr); // [100, 2, 3, 4, 5, true, 'hello'] 

myArr.unshift("start");
console.log(myArr); // ['start', 100, 2, 3, 4, 5, true, 'hello']

myArr.shift(); // removes first element
console.log(myArr); // [100, 2, 3, 4, 5, true, 'hello']

console.log(myArr.indexOf(3)); // 2
console.log(myArr.includes(5)); // true
console.log(myArr.slice(1, 5)); // [ 2, 3, 4,5 ] - from index 1 to 4

myArr.splice(1, 2); // removes 2 elements from index 1
console.log(myArr); // [100, 4, 5, true, 'hello']

myArr.reverse();
console.log(myArr); // ['hello', true, 5, 4, 100]

myArr.sort();
console.log(myArr); // [100, 4, 5, 'hello', true] - sorts based on string Unicode values

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = arr1.concat(arr2);
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

const strArr = myArr.join(" - "); // joins array elements into a string
console.log(strArr); // "100 - 4 - 5 - hello - true"

// iterating array
myArr.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});
// Element at index 0 is 100


//difference between slice and splice is 
// slice creates a new array with elements from the original array, while splice modifies the original array by removing or replacing elements. 
const sampleArr = [10, 20, 30, 40, 50];
const slicedArr = sampleArr.slice(1, 4); // creates new array from index 1 to 3
console.log(slicedArr); // [20, 30, 40]

sampleArr.splice(1, 2, 25, 35); // removes 2 elements from index 1 and adds 25, 35
console.log(sampleArr); // [10, 25, 35, 40, 50]

// multidimensional array
const multiArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(multiArr[1][2]); // 6


// array destructuring
const [a, b, c] = [10, 20, 30];
console.log(a); // 10
console.log(b); // 20

// rest operator in array destructuring
const [x, y, ...rest] = [1, 2, 3, 4, 5, 6];
console.log(x); // 1
console.log(y); // 2
console.log(rest); // [3, 4, 5, 6]

// array map method
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// array filter method  
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// array reduce method
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// array find method
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber); // 4

// array some method
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // true

// array every method
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// array flat method
const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flatArr = nestedArr.flat(2);

console.log(flatArr); // [1, 2, 3, 4, 5, 6]