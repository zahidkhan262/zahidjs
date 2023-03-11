const Person = {
    name: 'zahid',
    age: 40,
    height: 5.6,
    country: 'India',
    designation: 'React  Developer'
}

function printOnlyStr(arg) {
    for (let key in arg) {
        if (typeof arg[key] === 'string') {
            console.log(key, ":", arg[key])
        }
    }
}
console.log(printOnlyStr(Person))