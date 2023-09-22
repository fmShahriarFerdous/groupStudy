const promiseFunc = control => {
    return new Promise((Resolve, Reject) => {
        if(control) {
            Resolve(6);
        } else {
            Reject(new Error("reject 404 server error"));
        }
    })
}

promiseFunc(false)

.then((data) => {
    let a = 5;
    let b = 5;
    let res = a + data;
    console.log(res);
}, (err) => console.log(err.message))
// .catch((err) => console.log(err.message))