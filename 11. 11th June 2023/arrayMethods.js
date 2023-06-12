
const arr1 = [1, 2, 3, 4, 5];
let arr2 = [7, 8, 9, 10, 11, 12, 13, 14, 15];
const arr3 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let x = 100;
let y = 200;
const res = arr1.concat(arr3, y, arr2, x);
// console.log(arr1.concat(arr2));
// console.log(res);
// console.log(arr1);
// console.log(arr2);

// spread operator 
const res2 = [...arr1, y, ...arr2, x, ...arr3];
// console.log(res2);
// console.log([...arr1, ...arr2, ...arr3]);
// console.log(arr2);
let res3 = arr2;
for(let i = 1; i < 10; i++) {
   arr2 = [...arr2,i];
}

console.log(arr2);
