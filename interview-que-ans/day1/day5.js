const findLargestNumber = (arr) => arr.reduce((prev, curr) => prev < curr ? prev = curr : prev, 0)



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
const nums = [232]
console.log(findSecondLargestNumber(nums))