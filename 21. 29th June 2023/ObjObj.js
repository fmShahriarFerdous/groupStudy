const nestedObject = {
    level1: {
      property1: "Value 1",
      property2: "Value 2",
      property3: "Value 3",
      level2: {
        property4: "Value 4",
        property5: "Value 5",
        property6: "Value 6",
        level3: {
          property7: "Value 7",
          property8: "Value 8",
          property9: "Value 9",
          level4: {
            property10: "Value 10",
            property11: "Value 11",
            property12: "Value 12",
            level5: {
              property13: "Value 13",
              property14: "Value 14",
              property15: "Value 15"
            }
          }
        }
      }
    }
  };
// let copyobject = {...nestedObject};

// nestedObject.level1.level2.property6 = "modified";

  let copyobject = {
    ...nestedObject,
    level1: {
        ...nestedObject.level1,
        property2 : "modified value",
        level2 : {
            ...nestedObject.level1.level2,
            property6 : "modified value",
            level3 : {
                ...nestedObject.level1.level2.level3,
                property9: "level3 modified",
            }
        }
    }
  } 
  
  console.log("copyobject",  JSON.stringify(copyobject));
  console.log("nestedObject", JSON.stringify(nestedObject));