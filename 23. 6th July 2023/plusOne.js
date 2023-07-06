function plusOne(arr)
{
    let str = arr.join("");
    let num = BigInt(str);
    num = num + 1n;
    let str2 = String(num);
    // let makeNum = (num) => Number(num);
    let outputArr = Array.from(str2,(num) => Number(num));

    return outputArr;
}


let arr = [1,2,3]; // 123 + 1 = 124 [1,2,4]

let result = plusOne(arr);

console.log(result);