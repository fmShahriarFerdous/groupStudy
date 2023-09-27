const value = false;

const varPromise = new Promise(function(resolve, reject) {
    if(value) {
        resolve("code has been resolved");
    } else {
        reject("code has been rejected");
    }
})

varPromise.then((data) => console.log(data))
.catch((err) => console.log(err));