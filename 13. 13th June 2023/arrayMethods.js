// every 
// const arr1 = [1, 30, 39, 29, 10, 13];
// const res = arr1.every(everyfunc);
// console.log(res);
const arr1 = [1, 30, 39, 29, 10, 13];

// const addFunc = (element) => {
//     element.forEach(value => {
//         console.log(value*2);
//     });
// }
// addFunc(arr1);

arr1.every((value, index, arr, thisarg) => console.log(value, index, arr, thisarg.value));

// arrow function vs normal function 
// function everyfunc (arr1) {
//     let max = arr1[0];
//     for (let i = 1; i < arr1.length; i++) {
//         if(arr1[i] > max) {
//             max = arr1[i];
//         }
//     }
//     return max;
// }

// const everyfunc = (arr1) => {
//     let max = arr1[0];
//     for (let i = 1; i < arr1.length; i++) {
//         if(arr1[i] > max) {
//             max = arr1[i];
//         }
//     }
//     return max;
// }


// const maxValue = everyfunc(arr1);
// console.log(maxValue);