function mergeSort(arr,temp,low,high)
{
    console.log("recursion function", low, high);
    if(low==high)
    {
        return;
    }
    let mid = Math.floor((low+high)/2);
    console.log("before sortfunc", low, mid, high);
    
    mergeSort(arr,temp,low,mid);
    console.log("After sortfunc", low, mid, high);
    mergeSort(arr,temp,mid+1,high);
    console.log("before going to assign loop", low, mid, high);
    for (i=low,j=mid+1,k=low;k<=high;k++)
    {
        console.log("inside loop", i, j, k);
        if (i==mid+1)
        {
            temp[k]=arr[j];
            j += 1;
        }
        else if (j==high+1)
        {
            temp[k]=arr[i];
            i += 1;
        }
        else if (arr[i]<arr[j])
        {
             temp[k] = arr[i];
             i += 1;
        }
        else if (arr[j]<arr[i])
        {
             temp[k] = arr[j];
             j += 1;
        }
    }
    for (let k =low;k<=high;k++)
    {
        arr[k] =temp[k];
    }
}



let arr = [4,2,1,3,9];
len = arr.length;
temp = [];
mergeSort(arr,temp,0,len-1);
console.log("Sorted Array",arr);