let arr = [2, 4, 6, 2, 7];
const person = {fname:"John", lname:"Doe", age:25};

// for...of 
for (let element of arr) {
    console.log(element);
}

// for...in 
for (let element in person) {
    console.log(` ${element} person value : ${person[element]} `);
}