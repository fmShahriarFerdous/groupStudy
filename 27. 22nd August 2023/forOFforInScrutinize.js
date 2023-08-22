let arr = [1,2,3,4,5];
const car = {name: "Grace",price:"2 million"};
// for (x of "Jony")
// {
//     console.log(x);
// } 
// for (x of arr)
// {
//     console.log(x);
// } 
for (x in car)
{
    console.log(x,car[x]);
} 

console.log(car["name"]);