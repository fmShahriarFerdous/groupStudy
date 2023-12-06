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
// console.log(arr);

// shift unshift fifo 
let shiftarr = arr.shift();
// console.log(arr);
let unshiftarr = arr.unshift("newshift");
// console.log(arr);

// indexof 
// console.log(arr.indexOf("new"));

arr[arr.length] = 5;
// console.log(arr);

// delete element 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[2];

splice 
// spice takes two parameters. frist one is the index number of array position, second one is the total number of the delete Elements. frist one is the mendatory
fruits.splice(2, 1); 
console.log(fruits);

// join 
// const joinMethod =  fruits.splice(1, 2).join(' ');
// console.log(joinMethod);
// console.log(fruits);

// slice 
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1, 3).join(' + '));
console.log(fruits);


