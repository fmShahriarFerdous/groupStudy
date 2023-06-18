//  let arr = [4,2,1,3,9,8,12,44,22,21,100,5];
//  console.log("Original Array",arr);
//  let len = arr.length;
//  for(let i=1;i<=len-1;i++)
//  {
//     for(let j=i;j>=1;j--)
//     {
//         if(arr[j]<arr[j-1])
//         {
//             let temp = arr[j];
//             arr[j] = arr[j-1];
//             arr[j-1] = temp;
//         }
//         else 
//         {
//             break;
//         }
        
//     }
//  }
//  console.log("Sorted Array",arr);

// insertion sort 
let arr = [4,2,1,3,9];

for( let i = 1; i < arr.length; i++) {
    for(j = i; j >= 1; j--) {
        if(arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        } else {
            break;
        }
    }
}
console.log("sorted arr", arr);

