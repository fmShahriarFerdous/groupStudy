const dubElement = [ "🍌","🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍊", "🍊", "🍓", "🍓", "🍉", "🍉", "🍉", "🍍", "🍍", "🍒", "🍒", "🥝", "🥝", "🥝", "🍑", "🍑", "🍐", "🍐", "🍅", "🍅", "🍅"];

const resObj = (data) => {
    const dataObj = {};
    Array.from(data, (e) => {
        dataObj[e] = (dataObj[e] || 0) + 1;
    })
    return dataObj;
}


console.log(resObj(dubElement)); 
// console.log(strReverse(str));
// console.log(sortAsLength(sortLength));