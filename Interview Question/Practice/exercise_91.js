// Print number from 1-5 in 1 sec interval and stop after 5
let count = 1;

const interval = setInterval(() => {
  // console.log("Count : "+ count);
  if (count === 5) {
    clearInterval(interval);
  }
  count++;
}, 1000);

// 2. create a counter that increases by 1 every second and stops after reaching 10

let count1 = 1;
let delay = 1000;

function counter() {
  // console.log(count1);

  if (delay === 5000) return;

  count1++;
  delay += 1000;
  setTimeout(counter, delay);
}
setTimeout(counter, delay);

// 3. wirte a function greet which accept two parameters   greet and call back  that prints the name and then executes the call back function to print //"welcome to the js world"

// 4. create a function that create a call back and executes it after 2 sec using setTimeout

// 5. create a promise that resolves with task completed after 2 sec
