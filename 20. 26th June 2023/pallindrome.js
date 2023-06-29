var pallindrome = function (start,end,str)
{
    console.log("This stage is Pallindrome",start,end,"line 3",);
    if(start > end)
    {
        return 1;
    }
    if(str[start]==str[end])
    {
        x = pallindrome(start+1,end-1,str)//palindrome(0,3,str)
        console.log("This stage is Pallindrome",start,end,"line 11");
        return x;
    }
    else
    {
        return 0
    }
}


let str = "abba";
let len = str.length;
if(pallindrome(0,len-1,str)) //palindrome(0,3,str)
{
    console.log("Palindrome")
}

else
{
    console.log(" Not Palindrome")
}