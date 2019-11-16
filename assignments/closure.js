// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const closure = () => {
  let closureData = '';
  return data => (closureData += data);
};

const mytestClosure = closure();
console.log(mytestClosure('Hi!'));
console.log(mytestClosure(" ...here we are again hi"));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 1;
  return () => {
    return count++;
  }
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFunction = (limit = 10) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: () => {
      count = count >= limit ? 1 : count + 1;
      return count;
    },
    decrement: () => {
      count = count >= limit ? 0 : count - 1;
      return count;
    },
  };
};

console.log('Counter V3');
const counterV3 = counterFunction();
console.log(`This should be 1: ${counterV3.increment()}`);
console.log(`This should be 2: ${counterV3.increment()}`);
console.log(`This should be 1: ${counterV3.decrement()}`);