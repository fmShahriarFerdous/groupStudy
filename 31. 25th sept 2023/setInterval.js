// setTimeout(() => {
//     console.log("setTimeout");
// }, 4000)

console.log("outside setTimeout");

const callHallo = setInterval(() => {
    console.log("Hallo");
}, 1000);

setTimeout(() => {
    clearInterval(callHallo);
}, 5000)

