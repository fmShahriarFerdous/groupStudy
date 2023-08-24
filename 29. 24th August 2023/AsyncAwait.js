const getMyName = () => {
    return "Yen";
}

const getAge = (name) => {
    return new Promise((resolve, reject) => {
        if(name == 'Yen') {
            resolve(25);
        } else {
            reject("not found!");
        }
    })
}

const getDetails = async () => {
    const name = await getMyName();
    const age = await getAge(name);
    console.log(`my name is ${name} and i am ${age} years old`);
}

getDetails()