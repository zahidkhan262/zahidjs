const nums = [12, 1, 33, 43, 3, 2, 6, 55, 2, 5, 6, 7, 0];

const findLargestNumber = (arr) => {
    const largestNumber = arr.reduce((prev, curr) => {
        if (prev < curr) {
            prev = curr
        }
        return prev
    }, 0)
    return largestNumber
}
console.log(findLargestNumber(nums));



const addAllArrayNumber = (arr) => {
    const addAll = arr.reduce((prev, curr) => {
        prev += curr
        return prev
    }, 0)
    return addAll
}
console.log(addAllArrayNumber(nums))


// next
const numbers = [1, 4, '1', '2', 4, 6, 6, 'a', 6, undefined, NaN];

const addUniqueNumber = (num) => {
    const numbers = num.map(Number).filter(ele => !Number.isNaN(ele))
    const unique = [...new Set(numbers)]
    console.log(unique, "unique")

}
console.log(addUniqueNumber(numbers))

const strs = 'aabbcccabaabbcddbd'

const findOccurance = (str) => {

    const countHash = {};

    for (let i = 0; i < str.length; i++) {
        countHash[str[i]] = (countHash[str[i]] || 0) + 1
    }
    return countHash


}
console.log(findOccurance(strs))

const obj1 = {};

obj1.name = 'zahid';

obj1.name = 'suboor'
const a = 'age';

obj1[a] = 24;

console.log(obj1, "obj1");


const obj2 = {};
const name = 'aabbcccabaabbcddbd'

for (let x = 0; x < name.length; x++) {
    const alphabet = name[x];
    // obj2[alphabet] = alphabet
    if (obj2[alphabet] != undefined) {
        obj2[alphabet] = obj2[alphabet] + 1
    } else {
        obj2[alphabet] = 1
    }

}
console.log(obj2, "obj2");


let data = [20, 20, 40, 2, 30, 50, 2, 30, 55, 50, 1, 6, 9, 9]

const findDuplicateValue = (arr) => {
    const hash = {}

    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = arr[i]
        console.log(hash, "zahid")
    }
    return Object.values(hash)

}
console.log(findDuplicateValue(data))
