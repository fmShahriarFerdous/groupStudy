function binarySearch(arr,low,high,findX)
{
    if(low <= high)
    {
        let mid = Math.floor((low+high)/2); 

        if(arr[mid] == findX) 
        {
            return mid;
        }

        if(findX < arr[mid])
        {
            return binarySearch(arr,low,mid-1,findX);

        }

        if(findX > arr[mid])
        {
            return binarySearch(arr,mid+1,high,findX);
        }
    }

    else
    {
        return false;
    }
}

let arr = [0,1,2,3,4,5];
let findX = -1;
let result = binarySearch(arr,0,arr.length-1,findX);
if(result == false)
{
    console.log("Not Found");
}

else 
{
    console.log("found in",result,"index");
}


// for (let i =0; i < arr.length; i++ )
// {
//     if(arr[i] == findX)
//     {
//         console.log("found in",i,"index");
//         break;
//     }
// } // O(n) << O(logn)