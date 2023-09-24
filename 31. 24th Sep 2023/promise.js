var flag = false;

const newPromise = new Promise( (myresolve,myreject) => {
    console.log(flag);
    if(flag)
    {
        myresolve("Success");
    }
    else
    {
        myreject("Error 404!");
    }
});

// newPromise.then((data) => {console.log("Resolve:",data)} , (data) => {console.log("Reject:",data)});
newPromise.then((data) => {console.log("Resolve:",data)}).catch((data) => {console.log("Reject:",data)});

console.log("Promise is a Asynchronus function");


