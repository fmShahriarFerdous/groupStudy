let arr = [2, 5, 6, 7, 8];

// let arr2 = arr;
let arr2 = [...arr, 500];

arr.push(100);
// arr[2] = 60;

console.log(arr2);
console.log(arr);


// let arr1 = [3,5,3,7];
// let copyArr = arr1;
// let copyArr = [...arr1];
// let copyArr = [...arr1, 55, 66, [44, 55, 66, 77]];
// arr1.push(100);
// copyArr[6].push(200);

// console.log(typeof(copyArr[2]));
// console.log(arr1);

// for (var i = 0; i < copyArr.length; i++) {
//     if (Array.isArray(copyArr[i])) {
//         console.log(i);
//     }
// }


const myObject = {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "painting", "running"],
  
    address: {
      street: "123 Main Street",
      city: "New York",
  
      Employee: {
        code: "10001",
        city: "New York",
        state: "NY",
        country: "United States",
  
        Employee2: {
            presentAddress: "123 Main Street",
            permanentAddress: {
                city: "New York",
                state: "NY",
                country: "United States",
  
                address: {
                    presentAddress2: "123 Main Street",
                    eAddress: {
                        city: "New York",
                        country: "United States"
                    }
                }
            }
        },
      },
    },
  };
  
  
  let objData = {
    ...myObject, 
    address: {
      ...myObject.address, 
      street: "ABC", 
      Employee: { 
        ...myObject.address.Employee,
         city: "ABC",
         Employee2: {
          ...myObject.address.Employee.Employee2,
          presentAddress: "ABC",
          permanentAddress: {
            ...myObject.address.Employee.Employee2.permanentAddress,
            state: "Modified",
            address: {
              ...myObject.address.Employee.Employee2.permanentAddress.address.eAddress,
              country: "Bangladesh"
            }
          }
         }
      }}};
  
  
  console.log("objdata", JSON.stringify(objData));
  console.log("myObject", myObject);
  
  // const nestedObject = {
  //   level1: {
  //     property1: "Value 1",
  //     property2: "Value 2",
  //     property3: "Value 3",
  //     level2: {
  //       property4: "Value 4",
  //       property5: "Value 5",
  //       property6: "Value 6",
  //       level3: {
  //         property7: "Value 7",
  //         property8: "Value 8",
  //         property9: "Value 9",
  //         level4: {
  //           property10: "Value 10",
  //           property11: "Value 11",
  //           property12: "Value 12",
  //           level5: {
  //             property13: "Value 13",
  //             property14: "Value 14",
  //             property15: "Value 15"
  //           }
  //         }
  //       }
  //     }
  //   }
  // };
  
  // const shallowCopy = {
  //   ...nestedObject,
  //   level1: {
  //     ...nestedObject.level1,
  //     property1: "Modified Value 1",
  //     level2: {
  //       ...nestedObject.level1.level2,
  //       property4: "Modified Value 4",
  //       level3: {
  //         ...nestedObject.level1.level2.level3,
  //         property7: "Modified Value 7",
  //         level4: {
  //           ...nestedObject.level1.level2.level3.level4,
  //           property10: "Modified Value 10",
  //           level5: {
  //             ...nestedObject.level1.level2.level3.level4.level5,
  //             property13: "Modified Value 13"
  //           }
  //         }
  //       }
  //     }
  //   }
  // };
  
  // console.log(JSON.stringify(shallowCopy));
  // console.log(JSON.stringify(shallowCopy.level1.level2.level3, null, 2));
  

