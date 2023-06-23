let arr = [0,1,2,3,4,5,6,7];

// let arr2 = arr.slice(1,4);

// console.log("arr2-->",arr2);

// console.log("arr-->",arr);

let arr2 = arr.splice(1,3); /// 1 2 3 remaining main array 0 4 5 6 7

console.log("arr2-->",arr2);

console.log("arr-->",arr); //remaining


//slice -->  0 1 2 3 4 5 6 7  copy --> 1 2 3 //main array 0 1 2 3 4 5 6 7
//splice --> 0 1 2 3 4 5 6 7 cut --> 1 2 3 //remaining main array 0 4 5 6 7 
