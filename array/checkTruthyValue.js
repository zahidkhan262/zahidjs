const data = ['zahid', 10, true, false, 'str', 3, true, NaN, undefined, null]

function checkTruthyValue(arg) {
    let count = 0;
    for (let value of arg) {
        if (value) {
            count++
        }
    }
    return count
}
console.log(checkTruthyValue(data))
