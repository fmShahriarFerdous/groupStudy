// let arr = [1,2,3,4,5];
// // console.log(arr);
// // [arr[0],arr[1]]=[arr[1],arr[0]];
// console.log(arr);

// var [one,two,three,...pending] = arr;
// console.log(one,two,three,pending);



// function areaAndVolume(x)
// {
//     let area = x*x;
//     let volume= x*x*x;
//     return [area,volume]
// } 
// let [area,volume] = areaAndVolume(2)
// console.log(area,volume);

// function showobj({name})
// {
//     console.log(name);
// }
// const car = {name: "Grace",price:"2 million"};

// showobj(car);

function showobj({name:{Toyota:{model}}})
{
    
    console.log(Model);
}
const car = {
            name: {Toyota: {model:"Premio"}},
            price:"2 million"};

showobj(car);


