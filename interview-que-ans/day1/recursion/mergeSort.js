// Write a merge sort program in JavaScript
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

console.log("9. Merge sort")

const mergeSort = (Array) => {
    debugger
    if (Array.length <= 1) {
        return Array;
    }
    var half = parseInt(Array.length / 2)
    var left = mergeSort(Array.slice(0, half));
    var right = mergeSort(Array.slice(half, Array.length));
    console.log("left :", left, "right", right)
    var merge = (left, right) => {
        var array = [];
        while (left.length > 0 && right.length > 0) {
            array.push((left[0] <= right[0] ? left.shift() : right.shift()))
        }
        return array.concat(left).concat(right)
    };
    return merge(left, right);
}

let data = [34, 7, 23, 32, 5, 62];
console.log(mergeSort(data))