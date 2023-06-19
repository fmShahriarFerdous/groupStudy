let arr = [4,6,3,1,2];

for ( let i = 0; i <= arr.length - 2; i++) {
    for ( let j = i+1; j <= arr.length -1; j++) {
        if( arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);

// complexity of Big(n^2)