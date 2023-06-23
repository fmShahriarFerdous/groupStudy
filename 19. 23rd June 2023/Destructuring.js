let arr = ["one", "two", "three", "four", "five"];

// first = arr[0];
// second = arr[1];
// third = arr[2];
let a = 5;
let b = 6;

[b, a] = [a, b];

console.log(a, b);

const [first, second, third, ...rest ] = arr;

// console.log(typeof(first));