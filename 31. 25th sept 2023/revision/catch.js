let temp = false; 

try {
    if(temp){
        console.log("run successfully");
    } else {
        throw(new Error("Error occured"));
    }
}

catch(err) {
    console.log(err.message);
}