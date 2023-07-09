// const findLargestNumber = (arr) => arr.reduce((prev, curr) => prev < curr ? prev = curr : prev, 0)


// revesion in day5

const nums = [23, 45, 56, 23, 56, 87]

// first programm find largest number 
const findFirstLargestNumber = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max

}
console.log(findFirstLargestNumber(nums), "flargest")

// second programm find second largest number 

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

console.log(findSecondLargestNumber(nums), "Slargest")

let arr1 = [1, 2, 3, 4, 3, 6, 6, 3, 5, 4, 4, 4];

// third programm find unique number 

const findUniqueNum = (arr) => {
    let uni = []
    for (let i = 0; i < arr.length; i++) {
        if (!uni.includes(arr[i])) {
            uni.push(arr[i])
        }
    }
    return uni

}

console.log(findUniqueNum(arr1), "uni");

// fourth programm find duplicate number 

const findDuplicateValue = (arr) => {
    const hash = {};
    const duplicate = [];

    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            if (!duplicate.includes(arr[i])) {
                duplicate.push(arr[i])
            }
        } else {
            hash[arr[i]] = true; //is to mark that the element arr[i] has been seen at least once. 
        }
    }
    return duplicate
}
console.log(findDuplicateValue(arr1), "duplicate")

// fifth programm find frequency or occurances of number 


const findFrequency = (arr) => {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]] += 1
        } else {
            hash[arr[i]] = 1
        }
    }
    return hash


}
console.log(findFrequency(arr1), "frequency")

// seventh programm find truth value from array;

const numbers = [1, 4, '1', '2', 4, 6, 6, 'a', 6, , '9', true, false, undefined, NaN];

const findTruthNumber = (arr) => {

    let truthy = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            truthy.push(arr[i])
        }
    }
    return truthy


}
console.log(findTruthNumber(numbers), "truth number")
