
const data = [23, 34, 54, 65, 22, 34, 34, 23];

// unique numbr [23,34,54,65,22]
// duplicate numbr [34,23]
// largest numbr 65

// const findUniqueNumber = (arr) => {
//     let uniqueNum = [];

//     for (let i = 0; i < arr.length; i++) {
//         let ele = arr[i]
//         if (!uniqueNum.includes(ele)) {
//             uniqueNum.push(ele)
//         }
//     }
//     return uniqueNum

// }
// console.log(findUniqueNumber(data), "unique")


const largestNumber = (arr) => {
    // return arr.reduce((prev, curr) => prev < curr ? prev = curr : prev, 0)

    let large = 0;
    arr.map((ele) => ele > large ? large = ele : large)
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > large) {
    //         large = arr[i]
    //     }
    // }
    return large
}
console.log(largestNumber(data), "largest")
/// shallow and deep copy///

const user = {
    name: 'zahid',
    address: {
        city: 'noida'
    }
}
//  normal copy
//  user.name="khan";

console.log(user, "originla data")


// make shallow copy
console.log('--------shallow copy------------')
let sCopy = { ...user }
sCopy.name = "abcd";
sCopy.address.city = "delhi" // it is not possible with nested array or object
// if we need changesin nested copy then we need to store original data with method JSON.parse(JSON.stringify(user))
console.log(sCopy, "sCopy")
console.log(user, "user original")

console.log('--------deep copy------------')

let dCopy = JSON.parse(JSON.stringify(user));

dCopy.address.city = "ghaziabad";
dCopy.name = "vinay"
console.log(dCopy, "deep copy")
console.log(user, "user original")


