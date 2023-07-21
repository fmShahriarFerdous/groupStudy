const nums = [4, 1, 10, -7, -4, 6, -30];

const removeNeg = (nums, callbackFunc) => {
    const newArr = [];
    Array.from(nums, (e) => {
        console.log(callbackFunc(e));
        callbackFunc(e) ? newArr.push(e) : console.log(e);
    })
    console.log(newArr);
}

const callbackFunc = (e) => {
    if(e >= 0) {
        return true;
    } else {
        return false;
    }
}

removeNeg(nums, callbackFunc);
