// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];
// const movies = ['ZombieLand', `Isn't it romantic`, 'nightmare on elm street', 'saw']



  //Given this problem: 
  
  // function firstItem(array, callback) {
  
  // }
  // Potential Solution:

  // Higher order function using "cb" as the call back
  function whichItem(array, callback) {
  console.log(callback(array));
  }
 
  const firstCB = function (array) {
    return array[0]; 
    
  }

  // const secondCB = function (array) {
  //   return array[1];
  // }


 whichItem(items, firstCB);

  
  // // Function invocation 
  // firstItem(items, function(first) {
    
  // });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  console.log(cb(arr));
}

const lengthCB = function (arr) {
  return arr.length;
}


getLength(items, lengthCB);






function last(arr, cb) {
  // last passes the last item of the array into the callback.
  console.log(cb(arr));
}

const lastCB = function (arr) {
  return arr[3];
}

last(items, lastCB);









function sumNums(num1, num2, callback) {
  return callback(num1, num2);
  // sumNums adds two numbers (num1, num2) and passes the result to the callback.  
}

const add = function (num1, num2) {
  return num1 + num2;
}

console.log(sumNums(2, 4, add))


function multiplyNums(num1, num2, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(num1, num2);
}

const multiply = function (num1,num2) {
  return num1 * num2;
}
 
console.log(multiplyNums(2, 4, multiply))





function contains(item, array, callback) {
  return callback(item, array);
}
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  


const inBag = function(item, array){
  for (let i = 0; i < array.length; i++ ) {
    if(array[i] === item) {
      console.log(true)
    } else ( array[i] !== item) { 
      console.log(false);
    }
    }
  } 


contains("pencil", items, inBag)

 











/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
