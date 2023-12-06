const arr1 = [1, 30, 39, 29, 10, 13];

console.log(arr1.fill(0, 2, 4));
// console.log(arr1.fill(0, 2, 4));

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter((e) => e.length > 5));

// console.log(words.find((e, index, obj) => e === 'limit' ));



const wordsFinder = words.find((e, index, obj) => console.log(obj[0]));

console.log(wordsFinder);