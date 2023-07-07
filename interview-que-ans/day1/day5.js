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

//higher order function
function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(applyOperation(5, 3, add)); // Output: 8
console.log(applyOperation(5, 3, subtract)); // Output: 2





let x = 0.1 + 0.2;
// let y = 0.3;
// console.log(x == y);
// You2:25 PM
// false
// Expert2:25 PM
// let x = [];
// console.log(Boolean(x));
// You2:27 PM
// true
// Expert2:27 PM
// let x = "5";
// let y = 2;
  
// console.log(x + y);
// console.log(x - y);
// You2:28 PM
// x+y=52
// x-y= NaN
// Expert2:28 PM
// console.log(5+"5"-5)
// You2:29 PM
// NaN
// Expert2:29 PM
// let a = () => {
//   console.log(this);
// };
  
// a();
// You2:30 PM
// undefined
// Expert2:31 PM
// let x = [1, 2, 3, 4, 5];
// Expert2:34 PM
// output should be 3,4,5
