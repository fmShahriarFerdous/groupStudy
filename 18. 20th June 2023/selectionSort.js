// selection sort 

// let arr = [4,5,3,2,0];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }

// console.log(arr);

let arr = [4,5,3,2,0];

for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j-1]) {
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
}

console.log(arr);