let arr = [1,2,3,4,6,5,7,8,9,10];

for ( let i = 0; i < arr.length; i++ ) {
    let flag = false;
    console.log("loop", i+1);
    for (let j = 0; j < arr.length - 1; j++) {
        if ( arr[j] > arr[j + 1] ) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            flag = true;
        }
    }
    if ( !flag ) break;
}

console.log(arr);

