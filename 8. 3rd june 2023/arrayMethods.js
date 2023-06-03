// Topic Array methods 

// length 
const arr = [1,2,3,4,5];
// console.log(arr.length);
// console.log(typeof(arr));

// tostring
// console.log(typeof(arr.toString()));

// pop Lifo
let popArr = arr.pop();
console.log(arr);
let pusharr = arr.push("new");
console.log(arr);

// shift unshift fifo 
let shiftarr = arr.shift();
console.log(arr);
let unshiftarr = arr.unshift("newshift");
console.log(arr);

// indexof 
console.log(arr.indexOf("new"));

arr[arr.length] = 5;
console.log(arr);

