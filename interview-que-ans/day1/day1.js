const nums = [12, 1, 33, 43, 3, 2, 6, 55, 2, 5, 6, 7, 0, 1];


const findLargestNumber = (arr) => {
    const largestNumber = arr.reduce((prev, curr) => {
        if (prev < curr) {
            prev = curr
        }
        return prev
    }, 0)
    return largestNumber
}
const findLargestNumber2 = (arr) => arr.reduce((prev, curr) => prev < curr ? prev = curr : prev, 0)
console.log(findLargestNumber2(nums), "findLargest second way");
console.log(findLargestNumber(nums), "findLargest first way");

const findLargestNumber1 = (arr) => {
    let largest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}
console.log(findLargestNumber1(nums))

/// add all ele
const addElement = (arr) => arr.reduce((prev, curr) => prev += curr, 0)

console.log(addElement(nums), "add");


const numbers = [1, 4, '1', '2', 4, 6, 6, 'a', 6, , '9', undefined, NaN];
const unique = [...new Set(numbers)]
console.log(unique, "unique")
const addIntegerEle = (arr) => arr.filter(ele => ele !== "string" && parseInt(ele)).reduce((prev, curr) => prev += parseInt(curr))

const addUniqueEle = (arr) => arr.filter(ele => ele !== "string" && parseInt(ele)).reduce((prev, curr) => prev += parseInt(curr))
console.log(addUniqueEle(numbers), "add only unique value")



//find second largest number

const findSecondLargestNumber = (arr) => {
    let max = 0;
    let secMax = 0;
    if (arr.length < 2) {
        console.log("please enter atleast 2 integer")
    }
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            secMax = max
            max = arr[i];
        } else if (max > secMax && secMax < arr[i]) {
            secMax = arr[i]
        }
    }
    return secMax

}
console.log(findSecondLargestNumber(nums))