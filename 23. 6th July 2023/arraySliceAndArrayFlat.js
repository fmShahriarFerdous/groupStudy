let arr = [0,1,2,3];

// let arr = arr.slice(2,-1);

// console.log(arr[-1]);    // ....-3 -2 -1 0 1 2 3 4.....


// let arr = [4,3,1,62,[23,[32,[1,1],2],121],116,12,67,90];

// arr = arr.flat(3); 

// console.log(arr);

// let arr = [1,2,3,4,5];

let arr2 = [6,7,8];
let str1 = "Jihtan" 
let num = 123;
let arr3 = [...arr,...arr2,...[0,0,0,0,0],...str1,num]; //num is not a iterable thing.

console.log(arr3);
