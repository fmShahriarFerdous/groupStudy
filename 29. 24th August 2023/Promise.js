const promiseFunc = control => {
    return new Promise((Resolve, Reject) => {
        if(control) {
            Resolve(6);
        } else {
            Reject("reject 404 server error");
        }
    })
}

promiseFunc(true)
.then((data) => {
    let a = 5;
    let b = 5;
    let res = a + data;
    console.log(res);
})
.catch((err) => console.log(err))